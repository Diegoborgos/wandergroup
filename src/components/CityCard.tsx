import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { City } from '@/data/listings';

export default function CityCard({ city, size = 'default' }: { city: City; size?: 'default' | 'large' }) {
  const isLarge = size === 'large';
  const height = isLarge ? '420px' : '320px';

  return (
    <Link
      href={`/city/${city.slug}`}
      style={{
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        height,
        textDecoration: 'none',
      }}
    >
      <Image
        src={city.coverImage}
        alt={city.name}
        fill
        style={{ objectFit: 'cover' }}
        sizes={isLarge ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
      />

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.05) 100%)',
      }} />

      {/* Families count */}
      <div style={{
        position: 'absolute', top: '16px', left: '16px',
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '6px 12px', backgroundColor: 'rgba(191,255,0,0.9)',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '11px', fontWeight: 500, color: '#1A1A1A',
        textTransform: 'uppercase', letterSpacing: '0.05em',
      }}>
        {city.familiesHere} families
      </div>

      {/* Content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          fontFamily: "'JetBrains Mono', monospace",
          color: 'rgba(255,255,255,0.5)', fontSize: '11px',
          textTransform: 'uppercase', letterSpacing: '0.05em',
          marginBottom: '8px',
        }}>
          <MapPin size={12} />
          {city.country}
        </div>
        <h3 style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontWeight: 400, color: 'white', marginBottom: '8px',
          fontSize: isLarge ? '32px' : '26px',
          lineHeight: 1.15,
        }}>
          {city.name}
        </h3>
        <p style={{
          color: 'rgba(255,255,255,0.55)', fontSize: '14px', marginBottom: '16px',
          display: '-webkit-box', WebkitLineClamp: isLarge ? 2 : 1,
          WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.5',
        }}>
          {city.shortDescription}
        </p>

        {/* Stats */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px', color: 'rgba(255,255,255,0.4)',
          letterSpacing: '0.03em',
        }}>
          <span>{city.listingCount} listings</span>
          <span>{city.safety}</span>
        </div>
      </div>
    </Link>
  );
}
