import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Users, GraduationCap, Globe, Star, Search, ChevronRight } from 'lucide-react';
import CityCard from '@/components/CityCard';
import ListingCard from '@/components/ListingCard';
import FamilySignalCard from '@/components/FamilySignalCard';
import { cities, listings, familySignals, categoryInfo, type ListingCategory } from '@/data/listings';

export default function Home() {
  const featuredListings = listings.filter(l => l.rating >= 4.8).slice(0, 6);
  const recentSignals = familySignals.slice(0, 4);
  const topCategories: ListingCategory[] = ['forest-school', 'alternative-school', 'pod', 'community', 'experience', 'outdoor-activity'];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=1800"
            alt="Children in nature"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm mb-6 border border-white/20">
              <Globe className="w-4 h-4 text-coral-light" />
              <span>{cities.reduce((sum, c) => sum + c.familiesHere, 0)}+ families across {cities.length} cities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Find your people,
              <br />
              <span className="gradient-text">wherever you land.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              The starting point for families who refused the default. Discover alternative schools, forest schools, learning pods, and like-minded families — all in one place.
            </p>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-midnight/40" />
                <input
                  type="text"
                  placeholder="Where are you heading? Try Lisbon, Ericeira..."
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-xl text-midnight placeholder:text-midnight/40 text-sm font-medium outline-none focus:ring-2 focus:ring-coral/50"
                />
              </div>
              <button className="px-8 py-4 bg-coral text-white font-semibold rounded-xl hover:bg-coral-dark transition-all hover:shadow-lg hover:shadow-coral/25 flex items-center justify-center gap-2">
                Explore
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick city links */}
            <div className="flex flex-wrap gap-2 mt-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/city/${city.slug}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm hover:bg-white/20 transition-colors border border-white/10"
                >
                  <MapPin className="w-3 h-3" />
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-warm-gray-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-coral mb-1">{listings.length}+</div>
              <div className="text-sm text-midnight/50">Curated Listings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-coral mb-1">{cities.length}</div>
              <div className="text-sm text-midnight/50">Cities (growing)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-coral mb-1">{cities.reduce((sum, c) => sum + c.familiesHere, 0)}+</div>
              <div className="text-sm text-midnight/50">Active Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-coral mb-1">9</div>
              <div className="text-sm text-midnight/50">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-warm-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-3">
              What are you looking for?
            </h2>
            <p className="text-midnight/50 text-lg">
              Every option your family needs — from schools to communities to adventures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {topCategories.map((catKey) => {
              const cat = categoryInfo[catKey];
              return (
                <div
                  key={catKey}
                  className="category-pill bg-white rounded-2xl p-5 text-center cursor-pointer border border-transparent hover:border-coral/20"
                >
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="font-semibold text-midnight text-sm mb-1">{cat.label}</h3>
                  <p className="text-xs text-midnight/40">{cat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-3">
                Explore Cities
              </h2>
              <p className="text-midnight/50 text-lg">
                Curated city guides for alternative education families.
              </p>
            </div>
            <Link href="/destinations" className="hidden md:flex items-center gap-1.5 text-coral font-semibold text-sm hover:gap-2.5 transition-all">
              View all
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CityCard city={cities[0]} size="large" />
            <div className="grid grid-cols-1 gap-6">
              <CityCard city={cities[1]} />
              <div className="grid grid-cols-2 gap-6">
                <CityCard city={cities[2]} />
                <CityCard city={cities[3]} />
              </div>
            </div>
          </div>

          <div className="mt-6 text-center md:hidden">
            <Link href="/destinations" className="inline-flex items-center gap-1.5 text-coral font-semibold text-sm">
              View all cities
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="bg-sand py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-3">
                Top-Rated Options
              </h2>
              <p className="text-midnight/50 text-lg">
                The highest-rated schools, pods, and experiences across Portugal.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Who's Here - Family Signals */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sage/10 text-sage text-sm font-medium rounded-full mb-3">
                <Users className="w-4 h-4" />
                Live community
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-midnight mb-3">
                Who&apos;s here right now?
              </h2>
              <p className="text-midnight/50 text-lg">
                Families currently in Portugal or arriving soon. Connect before you land.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentSignals.map((signal) => (
              <FamilySignalCard key={signal.id} signal={signal} />
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-midnight text-white font-semibold rounded-xl hover:bg-midnight-light transition-colors">
              <GraduationCap className="w-5 h-5" />
              Signal your arrival
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-midnight text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              How it works
            </h2>
            <p className="text-white/50 text-lg">
              Find your people in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-coral/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-coral" />
              </div>
              <div className="text-coral font-bold text-sm mb-2">01</div>
              <h3 className="text-xl font-bold mb-3">Browse your city</h3>
              <p className="text-white/50">
                Explore curated city pages with every alternative education option — schools, pods, forest schools, retreats, and communities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-coral/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-coral" />
              </div>
              <div className="text-coral font-bold text-sm mb-2">02</div>
              <h3 className="text-xl font-bold mb-3">Find your people</h3>
              <p className="text-white/50">
                See which families are already there or arriving soon. Connect before you even land. Your kids will have friends from day one.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-coral/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-coral" />
              </div>
              <div className="text-coral font-bold text-sm mb-2">03</div>
              <h3 className="text-xl font-bold mb-3">Join & contribute</h3>
              <p className="text-white/50">
                Leave reviews, share your experience, vouch for trusted options. The community grows stronger with every family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operator CTA */}
      <section className="bg-warm-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm border border-warm-gray-dark/30">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-3">
                Run an alternative school or learning pod?
              </h2>
              <p className="text-midnight/60 mb-6">
                Claim your listing, reach families from around the world, and fill your spots with the right families. Free to claim — premium features coming soon.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold rounded-xl hover:bg-coral-dark transition-all">
                Claim your listing
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center px-6 py-4 bg-sand rounded-2xl">
                <div className="text-2xl font-bold text-coral">{listings.length}+</div>
                <div className="text-xs text-midnight/50">Listed options</div>
              </div>
              <div className="text-center px-6 py-4 bg-sand rounded-2xl">
                <div className="text-2xl font-bold text-coral">{cities.reduce((s, c) => s + c.familiesHere, 0)}+</div>
                <div className="text-xs text-midnight/50">Active families</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
