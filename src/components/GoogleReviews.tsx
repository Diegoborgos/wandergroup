import { Star } from 'lucide-react';
import type { GoogleReview } from '@/data/google-places';

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={13}
          fill={star <= rating ? '#BFFF00' : '#D4CFC8'}
          color={star <= rating ? '#BFFF00' : '#D4CFC8'}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div style={{
      padding: '20px 0',
      borderBottom: '1px solid #D4CFC8',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '12px',
      }}>
        {review.profile_photo_url && (
          <img
            src={review.profile_photo_url}
            alt={review.author_name}
            width={32}
            height={32}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        )}
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: '14px', color: '#1A1A1A' }}>
            {review.author_name}
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px', color: '#999999',
          }}>
            {review.relative_time_description}
          </div>
        </div>
        <StarRating rating={review.rating} />
      </div>
      {(review.translatedText || review.text) && (
        <div>
          <p style={{
            fontSize: '14px',
            color: '#6B6B6B',
            lineHeight: 1.6,
            margin: 0,
          }}>
            {review.translatedText || review.text}
          </p>
          {review.translatedText && (
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px',
              color: '#999999',
              fontStyle: 'italic',
              margin: '8px 0 0',
            }}>
              Translated from original
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function GoogleReviews({
  reviews,
  rating,
  reviewCount,
}: {
  reviews: GoogleReview[];
  rating: number;
  reviewCount: number;
}) {
  if (reviews.length === 0) return null;

  return (
    <div style={{ marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid #D4CFC8' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
      }}>
        <h2 style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: '22px',
          fontWeight: 400,
          color: '#1A1A1A',
          margin: 0,
        }}>
          Reviews
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: '#1A1A1A',
            padding: '4px 10px',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            fontWeight: 500,
            color: '#BFFF00',
          }}>
            <Star size={12} fill="#BFFF00" color="#BFFF00" />
            {rating}
          </span>
        </h2>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px', color: '#999999',
        }}>
          {reviewCount} total
        </span>
      </div>
      <div>
        {reviews.map((review, i) => (
          <ReviewCard key={`${review.author_name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}
