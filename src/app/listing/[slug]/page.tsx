import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft, Star, MapPin, Globe, Phone, Mail,
  ExternalLink, Heart, Share2, Calendar,
} from 'lucide-react';
import FamilySignalCard from '@/components/FamilySignalCard';
import GoogleReviews from '@/components/GoogleReviews';
import {
  getListingBySlug,
  listings,
  categoryInfo,
  getFamilySignalsByCity,
} from '@/data/listings';
import { getPlaceData } from '@/data/google-places';

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) notFound();

  const catInfo = categoryInfo[listing.category];
  const familySignals = getFamilySignalsByCity(listing.city).slice(0, 2);
  const placeData = getPlaceData(listing.googlePlaceId);
  const googleRating = placeData?.rating ?? listing.rating;
  const googleReviewCount = placeData?.reviewCount ?? listing.reviewCount;
  const photos = placeData?.photoUrls?.length ? placeData.photoUrls : listing.images;
  const address = placeData?.address ?? listing.address;
  const phone = placeData?.phone ?? listing.phone;
  const website = placeData?.website ?? listing.website;
  const description = placeData?.editorialSummary ?? listing.description;

  const monoLabel = {
    fontFamily: "'JetBrains Mono', monospace" as const,
    fontSize: '10px' as const,
    fontWeight: 500 as const,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
  };

  return (
    <>
      {/* Image Gallery */}
      <section style={{ backgroundColor: '#F5F0EB', paddingTop: '64px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 24px 0' }}>
          <Link href={`/city/${listing.citySlug}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            ...monoLabel, color: '#999999',
            marginBottom: '16px', textDecoration: 'none',
          }}>
            <ArrowLeft size={14} />
            Back to {listing.city}
          </Link>
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 24px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '2px', overflow: 'hidden' }}>
            <div className="md:col-span-2" style={{ position: 'relative', aspectRatio: '16/9' }}>
              <SafeImage
                src={photos[0]}
                fallbackSrc={listing.images[0]}
                alt={listing.name}
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            <div className="hidden md:grid" style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '2px' }}>
              <div style={{ position: 'relative' }}>
                <SafeImage
                  src={photos[1] || photos[0]}
                  fallbackSrc={listing.images[1] || listing.images[0]}
                  alt={`${listing.name} 2`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="33vw"
                />
              </div>
              <div style={{ position: 'relative' }}>
                <SafeImage
                  src={photos[2] || photos[0]}
                  fallbackSrc={listing.images[2] || listing.images[0]}
                  alt={`${listing.name} 3`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: '#F5F0EB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px 80px' }}>
          <div className="flex flex-col lg:flex-row" style={{ gap: '48px' }}>
            {/* Main Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Header badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                <span style={{
                  padding: '6px 14px', border: '1px solid #D4CFC8',
                  ...monoLabel, color: '#1A1A1A',
                }}>
                  {catInfo.label}
                </span>
                {listing.verified && (
                  <span style={{
                    padding: '6px 12px', backgroundColor: '#1A1A1A', color: '#BFFF00',
                    ...monoLabel,
                  }}>
                    Verified
                  </span>
                )}
                {listing.claimedByOperator && (
                  <span style={{
                    padding: '6px 12px', border: '1px solid #D4CFC8',
                    ...monoLabel, color: '#6B6B6B',
                  }}>
                    Claimed by operator
                  </span>
                )}
              </div>

              <h1 style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: 'clamp(24px, 4vw, 40px)',
                fontWeight: 400, color: '#1A1A1A',
                marginBottom: '16px', lineHeight: 1.15,
              }}>
                {listing.name}
              </h1>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', ...monoLabel, color: '#1A1A1A', fontSize: '12px' }}>
                  <Star size={14} fill="#BFFF00" color="#BFFF00" />
                  {googleRating} ({googleReviewCount})
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', ...monoLabel, color: '#999999', fontSize: '11px' }}>
                  <MapPin size={14} />
                  {listing.city}, {listing.country}
                </span>
              </div>

              {/* About */}
              <div style={{ marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid #D4CFC8' }}>
                <h2 style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: '22px', fontWeight: 400, color: '#1A1A1A', marginBottom: '16px',
                }}>
                  About
                </h2>
                <p style={{ color: '#6B6B6B', lineHeight: 1.7, fontSize: '15px' }}>{description}</p>
              </div>

              {/* Highlights */}
              <div style={{ marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid #D4CFC8' }}>
                <h2 style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: '22px', fontWeight: 400, color: '#1A1A1A', marginBottom: '20px',
                }}>
                  Highlights
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {listing.highlights.map((h) => (
                    <div key={h} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '12px',
                      padding: '8px 0',
                    }}>
                      <span style={{ color: '#BFFF00', fontWeight: 700, fontSize: '12px', marginTop: '2px' }}>&mdash;</span>
                      <span style={{ fontSize: '14px', color: '#6B6B6B' }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pedagogy & Tags */}
              <div style={{ marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid #D4CFC8' }}>
                <h2 style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: '22px', fontWeight: 400, color: '#1A1A1A', marginBottom: '20px',
                }}>
                  Approach
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {listing.pedagogy.map((p) => (
                    <span key={p} style={{
                      padding: '6px 16px', backgroundColor: '#1A1A1A', color: '#BFFF00',
                      ...monoLabel,
                    }}>
                      {p}
                    </span>
                  ))}
                  {listing.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: '6px 16px', border: '1px solid #D4CFC8',
                      ...monoLabel, color: '#6B6B6B',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Google Reviews */}
              {placeData && placeData.reviews.length > 0 && (
                <GoogleReviews
                  reviews={placeData.reviews}
                  rating={googleRating}
                  reviewCount={googleReviewCount}
                />
              )}

              {/* Families */}
              {familySignals.length > 0 && (
                <div style={{ marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid #D4CFC8' }}>
                  <h2 style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: '22px', fontWeight: 400, color: '#1A1A1A', marginBottom: '20px',
                  }}>
                    Families in {listing.city}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {familySignals.map((signal) => (
                      <FamilySignalCard key={signal.id} signal={signal} />
                    ))}
                  </div>
                </div>
              )}

              {/* Location */}
              <div>
                <h2 style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: '22px', fontWeight: 400, color: '#1A1A1A', marginBottom: '20px',
                }}>
                  Location
                </h2>
                <div style={{ overflow: 'hidden' }}>
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                    width="100%"
                    height="300"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map showing ${listing.name}`}
                  />
                  <div style={{
                    backgroundColor: '#FAFAF8', padding: '16px 20px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
                    border: '1px solid #D4CFC8', borderTop: 'none',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MapPin size={14} color="#1A1A1A" />
                      <span style={{ fontSize: '13px', color: '#6B6B6B', fontWeight: 500 }}>{address}</span>
                    </div>
                    <a
                      href={listing.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        padding: '8px 16px', backgroundColor: '#1A1A1A', color: '#BFFF00',
                        ...monoLabel, textDecoration: 'none',
                      }}
                    >
                      <ExternalLink size={12} />
                      Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-[360px]" style={{ flexShrink: 0 }}>
              <div style={{ position: 'sticky', top: '88px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {/* Price Card */}
                <div style={{
                  backgroundColor: '#FAFAF8', padding: '28px',
                  border: '1px solid #D4CFC8',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div>
                      <div style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '24px', fontWeight: 500, color: '#1A1A1A',
                      }}>
                        {listing.priceRange}
                      </div>
                      {listing.priceNote && (
                        <p style={{ ...monoLabel, color: '#999999', marginTop: '4px' }}>{listing.priceNote}</p>
                      )}
                    </div>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '4px',
                      backgroundColor: '#1A1A1A', padding: '6px 12px',
                    }}>
                      <Star size={14} fill="#BFFF00" color="#BFFF00" />
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500, color: '#BFFF00', fontSize: '13px',
                      }}>
                        {googleRating}
                      </span>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div style={{
                    backgroundColor: '#F5F0EB', padding: '16px',
                    marginBottom: '24px', border: '1px solid #D4CFC8',
                  }}>
                    {[
                      { label: 'Ages', value: `${listing.ageRange.min}–${listing.ageRange.max} years` },
                      { label: 'Languages', value: listing.languages.join(', ') },
                      ...(listing.schedule ? [{ label: 'Schedule', value: listing.schedule }] : []),
                      ...(listing.spotsAvailable !== undefined ? [{
                        label: 'Availability',
                        value: `${listing.spotsAvailable} spots left`,
                        highlight: listing.spotsAvailable <= 3,
                      }] : []),
                      { label: 'Interested', value: `${listing.familiesInterested} families` },
                    ].map((item, i) => (
                      <div key={item.label} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '10px 0', fontSize: '13px',
                        borderBottom: i < 4 ? '1px solid #D4CFC8' : 'none',
                      }}>
                        <span style={{ ...monoLabel, color: '#999999' }}>{item.label}</span>
                        <span style={{
                          fontWeight: 500, fontSize: '13px',
                          color: 'highlight' in item && item.highlight ? '#BFFF00' : '#1A1A1A',
                          textAlign: 'right', maxWidth: '180px',
                        }}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <button style={{
                    width: '100%', padding: '16px', backgroundColor: '#1A1A1A', color: '#BFFF00',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500, border: 'none', cursor: 'pointer',
                    fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    marginBottom: '8px',
                  }}>
                    <Calendar size={16} />
                    Request Info
                  </button>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    <button style={{
                      flex: 1, padding: '12px', backgroundColor: '#F5F0EB', color: '#1A1A1A',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 400, border: '1px solid #D4CFC8', cursor: 'pointer',
                      fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    }}>
                      <Heart size={13} /> Save
                    </button>
                    <button style={{
                      flex: 1, padding: '12px', backgroundColor: '#F5F0EB', color: '#1A1A1A',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 400, border: '1px solid #D4CFC8', cursor: 'pointer',
                      fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    }}>
                      <Share2 size={13} /> Share
                    </button>
                  </div>
                </div>

                {/* Contact Card */}
                <div style={{
                  backgroundColor: '#FAFAF8', padding: '24px',
                  border: '1px solid #D4CFC8',
                }}>
                  <h3 style={{ ...monoLabel, color: '#999999', marginBottom: '16px' }}>Contact</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {phone && (
                      <a href={`tel:${phone}`} style={{
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '10px',
                        fontSize: '13px', color: '#6B6B6B', textDecoration: 'none',
                      }}>
                        <Phone size={14} /> {phone}
                      </a>
                    )}
                    {listing.email && (
                      <a href={`mailto:${listing.email}`} style={{
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '10px',
                        fontSize: '13px', color: '#6B6B6B', textDecoration: 'none',
                      }}>
                        <Mail size={14} /> {listing.email}
                      </a>
                    )}
                    {website && (
                      <a href={website} target="_blank" rel="noopener noreferrer" style={{
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '10px',
                        fontSize: '13px', color: '#6B6B6B', textDecoration: 'none',
                      }}>
                        <Globe size={14} /> Visit website
                      </a>
                    )}
                    <a href={listing.googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex', alignItems: 'center', gap: '12px', padding: '10px',
                      fontSize: '13px', color: '#6B6B6B', textDecoration: 'none',
                    }}>
                      <MapPin size={14} /> Get directions
                    </a>
                  </div>
                </div>

                {/* Claim prompt */}
                {!listing.claimedByOperator && (
                  <div style={{
                    backgroundColor: '#FAFAF8', padding: '24px',
                    border: '1px solid #D4CFC8',
                  }}>
                    <h3 style={{ ...monoLabel, color: '#1A1A1A', marginBottom: '8px' }}>
                      Is this your listing?
                    </h3>
                    <p style={{ fontSize: '13px', color: '#6B6B6B', marginBottom: '16px', lineHeight: 1.5 }}>
                      Claim it to manage your profile, respond to inquiries, and get featured.
                    </p>
                    <button style={{
                      width: '100%', padding: '12px', backgroundColor: '#1A1A1A', color: '#BFFF00',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 500, border: 'none', cursor: 'pointer',
                      fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em',
                    }}>
                      Claim this listing
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
