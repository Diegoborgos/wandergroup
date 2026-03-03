export type ListingCategory =
  | 'forest-school'
  | 'alternative-school'
  | 'microschool'
  | 'pod'
  | 'retreat'
  | 'experience'
  | 'community'
  | 'coworking'
  | 'outdoor-activity';

export interface Listing {
  id: string;
  name: string;
  slug: string;
  category: ListingCategory;
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
  'forest-school': { label: 'Forest Schools', icon: '🌲', description: 'Nature-based outdoor learning' },
  'alternative-school': { label: 'Alternative Schools', icon: '🏫', description: 'Montessori, Waldorf, Democratic & more' },
  'microschool': { label: 'Microschools', icon: '👩‍🏫', description: 'Small-group learning environments' },
  'pod': { label: 'Learning Pods', icon: '🫧', description: 'Parent-organized learning groups' },
  'retreat': { label: 'Family Retreats', icon: '🏕️', description: 'Immersive family learning experiences' },
  'experience': { label: 'Experiences', icon: '🎨', description: 'Workshops, classes & activities for kids' },
  'community': { label: 'Communities', icon: '👨‍👩‍👧‍👦', description: 'Local family networks & groups' },
  'coworking': { label: 'Family Coworking', icon: '💻', description: 'Work while kids learn & play nearby' },
  'outdoor-activity': { label: 'Outdoor Activities', icon: '🏄', description: 'Surf, hike, climb — learn by doing' },
};

export const cities: City[] = [
  {
    name: 'Lisbon',
    slug: 'lisbon',
    country: 'Portugal',
    description: 'Lisbon has become the European capital for digital nomad families. With its warm climate, affordable living, and a thriving alternative education scene, it offers everything from Montessori schools to worldschooling hubs. The D7 and Digital Nomad visas make it easy to settle, and the city\'s mix of culture, coast, and community is hard to beat.',
    shortDescription: 'Europe\'s digital nomad capital with a thriving alternative education scene.',
    coverImage: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200',
    coordinates: { lat: 38.7223, lng: -9.1393 },
    listingCount: 6,
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
    listingCount: 4,
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
    listingCount: 3,
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
    listingCount: 2,
    familiesHere: 31,
    costOfLiving: '€2,800-4,200/mo',
    internetSpeed: '100+ Mbps',
    safety: 'Very Safe',
    climate: 'Mediterranean coastal',
    nomadScore: 8.5,
    highlights: ['International school hub', 'Beach lifestyle', 'Bilingual community', 'Premium family living', '30min to Lisbon'],
  },
];

export const listings: Listing[] = [
  // === LISBON ===
  {
    id: 'lis-1',
    name: 'SandCastle',
    slug: 'sandcastle-lisbon',
    category: 'coworking',
    city: 'Lisbon',
    citySlug: 'lisbon',
    country: 'Portugal',
    description: 'A unique hybrid space in central Lisbon combining an indoor playground, family cafe, and coworking area. Parents work with strong Wi-Fi, good coffee, and live cameras showing the playroom. The playground features a sensory sandbox, role-play corners, and soft climbing zones — no trampolines, eco-friendly toys only. Bilingual nanny supervision in Portuguese and English. Drop-off care available for ages 4+. No reservation needed. Three-minute walk from Gulbenkian Park.',
    shortDescription: 'Indoor playground with nanny, family cafe & coworking — work while kids play next door.',
    ageRange: { min: 0, max: 8 },
    pedagogy: ['Creative Play', 'Sensory Learning'],
    languages: ['Portuguese', 'English'],
    priceRange: '€12/hr playground · €15-20/day coworking',
    priceNote: 'Full-day care (4+): €50/day. 10hr bundle: €90. Second child 50% off.',
    rating: 4.6,
    reviewCount: 48,
    coordinates: { lat: 38.7330, lng: -9.1500 },
    address: 'Av. Miguel Bombarda 72, 1050-162 Lisboa',
    googleMapsUrl: 'https://maps.google.com/?q=SandCastle+Av+Miguel+Bombarda+72+Lisboa',
    googlePlaceId: 'ChIJSandCastleLisboa',
    website: 'https://sandcastle.pt/',
    images: [
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800',
    tags: ['Coworking', 'Playground', 'Drop-in', 'Central Lisbon'],
    highlights: ['Live cameras to watch kids while you work', 'Bilingual nanny supervision', 'Drop-off care for ages 4+', 'Eco-friendly toys, no trampolines', '3 min from Gulbenkian Park', 'No reservation needed'],
    schedule: 'Daily, check website for hours',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 19,
  },
  {
    id: 'lis-2',
    name: 'MILL — Makers In Little Lisbon',
    slug: 'mill-makers-lisbon',
    category: 'experience',
    city: 'Lisbon',
    citySlug: 'lisbon',
    country: 'Portugal',
    description: 'Lisbon\'s collaborative maker space dedicated to digital fabrication, creative technology, and STEAM education. Equipped with 3D printers, CNC machines, laser cutters, electronics assembly tools, and textile fabrication. Offers workshops in physical computing, programming, design, 3D printing, educational robotics, and creative electronics. Works with schools to create maker education content and youth makerspaces. Also hosts artistic residencies, hackdays, talks, and debates.',
    shortDescription: 'Maker space with 3D printers, laser cutters & STEAM workshops for young builders.',
    ageRange: { min: 6, max: 16 },
    pedagogy: ['STEAM', 'Maker Education', 'Project-Based'],
    languages: ['Portuguese', 'English'],
    priceRange: 'Contact for pricing',
    rating: 4.5,
    reviewCount: 32,
    coordinates: { lat: 38.7200, lng: -9.1450 },
    address: 'Calçada do Moinho de Vento, 14B, 1150-236 Lisboa',
    googleMapsUrl: 'https://maps.google.com/?q=MILL+Makers+In+Little+Lisbon',
    googlePlaceId: 'ChIJMILLMakersLisboa',
    phone: '+351 210 014 072',
    website: 'https://mill.pt/',
    email: 'info@mill.pt',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800',
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    tags: ['Maker Space', 'STEAM', '3D Printing', 'Robotics'],
    highlights: ['3D printers, CNC, laser cutters on-site', 'Educational robotics workshops', 'Creative electronics for kids', 'Works with schools on maker curriculum', 'Artistic residencies & hackdays'],
    verified: true,
    claimedByOperator: false,
    familiesInterested: 14,
  },
  {
    id: 'lis-3',
    name: 'FabLab Lisboa',
    slug: 'fablab-lisboa',
    category: 'experience',
    city: 'Lisbon',
    citySlug: 'lisbon',
    country: 'Portugal',
    description: 'A municipal digital fabrication lab open to all citizens, created in 2013. Equipped with laser cutters, CNC milling machines, 3D printers (FDM and SLA), vinyl cutters, 3D scanners, and vacuum thermoforming. Open to the public every Monday and Tuesday from 10:00 to 18:00, free of cost, for prototyping and experimentation. Regularly organizes workshops for adults and children to promote creativity and maker skills. Over 3,000 prototypes supported and 900+ events and workshops held.',
    shortDescription: 'Free municipal fab lab — laser cutters, 3D printers & maker workshops for all ages.',
    ageRange: { min: 6, max: 18 },
    pedagogy: ['Maker Education', 'STEAM', 'Hands-On'],
    languages: ['Portuguese', 'English'],
    priceRange: 'Free public access Mon & Tue',
    priceNote: 'Workshop fees vary',
    rating: 4.4,
    reviewCount: 67,
    coordinates: { lat: 38.7260, lng: -9.1350 },
    address: 'Rua Maria da Fonte, Mercado do Forno do Tijolo, 1170-221 Lisboa',
    googleMapsUrl: 'https://maps.google.com/?q=FabLab+Lisboa+Rua+Maria+da+Fonte',
    googlePlaceId: 'ChIJFabLabLisboa',
    phone: '+351 211 941 467',
    website: 'http://www.fablablisboa.pt',
    email: 'fablab.info@cm-lisboa.pt',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800',
    tags: ['Free', 'Fab Lab', '3D Printing', 'Municipal'],
    highlights: ['Free public access Mon & Tue', '3,000+ prototypes supported', '900+ workshops held', 'Laser cutters, CNC, 3D printers', 'Kids & adult workshops', 'Municipal / city-run'],
    schedule: 'Mon & Tue 10:00-18:00 (free public access)',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 11,
  },
  {
    id: 'lis-4',
    name: 'ArtZone Global',
    slug: 'artzone-global-lisbon',
    category: 'experience',
    city: 'Lisbon',
    citySlug: 'lisbon',
    country: 'Portugal',
    description: 'International family art studio in Lisbon\'s Alvalade neighborhood, opened in 2020. Offers offline and online art classes, courses, workshops, an art gallery, art tours, and children\'s art parties. Workshop types include drawing, painting, pottery, tile painting, collage, pop art, crochet, and more. All materials and a glass of wine for adults included. Also offers outdoor workshops in Lisbon\'s parks.',
    shortDescription: 'Family art studio — pottery, painting, tile workshops for kids 6+ and adults.',
    ageRange: { min: 6, max: 18 },
    pedagogy: ['Arts-Based', 'Creative Expression', 'Hands-On'],
    languages: ['English', 'Portuguese'],
    priceRange: '€24-50/person',
    priceNote: '10% off when bringing a friend. Visit 3 workshops, 4th is free.',
    rating: 4.6,
    reviewCount: 85,
    coordinates: { lat: 38.7530, lng: -9.1400 },
    address: 'R. Reinaldo Ferreira 18B, 1700-323 Lisboa (Alvalade)',
    googleMapsUrl: 'https://maps.google.com/?q=ArtZone+Global+Lisboa',
    googlePlaceId: 'ChIJArtZoneGlobalLisboa',
    phone: '+351 91 303 72 33',
    website: 'https://artzone-global.com/',
    email: 'hello.artzone@gmail.com',
    images: [
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800',
      'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=800',
      'https://images.unsplash.com/photo-1604881991720-f91add269bed?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800',
    tags: ['Art Workshops', 'Pottery', 'Tile Painting', 'Family'],
    highlights: ['All materials included', 'Pottery, painting, tile workshops', 'Kids from age 6, adults too', 'Outdoor park workshops available', 'Art parties for birthdays', 'Wine included for adults'],
    verified: true,
    claimedByOperator: false,
    familiesInterested: 16,
  },
  {
    id: 'lis-5',
    name: 'Little Lisbon — Lisbon for Kids',
    slug: 'little-lisbon-for-kids',
    category: 'experience',
    city: 'Lisbon',
    citySlug: 'lisbon',
    country: 'Portugal',
    description: 'Specialist in cultural and creative tourist experiences for families in Lisbon. Offers private themed walking tours with scavenger hunts and challenges, hands-on workshops including tile painting, mosaic sardine decorating, graffiti with street artists, and cooking classes, guided museum visits, electric vehicle tours, and horse carriage tours. Activities developed with partner institution educational departments. Recommended by Visit Lisboa and Visit Portugal.',
    shortDescription: 'Family walking tours, tile painting & cooking classes — recommended by Visit Lisboa.',
    ageRange: { min: 6, max: 12 },
    pedagogy: ['Experiential', 'Cultural Immersion', 'Hands-On'],
    languages: ['English', 'Portuguese', 'French', 'Spanish'],
    priceRange: '€50-200/family',
    priceNote: 'Tile workshop €200/family (private) or €50/person (open). €25 booking fee.',
    rating: 4.8,
    reviewCount: 124,
    coordinates: { lat: 38.7139, lng: -9.1394 },
    address: 'Various locations across Lisbon (meeting points provided at booking)',
    googleMapsUrl: 'https://maps.google.com/?q=Little+Lisbon+for+Kids',
    googlePlaceId: 'ChIJLittleLisbonKids',
    website: 'https://www.lisbonforkids.com/',
    images: [
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800',
      'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800',
    tags: ['Walking Tours', 'Tile Painting', 'Cooking Class', 'Cultural'],
    highlights: ['Recommended by Visit Lisboa & Visit Portugal', 'Private family walking tours with scavenger hunts', 'Tile painting & mosaic workshops', 'Cooking classes for families', 'Graffiti workshops with street artists', 'Activities in 4 languages'],
    verified: true,
    claimedByOperator: false,
    familiesInterested: 22,
  },
  {
    id: 'lis-6',
    name: 'BORK You — Kayak & Outdoor Tours',
    slug: 'bork-you-kayak-oeiras',
    category: 'outdoor-activity',
    city: 'Lisbon',
    citySlug: 'lisbon',
    country: 'Portugal',
    description: 'Adventure operator specializing in nautical and nature travel, based at Oeiras Marina near Lisbon. "Oeiras by Kayak" is the most popular tour — paddle from Oeiras Marina along the Lisbon coast, see sea fortresses, and stop at beaches. Morning and afternoon tours available. No experience needed. Also offers stand-up paddleboarding, surfing, diving, and combined kayak + wine tasting tours. Family-friendly tandem kayaks fit 2 adults + 2 kids. ACA-certified kayak touring courses available.',
    shortDescription: 'Family kayak tours along the Lisbon coast — tandem kayaks for 2 adults + 2 kids.',
    ageRange: { min: 5, max: 18 },
    pedagogy: ['Experiential', 'Nature-Based', 'Outdoor Adventure'],
    languages: ['Portuguese', 'English'],
    priceRange: 'Contact for pricing',
    priceNote: 'Free cancellation up to 24 hours in advance.',
    rating: 4.7,
    reviewCount: 189,
    coordinates: { lat: 38.6830, lng: -9.3170 },
    address: 'BORK Store, Oeiras Marina (behind restaurants, left of ATM), Oeiras',
    googleMapsUrl: 'https://maps.google.com/?q=BORK+You+Oeiras+Marina',
    googlePlaceId: 'ChIJBORKYouOeiras',
    phone: '+351 919 506 136',
    website: 'https://www.borkyou.com/',
    email: 'bork@borkyou.com',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      'https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
    tags: ['Kayaking', 'SUP', 'Family Tours', 'Oeiras Marina'],
    highlights: ['Tandem kayaks for families (2 adults + 2 kids)', 'No experience needed', 'ACA-certified instructors', 'Coast tours past sea fortresses', 'Kayak + wine tasting combo available', 'Free cancellation 24h in advance'],
    schedule: 'Tours at 10:00 & 14:30 daily',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 25,
  },

  // === ERICEIRA ===
  {
    id: 'eri-1',
    name: 'Surf Riders & Co Ericeira',
    slug: 'surf-riders-co-ericeira',
    category: 'outdoor-activity',
    city: 'Ericeira',
    citySlug: 'ericeira',
    country: 'Portugal',
    description: 'Founded in 2016, one of the longest-running surf schools in Ericeira. Specializes in kids with a 1:1 instructor-to-student method. 1.5-hour classes designed so kids don\'t get tired. Operates year-round with school holiday programs. All equipment provided including wetsuit, surfboard, transport, and insurance. Uses beaches including Matadouro, Ribeira de Ilhas, Foz do Lizandro, and Fisherman\'s Beach. Head coach Sami has been teaching kids since 2008. Groups split by age: 5-8, 8-11, 11-14, 14-17.',
    shortDescription: '1:1 kids surf coaching since 2016 — age-grouped classes at World Surfing Reserve beaches.',
    ageRange: { min: 5, max: 17 },
    pedagogy: ['Sport Education', 'Experiential', 'Outdoor'],
    languages: ['English', 'Portuguese'],
    priceRange: 'From €30/lesson',
    priceNote: 'Includes wetsuit, board, transport, insurance.',
    rating: 4.7,
    reviewCount: 76,
    coordinates: { lat: 38.9630, lng: -9.4180 },
    address: 'Av. São Sebastião 36a, 2655-483 Ericeira',
    googleMapsUrl: 'https://maps.google.com/?q=Surf+Riders+Co+Ericeira',
    googlePlaceId: 'ChIJSurfRidersEriceira',
    website: 'https://www.surfriders.pt/',
    images: [
      'https://images.unsplash.com/photo-1502680390548-bdbac40e4a9f?w=800',
      'https://images.unsplash.com/photo-1455729552457-5c322b79986c?w=800',
      'https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1502680390548-bdbac40e4a9f?w=800',
    tags: ['Surfing', 'Kids Specialist', 'Year-Round', 'All Equipment'],
    highlights: ['1:1 instructor-to-student method', 'Age-grouped classes (5-8, 8-11, 11-14, 14-17)', '1.5hr sessions so kids don\'t fatigue', 'All equipment & insurance included', 'Year-round with holiday programs', 'Head coach teaching kids since 2008'],
    verified: true,
    claimedByOperator: false,
    familiesInterested: 18,
  },
  {
    id: 'eri-2',
    name: 'Extra Surf School',
    slug: 'extra-surf-school-ericeira',
    category: 'outdoor-activity',
    city: 'Ericeira',
    citySlug: 'ericeira',
    country: 'Portugal',
    description: 'One of the oldest surf schools in Ericeira, operating since 2005. Founded by Vasco Dias, originally as a Rip Curl partnership. Prioritizes quality over quantity with small groups. Kids lessons emphasize safety and fun. Organizes lessons by level: Beginner, Beginner Plus, Intermediate, Advanced. Private lessons available. All equipment and insurance included.',
    shortDescription: 'Ericeira\'s original surf school since 2005 — small groups, safety-first kids lessons.',
    ageRange: { min: 5, max: 18 },
    pedagogy: ['Sport Education', 'Experiential', 'Progressive Levels'],
    languages: ['English', 'Portuguese'],
    priceRange: 'Contact for pricing',
    rating: 4.8,
    reviewCount: 196,
    coordinates: { lat: 38.9620, lng: -9.4190 },
    address: 'Praia de São Sebastião, 2655-270 Ericeira',
    googleMapsUrl: 'https://maps.google.com/?q=Extra+Surf+School+Ericeira',
    googlePlaceId: 'ChIJExtraSurfEriceira',
    phone: '+351 926 603 192',
    website: 'https://www.extrasurfschool.com/',
    images: [
      'https://images.unsplash.com/photo-1455729552457-5c322b79986c?w=800',
      'https://images.unsplash.com/photo-1502680390548-bdbac40e4a9f?w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1455729552457-5c322b79986c?w=800',
    tags: ['Surfing', 'Since 2005', 'Small Groups', 'All Levels'],
    highlights: ['Operating since 2005', 'Small group sizes', 'Lessons organized by level', 'Private lessons available', '196+ Google reviews', 'Equipment & insurance included'],
    verified: true,
    claimedByOperator: false,
    familiesInterested: 21,
  },
  {
    id: 'eri-3',
    name: 'Progress Surf School',
    slug: 'progress-surf-school-ericeira',
    category: 'outdoor-activity',
    city: 'Ericeira',
    citySlug: 'ericeira',
    country: 'Portugal',
    description: 'Founded by Joana Andrade, an internationally renowned big wave surfer — the first female-owned surf school in Portugal, established in 1998. Based in Ribamar, north of Ericeira, away from crowded beaches. Maximum 4 people per group. Weekly courses for kids 6-17 include confidence building, fitness, and surf skills. Also offers paddleboard experiences and surf guiding tours to reef breaks around Ericeira and Peniche.',
    shortDescription: 'First female-owned surf school in Portugal — max 4 per group, founded by big wave surfer.',
    ageRange: { min: 6, max: 17 },
    pedagogy: ['Sport Education', 'Confidence Building', 'Small Group'],
    languages: ['English', 'Portuguese'],
    priceRange: 'Contact for pricing',
    priceNote: '2-hour lessons with material and transport included.',
    rating: 4.7,
    reviewCount: 54,
    coordinates: { lat: 38.9900, lng: -9.4200 },
    address: 'R. das Amoreiras 15b, 2655 Carvoeira (Ribamar), north of Ericeira',
    googleMapsUrl: 'https://maps.google.com/?q=Progress+Surf+School+Ribamar',
    googlePlaceId: 'ChIJProgressSurfRibamar',
    website: 'https://www.progresssurfschool.com/',
    images: [
      'https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?w=800',
      'https://images.unsplash.com/photo-1502680390548-bdbac40e4a9f?w=800',
      'https://images.unsplash.com/photo-1455729552457-5c322b79986c?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?w=800',
    tags: ['Surfing', 'Female-Founded', 'Max 4/Group', 'Since 1998'],
    highlights: ['First female-owned surf school in Portugal', 'Max 4 people per group', 'Founded by big wave surfer Joana Andrade', 'Away from crowded beaches', 'Weekly kids courses (confidence + fitness + surf)', 'Paddleboard & surf guiding tours available'],
    verified: true,
    claimedByOperator: false,
    familiesInterested: 13,
  },
  {
    id: 'eri-4',
    name: 'Parque Aventura Cova da Baleia',
    slug: 'parque-aventura-cova-da-baleia',
    category: 'outdoor-activity',
    city: 'Ericeira',
    citySlug: 'ericeira',
    country: 'Portugal',
    description: '55,000 sqm outdoor adventure park near Ericeira (3 km from center). Activities include an 850-meter treetop climbing route, paintball, climbing wall, rappelling, pedal karts, mega slides, swimming pool, archery, canoeing, orienteering, treasure hunts, target shooting, and blowgun. Programs for schools, families, scouts, companies, and birthday parties. Summer holiday camps available. Rainy Day Guarantee — free return ticket if more than 1 hour continuous rain.',
    shortDescription: '55,000 sqm adventure park — treetop climbing, archery, pool & 10+ activities.',
    ageRange: { min: 6, max: 18 },
    pedagogy: ['Outdoor Adventure', 'Physical Challenge', 'Team Building'],
    languages: ['Portuguese', 'English'],
    priceRange: '€22-40/person',
    priceNote: 'Individual activities from €6-15. Rainy Day Guarantee included.',
    rating: 4.5,
    reviewCount: 142,
    coordinates: { lat: 38.9550, lng: -9.4100 },
    address: 'Estrada da Cabeça Alta, Fonte Boa dos Nabos, 2655-464 Ericeira',
    googleMapsUrl: 'https://maps.google.com/?q=Parque+Aventura+Cova+da+Baleia+Ericeira',
    googlePlaceId: 'ChIJCovaDaBaleiaEriceira',
    phone: '+351 969 008 368',
    website: 'https://covadabaleia.com/en/',
    email: 'info@covadabaleia.com',
    images: [
      'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800',
    tags: ['Adventure Park', 'Treetop Climbing', 'Archery', 'Summer Camp'],
    highlights: ['55,000 sqm park, 10+ activities', '850m treetop climbing route', 'Swimming pool & archery', 'Summer holiday camps', 'Birthday party packages', 'Rainy Day Guarantee (free return)'],
    schedule: 'Wed-Sun 10:00-19:00, Mon 17:00-19:00',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 27,
  },

  // === SINTRA ===
  {
    id: 'sin-1',
    name: 'Boundless Life Sintra',
    slug: 'boundless-life-sintra',
    category: 'microschool',
    city: 'Sintra',
    citySlug: 'sintra',
    country: 'Portugal',
    description: 'A venture-backed worldschooling coliving company for digital nomad families. Provides fully furnished housing, a Montessori/Finnish-inspired education center running 8:45am to 3:15pm five days a week, coworking space, and community activities — all within walking distance. Education is project-based, experiential, and nature-immersed, delivered in English. Sintra is a permanent location with UNESCO heritage, forests, palaces, and Atlantic coast nearby. Class ratios range from 1:4 (youngest) to 1:10 (oldest).',
    shortDescription: 'Worldschooling coliving — education, housing & coworking in UNESCO Sintra.',
    ageRange: { min: 1, max: 14 },
    pedagogy: ['Montessori', 'Finnish-Inspired', 'Project-Based', 'Experiential'],
    languages: ['English'],
    priceRange: '€5,000-7,000+/month',
    priceNote: 'Includes education + housing + coworking. €400 enrollment fee/child.',
    rating: 4.7,
    reviewCount: 89,
    coordinates: { lat: 38.7980, lng: -9.3880 },
    address: 'Sintra, Portugal (exact address provided upon enrollment)',
    googleMapsUrl: 'https://maps.google.com/?q=Boundless+Life+Sintra+Portugal',
    googlePlaceId: 'ChIJBoundlessLifeSintra',
    phone: '+351 967 986 830',
    website: 'https://www.boundless.life/sintra-portugal',
    images: [
      'https://images.unsplash.com/photo-1571260899304-425eee4c7b16?w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1571260899304-425eee4c7b16?w=800',
    tags: ['Coliving', 'Worldschooling', 'All-Inclusive', 'Digital Nomad'],
    highlights: ['Education + housing + coworking bundled', 'Montessori/Finnish-inspired curriculum', 'Class ratios from 1:4 to 1:10', 'UNESCO heritage surroundings', 'Community of global families', 'Permanent Sintra location'],
    schedule: 'Education center: Mon-Fri 8:45-15:15',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 38,
  },
  {
    id: 'sin-2',
    name: 'Hypha International School',
    slug: 'hypha-international-school',
    category: 'alternative-school',
    city: 'Sintra',
    citySlug: 'sintra',
    country: 'Portugal',
    description: 'An innovative, small international school blending evidence-informed academics with nature immersion. Approximately 20 students from 17 nationalities. Children spend an average of 3 hours per day outdoors. Pre-primary uses English curriculum with Reggio Emilia, Montessori, and Forest School influences. Primary uses Cambridge International curriculum with project-based learning. Set on 7,000 sqm of private gardens and wooded areas in the Sintra-Cascais Natural Park. Van transport from Cascais available.',
    shortDescription: '20-student international school — 3 hrs/day outdoors, Cambridge curriculum, 17 nationalities.',
    ageRange: { min: 3, max: 10 },
    pedagogy: ['Cambridge International', 'Reggio Emilia', 'Montessori', 'Forest School'],
    languages: ['English'],
    priceRange: '€10,495-12,000/year',
    priceNote: '€1,500 enrollment fee. Minimum 12-month enrollment.',
    rating: 4.8,
    reviewCount: 24,
    coordinates: { lat: 38.8000, lng: -9.4570 },
    address: 'Rua Dr. Sá Carneiro 80, Colares, Sintra',
    googleMapsUrl: 'https://maps.google.com/?q=Hypha+International+School+Colares+Sintra',
    googlePlaceId: 'ChIJHyphaSchoolSintra',
    website: 'https://hyphaportugal.com/',
    email: 'admissions@hyphaportugal.com',
    images: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    tags: ['International', 'Nature Immersion', 'Cambridge', 'Small School'],
    highlights: ['~20 students, 17 nationalities', '3 hours/day outdoors on average', 'Cambridge International curriculum', '7,000 sqm private gardens & woods', 'Reggio, Montessori & Forest School influences', 'Van transport from Cascais'],
    verified: true,
    claimedByOperator: false,
    familiesInterested: 16,
  },
  {
    id: 'sin-3',
    name: 'Retreat Oasis Portugal',
    slug: 'retreat-oasis-portugal',
    category: 'retreat',
    city: 'Sintra',
    citySlug: 'sintra',
    country: 'Portugal',
    description: 'Family retreat center on a 3,000 sqm plot surrounded by eucalyptus and palm trees in Colares, Sintra — 35 min from Lisbon with 3 beaches in walking distance. Family retreats (8 days/7 nights) in July and August include a 3-day surf course, workshops for parents (connection, fulfillment) and kids (discovering inner strength), nature activities, vitality breakfasts, dinners, and experiences like campfire bread-baking and pizza-making. Features an Adventure Garden with ZipLine, treehouse, slide, swings, climbing wall, and trampoline. Max 6 families per retreat. Founded by Julia and Florian in 2021.',
    shortDescription: '8-day family retreats with surf, workshops & adventure garden — max 6 families.',
    ageRange: { min: 3, max: 16 },
    pedagogy: ['Experiential', 'Nature-Based', 'Wellness'],
    languages: ['English', 'German', 'Portuguese'],
    priceRange: 'Contact for pricing',
    priceNote: '30% deposit required, 70% balance on arrival. 10% discount sharing double room.',
    rating: 4.7,
    reviewCount: 31,
    coordinates: { lat: 38.7980, lng: -9.4560 },
    address: 'Rua Doutor Fernando Andrea, 2705-332 Colares, Sintra',
    googleMapsUrl: 'https://maps.google.com/?q=Retreat+Oasis+Portugal+Colares+Sintra',
    googlePlaceId: 'ChIJRetreatOasisColares',
    phone: '+351 935 732 061',
    website: 'https://retreatoasisportugal.com/en/',
    email: 'welcome@retreatoasisportugal.com',
    images: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800',
      'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
    tags: ['Family Retreat', 'Surf Course', 'Adventure Garden', 'Max 6 Families'],
    highlights: ['Max 6 families per retreat', '3-day surf course included', 'Adventure Garden: ZipLine, treehouse, climbing wall', 'Parent & kids workshops', '3 beaches walking distance', 'Campfire bread-baking & pizza nights'],
    schedule: 'Family retreats in July & August (8 days/7 nights)',
    verified: true,
    claimedByOperator: false,
    familiesInterested: 14,
  },

  // === CASCAIS ===
  {
    id: 'cas-1',
    name: 'Moana Surf School',
    slug: 'moana-surf-school-cascais',
    category: 'outdoor-activity',
    city: 'Cascais',
    citySlug: 'cascais',
    country: 'Portugal',
    description: 'Operating since 2003 at Guincho Beach near Cascais. Lessons available in 6 languages: English, German, Portuguese, Spanish, French, and Russian. Parents can relax at the adjacent beach bar and restaurant while kids surf. July Summer School camps with lunch included. Adjacent facilities include showers, safe storage, sun loungers, wind protectors, and surf shop. Partners with Bar do Guincho for 15+ years.',
    shortDescription: 'Guincho Beach surf school since 2003 — lessons in 6 languages, 403 TripAdvisor reviews.',
    ageRange: { min: 5, max: 18 },
    pedagogy: ['Sport Education', 'Experiential', 'Multilingual'],
    languages: ['English', 'German', 'Portuguese', 'Spanish', 'French', 'Russian'],
    priceRange: '€22.50-35/lesson',
    priceNote: 'Group 5-pack €175. 10-pack €300. 20-pack €450. Private 5-pack €300. Equipment included.',
    rating: 4.7,
    reviewCount: 403,
    coordinates: { lat: 38.7270, lng: -9.4740 },
    address: 'Estrada do Abano, Praia do Guincho, Cascais 2755-144',
    googleMapsUrl: 'https://maps.google.com/?q=Moana+Surf+School+Guincho+Cascais',
    googlePlaceId: 'ChIJMoanaSurfGuincho',
    phone: '+351 964 449 436',
    website: 'https://moanasurfschool.com/',
    email: 'info@moanasurfschool.com',
    images: [
      'https://images.unsplash.com/photo-1502680390548-bdbac40e4a9f?w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      'https://images.unsplash.com/photo-1455729552457-5c322b79986c?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1502680390548-bdbac40e4a9f?w=800',
    tags: ['Surfing', 'Guincho Beach', '6 Languages', 'Since 2003'],
    highlights: ['Operating since 2003', 'Lessons in 6 languages', '403+ TripAdvisor reviews', 'July Summer School with lunch', 'Beach bar next door for parents', 'All equipment included'],
    verified: true,
    claimedByOperator: false,
    familiesInterested: 29,
  },
  {
    id: 'cas-2',
    name: 'Hooked Surf School',
    slug: 'hooked-surf-school-cascais',
    category: 'outdoor-activity',
    city: 'Cascais',
    citySlug: 'cascais',
    country: 'Portugal',
    description: 'Offers individual and group surf lessons, a dedicated Kids Surf Club, and board/wetsuit hire in the Guincho and Cascais area. Provides pickup and drop-off from accommodation. After-school surf club with school pickup at 3:30pm. Holiday surf clubs from 10am to 4pm. Team of English Primary teachers and surf instructors collaborate to provide beach activities, bodyboarding, team games, fitness training, and water safety including rip current awareness.',
    shortDescription: 'Kids Surf Club with school pickup — English teachers + surf instructors team.',
    ageRange: { min: 5, max: 17 },
    pedagogy: ['Sport Education', 'Water Safety', 'Team Building'],
    languages: ['English', 'Portuguese'],
    priceRange: '€20-45/session',
    priceNote: 'Taster €35. 2+ lessons €25/each. 10+ lessons €20/each. Holiday Club €25 half / €45 full day.',
    rating: 4.6,
    reviewCount: 67,
    coordinates: { lat: 38.7260, lng: -9.4730 },
    address: 'Guincho / Cascais area (also uses Carcavelos, Praia Grande)',
    googleMapsUrl: 'https://maps.google.com/?q=Hooked+Surf+School+Cascais',
    googlePlaceId: 'ChIJHookedSurfCascais',
    phone: '+351 913 615 978',
    website: 'https://www.hookedsurf.com/',
    images: [
      'https://images.unsplash.com/photo-1455729552457-5c322b79986c?w=800',
      'https://images.unsplash.com/photo-1502680390548-bdbac40e4a9f?w=800',
      'https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?w=800',
    ],
    coverImage: 'https://images.unsplash.com/photo-1455729552457-5c322b79986c?w=800',
    tags: ['Surfing', 'After-School Club', 'School Pickup', 'Holiday Camps'],
    highlights: ['After-school surf club with school pickup at 3:30pm', 'Holiday surf clubs 10am-4pm', 'English teachers + surf instructors team', 'Accommodation pickup & drop-off', 'Water safety & rip current training', 'Equipment & insurance included'],
    verified: true,
    claimedByOperator: false,
    familiesInterested: 17,
  },
];

export const familySignals: FamilySignal[] = [
  { id: 'f1', familyName: 'The Andersens', avatar: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=200', kidsAges: [5, 8], currentCity: 'Lisbon', arrivingDate: '2026-02-15', interests: ['Forest School', 'Surfing', 'Art'], message: 'Just arrived in Lisbon! Looking for forest school options and surf classes for the kids. Here until May.' },
  { id: 'f2', familyName: 'The Martins', avatar: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200', kidsAges: [7], currentCity: 'Ericeira', interests: ['Surfing', 'Nature', 'Music'], message: 'Based in Ericeira for the year. Our son is loving the surf schools here. Happy to show new families around!' },
  { id: 'f3', familyName: 'The Nakamura-Silvas', avatar: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=200', kidsAges: [4, 9, 12], currentCity: 'Cascais', arrivingDate: '2026-03-01', interests: ['Montessori', 'Beach', 'Languages'], message: 'Moving to Cascais from Tokyo. Three kids, looking for international Montessori and bilingual pod options.' },
  { id: 'f4', familyName: 'The Brennans', avatar: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=200', kidsAges: [6, 10], currentCity: 'Sintra', interests: ['Waldorf', 'Nature', 'Arts'], message: 'Sintra for the winter. Kids enrolled at Hypha and thriving. The forest here is magic.' },
  { id: 'f5', familyName: 'The Oliveiras', avatar: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=200', kidsAges: [3, 7], currentCity: 'Lisbon', departingDate: '2026-04-30', interests: ['Maker Space', 'Art Workshops', 'Community'], message: 'In Lisbon until end of April. Doing MILL workshops and ArtZone pottery with the kids — DM if interested!' },
  { id: 'f6', familyName: 'The van der Bergs', avatar: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200', kidsAges: [8, 11], currentCity: 'Ericeira', arrivingDate: '2026-03-10', interests: ['Surfing', 'Unschooling', 'Music'], message: 'Arriving Ericeira mid-March! Kids are unschooled surfers. Looking for the community and ocean-focused activities.' },
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
