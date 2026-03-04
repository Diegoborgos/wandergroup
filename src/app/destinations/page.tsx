import CityCard from '@/components/CityCard';
import { cities } from '@/data/listings';

export default function DestinationsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '64px', backgroundColor: '#1A1A1A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#BFFF00',
            marginBottom: '24px',
          }}>
            Portugal &middot; {cities.length} cities
          </p>
          <h1 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 400,
            color: '#FAFAF8',
            marginBottom: '16px',
          }}>
            The Directory
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: '16px',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Every learning experience, every community, every space — indexed by city, rated by families.
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: '28px',
              fontWeight: 400,
              color: '#1A1A1A',
            }}>
              Portugal
            </h2>
            <span style={{
              padding: '4px 10px', backgroundColor: '#1A1A1A', color: '#BFFF00',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px', fontWeight: 500, textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {cities.length} cities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2px', marginBottom: '80px' }}>
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} size="large" />
            ))}
          </div>

          {/* Coming Soon */}
          <div style={{
            textAlign: 'center', padding: '80px 24px',
            border: '1px solid #D4CFC8', backgroundColor: '#FAFAF8',
          }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#999999',
              marginBottom: '24px',
            }}>
              Coming Soon
            </p>
            <h3 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: '24px',
              fontWeight: 400,
              color: '#1A1A1A',
              marginBottom: '16px',
            }}>
              Bali. Chiang Mai. Barcelona. Where next?
            </h3>
            <p style={{
              color: '#6B6B6B',
              maxWidth: '420px',
              margin: '0 auto 32px',
              fontSize: '15px',
              lineHeight: 1.6,
            }}>
              The network is growing. Tell us where you are and we will build it.
            </p>
            <button style={{
              padding: '14px 32px',
              backgroundColor: '#1A1A1A',
              color: '#BFFF00',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              border: 'none',
              cursor: 'pointer',
            }}>
              Suggest a city
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
