import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft, Star, MapPin, Globe, Phone, Mail,
  CheckCircle, Users, ExternalLink, Heart, Share2, Calendar,
} from 'lucide-react';
import FamilySignalCard from '@/components/FamilySignalCard';
import {
  getListingBySlug,
  listings,
  categoryInfo,
  getFamilySignalsByCity,
} from '@/data/listings';

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);
  if (!listing) notFound();

  const catInfo = categoryInfo[listing.category];
  const familySignals = getFamilySignalsByCity(listing.city).slice(0, 2);

  return (
    <>
      {/* Image Gallery */}
      <section style={{ backgroundColor: 'white', paddingTop: '72px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 24px 0' }}>
          <Link href={`/city/${listing.citySlug}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            color: '#a1a1aa', fontSize: '14px', marginBottom: '16px', textDecoration: 'none',
          }}>
            <ArrowLeft size={16} />
            Back to {listing.city}
          </Link>
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 24px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '8px', borderRadius: '20px', overflow: 'hidden' }}>
            <div className="md:col-span-2" style={{ position: 'relative', aspectRatio: '16/9' }}>
              <Image
                src={listing.images[0]}
                alt={listing.name}
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            <div className="hidden md:grid" style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '8px' }}>
              <div style={{ position: 'relative' }}>
                <Image
                  src={listing.images[1] || listing.images[0]}
                  alt={`${listing.name} 2`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="33vw"
                />
              </div>
              <div style={{ position: 'relative' }}>
                <Image
                  src={listing.images[2] || listing.images[0]}
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
      <section style={{ backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px 64px' }}>
          <div className="flex flex-col lg:flex-row" style={{ gap: '48px' }}>
            {/* Main Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Header badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                <span style={{
                  padding: '6px 14px', backgroundColor: '#F5F5F4', borderRadius: '20px',
                  fontSize: '13px', fontWeight: 600, color: '#1B1B1F',
                }}>
                  {catInfo.icon} {catInfo.label}
                </span>
                {listing.verified && (
                  <span style={{
                    display: 'flex', alignItems: 'center', gap: '4px',
                    padding: '6px 12px', backgroundColor: '#F0FDF4', color: '#16A34A',
                    borderRadius: '20px', fontSize: '12px', fontWeight: 600,
                  }}>
                    <CheckCircle size={13} />
                    Verified
                  </span>
                )}
                {listing.claimedByOperator && (
                  <span style={{
                    padding: '6px 12px', backgroundColor: '#EFF6FF', color: '#0EA5E9',
                    borderRadius: '20px', fontSize: '12px', fontWeight: 600,
                  }}>
                    Claimed by operator
                  </span>
                )}
              </div>

              <h1 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800, color: '#1B1B1F', marginBottom: '16px', lineHeight: 1.15, letterSpacing: '-0.5px' }}>
                {listing.name}
              </h1>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', marginBottom: '32px', fontSize: '14px', color: '#71717a' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={16} fill="#F59E0B" color="#F59E0B" />
                  <strong style={{ color: '#1B1B1F' }}>{listing.rating}</strong> ({listing.reviewCount} reviews)
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={16} />
                  {listing.city}, {listing.country}
                </span>
              </div>

              {/* About */}
              <div style={{ marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid #f4f4f5' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1B1B1F', marginBottom: '16px' }}>About</h2>
                <p style={{ color: '#52525b', lineHeight: 1.7, fontSize: '15px' }}>{listing.description}</p>
              </div>

              {/* Highlights */}
              <div style={{ marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid #f4f4f5' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1B1B1F', marginBottom: '20px' }}>Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '12px' }}>
                  {listing.highlights.map((h) => (
                    <div key={h} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '10px',
                      backgroundColor: '#F5F5F4', borderRadius: '14px', padding: '14px 16px',
                    }}>
                      <CheckCircle size={16} color="#16A34A" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', color: '#3f3f46' }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pedagogy & Tags */}
              <div style={{ marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid #f4f4f5' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1B1B1F', marginBottom: '20px' }}>Pedagogy & Tags</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {listing.pedagogy.map((p) => (
                    <span key={p} style={{
                      padding: '6px 16px', backgroundColor: '#FFF1F0', color: '#FF4438',
                      borderRadius: '20px', fontSize: '13px', fontWeight: 600,
                    }}>
                      {p}
                    </span>
                  ))}
                  {listing.tags.map((tag) => (
                    <span key={tag} style={{
                      padding: '6px 16px', backgroundColor: '#F5F5F4',
                      borderRadius: '20px', fontSize: '13px', fontWeight: 500, color: '#71717a',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Families */}
              {familySignals.length > 0 && (
                <div style={{ marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid #f4f4f5' }}>
                  <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '20px', fontWeight: 700, color: '#1B1B1F', marginBottom: '20px' }}>
                    <Users size={20} color="#16A34A" />
                    Families in {listing.city}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {familySignals.map((signal) => (
                      <FamilySignalCard key={signal.id} signal={signal} />
                    ))}
                  </div>
                </div>
              )}

              {/* Location */}
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1B1B1F', marginBottom: '20px' }}>Location</h2>
                <div style={{
                  backgroundColor: '#F5F5F4', borderRadius: '20px', padding: '40px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    width: '56px', height: '56px', backgroundColor: '#FFF1F0', borderRadius: '16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
                  }}>
                    <MapPin size={28} color="#FF4438" />
                  </div>
                  <p style={{ fontSize: '14px', color: '#3f3f46', fontWeight: 500, marginBottom: '4px' }}>{listing.address}</p>
                  <p style={{ fontSize: '12px', color: '#a1a1aa', marginBottom: '20px' }}>Place ID: {listing.googlePlaceId}</p>
                  <a
                    href={listing.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '12px 24px', backgroundColor: 'white', color: '#FF4438',
                      fontWeight: 600, fontSize: '14px', borderRadius: '14px', textDecoration: 'none',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                    }}
                  >
                    <ExternalLink size={16} />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-[360px]" style={{ flexShrink: 0 }}>
              <div style={{ position: 'sticky', top: '96px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Price Card */}
                <div style={{
                  backgroundColor: 'white', borderRadius: '20px', padding: '28px',
                  border: '2px solid #e7e5e4', boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div>
                      <div style={{ fontSize: '28px', fontWeight: 800, color: '#FF4438' }}>{listing.priceRange}</div>
                      {listing.priceNote && (
                        <p style={{ fontSize: '12px', color: '#a1a1aa', marginTop: '4px' }}>{listing.priceNote}</p>
                      )}
                    </div>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '4px',
                      backgroundColor: '#FEF3C7', padding: '6px 12px', borderRadius: '10px',
                    }}>
                      <Star size={16} fill="#F59E0B" color="#F59E0B" />
                      <span style={{ fontWeight: 700, color: '#1B1B1F', fontSize: '14px' }}>{listing.rating}</span>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div style={{
                    backgroundColor: '#F5F5F4', borderRadius: '14px', padding: '16px',
                    marginBottom: '24px',
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
                        padding: '10px 0', fontSize: '14px',
                        borderBottom: i < 4 ? '1px solid #e7e5e4' : 'none',
                      }}>
                        <span style={{ color: '#71717a' }}>{item.label}</span>
                        <span style={{
                          fontWeight: 600,
                          color: 'highlight' in item && item.highlight ? '#FF4438' : '#1B1B1F',
                          textAlign: 'right', maxWidth: '180px',
                        }}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <button style={{
                    width: '100%', padding: '16px', backgroundColor: '#FF4438', color: 'white',
                    fontWeight: 700, borderRadius: '14px', border: 'none', cursor: 'pointer',
                    fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    marginBottom: '12px',
                  }}>
                    <Calendar size={18} />
                    Request Info
                  </button>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{
                      flex: 1, padding: '12px', backgroundColor: '#F5F5F4', color: '#1B1B1F',
                      fontWeight: 500, borderRadius: '14px', border: 'none', cursor: 'pointer',
                      fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    }}>
                      <Heart size={15} /> Save
                    </button>
                    <button style={{
                      flex: 1, padding: '12px', backgroundColor: '#F5F5F4', color: '#1B1B1F',
                      fontWeight: 500, borderRadius: '14px', border: 'none', cursor: 'pointer',
                      fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    }}>
                      <Share2 size={15} /> Share
                    </button>
                  </div>
                </div>

                {/* Contact Card */}
                <div style={{
                  backgroundColor: 'white', borderRadius: '20px', padding: '24px',
                  border: '1px solid #e7e5e4',
                }}>
                  <h3 style={{ fontWeight: 700, color: '#1B1B1F', marginBottom: '16px', fontSize: '14px' }}>Contact</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {listing.phone && (
                      <a href={`tel:${listing.phone}`} style={{
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '10px',
                        fontSize: '14px', color: '#52525b', textDecoration: 'none', borderRadius: '10px',
                      }}>
                        <Phone size={16} /> {listing.phone}
                      </a>
                    )}
                    {listing.email && (
                      <a href={`mailto:${listing.email}`} style={{
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '10px',
                        fontSize: '14px', color: '#52525b', textDecoration: 'none', borderRadius: '10px',
                      }}>
                        <Mail size={16} /> {listing.email}
                      </a>
                    )}
                    {listing.website && (
                      <a href={listing.website} target="_blank" rel="noopener noreferrer" style={{
                        display: 'flex', alignItems: 'center', gap: '12px', padding: '10px',
                        fontSize: '14px', color: '#52525b', textDecoration: 'none', borderRadius: '10px',
                      }}>
                        <Globe size={16} /> Visit website
                      </a>
                    )}
                    <a href={listing.googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex', alignItems: 'center', gap: '12px', padding: '10px',
                      fontSize: '14px', color: '#52525b', textDecoration: 'none', borderRadius: '10px',
                    }}>
                      <MapPin size={16} /> Get directions
                    </a>
                  </div>
                </div>

                {/* Claim prompt */}
                {!listing.claimedByOperator && (
                  <div style={{
                    backgroundColor: '#FFFBEB', borderRadius: '20px', padding: '24px',
                    border: '1px solid #FEF3C7',
                  }}>
                    <h3 style={{ fontWeight: 700, color: '#1B1B1F', fontSize: '14px', marginBottom: '8px' }}>
                      Is this your listing?
                    </h3>
                    <p style={{ fontSize: '13px', color: '#71717a', marginBottom: '16px', lineHeight: 1.5 }}>
                      Claim it to manage your profile, respond to inquiries, and get featured.
                    </p>
                    <button style={{
                      width: '100%', padding: '12px', backgroundColor: '#1B1B1F', color: 'white',
                      fontWeight: 600, borderRadius: '14px', border: 'none', cursor: 'pointer', fontSize: '13px',
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
