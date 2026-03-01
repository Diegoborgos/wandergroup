import { MapPin, Globe } from 'lucide-react';
import CityCard from '@/components/CityCard';
import { cities } from '@/data/listings';

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '72px', backgroundColor: '#1B1B1F' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 16px', backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: '20px', color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginBottom: '24px',
          }}>
            <Globe size={15} />
            Portugal · More cities coming soon
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: 'white', marginBottom: '16px', letterSpacing: '-0.5px' }}>
            Destinations
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '17px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Curated city guides for families who refused the default. Every alternative education option, every community, every experience — in one place.
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section style={{ backgroundColor: '#F5F5F4', padding: '64px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          {/* Portugal */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
            <MapPin size={20} color="#FF4438" />
            <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#1B1B1F' }}>Portugal</h2>
            <span style={{
              padding: '4px 10px', backgroundColor: '#FFF1F0', color: '#FF4438',
              fontSize: '12px', fontWeight: 600, borderRadius: '20px',
            }}>
              {cities.length} cities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px', marginBottom: '64px' }}>
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} size="large" />
            ))}
          </div>

          {/* Coming Soon */}
          <div style={{
            textAlign: 'center', padding: '56px 24px', backgroundColor: 'white',
            borderRadius: '24px', border: '1px solid #e7e5e4',
          }}>
            <Globe size={48} color="#d4d4d8" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#1B1B1F', marginBottom: '8px' }}>
              More cities coming soon
            </h3>
            <p style={{ color: '#71717a', maxWidth: '420px', margin: '0 auto 24px', fontSize: '15px', lineHeight: 1.5 }}>
              Bali, Chiang Mai, Medellín, Barcelona, Tulum, Cape Town... Where should we go next?
            </p>
            <button style={{
              padding: '14px 28px', backgroundColor: '#FF4438', color: 'white',
              fontWeight: 700, borderRadius: '14px', border: 'none', cursor: 'pointer', fontSize: '14px',
            }}>
              Suggest a city
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
