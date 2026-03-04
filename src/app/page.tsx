import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search, ChevronRight, Users, Star, MapPin } from 'lucide-react';
import CityCard from '@/components/CityCard';
import ListingCard from '@/components/ListingCard';
import FamilySignalCard from '@/components/FamilySignalCard';
import { cities, listings, familySignals, categoryInfo, type ListingCategory } from '@/data/listings';

export default function Home() {
  const featuredListings = listings.filter(l => l.rating >= 4.8).slice(0, 6);
  const recentSignals = familySignals.slice(0, 4);
  const topCategories: ListingCategory[] = ['forest-school', 'alternative-school', 'sports', 'arts-culture', 'stem', 'outdoor-activity'];

  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', display: 'flex', alignItems: 'center', minHeight: '100vh', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=1800&q=80"
            alt="Children in nature"
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '120px 24px 80px' }}>
          <div style={{ maxWidth: '680px' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 16px', backgroundColor: 'rgba(255,255,255,0.12)',
              borderRadius: '24px', color: 'rgba(255,255,255,0.9)', fontSize: '13px',
              marginBottom: '28px', border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
            }}>
              <Users size={15} />
              <span>{cities.reduce((sum, c) => sum + c.familiesHere, 0)}+ families across {cities.length} cities</span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(40px, 7vw, 72px)',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.05,
              marginBottom: '24px',
              letterSpacing: '-1.5px',
            }}>
              Find your people,<br />
              <span className="gradient-text">wherever you land.</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: '18px', color: 'rgba(255,255,255,0.65)', marginBottom: '40px',
              maxWidth: '520px', lineHeight: 1.6,
            }}>
              The starting point for families who refused the default. Discover alternative schools, forest schools, learning pods, and like-minded families.
            </p>

            {/* Search Bar */}
            <div style={{ display: 'flex', gap: '12px', maxWidth: '520px' }} className="flex-col sm:flex-row">
              <div style={{ flex: 1, position: 'relative' }}>
                <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#a1a1aa' }} />
                <input
                  type="text"
                  placeholder="Where are you heading?"
                  style={{
                    width: '100%', padding: '16px 16px 16px 48px',
                    backgroundColor: 'white', borderRadius: '14px',
                    border: 'none', outline: 'none', fontSize: '14px',
                    color: '#1B1B1F', fontWeight: 500,
                  }}
                />
              </div>
              <button style={{
                padding: '16px 32px', backgroundColor: '#FF4438', color: 'white',
                fontWeight: 700, borderRadius: '14px', border: 'none', cursor: 'pointer',
                fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px',
                justifyContent: 'center', whiteSpace: 'nowrap',
              }}>
                Explore
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Quick city links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px' }}>
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/city/${city.slug}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    padding: '8px 14px', backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '20px', color: 'rgba(255,255,255,0.75)', fontSize: '13px',
                    textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(4px)', fontWeight: 500,
                  }}
                >
                  <MapPin size={12} />
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section style={{ backgroundColor: 'white', borderBottom: '1px solid #e7e5e4' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '32px', textAlign: 'center' }}>
            {[
              { value: `${listings.length}+`, label: 'Curated Listings' },
              { value: String(cities.length), label: 'Cities (growing)' },
              { value: `${cities.reduce((s, c) => s + c.familiesHere, 0)}+`, label: 'Active Families' },
              { value: '9', label: 'Categories' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#FF4438', marginBottom: '4px', letterSpacing: '-1px' }}>{stat.value}</div>
                <div style={{ fontSize: '13px', color: '#a1a1aa', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section style={{ backgroundColor: '#F5F5F4', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#1B1B1F', marginBottom: '12px', letterSpacing: '-0.5px' }}>
              What are you looking for?
            </h2>
            <p style={{ fontSize: '16px', color: '#71717a' }}>
              Every option your family needs — from schools to communities to adventures.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6" style={{ gap: '16px' }}>
            {topCategories.map((catKey) => {
              const cat = categoryInfo[catKey];
              return (
                <div
                  key={catKey}
                  className="card-hover"
                  style={{
                    backgroundColor: 'white', borderRadius: '16px',
                    padding: '24px 16px', textAlign: 'center', cursor: 'pointer',
                    border: '1px solid transparent',
                  }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{cat.icon}</div>
                  <h3 style={{ fontWeight: 700, color: '#1B1B1F', fontSize: '14px', marginBottom: '4px' }}>{cat.label}</h3>
                  <p style={{ fontSize: '12px', color: '#a1a1aa' }}>{cat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CITIES ─── */}
      <section style={{ backgroundColor: 'white', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px' }}>
            <div>
              <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#1B1B1F', marginBottom: '12px', letterSpacing: '-0.5px' }}>
                Explore Cities
              </h2>
              <p style={{ fontSize: '16px', color: '#71717a' }}>
                Curated city guides for alternative education families.
              </p>
            </div>
            <Link href="/destinations" className="hidden md:flex" style={{ alignItems: 'center', gap: '6px', color: '#FF4438', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
              View all <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px' }}>
            <CityCard city={cities[0]} size="large" />
            <div className="grid grid-cols-1" style={{ gap: '24px' }}>
              <CityCard city={cities[1]} />
              <div className="grid grid-cols-2" style={{ gap: '24px' }}>
                <CityCard city={cities[2]} />
                <CityCard city={cities[3]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED LISTINGS ─── */}
      <section style={{ backgroundColor: '#FFF8F5', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#1B1B1F', marginBottom: '12px', letterSpacing: '-0.5px' }}>
              Top-Rated Options
            </h2>
            <p style={{ fontSize: '16px', color: '#71717a' }}>
              The highest-rated schools, pods, and experiences across Portugal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '24px' }}>
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO'S HERE ─── */}
      <section style={{ backgroundColor: 'white', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', backgroundColor: '#F0FDF4', color: '#16A34A',
              fontSize: '13px', fontWeight: 600, borderRadius: '20px', marginBottom: '16px',
            }}>
              <Users size={14} />
              Live community
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#1B1B1F', marginBottom: '12px', letterSpacing: '-0.5px' }}>
              Who&apos;s here right now?
            </h2>
            <p style={{ fontSize: '16px', color: '#71717a' }}>
              Families currently in Portugal or arriving soon. Connect before you land.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '16px' }}>
            {recentSignals.map((signal) => (
              <FamilySignalCard key={signal.id} signal={signal} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <button style={{
              padding: '14px 28px', backgroundColor: '#1B1B1F', color: 'white',
              fontWeight: 600, borderRadius: '14px', border: 'none', cursor: 'pointer',
              fontSize: '14px',
            }}>
              Signal your arrival
            </button>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section style={{ backgroundColor: '#1B1B1F', color: 'white', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.5px' }}>
              How it works
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)' }}>
              Find your people in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '48px' }}>
            {[
              { icon: <Search size={28} />, num: '01', title: 'Browse your city', desc: 'Explore curated city pages with every alternative education option — schools, pods, forest schools, retreats, and communities.' },
              { icon: <Users size={28} />, num: '02', title: 'Find your people', desc: 'See which families are already there or arriving soon. Connect before you even land. Your kids will have friends from day one.' },
              { icon: <Star size={28} />, num: '03', title: 'Join & contribute', desc: 'Leave reviews, share your experience, vouch for trusted options. The community grows stronger with every family.' },
            ].map((step) => (
              <div key={step.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '16px',
                  backgroundColor: 'rgba(255,68,56,0.15)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', color: '#FF4438',
                  marginBottom: '24px',
                }}>
                  {step.icon}
                </div>
                <div style={{ color: '#FF4438', fontWeight: 700, fontSize: '13px', marginBottom: '8px' }}>{step.num}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '280px', lineHeight: 1.6, fontSize: '14px' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPERATOR CTA ─── */}
      <section style={{ backgroundColor: '#F5F5F4', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            backgroundColor: 'white', borderRadius: '24px',
            padding: '48px', border: '1px solid #e7e5e4',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px',
          }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#1B1B1F', marginBottom: '12px', letterSpacing: '-0.5px' }}>
                Run an alternative school or learning pod?
              </h2>
              <p style={{ color: '#71717a', marginBottom: '24px', lineHeight: 1.6, fontSize: '15px' }}>
                Claim your listing, reach families from around the world, and fill your spots with the right families. Free to claim — premium features coming soon.
              </p>
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', backgroundColor: '#FF4438', color: 'white',
                fontWeight: 700, borderRadius: '14px', border: 'none', cursor: 'pointer', fontSize: '14px',
              }}>
                Claim your listing
                <ArrowRight size={16} />
              </button>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ textAlign: 'center', padding: '20px 28px', backgroundColor: '#FFF8F5', borderRadius: '16px' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#FF4438' }}>{listings.length}+</div>
                <div style={{ fontSize: '12px', color: '#a1a1aa', fontWeight: 500, marginTop: '4px' }}>Listed options</div>
              </div>
              <div style={{ textAlign: 'center', padding: '20px 28px', backgroundColor: '#FFF8F5', borderRadius: '16px' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#FF4438' }}>{cities.reduce((s, c) => s + c.familiesHere, 0)}+</div>
                <div style={{ fontSize: '12px', color: '#a1a1aa', fontWeight: 500, marginTop: '4px' }}>Active families</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
