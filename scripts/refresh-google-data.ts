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
  translatedText?: string;
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

// --- Review curation ---

const KIDS_KEYWORDS = [
  'kid', 'kids', 'child', 'children', 'daughter', 'son', 'toddler', 'baby',
  'family', 'families', 'parent', 'parents', 'boy', 'girl', 'little one',
  'preschool', 'kindergarten', 'school', 'learning', 'play', 'playground',
  'outdoor', 'nature', 'forest', 'montessori', 'waldorf', 'pedagogy',
  'teacher', 'teachers', 'classroom', 'education', 'creative', 'safe',
];

function isLikelyEnglish(text: string): boolean {
  // Simple heuristic: check if most chars are basic Latin
  const latinChars = text.replace(/[^a-zA-Z]/g, '').length;
  const totalAlpha = text.replace(/[^a-zA-Z\u00C0-\u024F\u0400-\u04FF\u3000-\u9FFF\uAC00-\uD7AF]/g, '').length;
  if (totalAlpha === 0) return true;
  return latinChars / totalAlpha > 0.8;
}

async function translateText(text: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ q: text, target: 'en', format: 'text' }),
      }
    );
    const data = await res.json();
    const translated = data?.data?.translations?.[0]?.translatedText;
    // Only return if actually different from original
    if (translated && translated.toLowerCase() !== text.toLowerCase()) {
      return translated;
    }
    return null;
  } catch (err) {
    console.warn('    ⚠ Translation failed:', err);
    return null;
  }
}

function kidsRelevanceScore(text: string): number {
  const lower = text.toLowerCase();
  let score = 0;
  for (const kw of KIDS_KEYWORDS) {
    // Word-boundary match
    const regex = new RegExp(`\\b${kw}\\b`, 'gi');
    const matches = lower.match(regex);
    if (matches) score += matches.length;
  }
  return score;
}

async function curateReviews(reviews: CachedReview[]): Promise<CachedReview[]> {
  // 1. Drop reviews with very short or empty text
  const meaningful = reviews.filter((r) => r.text.trim().length >= 20);
  if (meaningful.length === 0) return [];

  // 2. Translate non-English reviews
  for (const review of meaningful) {
    if (!isLikelyEnglish(review.text)) {
      console.log(`    🌐 Translating review by ${review.author_name}...`);
      const translated = await translateText(review.text);
      if (translated) {
        review.translatedText = translated;
      }
      await sleep(200);
    }
  }

  // 3. Score each review for kid/family relevance (use translated text if available)
  const scored = meaningful.map((r) => ({
    review: r,
    kidsScore: kidsRelevanceScore(r.translatedText || r.text),
  }));

  // 4. Sort by kids relevance (desc), then by rating variety
  scored.sort((a, b) => b.kidsScore - a.kidsScore);

  // 5. Pick up to 5 reviews with a good spread
  const selected: CachedReview[] = [];
  const MAX_REVIEWS = 5;

  // First: grab top kids-relevant reviews (up to 3)
  const kidsRelevant = scored.filter((s) => s.kidsScore > 0);
  for (const s of kidsRelevant.slice(0, 3)) {
    selected.push(s.review);
  }

  // Then: ensure we have rating diversity — find the best and worst
  const byRatingDesc = [...scored].sort((a, b) => b.review.rating - a.review.rating);
  const byRatingAsc = [...scored].sort((a, b) => a.review.rating - b.review.rating);

  // Add highest rated if not already included
  const best = byRatingDesc.find((s) => !selected.includes(s.review));
  if (best && selected.length < MAX_REVIEWS) selected.push(best.review);

  // Add lowest rated (if different from 5-star) for balance
  const worst = byRatingAsc.find((s) => !selected.includes(s.review) && s.review.rating < 5);
  if (worst && selected.length < MAX_REVIEWS) selected.push(worst.review);

  // Fill remaining slots with most relevant unused reviews
  for (const s of scored) {
    if (selected.length >= MAX_REVIEWS) break;
    if (!selected.includes(s.review)) {
      selected.push(s.review);
    }
  }

  // Sort final selection: highest rating first
  selected.sort((a, b) => b.rating - a.rating);

  console.log(`    📝 Curated ${selected.length}/${reviews.length} reviews (${kidsRelevant.length} kids-relevant)`);
  return selected;
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
    const res = await fetch(url + '?languageCode=en', {
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
    // Only fetch 3 photos — that's the max we display
    const photos = (data.photos || []).slice(0, 3);
    const photoRefs = photos.map((p: { name: string }) => p.name);
    // Resolve actual image URLs by requesting with skipHttpRedirect
    const photoUrls: string[] = [];
    for (const name of photoRefs) {
      try {
        const photoRes = await fetch(
          `https://places.googleapis.com/v1/${name}/media?maxWidthPx=800&skipHttpRedirect=true&key=${API_KEY}`
        );
        const photoData = await photoRes.json();
        if (photoData.photoUri) {
          photoUrls.push(photoData.photoUri);
        } else {
          console.warn(`    ⚠ No photoUri in response for ${name}:`, JSON.stringify(photoData).slice(0, 200));
        }
      } catch (err) {
        console.warn(`    ⚠ Photo fetch failed for ${name}:`, err);
      }
      // Delay between photo requests to avoid per-minute quota limits
      await sleep(300);
    }
    console.log(`    Photos resolved: ${photoUrls.length}/${photoRefs.length}`);

    // Map reviews from new format to our cached format
    const rawReviews: CachedReview[] = (data.reviews || []).map((r: {
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

    // Curate reviews: filter, translate, pick the most relevant
    const reviews = await curateReviews(rawReviews);

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

    // Delay between listings to stay within per-minute quota
    await sleep(500);
  }

  cache.lastUpdated = new Date().toISOString();

  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
  console.log(`\nDone! ${fetched} fetched, ${failed} failed.`);
  console.log(`Cache saved to: src/data/google-places-cache.json`);
}

main();
