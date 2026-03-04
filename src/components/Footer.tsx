import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A1A1A', color: '#FAFAF8' }}>
      {/* CTA Section */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 24px', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#BFFF00',
            marginBottom: '32px',
          }}>
            The New Family
          </p>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 400,
            lineHeight: 1.15,
            maxWidth: '720px',
            margin: '0 auto 24px',
          }}>
            You already live in the future. Raise your kids there.
          </h2>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.05em',
            marginBottom: '48px',
          }}>
            The village that travels with you.
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
            Join
          </Link>
        </div>
      </div>

      {/* Links */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
        <div className="grid grid-cols-2 md:grid-cols-3" style={{ gap: '48px' }}>
          <div>
            <h3 style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '20px',
            }}>
              Cities
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Lisbon', 'Ericeira', 'Sintra', 'Cascais', 'Porto'].map((city) => (
                <li key={city}>
                  <Link href={`/city/${city.toLowerCase()}`} style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '14px',
                    textDecoration: 'none',
                  }}>
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '20px',
            }}>
              The Network
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'The Directory', href: '/destinations' },
                { label: 'List Your Space', href: '#' },
                { label: 'Manifesto', href: '/manifesto' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '14px',
                    textDecoration: 'none',
                  }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '20px',
            }}>
              Company
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Why This Exists', 'Contact'].map((item) => (
                <li key={item}>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '64px', paddingTop: '32px',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
        }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.5)',
          }}>
            The New Family
          </span>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: 'rgba(255,255,255,0.25)',
            fontSize: '11px',
            letterSpacing: '0.05em',
          }}>
            A new upbringing.
          </p>
        </div>
      </div>
    </footer>
  );
}
