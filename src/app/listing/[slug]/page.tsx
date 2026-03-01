import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft, Star, MapPin, Clock, Globe, Phone, Mail,
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
      {/* Image Gallery */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href={`/city/${listing.citySlug}`} className="inline-flex items-center gap-1.5 text-midnight/50 text-sm mb-4 hover:text-coral transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to {listing.city}
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
            <div className="relative md:col-span-2 md:row-span-2">
              <Image
                src={listing.images[0]}
                alt={listing.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {listing.images.slice(1, 3).map((img, i) => (
              <div key={i} className="relative hidden md:block">
                <Image
                  src={img}
                  alt={`${listing.name} ${i + 2}`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-sand rounded-full text-xs font-semibold text-midnight">
                  {catInfo.icon} {catInfo.label}
                </span>
                {listing.verified && (
                  <span className="flex items-center gap-1 px-2 py-1 bg-sage/10 text-sage rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                )}
                {listing.claimedByOperator && (
                  <span className="px-2 py-1 bg-ocean/10 text-ocean rounded-full text-xs font-medium">
                    Claimed by operator
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-midnight mb-3">{listing.name}</h1>

              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-midnight/50">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-golden text-golden" />
                  <strong className="text-midnight">{listing.rating}</strong> ({listing.reviewCount} reviews)
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {listing.address}
                </span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-midnight mb-3">About</h2>
                <p className="text-midnight/70 leading-relaxed">{listing.description}</p>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-midnight mb-3">Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {listing.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                      <span className="text-sm text-midnight/70">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-midnight mb-3">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {listing.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-sand rounded-full text-sm font-medium text-midnight/70">
                      {tag}
                    </span>
                  ))}
                  {listing.pedagogy.map((p) => (
                    <span key={p} className="px-3 py-1.5 bg-coral/10 text-coral rounded-full text-sm font-medium">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Families interested */}
              {familySignals.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-midnight mb-3 flex items-center gap-2">
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

              {/* Google Maps */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-midnight mb-3">Location</h2>
                <div className="bg-warm-gray rounded-2xl p-6 text-center">
                  <MapPin className="w-8 h-8 text-coral mx-auto mb-3" />
                  <p className="text-sm text-midnight/70 mb-3">{listing.address}</p>
                  <a
                    href={listing.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-coral font-medium text-sm hover:gap-3 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open in Google Maps
                  </a>
                  <p className="text-xs text-midnight/30 mt-2">
                    Google Place ID: {listing.googlePlaceId}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-96 shrink-0">
              <div className="sticky top-24 space-y-4">
                {/* Price Card */}
                <div className="bg-white rounded-2xl border border-warm-gray-dark/30 p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-coral">{listing.priceRange}</span>
                      {listing.priceNote && (
                        <p className="text-xs text-midnight/40 mt-0.5">{listing.priceNote}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-golden text-golden" />
                      <span className="font-bold text-midnight text-sm">{listing.rating}</span>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-midnight/50">Ages</span>
                      <span className="font-medium text-midnight">{listing.ageRange.min}-{listing.ageRange.max} years</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-midnight/50">Languages</span>
                      <span className="font-medium text-midnight">{listing.languages.join(', ')}</span>
                    </div>
                    {listing.schedule && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-midnight/50">Schedule</span>
                        <span className="font-medium text-midnight text-right">{listing.schedule}</span>
                      </div>
                    )}
                    {listing.spotsAvailable !== undefined && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-midnight/50">Availability</span>
                        <span className={`font-semibold ${listing.spotsAvailable <= 3 ? 'text-coral' : 'text-sage'}`}>
                          {listing.spotsAvailable} spots left
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-midnight/50">Interested</span>
                      <span className="font-medium text-midnight">{listing.familiesInterested} families</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <button className="w-full py-3 bg-coral text-white font-semibold rounded-xl hover:bg-coral-dark transition-all mb-3 flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Request Info
                  </button>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2.5 bg-sand text-midnight font-medium rounded-xl hover:bg-sand-dark transition-colors flex items-center justify-center gap-2 text-sm">
                      <Heart className="w-4 h-4" />
                      Save
                    </button>
                    <button className="flex-1 py-2.5 bg-sand text-midnight font-medium rounded-xl hover:bg-sand-dark transition-colors flex items-center justify-center gap-2 text-sm">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-white rounded-2xl border border-warm-gray-dark/30 p-6">
                  <h3 className="font-bold text-midnight mb-4 text-sm">Contact</h3>
                  <div className="space-y-3">
                    {listing.phone && (
                      <a href={`tel:${listing.phone}`} className="flex items-center gap-3 text-sm text-midnight/70 hover:text-coral transition-colors">
                        <Phone className="w-4 h-4" />
                        {listing.phone}
                      </a>
                    )}
                    {listing.email && (
                      <a href={`mailto:${listing.email}`} className="flex items-center gap-3 text-sm text-midnight/70 hover:text-coral transition-colors">
                        <Mail className="w-4 h-4" />
                        {listing.email}
                      </a>
                    )}
                    {listing.website && (
                      <a href={listing.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-midnight/70 hover:text-coral transition-colors">
                        <Globe className="w-4 h-4" />
                        Visit website
                      </a>
                    )}
                    <a href={listing.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-midnight/70 hover:text-coral transition-colors">
                      <MapPin className="w-4 h-4" />
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
                    <button className="w-full py-2 bg-midnight text-white font-medium rounded-xl text-sm hover:bg-midnight-light transition-colors">
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
