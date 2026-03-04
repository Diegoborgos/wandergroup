import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin, CheckCircle } from 'lucide-react';
import { Listing, categoryInfo } from '@/data/listings';
import { getPlaceData } from '@/data/google-places';

export default function ListingCard({ listing }: { listing: Listing }) {
  const catInfo = categoryInfo[listing.category];
  const placeData = getPlaceData(listing.googlePlaceId);
  const coverImage = placeData?.photoUrls?.[0] ?? listing.coverImage;
  const rating = placeData?.rating ?? listing.rating;

  return (
    <Link
      href={`/listing/${listing.slug}`}
      className="card-hover"
      style={{
        display: 'block',
        backgroundColor: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        textDecoration: 'none',
        border: '1px solid #e7e5e4',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <Image
          src={coverImage}
          alt={listing.name}
          fill
          className="img-zoom"
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Badge */}
        <div style={{
          position: 'absolute', top: '12px', left: '12px',
          display: 'flex', alignItems: 'center', gap: '6px',
          padding: '6px 12px', backgroundColor: 'rgba(255,255,255,0.95)',
          borderRadius: '20px', fontSize: '12px', fontWeight: 600, color: '#1B1B1F',
          backdropFilter: 'blur(8px)',
        }}>
          <span>{catInfo.icon}</span>
          <span>{catInfo.label}</span>
        </div>
        {/* Verified Badge */}
        {listing.verified && (
          <div style={{
            position: 'absolute', top: '12px', right: '12px',
            display: 'flex', alignItems: 'center', gap: '4px',
            padding: '5px 10px', backgroundColor: 'rgba(22,163,74,0.9)',
            borderRadius: '20px', fontSize: '11px', fontWeight: 600, color: 'white',
            backdropFilter: 'blur(8px)',
          }}>
            <CheckCircle size={12} />
            Verified
          </div>
        )}
        {/* Low spots warning */}
        {listing.spotsAvailable !== undefined && listing.spotsAvailable <= 3 && (
          <div style={{
            position: 'absolute', bottom: '12px', left: '12px',
            padding: '6px 12px', backgroundColor: '#FF4438', color: 'white',
            borderRadius: '20px', fontSize: '12px', fontWeight: 700,
          }}>
            Only {listing.spotsAvailable} spots left
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '20px' }}>
        {/* Title & Rating */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
          <h3 style={{
            fontWeight: 700, color: '#1B1B1F', fontSize: '16px',
            lineHeight: '1.3', display: '-webkit-box',
            WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {listing.name}
          </h3>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            backgroundColor: '#FEF3C7', padding: '4px 8px', borderRadius: '8px',
            flexShrink: 0,
          }}>
            <Star size={14} fill="#F59E0B" color="#F59E0B" />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#1B1B1F' }}>{rating}</span>
          </div>
        </div>

        {/* Location */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#a1a1aa', marginBottom: '12px' }}>
          <MapPin size={13} />
          <span>{listing.city}, {listing.country}</span>
        </div>

        {/* Description */}
        <p style={{
          fontSize: '14px', color: '#71717a', lineHeight: '1.5',
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
              padding: '4px 10px', backgroundColor: '#F5F5F4',
              borderRadius: '20px', fontSize: '12px', fontWeight: 500, color: '#52525b',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: '16px', borderTop: '1px solid #f4f4f5',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px', color: '#a1a1aa' }}>
            <span>{listing.ageRange.min}–{listing.ageRange.max} yrs</span>
            <span>{listing.languages[0]}</span>
          </div>
          <span style={{ fontSize: '15px', fontWeight: 700, color: '#FF4438' }}>
            {listing.priceRange}
          </span>
        </div>
      </div>
    </Link>
  );
}
