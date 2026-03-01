import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, Wifi, Shield } from 'lucide-react';
import { City } from '@/data/listings';

export default function CityCard({ city, size = 'default' }: { city: City; size?: 'default' | 'large' }) {
  const isLarge = size === 'large';
  const height = isLarge ? '420px' : '320px';

  return (
    <Link
      href={`/city/${city.slug}`}
      className="card-hover"
      style={{
        display: 'block',
        position: 'relative',
        borderRadius: '16px',
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

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 100%)',
      }} />

      {/* Nomad Score */}
      <div style={{
        position: 'absolute', top: '16px', right: '16px',
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '6px 12px', backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: '20px', backdropFilter: 'blur(8px)',
      }}>
        <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B1B1F' }}>{city.nomadScore}/10</span>
      </div>

      {/* Families badge */}
      <div style={{
        position: 'absolute', top: '16px', left: '16px',
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '6px 12px', backgroundColor: 'rgba(255,68,56,0.9)',
        borderRadius: '20px', backdropFilter: 'blur(8px)',
      }}>
        <Users size={13} color="white" />
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'white' }}>{city.familiesHere} families</span>
      </div>

      {/* Content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginBottom: '6px' }}>
          <MapPin size={14} />
          {city.country}
        </div>
        <h3 style={{
          fontWeight: 800, color: 'white', marginBottom: '8px',
          fontSize: isLarge ? '32px' : '26px',
          letterSpacing: '-0.5px',
        }}>
          {city.name}
        </h3>
        <p style={{
          color: 'rgba(255,255,255,0.65)', fontSize: '14px', marginBottom: '16px',
          display: '-webkit-box', WebkitLineClamp: isLarge ? 2 : 1,
          WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: '1.5',
        }}>
          {city.shortDescription}
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={12} />
            {city.listingCount} listings
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Wifi size={12} />
            {city.internetSpeed}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Shield size={12} />
            {city.safety}
          </span>
        </div>
      </div>
    </Link>
  );
}
