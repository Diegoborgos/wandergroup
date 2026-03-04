import Link from 'next/link';
import { Star, MapPin } from 'lucide-react';
import { Listing, categoryInfo } from '@/data/listings';
import { getPlaceData } from '@/data/google-places';
import SafeImage from './SafeImage';

export default function ListingCard({ listing }: { listing: Listing }) {
  const catInfo = categoryInfo[listing.category];
  const placeData = getPlaceData(listing.googlePlaceId);
  const coverImage = placeData?.photoUrls?.[0] ?? listing.coverImage;
  const rating = placeData?.rating ?? listing.rating;

  return (
    <Link
      href={`/listing/${listing.slug}`}
      style={{
        display: 'block',
        backgroundColor: '#FAFAF8',
        overflow: 'hidden',
        textDecoration: 'none',
        border: '1px solid #D4CFC8',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <SafeImage
          src={coverImage}
          fallbackSrc={listing.coverImage}
          alt={listing.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Label */}
        <div style={{
          position: 'absolute', top: '12px', left: '12px',
          padding: '6px 12px', backgroundColor: 'rgba(245,240,235,0.95)',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px', fontWeight: 500, color: '#1A1A1A',
          textTransform: 'uppercase', letterSpacing: '0.05em',
        }}>
          {catInfo.label}
        </div>
        {/* Verified */}
        {listing.verified && (
          <div style={{
            position: 'absolute', top: '12px', right: '12px',
            padding: '5px 10px', backgroundColor: 'rgba(26,26,26,0.85)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px', fontWeight: 500, color: '#BFFF00',
            textTransform: 'uppercase', letterSpacing: '0.05em',
          }}>
            Verified
          </div>
        )}
        {/* Low spots */}
        {listing.spotsAvailable !== undefined && listing.spotsAvailable <= 3 && (
          <div style={{
            position: 'absolute', bottom: '12px', left: '12px',
            padding: '6px 12px', backgroundColor: '#1A1A1A', color: '#BFFF00',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px', fontWeight: 500, textTransform: 'uppercase',
          }}>
            {listing.spotsAvailable} spots left
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '20px' }}>
        {/* Title & Rating */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
          <h3 style={{
            fontWeight: 600, color: '#1A1A1A', fontSize: '16px',
            lineHeight: '1.3', display: '-webkit-box',
            WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {listing.name}
          </h3>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            backgroundColor: '#1A1A1A', padding: '4px 8px',
            flexShrink: 0,
          }}>
            <Star size={12} fill="#BFFF00" color="#BFFF00" />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px', fontWeight: 500, color: '#BFFF00',
            }}>
              {rating}
            </span>
          </div>
        </div>

        {/* Location */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px', color: '#999999', marginBottom: '12px',
          textTransform: 'uppercase', letterSpacing: '0.03em',
        }}>
          <MapPin size={11} />
          <span>{listing.city}, {listing.country}</span>
        </div>

        {/* Description */}
        <p style={{
          fontSize: '14px', color: '#6B6B6B', lineHeight: '1.5',
          display: '-webkit-box', WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
          marginBottom: '16px',
        }}>
          {listing.shortDescription}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {listing.tags.slice(0, 3).map((tag) => (
            <span key={tag} style={{
              padding: '4px 10px',
              border: '1px solid #D4CFC8',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px', fontWeight: 400, color: '#6B6B6B',
              textTransform: 'uppercase', letterSpacing: '0.03em',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: '16px', borderTop: '1px solid #D4CFC8',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px', color: '#999999',
          }}>
            <span>{listing.ageRange.min}–{listing.ageRange.max} yrs</span>
            <span>{listing.languages[0]}</span>
          </div>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px', fontWeight: 500, color: '#1A1A1A',
          }}>
            {listing.priceRange}
          </span>
        </div>
      </div>
    </Link>
  );
}
