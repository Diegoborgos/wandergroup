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
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.05) 100%)',
        }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 24px 48px', width: '100%' }}>
          <Link href="/destinations" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '16px', textDecoration: 'none',
          }}>
            <ArrowLeft size={16} />
            All destinations
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <h1 style={{ fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 800, color: 'white', letterSpacing: '-1px' }}>
              {city.name}
            </h1>
            <span style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '6px 14px', backgroundColor: 'rgba(255,68,56,0.9)', borderRadius: '20px',
              fontSize: '13px', fontWeight: 600, color: 'white',
            }}>
              <Users size={14} />
              {city.familiesHere} families
            </span>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', maxWidth: '600px', marginBottom: '24px', lineHeight: 1.5 }}>
            {city.shortDescription}
          </p>

          {/* Quick Stats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              { icon: <DollarSign size={16} color="#F59E0B" />, text: city.costOfLiving },
              { icon: <Wifi size={16} color="#0EA5E9" />, text: city.internetSpeed },
              { icon: <Shield size={16} color="#16A34A" />, text: city.safety },
              { icon: <Sun size={16} color="#F59E0B" />, text: `Score: ${city.nomadScore}/10` },
            ].map((stat) => (
              <div key={stat.text} style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '8px 14px', backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
              }}>
                {stat.icon}
                {stat.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Description */}
      <section style={{ backgroundColor: 'white', borderBottom: '1px solid #e7e5e4' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px' }}>
          <div className="flex flex-col md:flex-row" style={{ gap: '40px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#52525b', lineHeight: 1.7, fontSize: '15px' }}>{city.description}</p>
            </div>
            <div className="md:w-80" style={{ flexShrink: 0 }}>
              <div style={{ backgroundColor: '#FFF8F5', borderRadius: '20px', padding: '24px' }}>
                <h3 style={{ fontWeight: 700, color: '#1B1B1F', marginBottom: '16px', fontSize: '14px' }}>
                  Why families love {city.name}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {city.highlights.map((h) => (
                    <li key={h} style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '8px 0', fontSize: '14px', color: '#52525b',
                    }}>
                      <div style={{ width: '6px', height: '6px', backgroundColor: '#FF4438', borderRadius: '50%', flexShrink: 0 }} />
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
      <section style={{ backgroundColor: '#F5F5F4', padding: '48px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          {/* Category pills */}
          <div className="no-scrollbar" style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '32px' }}>
            <div style={{
              padding: '10px 20px', backgroundColor: '#FF4438', color: 'white',
              borderRadius: '20px', fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap', cursor: 'pointer',
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
                    padding: '10px 20px', backgroundColor: 'white', color: '#52525b',
                    borderRadius: '20px', fontSize: '13px', fontWeight: 500, whiteSpace: 'nowrap',
                    cursor: 'pointer', border: '1px solid #e7e5e4',
                  }}
                >
                  {info.icon} {info.label} ({count})
                </div>
              );
            })}
          </div>

          {/* Listings grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '24px' }}>
            {cityListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Who's Here */}
      {familySignals.length > 0 && (
        <section style={{ backgroundColor: 'white', padding: '64px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '6px 12px', backgroundColor: '#F0FDF4', color: '#16A34A',
                fontSize: '13px', fontWeight: 600, borderRadius: '20px',
              }}>
                <Users size={14} />
                Live
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#1B1B1F', letterSpacing: '-0.5px' }}>
                Families in {city.name} right now
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '16px' }}>
              {familySignals.map((signal) => (
                <FamilySignalCard key={signal.id} signal={signal} />
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '28px' }}>
              <button style={{
                padding: '14px 28px', backgroundColor: '#1B1B1F', color: 'white',
                fontWeight: 600, borderRadius: '14px', border: 'none', cursor: 'pointer',
                fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}>
                <MapPin size={16} />
                Signal that you&apos;re in {city.name}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Google Maps Link */}
      <section style={{ backgroundColor: '#FFF8F5', padding: '48px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{ color: '#a1a1aa', fontSize: '13px', marginBottom: '16px' }}>
            All listings sourced from public data. Coordinates via Google Maps.
          </p>
          <a
            href={`https://maps.google.com/?q=${city.name}+Portugal+alternative+schools`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: '#FF4438', fontWeight: 600, fontSize: '14px', textDecoration: 'none',
            }}
          >
            <ExternalLink size={16} />
            View all on Google Maps
          </a>
        </div>
      </section>
    </>
  );
}
