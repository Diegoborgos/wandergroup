import cacheData from './google-places-cache.json';

export interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  translatedText?: string;
  time: number;
}

export interface CachedPlaceData {
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

interface GooglePlacesCache {
  lastUpdated: string;
  places: Record<string, CachedPlaceData>;
}

const cache = cacheData as GooglePlacesCache;

export function getPlaceData(placeId: string): CachedPlaceData | null {
  return cache.places[placeId] || null;
}

export function getPlaceReviews(placeId: string): GoogleReview[] {
  return cache.places[placeId]?.reviews || [];
}

export function getPlacePhotos(placeId: string): string[] {
  return cache.places[placeId]?.photoUrls || [];
}

export function getPlaceRating(placeId: string): { rating: number; count: number } | null {
  const place = cache.places[placeId];
  if (!place) return null;
  return { rating: place.rating, count: place.reviewCount };
}

export function getCacheLastUpdated(): string {
  return cache.lastUpdated;
}
