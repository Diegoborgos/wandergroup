import Link from 'next/link';
import { MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find your people, wherever you land.
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Join the growing community of families building a different kind of childhood — globally connected, locally rooted.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-coral text-white font-semibold rounded-xl hover:bg-coral-dark transition-all hover:shadow-lg hover:shadow-coral/25 text-lg">
            <Heart className="w-5 h-5" />
            Join the Community
          </button>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-white/90">Cities</h3>
            <ul className="space-y-2">
              <li><Link href="/city/lisbon" className="text-white/50 hover:text-coral transition-colors text-sm">Lisbon</Link></li>
              <li><Link href="/city/ericeira" className="text-white/50 hover:text-coral transition-colors text-sm">Ericeira</Link></li>
              <li><Link href="/city/sintra" className="text-white/50 hover:text-coral transition-colors text-sm">Sintra</Link></li>
              <li><Link href="/city/cascais" className="text-white/50 hover:text-coral transition-colors text-sm">Cascais</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white/90">Categories</h3>
            <ul className="space-y-2">
              <li><span className="text-white/50 text-sm">Forest Schools</span></li>
              <li><span className="text-white/50 text-sm">Alternative Schools</span></li>
              <li><span className="text-white/50 text-sm">Learning Pods</span></li>
              <li><span className="text-white/50 text-sm">Communities</span></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white/90">For Operators</h3>
            <ul className="space-y-2">
              <li><span className="text-white/50 text-sm">Claim Your Listing</span></li>
              <li><span className="text-white/50 text-sm">Promote Your School</span></li>
              <li><span className="text-white/50 text-sm">Partner With Us</span></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white/90">Company</h3>
            <ul className="space-y-2">
              <li><span className="text-white/50 text-sm">About</span></li>
              <li><span className="text-white/50 text-sm">Blog</span></li>
              <li><span className="text-white/50 text-sm">Contact</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold">wandergroup</span>
          </div>
          <p className="text-white/40 text-sm">
            For families who refused the default.
          </p>
        </div>
      </div>
    </footer>
  );
}
