import { Star } from 'lucide-react';
import type { GoogleReview } from '@/data/google-places';

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          fill={star <= rating ? '#F59E0B' : '#e4e4e7'}
          color={star <= rating ? '#F59E0B' : '#e4e4e7'}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div style={{
      backgroundColor: '#F5F5F4',
      borderRadius: '16px',
      padding: '20px',
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
            width={36}
            height={36}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        )}
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: '14px', color: '#1B1B1F' }}>
            {review.author_name}
          </div>
          <div style={{ fontSize: '12px', color: '#a1a1aa' }}>
            {review.relative_time_description}
          </div>
        </div>
        <StarRating rating={review.rating} />
      </div>
      {review.text && (
        <p style={{
          fontSize: '14px',
          color: '#52525b',
          lineHeight: 1.6,
          margin: 0,
        }}>
          {review.text}
        </p>
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
    <div style={{ marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid #f4f4f5' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
      }}>
        <h2 style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '20px',
          fontWeight: 700,
          color: '#1B1B1F',
          margin: 0,
        }}>
          Google Reviews
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: '#FEF3C7',
            padding: '4px 10px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 700,
          }}>
            <Star size={14} fill="#F59E0B" color="#F59E0B" />
            {rating}
          </span>
        </h2>
        <span style={{ fontSize: '13px', color: '#a1a1aa' }}>
          {reviewCount} total reviews
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {reviews.map((review, i) => (
          <ReviewCard key={`${review.author_name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}
