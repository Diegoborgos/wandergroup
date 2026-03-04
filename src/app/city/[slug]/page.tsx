import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, ArrowLeft, Users } from 'lucide-react';
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
      <section style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', height: '50vh', minHeight: '400px' }}>
        <Image
          src={city.coverImage}
          alt={city.name}
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
        />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'rgba(26,26,26,0.55)',
        }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '0 24px 48px', width: '100%' }}>
          <Link href="/destinations" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontFamily: "'JetBrains Mono', monospace",
            color: 'rgba(255,255,255,0.5)', fontSize: '11px',
            textTransform: 'uppercase', letterSpacing: '0.08em',
            marginBottom: '16px', textDecoration: 'none',
          }}>
            <ArrowLeft size={14} />
            All cities
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <h1 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(32px, 6vw, 52px)',
              fontWeight: 400, color: 'white',
            }}>
              {city.name}
            </h1>
            <span style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '6px 14px', backgroundColor: 'rgba(191,255,0,0.9)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px', fontWeight: 500, color: '#1A1A1A',
              textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>
              <Users size={12} />
              {city.familiesHere} families
            </span>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', maxWidth: '560px', marginBottom: '24px', lineHeight: 1.5 }}>
            {city.shortDescription}
          </p>

          {/* Quick Stats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[city.costOfLiving, city.internetSpeed, city.safety].map((stat) => (
              <div key={stat} style={{
                padding: '6px 14px',
                border: '1px solid rgba(255,255,255,0.15)',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px', color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.03em',
              }}>
                {stat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Description */}
      <section style={{ backgroundColor: '#FAFAF8', borderBottom: '1px solid #D4CFC8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
          <div className="flex flex-col md:flex-row" style={{ gap: '48px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#6B6B6B', lineHeight: 1.7, fontSize: '15px' }}>{city.description}</p>
            </div>
            <div className="md:w-80" style={{ flexShrink: 0 }}>
              <div style={{ backgroundColor: '#F5F0EB', padding: '24px', border: '1px solid #D4CFC8' }}>
                <h3 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px', fontWeight: 500,
                  textTransform: 'uppercase', letterSpacing: '0.15em',
                  color: '#999999', marginBottom: '16px',
                }}>
                  Why families choose {city.name}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {city.highlights.map((h) => (
                    <li key={h} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '10px',
                      padding: '8px 0', fontSize: '14px', color: '#6B6B6B',
                    }}>
                      <span style={{ color: '#BFFF00', fontWeight: 700, fontSize: '10px', marginTop: '5px' }}>&#9632;</span>
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
      <section style={{ backgroundColor: '#F5F0EB', padding: '64px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* Category pills */}
          <div className="no-scrollbar" style={{ display: 'flex', gap: '4px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '40px' }}>
            <div style={{
              padding: '8px 20px', backgroundColor: '#1A1A1A', color: '#BFFF00',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px', fontWeight: 500, whiteSpace: 'nowrap', cursor: 'pointer',
              textTransform: 'uppercase', letterSpacing: '0.08em',
            }}>
              All ({cityListings.length})
            </div>
            {availableCategories.map((cat) => {
              const info = categoryInfo[cat];
              const count = cityListings.filter(l => l.category === cat).length;
              return (
                <div
                  key={cat}
                  style={{
                    padding: '8px 20px', backgroundColor: '#FAFAF8', color: '#6B6B6B',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px', fontWeight: 400, whiteSpace: 'nowrap',
                    cursor: 'pointer', border: '1px solid #D4CFC8',
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                  }}
                >
                  {info.label} ({count})
                </div>
              );
            })}
          </div>

          {/* Listings grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2px' }}>
            {cityListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Who's Here */}
      {familySignals.length > 0 && (
        <section style={{ backgroundColor: '#FAFAF8', padding: '80px 0', borderTop: '1px solid #D4CFC8' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ marginBottom: '32px' }}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px', fontWeight: 500,
                textTransform: 'uppercase', letterSpacing: '0.15em',
                color: '#999999', marginBottom: '12px',
              }}>
                Currently Here
              </p>
              <h2 style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: '28px', fontWeight: 400, color: '#1A1A1A',
              }}>
                Families in {city.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2px' }}>
              {familySignals.map((signal) => (
                <FamilySignalCard key={signal.id} signal={signal} />
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button style={{
                padding: '14px 32px', backgroundColor: '#1A1A1A', color: '#BFFF00',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px', fontWeight: 500, textTransform: 'uppercase',
                letterSpacing: '0.1em',
                border: 'none', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}>
                <MapPin size={14} />
                Signal that you&apos;re in {city.name}
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
