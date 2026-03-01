import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, Wifi, Shield, Sun } from 'lucide-react';
import { City } from '@/data/listings';

export default function CityCard({ city, size = 'default' }: { city: City; size?: 'default' | 'large' }) {
  const isLarge = size === 'large';

  return (
    <Link
      href={`/city/${city.slug}`}
      className={`trip-card block relative rounded-2xl overflow-hidden group ${isLarge ? 'h-[420px]' : 'h-[320px]'}`}
    >
      <Image
        src={city.coverImage}
        alt={city.name}
        fill
        className="trip-card-image object-cover"
        sizes={isLarge ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/30 to-transparent" />

      {/* Nomad Score */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full">
        <Sun className="w-3.5 h-3.5 text-golden" />
        <span className="text-xs font-bold text-midnight">{city.nomadScore}/10</span>
      </div>

      {/* Families Here */}
      <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-coral/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
        <Users className="w-3.5 h-3.5" />
        {city.familiesHere} families here
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center gap-1.5 text-white/70 text-sm mb-1">
          <MapPin className="w-3.5 h-3.5" />
          {city.country}
        </div>
        <h3 className={`font-bold text-white mb-2 ${isLarge ? 'text-3xl' : 'text-2xl'}`}>
          {city.name}
        </h3>
        <p className={`text-white/70 text-sm mb-4 ${isLarge ? 'line-clamp-2' : 'line-clamp-1'}`}>
          {city.shortDescription}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-white/60">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {city.listingCount} listings
          </span>
          <span className="flex items-center gap-1">
            <Wifi className="w-3 h-3" />
            {city.internetSpeed}
          </span>
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3" />
            {city.safety}
          </span>
        </div>
      </div>
    </Link>
  );
}
