import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Wifi, Shield, Sun, DollarSign, Users, ArrowLeft, ExternalLink } from 'lucide-react';
import ListingCard from '@/components/ListingCard';
import FamilySignalCard from '@/components/FamilySignalCard';
import {
  getCityBySlug,
  getListingsByCity,
  getFamilySignalsByCity,
  getCategoriesForCity,
  categoryInfo,
  cities,
} from '@/data/listings';

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const cityListings = getListingsByCity(slug);
  const familySignals = getFamilySignalsByCity(city.name);
  const availableCategories = getCategoriesForCity(slug);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src={city.coverImage}
          alt={city.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <Link href="/destinations" className="inline-flex items-center gap-1.5 text-white/60 text-sm mb-4 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All destinations
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white">{city.name}</h1>
            <span className="px-3 py-1 bg-coral/90 rounded-full text-sm font-semibold text-white flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              {city.familiesHere} families
            </span>
          </div>

          <p className="text-white/70 text-lg max-w-2xl mb-6">{city.shortDescription}</p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-1.5 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-sm text-white/90 border border-white/10">
              <DollarSign className="w-4 h-4 text-golden" />
              {city.costOfLiving}
            </div>
            <div className="flex items-center gap-1.5 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-sm text-white/90 border border-white/10">
              <Wifi className="w-4 h-4 text-ocean" />
              {city.internetSpeed}
            </div>
            <div className="flex items-center gap-1.5 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-sm text-white/90 border border-white/10">
              <Shield className="w-4 h-4 text-sage" />
              {city.safety}
            </div>
            <div className="flex items-center gap-1.5 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-xl text-sm text-white/90 border border-white/10">
              <Sun className="w-4 h-4 text-golden" />
              Score: {city.nomadScore}/10
            </div>
          </div>
        </div>
      </section>

      {/* City Description */}
      <section className="bg-white border-b border-warm-gray-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <p className="text-midnight/70 leading-relaxed">{city.description}</p>
            </div>
            <div className="md:w-80 shrink-0">
              <div className="bg-sand rounded-2xl p-5">
                <h3 className="font-bold text-midnight mb-3 text-sm">Why families love {city.name}</h3>
                <ul className="space-y-2">
                  {city.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-midnight/60">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter + Listings */}
      <section className="bg-warm-gray py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto scroll-container pb-4 mb-8">
            <div className="px-4 py-2 bg-coral text-white rounded-full text-sm font-semibold whitespace-nowrap cursor-pointer">
              All ({cityListings.length})
            </div>
            {availableCategories.map((cat) => {
              const info = categoryInfo[cat];
              const count = cityListings.filter(l => l.category === cat).length;
              return (
                <div
                  key={cat}
                  className="px-4 py-2 bg-white text-midnight/70 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-coral hover:text-white transition-colors border border-warm-gray-dark/30"
                >
                  {info.icon} {info.label} ({count})
                </div>
              );
            })}
          </div>

          {/* Listings grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Who's Here */}
      {familySignals.length > 0 && (
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-1 bg-sage/10 text-sage text-sm font-medium rounded-full">
                <Users className="w-4 h-4" />
                Live
              </div>
              <h2 className="text-2xl font-bold text-midnight">
                Families in {city.name} right now
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {familySignals.map((signal) => (
                <FamilySignalCard key={signal.id} signal={signal} />
              ))}
            </div>

            <div className="text-center mt-6">
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-midnight text-white font-semibold rounded-xl text-sm hover:bg-midnight-light transition-colors">
                <MapPin className="w-4 h-4" />
                Signal that you&apos;re in {city.name}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Google Maps Link */}
      <section className="bg-sand py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-midnight/50 text-sm mb-4">
            All listings sourced from public data. Coordinates via Google Maps.
          </p>
          <a
            href={`https://maps.google.com/?q=${city.name}+Portugal+alternative+schools`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-coral font-medium text-sm hover:gap-3 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            View all on Google Maps
          </a>
        </div>
      </section>
    </>
  );
}
