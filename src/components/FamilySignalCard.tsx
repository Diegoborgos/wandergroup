import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { FamilySignal } from '@/data/listings';

export default function FamilySignalCard({ signal }: { signal: FamilySignal }) {
  return (
    <div style={{
      backgroundColor: '#FAFAF8',
      padding: '20px',
      border: '1px solid #D4CFC8',
    }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        {/* Avatar */}
        <div style={{ position: 'relative', width: '52px', height: '52px', overflow: 'hidden', flexShrink: 0 }}>
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
            <h3 style={{ fontWeight: 600, color: '#1A1A1A', fontSize: '14px' }}>{signal.familyName}</h3>
            <span style={{
              padding: '2px 8px', backgroundColor: '#1A1A1A', color: '#BFFF00',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px', fontWeight: 500, textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {signal.currentCity}
            </span>
          </div>

          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px', color: '#999999', marginBottom: '8px',
          }}>
            Kids: {signal.kidsAges.map(age => `${age}yo`).join(', ')}
          </div>

          <p style={{
            fontSize: '14px', color: '#6B6B6B', lineHeight: '1.5',
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
                padding: '3px 10px', border: '1px solid #D4CFC8',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px', color: '#6B6B6B', fontWeight: 400,
                textTransform: 'uppercase', letterSpacing: '0.03em',
              }}>
                {interest}
              </span>
            ))}
          </div>

          {/* Meta + Action */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '4px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px', color: '#999999',
            }}>
              {signal.arrivingDate && (
                <>
                  <Calendar size={11} />
                  <span>Arriving {new Date(signal.arrivingDate).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}</span>
                </>
              )}
              {!signal.arrivingDate && signal.departingDate && (
                <>
                  <Calendar size={11} />
                  <span>Until {new Date(signal.departingDate).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}</span>
                </>
              )}
            </div>
            <button style={{
              padding: '6px 14px', backgroundColor: '#1A1A1A', color: '#BFFF00',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px', fontWeight: 500, textTransform: 'uppercase',
              letterSpacing: '0.05em',
              border: 'none', cursor: 'pointer',
            }}>
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
