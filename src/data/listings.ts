export type ListingCategory =
  | 'forest-school'
  | 'alternative-school'
  | 'coworking'
  | 'sports'
  | 'outdoor-activity'
  | 'arts-culture'
  | 'stem'
  | 'community';

export interface Listing {
  id: string;
  name: string;
  slug: string;
  category: ListingCategory;
  subcategory?: string;
  city: string;
  citySlug: string;
  country: string;
  description: string;
  shortDescription: string;
  ageRange: { min: number; max: number };
  pedagogy: string[];
  languages: string[];
  priceRange: string;
  priceNote?: string;
  rating: number;
  reviewCount: number;
  coordinates: { lat: number; lng: number };
  address: string;
  googleMapsUrl: string;
  googlePlaceId: string;
  phone?: string;
  website?: string;
  email?: string;
  images: string[];
  coverImage: string;
  tags: string[];
  highlights: string[];
  schedule?: string;
  spotsAvailable?: number;
  verified: boolean;
  claimedByOperator: boolean;
  familiesInterested: number;
}

export interface City {
  name: string;
  slug: string;
  country: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  coordinates: { lat: number; lng: number };
  listingCount: number;
  familiesHere: number;
  costOfLiving: string;
  internetSpeed: string;
  safety: string;
  climate: string;
  nomadScore: number;
  highlights: string[];
}

export interface FamilySignal {
  id: string;
  familyName: string;
  avatar: string;
  kidsAges: number[];
  currentCity: string;
  arrivingDate?: string;
  departingDate?: string;
  interests: string[];
  message: string;
}

export const categoryInfo: Record<ListingCategory, { label: string; icon: string; description: string }> = {
  'forest-school': { label: 'Forest & Nature Schools', icon: '🌲', description: 'Outdoor, nature-immersive learning rooted in Scandinavian forest pedagogy.' },
  'alternative-school': { label: 'Alternative Schools', icon: '🏫', description: 'Montessori, Waldorf, international and other alternative education approaches.' },
  'coworking': { label: 'Coworking Spaces', icon: '💻', description: 'Family-friendly coworking spaces for remote-working parents.' },
  'sports': { label: 'Sports & Martial Arts', icon: '🥋', description: 'Martial arts, surf schools, climbing, swimming, horse riding and more.' },
  'outdoor-activity': { label: 'Outdoor Adventures', icon: '🏔️', description: 'Nature parks, farms, kayaking, hiking, and outdoor exploration.' },
  'arts-culture': { label: 'Arts & Culture', icon: '🎨', description: 'Art workshops, ceramics, theatre, music, dance, photography, and cooking.' },
  'stem': { label: 'Science & Tech', icon: '🔬', description: 'Coding schools, STEAM labs, science museums, aquariums, and maker spaces.' },
  'community': { label: 'Community & Social', icon: '👨‍👩‍👧‍👦', description: 'Libraries, play spaces, language groups, scouting, chess clubs, and online communities.' },
};

export const cities: City[] = [
  {
    name: 'Lisbon',
    slug: 'lisbon',
    country: 'Portugal',
    description: 'Lisbon is the undisputed capital of alternative family life in Southern Europe. From forest schools in Monsanto to Montessori in Alfama, the city offers a density of options unmatched in Portugal. Add world-class coworking, a booming digital nomad scene, and sunshine 300 days a year — and you get a city built for families who refused the default.',
    shortDescription: 'Europe\'s alternative education capital with 300 days of sunshine.',
    coverImage: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200',
    coordinates: { lat: 38.7223, lng: -9.1393 },
    listingCount: 55,
    familiesHere: 47,
    costOfLiving: '€2,500-3,500/mo',
    internetSpeed: '100+ Mbps',
    safety: 'Very Safe',
    climate: 'Mediterranean',
    nomadScore: 9.2,
    highlights: ['Digital Nomad Visa', 'Strong expat community', 'Year-round sunshine', 'Excellent public transport', 'Beach access'],
  },
  {
    name: 'Ericeira',
    slug: 'ericeira',
    country: 'Portugal',
    description: 'Ericeira is a surf town turned alternative education hotspot. Just 35 minutes from Lisbon, this World Surfing Reserve has attracted a community of creative, nature-oriented families. Forest schools thrive here, kids surf before lunch, and the village vibe means everyone knows each other. It\'s the kind of place where childhood happens outdoors.',
    shortDescription: 'Surf town paradise with nature-based education and tight-knit community.',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
    coordinates: { lat: 38.9626, lng: -9.4152 },
    listingCount: 15,
    familiesHere: 23,
    costOfLiving: '€1,800-2,800/mo',
    internetSpeed: '50-100 Mbps',
    safety: 'Very Safe',
    climate: 'Atlantic Mediterranean',
    nomadScore: 8.7,
    highlights: ['World Surfing Reserve', 'Strong forest school scene', 'Village community feel', 'Nature-based childhood', '35min to Lisbon'],
  },
  {
    name: 'Sintra',
    slug: 'sintra',
    country: 'Portugal',
    description: 'Sintra is a fairy-tale setting for families seeking alternative education. UNESCO-listed palaces sit among misty forests, and the town has attracted a growing community of families drawn to Waldorf and nature-based approaches. Cooler than Lisbon, greener, and more affordable — Sintra is where families who want forest, culture, and community converge.',
    shortDescription: 'UNESCO fairy-tale town with Waldorf and nature-based education in misty forests.',
    coverImage: 'https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=1200',
    coordinates: { lat: 38.7981, lng: -9.3884 },
    listingCount: 6,
    familiesHere: 15,
    costOfLiving: '€1,600-2,400/mo',
    internetSpeed: '50-80 Mbps',
    safety: 'Very Safe',
    climate: 'Atlantic, cooler & misty',
    nomadScore: 7.8,
    highlights: ['UNESCO World Heritage', 'Waldorf & Steiner schools', 'Forest immersion', 'Affordable for families', 'Cultural richness'],
  },
  {
    name: 'Cascais',
    slug: 'cascais',
    country: 'Portugal',
    description: 'Cascais is where Lisbon\'s coast meets international sophistication. This former royal retreat has reinvented itself as a hub for affluent international families seeking quality alternative education. International schools, bilingual pods, and a beach lifestyle make it perfect for families who want the best of both worlds — global education standards with Portuguese warmth.',
    shortDescription: 'Coastal sophistication with international schools and bilingual learning pods.',
    coverImage: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200',
    coordinates: { lat: 38.6979, lng: -9.4215 },
    listingCount: 25,
    familiesHere: 31,
    costOfLiving: '€2,800-4,200/mo',
    internetSpeed: '100+ Mbps',
    safety: 'Very Safe',
    climate: 'Mediterranean coastal',
    nomadScore: 8.5,
    highlights: ['International school hub', 'Beach lifestyle', 'Bilingual community', 'Premium family living', '30min to Lisbon'],
  },
  {
    name: 'Porto',
    slug: 'porto',
    country: 'Portugal',
    description: 'Porto is Portugal\'s creative northern capital, increasingly popular with alternative families. A grittier, more affordable alternative to Lisbon, Porto offers Montessori schools, a strong martial arts scene, excellent surf beaches at Matosinhos, and a growing community of digital nomad families. The Douro River, historic Ribeira district, and world-class food make it a compelling family base.',
    shortDescription: 'Creative northern capital with affordable living and growing alt-education scene.',
    coverImage: 'https://images.unsplash.com/photo-1555881400-69fb0e715862?w=1200',
    coordinates: { lat: 41.1579, lng: -8.6291 },
    listingCount: 25,
    familiesHere: 18,
    costOfLiving: '€1,800-2,800/mo',
    internetSpeed: '100+ Mbps',
    safety: 'Very Safe',
    climate: 'Atlantic, mild & rainy winters',
    nomadScore: 8.3,
    highlights: ['More affordable than Lisbon', 'Matosinhos surf beach', 'Strong food culture', 'Growing expat community', 'Creative & artistic city'],
  },
];

export const listings: Listing[] = [
  // =============================================
  // BATCH 1: FOREST & NATURE SCHOOLS
  // =============================================
  {
    id: 'fs-1',
    name: 'Escola Lá Fora - Forest School',
    slug: 'escola-la-fora-forest-school',
    category: 'forest-school',
    city: 'Lisbon',
    citySlug: 'lisbon',
    country: 'Portugal',
    description: 'Escola Lá Fora is one of Lisbon\'s pioneering forest schools, offering a fully outdoor, child-led learning experience. Children spend their days in natural settings across the city, exploring woodlands, parks, and green spaces. The pedagogy is rooted in Scandinavian forest school principles adapted for Portugal\'s climate, emphasizing curiosity, resilience, and connection to nature.',
    shortDescription: 'Pioneering Lisbon forest school with fully outdoor, child-led learning.',
    ageRange: { min: 3, max: 10 },
    pedagogy: ['Forest School', 'Child-Led', 'Outdoor Learning'],
    languages: ['Portuguese', 'English'],
    priceRange: '€350-500/month',
    rating: 4.8,
    reviewCount: 45,
    coordinates: { lat: 38.7340, lng: -9.1680 },
    address: 'Lisbon, Portugal',
    googleMapsUrl: 'https://maps.google.com/?q=Escola+Lá+Fora+Lisbon',
    googlePlaceId: 'ChIJ96OblUgzGQ0RJLOfoh4e5Qs',
    images: [
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
      'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
    tags: ['Forest School', 'Outdoor', 'Nature-Based', 'Bilingual'],
    highlights: ['Fully outdoor program', 'Child-led approach', 'Scandinavian-inspired pedagogy', 'Small groups'],
    schedule: 'Mon-Fri 9:00-15:00',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 12,
  },
  {
    id: 'fs-2',
    name: 'Forest House School',
    slug: 'forest-house-school',
    category: 'forest-school',
    city: 'Lisbon',
    citySlug: 'lisbon',
    country: 'Portugal',
    description: 'Forest House School blends indoor creative spaces with extensive outdoor learning in Lisbon. The school uses a forest-based pedagogy combined with project-based learning, giving children the freedom to explore nature while developing key skills. Popular with both local and international families.',
    shortDescription: 'Indoor-outdoor forest school blending nature immersion with creative projects.',
    ageRange: { min: 3, max: 12 },
    pedagogy: ['Forest School', 'Project-Based', 'Play-Based'],
    languages: ['Portuguese', 'English'],
    priceRange: '€400-550/month',
    rating: 4.7,
    reviewCount: 38,
    coordinates: { lat: 38.7280, lng: -9.1550 },
    address: 'Lisbon, Portugal',
    googleMapsUrl: 'https://maps.google.com/?q=Forest+House+School+Lisbon',
    googlePlaceId: 'ChIJhXnosjEzGQ0RpcxcIXbIB4k',
    images: [
      'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=800',
      'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=800',
    tags: ['Forest School', 'Creative', 'Project-Based'],
    highlights: ['Indoor-outdoor model', 'Project-based learning', 'International community', 'Nature immersion'],
    schedule: 'Mon-Fri 8:30-15:30',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 10,
  },
  {
    id: 'fs-3',
    name: 'Naterra - Forest School',
    slug: 'naterra-forest-school',
    category: 'forest-school',
    city: 'Ericeira',
    citySlug: 'ericeira',
    country: 'Portugal',
    description: 'Set in the Mafra countryside near Ericeira, Naterra offers a pure forest school experience surrounded by Atlantic woodlands. Children learn through direct interaction with nature — tracking animals, building shelters, growing food, and exploring streams. A favorite among the Ericeira surf-and-nature family community.',
    shortDescription: 'Pure forest school in the Mafra countryside near Ericeira.',
    ageRange: { min: 3, max: 10 },
    pedagogy: ['Forest School', 'Nature-Based', 'Child-Led'],
    languages: ['Portuguese', 'English'],
    priceRange: '€300-450/month',
    rating: 4.9,
    reviewCount: 28,
    coordinates: { lat: 38.9400, lng: -9.3300 },
    address: 'Mafra, Portugal',
    googleMapsUrl: 'https://maps.google.com/?q=Naterra+Forest+School+Mafra',
    googlePlaceId: 'ChIJ2cqzYwspHw0RZaXhkOLrxF0',
    images: [
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
      'https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?w=800',
    tags: ['Forest School', 'Nature', 'Countryside', 'Ericeira Area'],
    highlights: ['Atlantic woodland setting', 'Shelter building & foraging', 'Small intimate groups', 'Near Ericeira surf town'],
    schedule: 'Mon-Fri 9:00-15:00',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 8,
  },
  {
    id: 'fs-4',
    name: 'Bosque da Alegria - Escola da Floresta',
    slug: 'bosque-da-alegria',
    category: 'forest-school',
    city: 'Ericeira',
    citySlug: 'ericeira',
    country: 'Portugal',
    description: 'Bosque da Alegria ("Forest of Joy") is a beloved forest school in the Mafra area near Ericeira. The school offers immersive nature education in a beautiful woodland setting, with a focus on free play, sensory exploration, and emotional development. Children learn to care for animals, grow vegetables, and navigate the natural world with confidence.',
    shortDescription: 'Joyful forest school in Mafra woodlands with animal care and sensory play.',
    ageRange: { min: 2, max: 8 },
    pedagogy: ['Forest School', 'Sensory Learning', 'Free Play'],
    languages: ['Portuguese'],
    priceRange: '€250-400/month',
    rating: 4.8,
    reviewCount: 32,
    coordinates: { lat: 38.9350, lng: -9.3200 },
    address: 'Mafra, Portugal',
    googleMapsUrl: 'https://maps.google.com/?q=Bosque+da+Alegria+Mafra',
    googlePlaceId: 'ChIJ7UZ3_O3XHg0RVw2C_eoYh3w',
    images: [
      'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800',
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800',
    tags: ['Forest School', 'Toddler Friendly', 'Animal Care', 'Free Play'],
    highlights: ['From age 2', 'Animal care program', 'Vegetable garden', 'Sensory exploration', 'Woodland setting'],
    schedule: 'Mon-Fri 9:00-14:00',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 9,
  },

  // =============================================
  // BATCH 1: MONTESSORI / WALDORF / ALT SCHOOLS
  // =============================================
  {
    id: 'alt-1',
    name: 'Montessori Bright Academy',
    slug: 'montessori-bright-academy',
    category: 'alternative-school',
    subcategory: 'Montessori',
    city: 'Lisbon',
    citySlug: 'lisbon',
    country: 'Portugal',
    description: 'Montessori Bright Academy offers authentic Montessori education in Lisbon with certified AMI guides. Mixed-age classrooms allow children to learn at their own pace through hands-on materials and self-directed exploration. The school serves a diverse international community and offers flexible enrollment for traveling families.',
    shortDescription: 'AMI-certified Montessori school in Lisbon with mixed-age classrooms.',
    ageRange: { min: 3, max: 12 },
    pedagogy: ['Montessori', 'AMI Certified', 'Self-Directed'],
    languages: ['English', 'Portuguese'],
    priceRange: '€500-800/month',
    rating: 4.8,
    reviewCount: 65,
    coordinates: { lat: 38.7250, lng: -9.1500 },
    address: 'Lisbon, Portugal',
    googleMapsUrl: 'https://maps.google.com/?q=Montessori+Bright+Academy+Lisbon',
    googlePlaceId: 'ChIJJaXrf9AzGQ0Rz0zrVVuTIM8',
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
    tags: ['Montessori', 'AMI Certified', 'International', 'Flexible Enrollment'],
    highlights: ['AMI certified guides', 'Mixed-age classrooms', 'International community', 'Hands-on Montessori materials'],
    schedule: 'Mon-Fri 8:30-16:00',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 18,
  },
  {
    id: 'alt-2',
    name: 'Lisbon Montessori School (Cascais Campus)',
    slug: 'lisbon-montessori-cascais',
    category: 'alternative-school',
    subcategory: 'Montessori',
    city: 'Cascais',
    citySlug: 'cascais',
    country: 'Portugal',
    description: 'The Cascais campus of the Lisbon Montessori School brings authentic Montessori education to the coast. Located in a beautiful setting near the sea, the school combines indoor prepared environments with outdoor nature spaces. Popular with international families in the Cascais-Estoril corridor.',
    shortDescription: 'Coastal Montessori campus bringing authentic education to Cascais.',
    ageRange: { min: 3, max: 12 },
    pedagogy: ['Montessori', 'Bilingual', 'Nature-Enhanced'],
    languages: ['English', 'Portuguese'],
    priceRange: '€600-900/month',
    rating: 4.7,
    reviewCount: 48,
    coordinates: { lat: 38.7000, lng: -9.4200 },
    address: 'Cascais, Portugal',
    googleMapsUrl: 'https://maps.google.com/?q=Lisbon+Montessori+School+Cascais',
    googlePlaceId: 'ChIJQWE9u8nFHg0RC5oyxGfyHuI',
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    tags: ['Montessori', 'Coastal', 'Bilingual', 'International'],
    highlights: ['Near the sea', 'Outdoor nature spaces', 'International community', 'Cascais-Estoril location'],
    schedule: 'Mon-Fri 8:30-16:00',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 15,
  },
  {
    id: 'alt-3',
    name: 'Kairos Montessori',
    slug: 'kairos-montessori',
    category: 'alternative-school',
    subcategory: 'Montessori',
    city: 'Cascais',
    citySlug: 'cascais',
    country: 'Portugal',
    description: 'Kairos Montessori in Cascais offers a thoughtfully prepared Montessori environment for young children. The school emphasizes the whole child — intellectual, emotional, social, and physical development — through authentic Montessori methodology. Small class sizes ensure individualized attention.',
    shortDescription: 'Thoughtful Montessori education in Cascais with small class sizes.',
    ageRange: { min: 2, max: 6 },
    pedagogy: ['Montessori', 'Whole-Child', 'Individualized'],
    languages: ['Portuguese', 'English'],
    priceRange: '€450-700/month',
    rating: 4.9,
    reviewCount: 35,
    coordinates: { lat: 38.6950, lng: -9.4100 },
    address: 'Cascais, Portugal',
    googleMapsUrl: 'https://maps.google.com/?q=Kairos+Montessori+Cascais',
    googlePlaceId: 'ChIJERI5ff_DHg0RjStFCPvOYXs',
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    tags: ['Montessori', 'Small Groups', 'Toddler Program'],
    highlights: ['From age 2', 'Small class sizes', 'Whole-child development', 'Authentic Montessori materials'],
    schedule: 'Mon-Fri 8:30-15:30',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 11,
  },
  {
    id: 'alt-4',
    name: 'Alora Montessori',
    slug: 'alora-montessori',
    category: 'alternative-school',
    subcategory: 'Montessori',
    city: 'Cascais',
    citySlug: 'cascais',
    country: 'Portugal',
    description: 'Alora Montessori, located in the Estoril-Cascais area, offers a warm and nurturing Montessori environment. The school focuses on independence, concentration, and joy of learning. With a bilingual approach and strong outdoor program, Alora is popular with expat families in the Cascais corridor.',
    shortDescription: 'Warm bilingual Montessori in Estoril with a strong outdoor program.',
    ageRange: { min: 3, max: 9 },
    pedagogy: ['Montessori', 'Bilingual', 'Outdoor-Enhanced'],
    languages: ['English', 'Portuguese'],
    priceRange: '€500-750/month',
    rating: 4.7,
    reviewCount: 29,
    coordinates: { lat: 38.7050, lng: -9.3980 },
    address: 'Estoril, Cascais, Portugal',
    googleMapsUrl: 'https://maps.google.com/?q=Alora+Montessori+Estoril',
    googlePlaceId: 'ChIJm-yOZ7jFHg0RFNRggbepkpQ',
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
    tags: ['Montessori', 'Bilingual', 'Estoril', 'Expat-Friendly'],
    highlights: ['Estoril location', 'Bilingual English-Portuguese', 'Strong outdoor program', 'Expat family community'],
    schedule: 'Mon-Fri 8:30-15:30',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 13,
  },
  {
    id: 'alt-5',
    name: 'Oficina Montessori',
    slug: 'oficina-montessori-porto',
    category: 'alternative-school',
    subcategory: 'Montessori',
    city: 'Porto',
    citySlug: 'porto',
    country: 'Portugal',
    description: 'Oficina Montessori is Porto\'s leading Montessori school, offering a beautifully prepared environment in the heart of the city. The school follows authentic Montessori methodology with certified guides and high-quality materials. A growing international community makes it welcoming for expat families.',
    shortDescription: 'Porto\'s leading Montessori school with certified guides and prepared environments.',
    ageRange: { min: 3, max: 12 },
    pedagogy: ['Montessori', 'AMI Certified', 'Self-Directed'],
    languages: ['Portuguese', 'English'],
    priceRange: '€400-650/month',
    rating: 4.8,
    reviewCount: 42,
    coordinates: { lat: 41.1520, lng: -8.6200 },
    address: 'Porto, Portugal',
    googleMapsUrl: 'https://maps.google.com/?q=Oficina+Montessori+Porto',
    googlePlaceId: 'ChIJyUx4lYRlJA0R3i95Rj_qcNw',
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    tags: ['Montessori', 'Porto', 'AMI Certified'],
    highlights: ['AMI certified', 'Prepared environments', 'International community', 'Central Porto location'],
    schedule: 'Mon-Fri 8:30-16:00',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 10,
  },
  {
    id: 'alt-6',
    name: 'Escola Montessori do Porto',
    slug: 'escola-montessori-do-porto',
    category: 'alternative-school',
    subcategory: 'Montessori',
    city: 'Porto',
    citySlug: 'porto',
    country: 'Portugal',
    description: 'Escola Montessori do Porto provides an authentic Montessori education in Porto. The school offers mixed-age classrooms, hands-on materials, and a focus on developing each child\'s natural potential. With a warm, family-like atmosphere, it\'s a welcoming choice for both local and international families.',
    shortDescription: 'Authentic Montessori education with a warm, family atmosphere in Porto.',
    ageRange: { min: 3, max: 10 },
    pedagogy: ['Montessori', 'Mixed-Age', 'Hands-On'],
    languages: ['Portuguese', 'English'],
    priceRange: '€350-600/month',
    rating: 4.7,
    reviewCount: 36,
    coordinates: { lat: 41.1550, lng: -8.6250 },
    address: 'Porto, Portugal',
    googleMapsUrl: 'https://maps.google.com/?q=Escola+Montessori+Porto',
    googlePlaceId: 'ChIJD5x3yWdlJA0RrHRV_KssUPY',
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
    tags: ['Montessori', 'Porto', 'Family Atmosphere'],
    highlights: ['Mixed-age classrooms', 'Hands-on materials', 'Family-like atmosphere', 'Welcoming to newcomers'],
    schedule: 'Mon-Fri 8:30-15:30',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 8,
  },

  // =============================================
  // BATCH 1: INTERNATIONAL SCHOOLS
  // =============================================
  {
    id: 'alt-7',
    name: 'United Lisbon International School',
    slug: 'united-lisbon-international',
    category: 'alternative-school',
    subcategory: 'International School',
    city: 'Lisbon',
    citySlug: 'lisbon',
    country: 'Portugal',
    description: 'United Lisbon is a modern international school offering the IB curriculum in the heart of Lisbon. The school combines academic rigor with innovative project-based learning, creative arts, and a strong emphasis on global citizenship. A top choice for internationally mobile families seeking continuity in education.',
    shortDescription: 'Modern IB international school in central Lisbon.',
    ageRange: { min: 3, max: 18 },
    pedagogy: ['IB Curriculum', 'Project-Based', 'Global Citizenship'],
    languages: ['English', 'Portuguese'],
    priceRange: '€8,000-15,000/year',
    rating: 4.6,
    reviewCount: 120,
    coordinates: { lat: 38.7200, lng: -9.1400 },
    address: 'Lisbon, Portugal',
    googleMapsUrl: 'https://maps.google.com/?q=United+Lisbon+International+School',
    googlePlaceId: 'ChIJV-xPOgIzGQ0Rc0wUPBJCsbo',
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    tags: ['International', 'IB Curriculum', 'Central Lisbon'],
    highlights: ['IB curriculum', 'Central Lisbon location', 'Project-based learning', 'Global citizenship focus', 'Ages 3-18'],
    schedule: 'Mon-Fri 8:00-16:00',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 22,
  },
  {
    id: 'alt-8',
    name: 'The Lisboan International School',
    slug: 'lisboan-international-school',
    category: 'alternative-school',
    subcategory: 'International School',
    city: 'Lisbon',
    citySlug: 'lisbon',
    country: 'Portugal',
    description: 'The Lisboan International School offers a personalized, English-language education in Lisbon. With small class sizes and a creative curriculum, the school focuses on nurturing each student\'s individual strengths. The community is diverse and welcoming, making it a great fit for families new to Lisbon.',
    shortDescription: 'Personalized English-language international school with small class sizes.',
    ageRange: { min: 3, max: 15 },
    pedagogy: ['International Curriculum', 'Personalized Learning'],
    languages: ['English', 'Portuguese'],
    priceRange: '€6,000-12,000/year',
    rating: 4.7,
    reviewCount: 85,
    coordinates: { lat: 38.7180, lng: -9.1450 },
    address: 'Lisbon, Portugal',
    googleMapsUrl: 'https://maps.google.com/?q=The+Lisboan+International+School',
    googlePlaceId: 'ChIJg0p04i81GQ0RWfBqiLVbOio',
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    tags: ['International', 'English Language', 'Small Classes', 'Personalized'],
    highlights: ['Small class sizes', 'English-language instruction', 'Creative curriculum', 'Diverse community'],
    schedule: 'Mon-Fri 8:30-15:30',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 17,
  },
  {
    id: 'alt-9',
    name: "King's College School Cascais",
    slug: 'kings-college-cascais',
    category: 'alternative-school',
    subcategory: 'International School',
    city: 'Cascais',
    citySlug: 'cascais',
    country: 'Portugal',
    description: 'King\'s College School Cascais is part of the prestigious King\'s Group international schools network. Offering the British curriculum from Early Years through secondary, the school provides a rigorous academic environment with strong pastoral care. Excellent facilities include sports fields, science labs, and performing arts spaces.',
    shortDescription: 'Prestigious British curriculum school in Cascais with excellent facilities.',
    ageRange: { min: 3, max: 18 },
    pedagogy: ['British Curriculum', 'Academic', 'Pastoral Care'],
    languages: ['English', 'Portuguese'],
    priceRange: '€10,000-18,000/year',
    rating: 4.5,
    reviewCount: 95,
    coordinates: { lat: 38.7020, lng: -9.4180 },
    address: 'Cascais, Portugal',
    googleMapsUrl: 'https://maps.google.com/?q=Kings+College+Cascais',
    googlePlaceId: 'ChIJvTSuhOjFHg0R-KmRtNz1dRA',
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
    tags: ['British Curriculum', 'International', 'Premium', 'Full Facilities'],
    highlights: ['British curriculum', 'King\'s Group network', 'Sports fields & labs', 'Performing arts', 'Ages 3-18'],
    schedule: 'Mon-Fri 8:00-16:00',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 20,
  },
  {
    id: 'alt-10',
    name: 'IPS Cascais British International School',
    slug: 'ips-cascais-british-international',
    category: 'alternative-school',
    subcategory: 'International School',
    city: 'Cascais',
    citySlug: 'cascais',
    country: 'Portugal',
    description: 'IPS Cascais offers the British international curriculum in a welcoming, family-oriented environment. The school combines academic excellence with a strong emphasis on character development and community values. Small enough to know every student by name, large enough to offer a full range of subjects and activities.',
    shortDescription: 'Family-oriented British international school in Cascais.',
    ageRange: { min: 3, max: 16 },
    pedagogy: ['British Curriculum', 'Character Development'],
    languages: ['English', 'Portuguese'],
    priceRange: '€8,000-14,000/year',
    rating: 4.6,
    reviewCount: 72,
    coordinates: { lat: 38.7050, lng: -9.4150 },
    address: 'Cascais, Portugal',
    googleMapsUrl: 'https://maps.google.com/?q=IPS+Cascais+British+International+School',
    googlePlaceId: 'ChIJSZUDcM_IHg0RalXGlDacbG4',
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    tags: ['British Curriculum', 'Family-Oriented', 'Character Development'],
    highlights: ['British curriculum', 'Small school community', 'Character development focus', 'Family-oriented culture'],
    schedule: 'Mon-Fri 8:30-15:30',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 16,
  },
];

export const familySignals: FamilySignal[] = [
  { id: 'f1', familyName: 'The Andersens', avatar: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=200', kidsAges: [5, 8], currentCity: 'Lisbon', arrivingDate: '2026-02-15', interests: ['Forest School', 'Surfing', 'Art'], message: 'Just arrived in Lisbon! Looking for forest school options and surf classes for the kids. Here until May.' },
  { id: 'f2', familyName: 'The Martins', avatar: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200', kidsAges: [7], currentCity: 'Ericeira', interests: ['Surfing', 'Nature', 'Music'], message: 'Based in Ericeira for the year. Our son is in a forest school and loving it. Happy to show new families around!' },
  { id: 'f3', familyName: 'The Nakamura-Silvas', avatar: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=200', kidsAges: [4, 9, 12], currentCity: 'Cascais', arrivingDate: '2026-03-01', interests: ['Montessori', 'Beach', 'Languages'], message: 'Moving to Cascais from Tokyo. Three kids, looking for international Montessori and bilingual pod options.' },
  { id: 'f4', familyName: 'The Brennans', avatar: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=200', kidsAges: [6, 10], currentCity: 'Sintra', interests: ['Waldorf', 'Nature', 'Arts'], message: 'Sintra for the winter. Kids in Waldorf school and thriving. The forest here is magic.' },
  { id: 'f5', familyName: 'The Oliveiras', avatar: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=200', kidsAges: [3, 7], currentCity: 'Lisbon', departingDate: '2026-04-30', interests: ['Democratic School', 'Maker Space', 'Community'], message: 'In Lisbon until end of April. Running a weekly coding club for homeschool kids — DM if interested!' },
  { id: 'f6', familyName: 'The van der Bergs', avatar: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200', kidsAges: [8, 11], currentCity: 'Ericeira', arrivingDate: '2026-03-10', interests: ['Surfing', 'Unschooling', 'Music'], message: 'Arriving Ericeira mid-March! Kids are unschooled surfers. Looking for the community and ocean-focused activities.' },
  { id: 'f7', familyName: 'The Ferreira-Lopes', avatar: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200', kidsAges: [5, 9], currentCity: 'Porto', arrivingDate: '2026-03-20', interests: ['Montessori', 'Capoeira', 'Surf'], message: 'Relocating to Porto from São Paulo. Looking for Montessori and capoeira for the kids!' },
];

// Helper functions
export function getListingsByCity(citySlug: string): Listing[] {
  return listings.filter(l => l.citySlug === citySlug);
}

export function getListingsByCategory(category: ListingCategory): Listing[] {
  return listings.filter(l => l.category === category);
}

export function getListingByCityAndCategory(citySlug: string, category: ListingCategory): Listing[] {
  return listings.filter(l => l.citySlug === citySlug && l.category === category);
}

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find(l => l.slug === slug);
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export function getFamilySignalsByCity(city: string): FamilySignal[] {
  return familySignals.filter(f => f.currentCity === city);
}

export function getCategoriesForCity(citySlug: string): ListingCategory[] {
  const cityListings = getListingsByCity(citySlug);
  return [...new Set(cityListings.map(l => l.category))];
}
