import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin, Users, Clock, ExternalLink, CheckCircle } from 'lucide-react';
import { Listing, categoryInfo } from '@/data/listings';

export default function ListingCard({ listing }: { listing: Listing }) {
  const catInfo = categoryInfo[listing.category];

  return (
    <Link href={`/listing/${listing.slug}`} className="trip-card block bg-white rounded-2xl overflow-hidden shadow-sm border border-warm-gray-dark/30 group">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={listing.coverImage}
          alt={listing.name}
          fill
          className="trip-card-image object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-midnight">
          <span>{catInfo.icon}</span>
          <span>{catInfo.label}</span>
        </div>
        {/* Verified Badge */}
        {listing.verified && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-sage/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
            <CheckCircle className="w-3 h-3" />
            Verified
          </div>
        )}
        {/* Spots Available */}
        {listing.spotsAvailable !== undefined && listing.spotsAvailable <= 3 && (
          <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-coral/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
            Only {listing.spotsAvailable} spots left
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-midnight text-base leading-snug group-hover:text-coral transition-colors">
            {listing.name}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-4 h-4 fill-golden text-golden" />
            <span className="text-sm font-semibold text-midnight">{listing.rating}</span>
            <span className="text-xs text-midnight/40">({listing.reviewCount})</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-midnight/50 mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>{listing.city}, {listing.country}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-midnight/60 line-clamp-2 mb-4">
          {listing.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {listing.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-sand rounded-full text-xs font-medium text-midnight/70">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-warm-gray-dark/20">
          <div className="flex items-center gap-3 text-xs text-midnight/50">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              Ages {listing.ageRange.min}-{listing.ageRange.max}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {listing.languages[0]}
            </span>
          </div>
          <span className="text-sm font-bold text-coral">
            {listing.priceRange}
          </span>
        </div>

        {/* Families interested */}
        {listing.familiesInterested > 10 && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-sage font-medium">
            <ExternalLink className="w-3 h-3" />
            {listing.familiesInterested} families interested
          </div>
        )}
      </div>
    </Link>
  );
}
