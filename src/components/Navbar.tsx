'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MapPin, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-warm-gray-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-coral rounded-xl flex items-center justify-center group-hover:bg-coral-dark transition-colors">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-midnight leading-tight tracking-tight">
                wandergroup
              </span>
              <span className="text-[10px] text-midnight/50 leading-none tracking-wider uppercase hidden sm:block">
                For families who refused the default
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/destinations" className="text-sm font-medium text-midnight/70 hover:text-coral transition-colors">
              Destinations
            </Link>
            <Link href="/city/lisbon" className="text-sm font-medium text-midnight/70 hover:text-coral transition-colors">
              Lisbon
            </Link>
            <Link href="/city/ericeira" className="text-sm font-medium text-midnight/70 hover:text-coral transition-colors">
              Ericeira
            </Link>
            <Link href="/city/sintra" className="text-sm font-medium text-midnight/70 hover:text-coral transition-colors">
              Sintra
            </Link>
            <Link href="/city/cascais" className="text-sm font-medium text-midnight/70 hover:text-coral transition-colors">
              Cascais
            </Link>
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-coral text-white text-sm font-semibold rounded-xl hover:bg-coral-dark transition-all hover:shadow-lg hover:shadow-coral/25">
              <Heart className="w-4 h-4" />
              I&apos;m arriving
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-midnight"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-warm-gray-dark/30 animate-fade-in-up">
          <div className="px-4 py-4 space-y-1">
            <Link href="/destinations" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-midnight/70 hover:bg-sand hover:text-coral font-medium transition-colors">
              Destinations
            </Link>
            <Link href="/city/lisbon" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-midnight/70 hover:bg-sand hover:text-coral font-medium transition-colors">
              Lisbon
            </Link>
            <Link href="/city/ericeira" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-midnight/70 hover:bg-sand hover:text-coral font-medium transition-colors">
              Ericeira
            </Link>
            <Link href="/city/sintra" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-midnight/70 hover:bg-sand hover:text-coral font-medium transition-colors">
              Sintra
            </Link>
            <Link href="/city/cascais" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-midnight/70 hover:bg-sand hover:text-coral font-medium transition-colors">
              Cascais
            </Link>
            <button className="w-full mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-coral text-white text-sm font-semibold rounded-xl">
              <Heart className="w-4 h-4" />
              I&apos;m arriving
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
