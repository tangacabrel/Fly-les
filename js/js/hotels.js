// ═══════════════════════════════════════════════════════
// HOTELS DATA — Fly360 · 20 hôtels complets avec branding
// ═══════════════════════════════════════════════════════
const hotels = [

  // ══ CAMEROUN 5 ÉTOILES ══
  {
    id: 'h1',
    name: 'Hilton Yaoundé',
    category: 'Luxe',
    stars: 5,
    city: 'Yaoundé',
    country: 'Cameroun',
    address: 'Boulevard du 20 Mai, Yaoundé, Cameroun',
    phone: '+237 222 223 046',
    website: 'https://www.hilton.com/en/hotels/yndhihi-hilton-yaounde/',
    rating: 4.8,
    reviews: 1240,
    price: 45000,
    available: true,
    description: 'Le Hilton Yaoundé est l\'adresse de référence dans la capitale camerounaise. Situé en plein cœur de la ville, cet hôtel 5 étoiles offre une vue panoramique sur Yaoundé et ses collines verdoyantes. Avec ses 260 chambres élégamment décorées, ses restaurants gastronomiques, sa piscine olympique et son spa de classe mondiale, le Hilton incarne l\'excellence de l\'hospitalité internationale au Cameroun.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Piscine','Spa','Restaurant','Bar','Parking','Salle de sport','Room service','Navette aéroport','Conférences','Petit-déjeuner inclus','Sécurité 24/7'],
    brand: { color: '#003580', logo: '🏨', slogan: 'Bienvenue dans un monde d\'excellence' }
  },

  {
    id: 'h2',
    name: 'Radisson Blu Hôtel Douala',
    category: 'Affaires',
    stars: 5,
    city: 'Douala',
    country: 'Cameroun',
    address: 'Rue Flatters, Akwa, Douala, Cameroun',
    phone: '+237 233 508 000',
    website: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-douala',
    rating: 4.7,
    reviews: 980,
    price: 52000,
    available: true,
    description: 'Le Radisson Blu Douala est le centre névralgique des voyages d\'affaires dans la capitale économique camerounaise. Implanté dans le quartier d\'Akwa, il propose 195 chambres modernes, un business center ultraéquipé, des salles de conférence high-tech et un rooftop bar offrant une vue imprenable sur le Wouri. Le restaurant Pan-African Flavors célèbre la gastronomie du continent.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Piscine','Rooftop bar','Restaurant','Conférences','Salle de sport','Parking','Room service','Navette aéroport','Spa','Sécurité 24/7','Coworking'],
    brand: { color: '#003580', logo: '🏢', slogan: 'Yes I Can! — L\'excellence au service des affaires' }
  },

  {
    id: 'h3',
    name: 'Akwa Palace Hôtel',
    category: 'Luxe',
    stars: 4,
    city: 'Douala',
    country: 'Cameroun',
    address: 'Avenue de Gaulle, Akwa, Douala, Cameroun',
    phone: '+237 233 425 301',
    website: 'https://www.booking.com/hotel/cm/akwa-palace.html',
    rating: 4.5,
    reviews: 1560,
    price: 38000,
    available: true,
    description: 'L\'Akwa Palace est une institution douala-aise depuis 1968. Réhabilité avec élégance, cet hôtel 4 étoiles allie le charme de l\'histoire et les standards modernes du confort. Situé en bord de Wouri, il propose des chambres avec vue fleuve, un restaurant africain authentique et des salles de banquet prisées pour les cérémonies et événements d\'entreprise.',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Restaurant','Bar','Parking','Room service','Conférences','Vue fleuve','Sécurité 24/7','Petit-déjeuner inclus'],
    brand: { color: '#8B0000', logo: '👑', slogan: 'Le palais du fleuve — Tradition et élégance' }
  },

  {
    id: 'h4',
    name: 'Sawa Hôtel',
    category: 'Affaires',
    stars: 4,
    city: 'Douala',
    country: 'Cameroun',
    address: 'Rue Joss, Bonanjo, Douala, Cameroun',
    phone: '+237 233 435 500',
    website: 'https://www.sawahotel.com',
    rating: 4.6,
    reviews: 874,
    price: 32000,
    available: false,
    description: 'Le Sawa Hôtel, situé dans le quartier d\'affaires de Bonanjo, est le QG des diplomates et hommes d\'affaires de passage à Douala. Ses 198 chambres offrent tout le confort attendu d\'un établissement 4 étoiles : bureau intégré, connexion fibre, room service 24h et restaurant panoramique au dernier étage avec vue sur l\'estuaire du Wouri.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
      'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Restaurant','Bar','Conférences','Parking','Room service','Salle de sport','Vue panoramique','Navette aéroport'],
    brand: { color: '#1A237E', logo: '🏙️', slogan: 'Au cœur des affaires de Douala' }
  },

  {
    id: 'h5',
    name: 'Mont Fébé Hôtel',
    category: 'Nature',
    stars: 5,
    city: 'Yaoundé',
    country: 'Cameroun',
    address: 'Mont Fébé, Yaoundé, Cameroun',
    phone: '+237 222 201 804',
    website: 'https://www.hotelmontfebe.com',
    rating: 4.6,
    reviews: 1120,
    price: 55000,
    available: true,
    description: 'Perché sur les hauteurs de la capitale, le Mont Fébé offre une expérience unique de luxe en pleine nature. Ses bungalows dispersés dans une forêt tropicale, son golf 18 trous, ses 3 piscines et sa vue panoramique à 360° sur Yaoundé en font l\'un des hôtels les plus spectaculaires d\'Afrique centrale. Un véritable sanctuaire de paix et de verdure.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1501117716987-c8c394bb29df?w=800&q=80',
      'https://images.unsplash.com/photo-1559599746-8823b38544c6?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Piscine','Golf 18 trous','Spa','Restaurant','Bar','Tennis','Salle de sport','Vue panoramique','Jardins','Parking','Sécurité 24/7'],
    brand: { color: '#2E7D32', logo: '🌿', slogan: 'Luxe et nature au sommet de Yaoundé' }
  },

  // ══ CAMEROUN PLAGE & NATURE ══
  {
    id: 'h6',
    name: 'Kribi Beach Resort',
    category: 'Plage',
    stars: 4,
    city: 'Kribi',
    country: 'Cameroun',
    address: 'Plage de la Malamba, Kribi, Cameroun',
    phone: '+237 673 456 789',
    website: 'https://www.kribibeachresort.cm',
    rating: 4.8,
    reviews: 2340,
    price: 35000,
    available: true,
    description: 'Le Kribi Beach Resort est un paradis balnéaire niché entre l\'Océan Atlantique et la forêt équatoriale. Face aux chutes de la Lobé — unique au monde où une rivière se jette directement dans la mer — cet hôtel 4 étoiles propose des bungalows en teck sur pilotis, une plage privée de sable blanc et des activités nautiques complètes.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Plage privée','Piscine','Restaurant','Bar','Sports nautiques','Excursions','Parking','Petit-déjeuner inclus','Sécurité 24/7'],
    brand: { color: '#006994', logo: '🌊', slogan: 'Là où la forêt rencontre l\'océan' }
  },

  {
    id: 'h7',
    name: 'La Falaise Hôtel Bafoussam',
    category: 'Affaires',
    stars: 4,
    city: 'Bafoussam',
    country: 'Cameroun',
    address: 'Route de Bamendou, Bafoussam, Cameroun',
    phone: '+237 233 446 123',
    website: 'https://www.lafalaise-bafoussam.cm',
    rating: 4.4,
    reviews: 560,
    price: 22000,
    available: true,
    description: 'Établissement de référence de l\'Ouest Cameroun, La Falaise Hôtel domine la ville de Bafoussam depuis son promontoire rocheux. Ses chambres avec vue sur les montagnes Bamiléké, son restaurant traditionnel, ses jardins en terrasse et ses facilités conférences en font l\'adresse incontournable pour les voyageurs d\'affaires et touristes de la région.',
    image: 'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      'https://images.unsplash.com/photo-1559599746-8823b38544c6?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Restaurant','Bar','Conférences','Parking','Vue panoramique','Jardin','Sécurité 24/7'],
    brand: { color: '#795548', logo: '⛰️', slogan: 'Au cœur des Hauts Plateaux de l\'Ouest' }
  },

  {
    id: 'h8',
    name: 'Transcam Hôtel Ngaoundéré',
    category: 'Économique',
    stars: 3,
    city: 'Ngaoundéré',
    country: 'Cameroun',
    address: 'Quartier Administratif, Ngaoundéré, Cameroun',
    phone: '+237 222 557 890',
    website: 'https://www.transcamhotel.cm',
    rating: 4.1,
    reviews: 320,
    price: 15000,
    available: true,
    description: 'Le Transcam Hôtel est l\'escale idéale pour les voyageurs de passage à Ngaoundéré, porte d\'entrée du Grand Nord camerounais. Propre, confortable et bien situé, il propose des chambres climatisées, un restaurant proposant les spécialités locales et un service chaleureux typiquement camerounais.',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Restaurant','Bar','Parking','Sécurité 24/7','Petit-déjeuner inclus'],
    brand: { color: '#FF6F00', logo: '🌅', slogan: 'Votre escale au cœur du Cameroun' }
  },

  // ══ AFRIQUE ══
  {
    id: 'h9',
    name: 'Marriott Lagos',
    category: 'Luxe',
    stars: 5,
    city: 'Lagos',
    country: 'Nigeria',
    address: '122 Isaac John Street, GRA Ikeja, Lagos, Nigeria',
    phone: '+234 1 280 1000',
    website: 'https://www.marriott.com/hotels/travel/losmc-lagos-marriott-hotel/',
    rating: 4.7,
    reviews: 3200,
    price: 85000,
    available: true,
    description: 'Le Lagos Marriott Hotel Ikeja est le fleuron de l\'hospitalité internationale à Lagos. Situé dans le quartier d\'affaires de Ikeja, il propose 361 chambres contemporaines, 4 restaurants dont un rooftop, un spa complet, une piscine olympique et 14 salles de conférence. Un hub parfait entre l\'Afrique de l\'Ouest et le monde.',
    image: 'https://images.unsplash.com/photo-1537817049-82edb5bd74a6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Piscine','Spa','Restaurant','Bar','Conférences','Salle de sport','Room service','Navette aéroport','Parking','Sécurité 24/7','Rooftop bar'],
    brand: { color: '#8B0000', logo: '🌟', slogan: 'Where the World Meets West Africa' }
  },

  {
    id: 'h10',
    name: 'Sheraton Addis',
    category: 'Luxe',
    stars: 5,
    city: 'Addis-Abeba',
    country: 'Éthiopie',
    address: 'Taitu Street, Addis Abeba, Éthiopie',
    phone: '+251 11 517 1717',
    website: 'https://www.marriott.com/en-us/hotels/addsi-sheraton-addis-a-luxury-collection-hotel-addis-ababa/',
    rating: 4.9,
    reviews: 4100,
    price: 120000,
    available: true,
    description: 'Le Sheraton Addis, joyau de la Luxury Collection, est considéré comme l\'un des meilleurs hôtels d\'Afrique. Ses jardins tropicaux de 10 hectares, ses 7 restaurants dont le célèbre Fasika, ses 9 piscines, son spa ayurvédique et son service d\'une excellence inégalée en font une destination en soi. La référence absolue en Afrique de l\'Est.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Piscine','Spa','Restaurant','Bar','Conférences','Tennis','Golf','Salle de sport','Room service','Navette aéroport','Chef privé','Hélipad'],
    brand: { color: '#1A237E', logo: '💎', slogan: 'An Oasis of Elegance in the Heart of Africa' }
  },

  {
    id: 'h11',
    name: 'Villa Rosa Kempinski Nairobi',
    category: 'Luxe',
    stars: 5,
    city: 'Nairobi',
    country: 'Kenya',
    address: 'Chiromo Road, Westlands, Nairobi, Kenya',
    phone: '+254 20 364 5000',
    website: 'https://www.kempinski.com/en/nairobi/villa-rosa-kempinski/',
    rating: 4.9,
    reviews: 2870,
    price: 145000,
    available: true,
    description: 'La Villa Rosa Kempinski Nairobi est une villa de luxe italienne transplantée au cœur de la capitale kényane. Avec ses 200 chambres et suites décorées à la main par des artisans italiens, ses jardins méditerranéens, son spa Kempinski The Spa, ses 4 restaurants primés et son art de vivre raffiné, c\'est la quintessence du luxe africain.',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Piscine','Spa','Restaurant','Bar','Salle de sport','Room service','Navette aéroport','Conférences','Jardin','Sécurité 24/7'],
    brand: { color: '#8B6914', logo: '🌹', slogan: 'Raffinement italien au cœur de Nairobi' }
  },

  {
    id: 'h12',
    name: 'Sofitel Abidjan Hôtel Ivoire',
    category: 'Luxe',
    stars: 5,
    city: 'Abidjan',
    country: "Côte d'Ivoire",
    address: 'Boulevard Hassan II, Cocody, Abidjan',
    phone: '+225 22 48 26 26',
    website: 'https://www.sofitel.com/fr/hotel-1265-sofitel-abidjan-hotel-ivoire/index.shtml',
    rating: 4.7,
    reviews: 1890,
    price: 95000,
    available: true,
    description: 'L\'Hôtel Ivoire est l\'icône d\'Abidjan depuis 1963. Ce palace légendaire, entièrement rénové sous l\'enseigne Sofitel, propose 700 chambres et suites avec vue sur la lagune Ebrié, une galerie marchande, un casino, une patinoire, 6 restaurants gastronomiques et un spa Sofitel So SPA. Un monument vivant de l\'Afrique de l\'Ouest.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
      'https://images.unsplash.com/photo-1537817049-82edb5bd74a6?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Piscine','Spa','Restaurant','Bar','Casino','Conférences','Salle de sport','Room service','Vue lagune','Patinoire','Parking'],
    brand: { color: '#800000', logo: '🗼', slogan: 'L\'icône d\'Abidjan depuis 1963' }
  },

  // ══ EUROPE ══
  {
    id: 'h13',
    name: 'Hilton Paris CDG Airport',
    category: 'Affaires',
    stars: 5,
    city: 'Paris',
    country: 'France',
    address: 'Aéroport CDG, Allée du Verger, 95700 Roissy-en-France',
    phone: '+33 1 49 19 77 77',
    website: 'https://www.hilton.com/en/hotels/parcdhi-hilton-paris-charles-de-gaulle-airport/',
    rating: 4.5,
    reviews: 5600,
    price: 185000,
    available: true,
    description: 'L\'Hôtel Hilton Paris CDG est l\'escale idéale pour les voyageurs en transit via l\'aéroport Charles de Gaulle. Relié directement aux terminaux par une navette gratuite, cet hôtel 5 étoiles propose 386 chambres contemporaines, le restaurant gastronomique Les Aviateurs, un bar tendance, piscine intérieure et spa complet.',
    image: 'https://images.unsplash.com/photo-1499063078284-f78f7d89616a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
      'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Piscine','Spa','Restaurant','Bar','Conférences','Salle de sport','Room service','Navette aéroport','Sécurité 24/7','Parking'],
    brand: { color: '#003580', logo: '✈️', slogan: 'Paris vous tend les bras dès l\'atterrissage' }
  },

  {
    id: 'h14',
    name: 'Le Méridien Étoile Paris',
    category: 'Luxe',
    stars: 4,
    city: 'Paris',
    country: 'France',
    address: '81 Boulevard Gouvion-Saint-Cyr, 75017 Paris',
    phone: '+33 1 40 68 34 34',
    website: 'https://www.marriott.com/hotels/travel/parmd-le-meridien-etoile/',
    rating: 4.6,
    reviews: 4200,
    price: 210000,
    available: true,
    description: 'Le Méridien Étoile est le plus grand hôtel de Paris avec 1025 chambres. Situé à deux pas de l\'Arc de Triomphe, il offre une vue imprenable sur la Tour Eiffel depuis ses étages supérieurs. Son atmosphère jazz légendaire, son restaurant Panama, son espace bien-être et sa situation idéale en font l\'adresse parisienne par excellence.',
    image: 'https://images.unsplash.com/photo-1499063078284-f78f7d89616a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Spa','Restaurant','Bar','Conférences','Salle de sport','Room service','Navette aéroport','Vue Tour Eiffel'],
    brand: { color: '#1a1a2e', logo: '🗼', slogan: 'Paris est à vous — Arts, Jazz & Élégance' }
  },

  // ══ MOYEN-ORIENT ══
  {
    id: 'h15',
    name: 'Marriott Marquis Dubai',
    category: 'Luxe',
    stars: 5,
    city: 'Dubai',
    country: 'Émirats Arabes Unis',
    address: 'Sheikh Zayed Road, Business Bay, Dubai, UAE',
    phone: '+971 4 414 0000',
    website: 'https://www.marriott.com/hotels/travel/dxbdt-dubai-marriott-marquis-hotel/',
    rating: 4.9,
    reviews: 8700,
    price: 245000,
    available: true,
    description: 'Le Marriott Marquis Dubai est l\'une des tours d\'hôtel les plus hautes du monde (355 m). Ses 1608 chambres et suites de luxe, ses 10 restaurants dont des tables étoilées, sa piscine à débordement avec vue sur Burj Khalifa, son spa de 3 000 m², son rooftop bar et ses espaces événementiels géants en font une destination incontournable à Dubai.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Piscine','Spa','Restaurant','Bar','Conférences','Salle de sport','Room service','Navette aéroport','Vue Burj Khalifa','Rooftop bar','Chef privé','Hélipad','Sécurité 24/7'],
    brand: { color: '#8B6914', logo: '🌆', slogan: 'Touchez le ciel au cœur de Dubai' }
  },

  {
    id: 'h16',
    name: 'The Meydan Hotel Dubai',
    category: 'Resort',
    stars: 5,
    city: 'Dubai',
    country: 'Émirats Arabes Unis',
    address: 'Al Meydan Road, Nad Al Sheba, Dubai, UAE',
    phone: '+971 4 381 3111',
    website: 'https://www.meydanhotels.com',
    rating: 4.8,
    reviews: 3400,
    price: 195000,
    available: false,
    description: 'Le Meydan Hotel est un hôtel de luxe ultra-exclusif adjacent à l\'hippodrome de Dubai. Avec sa façade de 1,6 km — la plus longue du monde —, son golf 9 trous, sa marina, ses 5 restaurants, son spa de 5 000 m² et ses suites avec vue directe sur la piste de course, il offre une expérience unique mêlant sport royal et hospitalité d\'exception.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Piscine','Spa','Golf','Restaurant','Bar','Marina','Conférences','Salle de sport','Room service','Navette aéroport','Hélipad'],
    brand: { color: '#1B5E20', logo: '🐎', slogan: 'Where Champions Stay' }
  },

  // ══ ASIE & OCÉAN INDIEN ══
  {
    id: 'h17',
    name: 'Four Seasons Resort Maldives',
    category: 'Villa Luxe',
    stars: 5,
    city: 'Atoll de Baa',
    country: 'Maldives',
    address: 'Landaa Giraavaru Island, Atoll de Baa, Maldives',
    phone: '+960 660 0888',
    website: 'https://www.fourseasons.com/maldiveslg/',
    rating: 5.0,
    reviews: 2100,
    price: 380000,
    available: true,
    description: 'Le Four Seasons Resort Maldives at Landaa Giraavaru est la définition même du paradis terrestre. Villas sur pilotis au-dessus du lagon, récif de corail UNESCO à portée de palme, dauphin spinner au lever du soleil, spa Ayurvedic, centre de plongée world-class et service ultra-personnalisé. Le meilleur resort des Maldives selon Condé Nast Traveler.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Plage privée','Piscine','Spa','Restaurant','Bar','Sports nautiques','Plongée','Yoga','Chef privé','Navette bateau','Excursions'],
    brand: { color: '#006994', logo: '🏝️', slogan: 'The World Comes Here to Disappear' }
  },

  {
    id: 'h18',
    name: 'Banyan Tree Bangkok',
    category: 'Luxe',
    stars: 5,
    city: 'Bangkok',
    country: 'Thaïlande',
    address: '21/100 South Sathon Road, Sathon, Bangkok',
    phone: '+66 2 679 1200',
    website: 'https://www.banyantree.com/thailand/bangkok',
    rating: 4.9,
    reviews: 5800,
    price: 160000,
    available: true,
    description: 'Le Banyan Tree Bangkok s\'élève à 216 mètres au-dessus de la capitale thaïlandaise. Son spa Sanctuary Banyan Tree est régulièrement élu meilleur spa d\'Asie. Son rooftop restaurant Vertigo et Moon Bar offrent une vue vertigineuse sur Bangkok by night. Ses suites all-sky et son piscine suspendue au 21e étage sont des expériences inoubliables.',
    image: 'https://images.unsplash.com/photo-1537817049-82edb5bd74a6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Piscine','Spa','Restaurant','Rooftop bar','Salle de sport','Room service','Navette aéroport','Vue panoramique','Conférences'],
    brand: { color: '#2E7D32', logo: '🌺', slogan: 'Sanctuary for the Senses' }
  },

  // ══ AMÉRIQUE ══
  {
    id: 'h19',
    name: 'The Ritz-Carlton New York',
    category: 'Luxe',
    stars: 5,
    city: 'New York',
    country: 'États-Unis',
    address: '50 Central Park South, New York, NY 10019',
    phone: '+1 212 308 9100',
    website: 'https://www.ritzcarlton.com/en/hotels/nycrc-the-ritz-carlton-new-york-central-park',
    rating: 4.9,
    reviews: 9200,
    price: 320000,
    available: true,
    description: 'Le Ritz-Carlton New York Central Park est le palais américain par excellence. Face à Central Park, ses chambres offrent des vues à couper le souffle sur Manhattan. Le restaurant La Fiamma, le spa The Ritz-Carlton Spa, le club lounge et le service Ritz-Carlton Ladies and Gentlemen ont établi les standards mondiaux de l\'hospitalité de luxe.',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1537817049-82edb5bd74a6?w=800&q=80',
      'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Spa','Restaurant','Bar','Conférences','Salle de sport','Room service','Vue Central Park','Conciergerie 24/7','Club lounge','Sécurité 24/7'],
    brand: { color: '#003366', logo: '🗽', slogan: 'We are Ladies and Gentlemen serving Ladies and Gentlemen' }
  },

  {
    id: 'h20',
    name: 'Hotel Fasano Rio de Janeiro',
    category: 'Villa Luxe',
    stars: 5,
    city: 'Rio de Janeiro',
    country: 'Brésil',
    address: 'Avenida Vieira Souto 80, Ipanema, Rio de Janeiro',
    phone: '+55 21 3202 4000',
    website: 'https://www.fasano.com.br/hotels/rio-de-janeiro',
    rating: 4.8,
    reviews: 3100,
    price: 280000,
    available: true,
    description: 'L\'Hôtel Fasano Rio de Janeiro est l\'adresse la plus glamour d\'Ipanema. Avec sa piscine suspendue en porte-à-faux au-dessus de la plage mythique, ses 91 chambres dessinées par Philippe Starck, son rooftop bar Fasano Alto et son service personnalisé d\'excellence, il attire la jet-set internationale qui vient vivre le rêve carioca au sommet du raffinement.',
    image: 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80'
    ],
    amenities: ['WiFi gratuit','Piscine','Spa','Restaurant','Rooftop bar','Salle de sport','Room service','Vue Ipanema','Conciergerie 24/7','Chef privé','Parking','Sécurité 24/7'],
    brand: { color: '#8B0000', logo: '🌴', slogan: 'La vie de rêve à Ipanema' }
  }
]