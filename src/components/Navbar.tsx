'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/destinations', label: 'Destinations' },
  { href: '/city/lisbon', label: 'Lisbon' },
  { href: '/city/ericeira', label: 'Ericeira' },
  { href: '/city/sintra', label: 'Sintra' },
  { href: '/city/cascais', label: 'Cascais' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e7e5e4' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '36px', height: '36px', backgroundColor: '#FF4438', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '18px' }}>
              W
            </div>
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#1B1B1F', letterSpacing: '-0.5px' }}>
              wandergroup
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontSize: '14px', fontWeight: 500, color: '#71717a', textDecoration: 'none', transition: 'color 0.2s' }}
                className="hover:text-coral"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              href="#"
              className="hidden md:flex"
              style={{ alignItems: 'center', gap: '8px', padding: '10px 24px', backgroundColor: '#FF4438', color: 'white', fontSize: '14px', fontWeight: 600, borderRadius: '12px', textDecoration: 'none', transition: 'background-color 0.2s' }}
            >
              Signal your arrival
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              style={{ padding: '8px', color: '#1B1B1F', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" style={{ backgroundColor: 'white', borderTop: '1px solid #e7e5e4', padding: '16px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ display: 'block', padding: '12px 16px', fontSize: '15px', fontWeight: 500, color: '#3f3f46', textDecoration: 'none', borderRadius: '10px' }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: '8px', padding: '0 16px' }}>
            <Link
              href="#"
              style={{ display: 'block', textAlign: 'center', padding: '12px', backgroundColor: '#FF4438', color: 'white', fontSize: '14px', fontWeight: 600, borderRadius: '12px', textDecoration: 'none' }}
            >
              Signal your arrival
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
