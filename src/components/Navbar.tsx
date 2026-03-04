'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/destinations', label: 'Cities' },
  { href: '/manifesto', label: 'Manifesto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      backgroundColor: 'rgba(245,240,235,0.97)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #D4CFC8',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Wordmark */}
          <Link href="/" style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            fontWeight: 500,
            color: '#1A1A1A',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textDecoration: 'none',
          }}>
            The New Family
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  fontWeight: 400,
                  color: '#999999',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              href="#"
              className="hidden md:inline-flex"
              style={{
                padding: '10px 24px',
                backgroundColor: '#1A1A1A',
                color: '#BFFF00',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textDecoration: 'none',
              }}
            >
              Join
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              style={{ padding: '8px', color: '#1A1A1A', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#F5F0EB', borderTop: '1px solid #D4CFC8', padding: '16px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '12px 16px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                fontWeight: 400,
                color: '#6B6B6B',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: '8px', padding: '0 16px' }}>
            <Link
              href="#"
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '12px',
                backgroundColor: '#1A1A1A',
                color: '#BFFF00',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
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
      )}
    </nav>
  );
}
