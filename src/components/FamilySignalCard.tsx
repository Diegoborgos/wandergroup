import Image from 'next/image';
import { Calendar, MessageCircle } from 'lucide-react';
import { FamilySignal } from '@/data/listings';

export default function FamilySignalCard({ signal }: { signal: FamilySignal }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-warm-gray-dark/30 hover:border-coral/30 transition-colors hover:shadow-md">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
          <Image
            src={signal.avatar}
            alt={signal.familyName}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-midnight text-sm">{signal.familyName}</h3>
            <span className="px-2 py-0.5 bg-sage/10 text-sage text-xs font-medium rounded-full">
              {signal.currentCity}
            </span>
          </div>

          {/* Kids ages */}
          <div className="text-xs text-midnight/50 mb-2">
            Kids: {signal.kidsAges.map(age => `${age}yo`).join(', ')}
          </div>

          {/* Message */}
          <p className="text-sm text-midnight/70 line-clamp-2 mb-3">
            {signal.message}
          </p>

          {/* Interests */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {signal.interests.map((interest) => (
              <span key={interest} className="px-2 py-0.5 bg-sand rounded-full text-xs text-midnight/60">
                {interest}
              </span>
            ))}
          </div>

          {/* Meta + Action */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-midnight/40">
              {signal.arrivingDate && (
                <>
                  <Calendar className="w-3 h-3" />
                  <span>Arriving {new Date(signal.arrivingDate).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}</span>
                </>
              )}
              {signal.departingDate && (
                <>
                  <Calendar className="w-3 h-3" />
                  <span>Until {new Date(signal.departingDate).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}</span>
                </>
              )}
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-coral/10 text-coral text-xs font-semibold rounded-full hover:bg-coral hover:text-white transition-all">
              <MessageCircle className="w-3 h-3" />
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
