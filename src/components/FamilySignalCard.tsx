import Image from 'next/image';
import { Calendar, MessageCircle } from 'lucide-react';
import { FamilySignal } from '@/data/listings';

export default function FamilySignalCard({ signal }: { signal: FamilySignal }) {
  return (
    <div
      className="card-hover"
      style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '20px',
        border: '1px solid #e7e5e4',
      }}
    >
      <div style={{ display: 'flex', gap: '16px' }}>
        {/* Avatar */}
        <div style={{ position: 'relative', width: '52px', height: '52px', borderRadius: '14px', overflow: 'hidden', flexShrink: 0 }}>
          <Image
            src={signal.avatar}
            alt={signal.familyName}
            fill
            style={{ objectFit: 'cover' }}
            sizes="52px"
          />
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <h3 style={{ fontWeight: 700, color: '#1B1B1F', fontSize: '14px' }}>{signal.familyName}</h3>
            <span style={{
              padding: '2px 8px', backgroundColor: '#F0FDF4', color: '#16A34A',
              fontSize: '11px', fontWeight: 600, borderRadius: '20px',
            }}>
              {signal.currentCity}
            </span>
          </div>

          <div style={{ fontSize: '12px', color: '#a1a1aa', marginBottom: '8px' }}>
            Kids: {signal.kidsAges.map(age => `${age}yo`).join(', ')}
          </div>

          <p style={{
            fontSize: '14px', color: '#52525b', lineHeight: '1.5',
            display: '-webkit-box', WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical', overflow: 'hidden',
            marginBottom: '12px',
          }}>
            {signal.message}
          </p>

          {/* Interests */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
            {signal.interests.map((interest) => (
              <span key={interest} style={{
                padding: '3px 10px', backgroundColor: '#F5F5F4',
                borderRadius: '20px', fontSize: '11px', color: '#71717a', fontWeight: 500,
              }}>
                {interest}
              </span>
            ))}
          </div>

          {/* Meta + Action */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#a1a1aa' }}>
              {signal.arrivingDate && (
                <>
                  <Calendar size={12} />
                  <span>Arriving {new Date(signal.arrivingDate).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}</span>
                </>
              )}
              {!signal.arrivingDate && signal.departingDate && (
                <>
                  <Calendar size={12} />
                  <span>Until {new Date(signal.departingDate).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}</span>
                </>
              )}
            </div>
            <button style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '6px 14px', backgroundColor: '#FFF1F0', color: '#FF4438',
              fontSize: '12px', fontWeight: 600, borderRadius: '20px',
              border: 'none', cursor: 'pointer',
            }}>
              <MessageCircle size={12} />
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
