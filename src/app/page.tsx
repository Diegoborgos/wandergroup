import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CityCard from '@/components/CityCard';
import ListingCard from '@/components/ListingCard';
import { cities, listings } from '@/data/listings';

export default function Home() {
  const featuredListings = listings.filter(l => l.rating >= 4.8).slice(0, 6);

  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{
        backgroundColor: '#F5F0EB',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '160px 24px 120px' }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#999999',
            marginBottom: '40px',
          }}>
            The New Family
          </p>

          <h1 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(36px, 5.5vw, 72px)',
            fontWeight: 400,
            color: '#1A1A1A',
            lineHeight: 1.1,
            maxWidth: '900px',
            marginBottom: '48px',
          }}>
            The school system was not built for your child. It was built for the state.
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#6B6B6B',
            lineHeight: 1.7,
            maxWidth: '600px',
            marginBottom: '48px',
          }}>
            Technology has enabled us to start new companies, work from anywhere, and live across borders. But we still send our children to the same buildings, following the same curriculum designed in 1850. This is infrastructure for the parents who noticed.
          </p>

          <Link
            href="/destinations"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 40px',
              backgroundColor: '#1A1A1A',
              color: '#BFFF00',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textDecoration: 'none',
            }}
          >
            Explore Portugal
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ─── THESIS TEASER ─── */}
      <section style={{ backgroundColor: '#1A1A1A', color: '#FAFAF8', padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#BFFF00',
            marginBottom: '40px',
          }}>
            The One Commandment
          </p>

          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            fontWeight: 400,
            lineHeight: 1.25,
            maxWidth: '720px',
            margin: '0 auto 32px',
          }}>
            The village you choose for your child matters more than the school you send them to.
          </h2>

          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto 48px',
          }}>
            The peer group is the curriculum. The village is the education. We are building the village that travels with you.
          </p>

          <Link
            href="/manifesto"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#BFFF00',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(191,255,0,0.3)',
              paddingBottom: '4px',
            }}
          >
            Read the manifesto
          </Link>
        </div>
      </section>

      {/* ─── CITIES ─── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px' }}>
            <div>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#999999',
                marginBottom: '16px',
              }}>
                Destinations
              </p>
              <h2 style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: '36px',
                fontWeight: 400,
                color: '#1A1A1A',
              }}>
                Where we are.
              </h2>
            </div>
            <Link
              href="/destinations"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#1A1A1A',
                textDecoration: 'none',
                borderBottom: '1px solid #1A1A1A',
                paddingBottom: '2px',
              }}
              className="hidden md:inline"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2px' }}>
            <CityCard city={cities[0]} size="large" />
            <div className="grid grid-cols-1" style={{ gap: '2px' }}>
              <CityCard city={cities[1]} />
              <div className="grid grid-cols-2" style={{ gap: '2px' }}>
                <CityCard city={cities[2]} />
                <CityCard city={cities[3]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CURATED PICKS ─── */}
      <section style={{ backgroundColor: '#FAFAF8', padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#999999',
            marginBottom: '16px',
          }}>
            Curated
          </p>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: '36px',
            fontWeight: 400,
            color: '#1A1A1A',
            marginBottom: '16px',
          }}>
            Vetted by families like yours.
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#6B6B6B',
            marginBottom: '48px',
            maxWidth: '500px',
          }}>
            The highest-rated schools, pods, and experiences across Portugal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2px' }}>
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPERATOR CTA ─── */}
      <section style={{ backgroundColor: '#1A1A1A', padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 400,
            color: '#FAFAF8',
            marginBottom: '20px',
          }}>
            Run something different?
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '48px',
            maxWidth: '480px',
            margin: '0 auto 48px',
            lineHeight: 1.6,
          }}>
            Join the network of curated learning experiences. Reach families from around the world.
          </p>
          <Link
            href="#"
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              backgroundColor: '#BFFF00',
              color: '#1A1A1A',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textDecoration: 'none',
            }}
          >
            List Your Space
          </Link>
        </div>
      </section>
    </>
  );
}
