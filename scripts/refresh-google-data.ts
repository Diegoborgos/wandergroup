/**
 * Refresh Google Places data for all listings.
 * Run with: npx tsx scripts/refresh-google-data.ts
 *
 * Uses the Places API (New) — https://developers.google.com/maps/documentation/places/web-service/op-overview
 */

import * as fs from 'fs';
import * as path from 'path';

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.log('No GOOGLE_PLACES_API_KEY set — skipping Google Places refresh.');
  console.log('Set it as an environment variable to fetch live data.');
  process.exit(0);
}

const FIELD_MASK = [
  'displayName',
  'rating',
  'userRatingCount',
  'reviews',
  'photos',
  'editorialSummary',
  'currentOpeningHours',
  'nationalPhoneNumber',
  'websiteUri',
  'formattedAddress',
].join(',');

interface CachedReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface CachedPlaceData {
  placeId: string;
  name: string;
  rating: number;
  reviewCount: number;
  reviews: CachedReview[];
  photoRefs: string[];
  photoUrls: string[];
  editorialSummary?: string;
  openingHours?: string[];
  phone?: string;
  website?: string;
  address?: string;
  fetchedAt: string;
}

export interface GooglePlacesCache {
  lastUpdated: string;
  places: Record<string, CachedPlaceData>;
}

// Read place IDs from the listings data file
function extractPlaceIds(): { slug: string; placeId: string }[] {
  const listingsPath = path.join(__dirname, '..', 'src', 'data', 'listings.ts');
  const content = fs.readFileSync(listingsPath, 'utf-8');

  const results: { slug: string; placeId: string }[] = [];
  const slugRegex = /slug:\s*'([^']+)'/g;
  const placeIdRegex = /googlePlaceId:\s*'([^']+)'/g;

  const slugs = [...content.matchAll(slugRegex)].map((m) => m[1]);
  const placeIds = [...content.matchAll(placeIdRegex)].map((m) => m[1]);

  for (let i = 0; i < Math.min(slugs.length, placeIds.length); i++) {
    results.push({ slug: slugs[i], placeId: placeIds[i] });
  }

  return results;
}

async function fetchPlaceDetails(placeId: string): Promise<CachedPlaceData | null> {
  const url = `https://places.googleapis.com/v1/places/${placeId}`;

  try {
    const res = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': API_KEY!,
        'X-Goog-FieldMask': FIELD_MASK,
      },
    });

    const data = await res.json();

    if (data.error) {
      console.warn(`  ⚠ API error for ${placeId}: ${data.error.message || JSON.stringify(data.error)}`);
      return null;
    }

    // Extract photo URIs (New API returns photo resources with name field)
    const photos = (data.photos || []).slice(0, 10);
    const photoRefs = photos.map((p: { name: string }) => p.name);
    const photoUrls = photoRefs.map(
      (name: string) =>
        `https://places.googleapis.com/v1/${name}/media?maxWidthPx=800&key=${API_KEY}`
    );

    // Map reviews from new format to our cached format
    const reviews: CachedReview[] = (data.reviews || []).map((r: {
      authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
      rating?: number;
      relativePublishTimeDescription?: string;
      text?: { text?: string };
      publishTime?: string;
    }) => ({
      author_name: r.authorAttribution?.displayName || 'Anonymous',
      author_url: r.authorAttribution?.uri,
      profile_photo_url: r.authorAttribution?.photoUri,
      rating: r.rating || 0,
      relative_time_description: r.relativePublishTimeDescription || '',
      text: r.text?.text || '',
      time: r.publishTime ? Math.floor(new Date(r.publishTime).getTime() / 1000) : 0,
    }));

    return {
      placeId,
      name: data.displayName?.text || '',
      rating: data.rating || 0,
      reviewCount: data.userRatingCount || 0,
      reviews,
      photoRefs,
      photoUrls,
      editorialSummary: data.editorialSummary?.text,
      openingHours: data.currentOpeningHours?.weekdayDescriptions,
      phone: data.nationalPhoneNumber,
      website: data.websiteUri,
      address: data.formattedAddress,
      fetchedAt: new Date().toISOString(),
    };
  } catch (err) {
    console.error(`  ✗ Failed to fetch ${placeId}:`, err);
    return null;
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const entries = extractPlaceIds();
  console.log(`Found ${entries.length} listings with Place IDs.\n`);

  const cachePath = path.join(__dirname, '..', 'src', 'data', 'google-places-cache.json');

  // Load existing cache if present
  let cache: GooglePlacesCache = { lastUpdated: '', places: {} };
  if (fs.existsSync(cachePath)) {
    try {
      cache = JSON.parse(fs.readFileSync(cachePath, 'utf-8'));
      console.log(`Loaded existing cache (last updated: ${cache.lastUpdated})\n`);
    } catch {
      console.log('Starting with fresh cache.\n');
    }
  }

  let fetched = 0;
  let failed = 0;

  for (const { slug, placeId } of entries) {
    console.log(`Fetching: ${slug} (${placeId})...`);

    const data = await fetchPlaceDetails(placeId);
    if (data) {
      cache.places[placeId] = data;
      fetched++;
      console.log(`  ✓ ${data.name} — ${data.rating}★ (${data.reviewCount} reviews, ${data.photoRefs.length} photos)`);
    } else {
      failed++;
    }

    // Small delay to avoid hammering the API
    await sleep(200);
  }

  cache.lastUpdated = new Date().toISOString();

  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
  console.log(`\nDone! ${fetched} fetched, ${failed} failed.`);
  console.log(`Cache saved to: src/data/google-places-cache.json`);
}

main();
