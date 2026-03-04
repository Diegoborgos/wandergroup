/**
 * Refresh Google Places data for all listings.
 * Run with: npx tsx scripts/refresh-google-data.ts
 *
 * Fetches reviews, photos, ratings, hours, and contact info
 * from Google Places API and caches it locally.
 */

import * as fs from 'fs';
import * as path from 'path';

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
if (!API_KEY) {
  console.log('No GOOGLE_PLACES_API_KEY set — skipping Google Places refresh.');
  console.log('Set it as an environment variable to fetch live data.');
  process.exit(0);
}

const FIELDS = [
  'name',
  'rating',
  'user_ratings_total',
  'reviews',
  'photos',
  'editorial_summary',
  'opening_hours',
  'formatted_phone_number',
  'website',
  'formatted_address',
].join(',');

interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GooglePhoto {
  photo_reference: string;
  height: number;
  width: number;
}

interface CachedPlaceData {
  placeId: string;
  name: string;
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
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
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${FIELDS}&key=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== 'OK') {
      console.warn(`  ⚠ API returned ${data.status} for ${placeId}: ${data.error_message || ''}`);
      return null;
    }

    const result = data.result;
    const photos: GooglePhoto[] = result.photos || [];

    // Build photo URLs (proxied through Google — up to 10 photos)
    const photoRefs = photos.slice(0, 10).map((p: GooglePhoto) => p.photo_reference);
    const photoUrls = photoRefs.map(
      (ref: string) =>
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${ref}&key=${API_KEY}`
    );

    return {
      placeId,
      name: result.name || '',
      rating: result.rating || 0,
      reviewCount: result.user_ratings_total || 0,
      reviews: (result.reviews || []).map((r: GoogleReview) => ({
        author_name: r.author_name,
        author_url: r.author_url,
        profile_photo_url: r.profile_photo_url,
        rating: r.rating,
        relative_time_description: r.relative_time_description,
        text: r.text,
        time: r.time,
      })),
      photoRefs,
      photoUrls,
      editorialSummary: result.editorial_summary?.overview,
      openingHours: result.opening_hours?.weekday_text,
      phone: result.formatted_phone_number,
      website: result.website,
      address: result.formatted_address,
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
