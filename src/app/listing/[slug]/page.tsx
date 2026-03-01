import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft, Star, MapPin, Globe, Phone, Mail,
  CheckCircle, Users, ExternalLink, Heart, Share2, Calendar,
} from 'lucide-react';
import FamilySignalCard from '@/components/FamilySignalCard';
import {
  getListingBySlug,
  listings,
  categoryInfo,
  getFamilySignalsByCity,
} from '@/data/listings';

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) notFound();

  const catInfo = categoryInfo[listing.category];
  const familySignals = getFamilySignalsByCity(listing.city).slice(0, 2);

  return (
    <>
      {/* Image Gallery — WeRoad style mosaic */}
      <section className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <Link href={`/city/${listing.citySlug}`} className="inline-flex items-center gap-1.5 text-midnight/50 text-sm mb-4 hover:text-coral transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to {listing.city}
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-2xl overflow-hidden">
            {/* Main large image */}
            <div className="relative md:col-span-2 aspect-[16/9]">
              <Image
                src={listing.images[0]}
                alt={listing.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            {/* Two stacked smaller images */}
            <div className="hidden md:grid grid-rows-2 gap-2">
              <div className="relative">
                <Image
                  src={listing.images[1] || listing.images[0]}
                  alt={`${listing.name} 2`}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <div className="relative">
                <Image
                  src={listing.images[2] || listing.images[0]}
                  alt={`${listing.name} 3`}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-sand rounded-full text-xs font-semibold text-midnight">
                  {catInfo.icon} {catInfo.label}
                </span>
                {listing.verified && (
                  <span className="flex items-center gap-1 px-2.5 py-1 bg-sage/10 text-sage rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                )}
                {listing.claimedByOperator && (
                  <span className="px-2.5 py-1 bg-ocean/10 text-ocean rounded-full text-xs font-medium">
                    Claimed by operator
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight mb-3 leading-tight">{listing.name}</h1>

              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-midnight/50">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-golden text-golden" />
                  <strong className="text-midnight">{listing.rating}</strong> ({listing.reviewCount} reviews)
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {listing.city}, {listing.country}
                </span>
              </div>

              {/* Description */}
              <div className="mb-10 pb-8 border-b border-warm-gray-dark/20">
                <h2 className="text-lg font-bold text-midnight mb-3">About</h2>
                <p className="text-midnight/70 leading-relaxed text-[15px]">{listing.description}</p>
              </div>

              {/* Highlights */}
              <div className="mb-10 pb-8 border-b border-warm-gray-dark/20">
                <h2 className="text-lg font-bold text-midnight mb-4">Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {listing.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 bg-warm-gray rounded-xl px-4 py-3">
                      <CheckCircle className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                      <span className="text-sm text-midnight/80">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Pedagogy */}
              <div className="mb-10 pb-8 border-b border-warm-gray-dark/20">
                <h2 className="text-lg font-bold text-midnight mb-4">Pedagogy & Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {listing.pedagogy.map((p) => (
                    <span key={p} className="px-3.5 py-1.5 bg-coral/10 text-coral rounded-full text-sm font-semibold">
                      {p}
                    </span>
                  ))}
                  {listing.tags.map((tag) => (
                    <span key={tag} className="px-3.5 py-1.5 bg-warm-gray rounded-full text-sm font-medium text-midnight/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Families interested */}
              {familySignals.length > 0 && (
                <div className="mb-10 pb-8 border-b border-warm-gray-dark/20">
                  <h2 className="text-lg font-bold text-midnight mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-sage" />
                    Families in {listing.city}
                  </h2>
                  <div className="space-y-3">
                    {familySignals.map((signal) => (
                      <FamilySignalCard key={signal.id} signal={signal} />
                    ))}
                  </div>
                </div>
              )}

              {/* Location */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-midnight mb-4">Location</h2>
                <div className="bg-warm-gray rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 bg-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-7 h-7 text-coral" />
                  </div>
                  <p className="text-sm text-midnight/70 mb-1 font-medium">{listing.address}</p>
                  <p className="text-xs text-midnight/30 mb-4">Place ID: {listing.googlePlaceId}</p>
                  <a
                    href={listing.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-coral font-semibold text-sm rounded-xl hover:bg-coral hover:text-white transition-all shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-[360px] shrink-0">
              <div className="sticky top-24 space-y-4">
                {/* Price Card */}
                <div className="bg-white rounded-2xl border-2 border-warm-gray-dark/40 p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-2xl font-bold text-coral">{listing.priceRange}</div>
                      {listing.priceNote && (
                        <p className="text-xs text-midnight/40 mt-1">{listing.priceNote}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-1 bg-golden/10 px-2.5 py-1 rounded-lg">
                      <Star className="w-4 h-4 fill-golden text-golden" />
                      <span className="font-bold text-midnight text-sm">{listing.rating}</span>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-3 mb-6 bg-warm-gray rounded-xl p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-midnight/50">Ages</span>
                      <span className="font-semibold text-midnight">{listing.ageRange.min}–{listing.ageRange.max} years</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-midnight/50">Languages</span>
                      <span className="font-semibold text-midnight">{listing.languages.join(', ')}</span>
                    </div>
                    {listing.schedule && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-midnight/50">Schedule</span>
                        <span className="font-semibold text-midnight text-right max-w-[180px]">{listing.schedule}</span>
                      </div>
                    )}
                    {listing.spotsAvailable !== undefined && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-midnight/50">Availability</span>
                        <span className={`font-bold ${listing.spotsAvailable <= 3 ? 'text-coral' : 'text-sage'}`}>
                          {listing.spotsAvailable} spots left
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-midnight/50">Interested</span>
                      <span className="font-semibold text-midnight">{listing.familiesInterested} families</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <button className="w-full py-3.5 bg-coral text-white font-bold rounded-xl hover:bg-coral-dark transition-all mb-3 flex items-center justify-center gap-2 text-base shadow-md shadow-coral/20">
                    <Calendar className="w-5 h-5" />
                    Request Info
                  </button>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2.5 bg-warm-gray text-midnight font-medium rounded-xl hover:bg-warm-gray-dark transition-colors flex items-center justify-center gap-2 text-sm">
                      <Heart className="w-4 h-4" />
                      Save
                    </button>
                    <button className="flex-1 py-2.5 bg-warm-gray text-midnight font-medium rounded-xl hover:bg-warm-gray-dark transition-colors flex items-center justify-center gap-2 text-sm">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-white rounded-2xl border border-warm-gray-dark/30 p-5">
                  <h3 className="font-bold text-midnight mb-3 text-sm">Contact</h3>
                  <div className="space-y-2.5">
                    {listing.phone && (
                      <a href={`tel:${listing.phone}`} className="flex items-center gap-3 text-sm text-midnight/70 hover:text-coral transition-colors p-2 rounded-lg hover:bg-sand">
                        <Phone className="w-4 h-4 shrink-0" />
                        {listing.phone}
                      </a>
                    )}
                    {listing.email && (
                      <a href={`mailto:${listing.email}`} className="flex items-center gap-3 text-sm text-midnight/70 hover:text-coral transition-colors p-2 rounded-lg hover:bg-sand">
                        <Mail className="w-4 h-4 shrink-0" />
                        {listing.email}
                      </a>
                    )}
                    {listing.website && (
                      <a href={listing.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-midnight/70 hover:text-coral transition-colors p-2 rounded-lg hover:bg-sand">
                        <Globe className="w-4 h-4 shrink-0" />
                        Visit website
                      </a>
                    )}
                    <a href={listing.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-midnight/70 hover:text-coral transition-colors p-2 rounded-lg hover:bg-sand">
                      <MapPin className="w-4 h-4 shrink-0" />
                      Get directions
                    </a>
                  </div>
                </div>

                {/* Claim prompt */}
                {!listing.claimedByOperator && (
                  <div className="bg-golden/10 rounded-2xl p-5 border border-golden/20">
                    <h3 className="font-bold text-midnight text-sm mb-2">Is this your listing?</h3>
                    <p className="text-xs text-midnight/50 mb-3">
                      Claim it to manage your profile, respond to inquiries, and get featured.
                    </p>
                    <button className="w-full py-2.5 bg-midnight text-white font-semibold rounded-xl text-sm hover:bg-midnight-light transition-colors">
                      Claim this listing
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
