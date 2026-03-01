import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1B1B1F', color: 'white' }}>
      {/* CTA Section */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.5px' }}>
            Find your people, wherever you land.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '17px', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.6 }}>
            Join the growing community of families building a different kind of childhood — globally connected, locally rooted.
          </p>
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '16px 32px', backgroundColor: '#FF4438', color: 'white',
            fontWeight: 700, borderRadius: '14px', border: 'none', cursor: 'pointer', fontSize: '15px',
          }}>
            <Heart size={18} />
            Join the Community
          </button>
        </div>
      </div>

      {/* Links */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 24px' }}>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '32px' }}>
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: '16px', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Cities</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Lisbon', 'Ericeira', 'Sintra', 'Cascais'].map((city) => (
                <li key={city}>
                  <Link href={`/city/${city.toLowerCase()}`} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', textDecoration: 'none' }}>
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: '16px', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Categories</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Forest Schools', 'Alternative Schools', 'Learning Pods', 'Communities'].map((cat) => (
                <li key={cat}>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>{cat}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: '16px', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>For Operators</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Claim Your Listing', 'Promote Your School', 'Partner With Us'].map((item) => (
                <li key={item}>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontWeight: 600, marginBottom: '16px', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '48px', paddingTop: '32px',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px', height: '32px', backgroundColor: '#FF4438', borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
              fontWeight: 800, fontSize: '16px',
            }}>
              W
            </div>
            <span style={{ fontWeight: 700, fontSize: '15px' }}>wandergroup</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>
            For families who refused the default.
          </p>
        </div>
      </div>
    </footer>
  );
}
