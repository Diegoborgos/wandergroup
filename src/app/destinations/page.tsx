import { MapPin, Globe } from 'lucide-react';
import CityCard from '@/components/CityCard';
import { cities } from '@/data/listings';

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 bg-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/70 text-sm mb-6">
            <Globe className="w-4 h-4 text-coral-light" />
            Portugal · More cities coming soon
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Destinations
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Curated city guides for families who refused the default. Every alternative education option, every community, every experience — in one place.
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="bg-warm-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Portugal */}
          <div className="flex items-center gap-2 mb-8">
            <MapPin className="w-5 h-5 text-coral" />
            <h2 className="text-2xl font-bold text-midnight">Portugal</h2>
            <span className="px-2 py-0.5 bg-coral/10 text-coral text-xs font-semibold rounded-full">
              {cities.length} cities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} size="large" />
            ))}
          </div>

          {/* Coming Soon */}
          <div className="text-center py-12 bg-white rounded-3xl border border-warm-gray-dark/30">
            <Globe className="w-12 h-12 text-midnight/20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-midnight mb-2">More cities coming soon</h3>
            <p className="text-midnight/50 max-w-md mx-auto mb-6">
              Bali, Chiang Mai, Medellín, Barcelona, Tulum, Cape Town... Where should we go next?
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-semibold rounded-xl hover:bg-coral-dark transition-all">
              Suggest a city
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
