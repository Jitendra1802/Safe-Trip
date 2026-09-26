const defaultPackages = [
  {
    title: "Jaipur Weekend",
    slug: "jaipur-weekend",
    destination: "Jaipur, Rajasthan",
    description: "Immerse yourself in royal heritage, grand palaces, vibrant bazaars, and delectable Rajasthani cuisine with an expertly guided heritage tour.",
    duration: "2 Nights / 3 Days",
    price: 4500,
    priceDisplay: "₹4,500",
    priceRange: "low",
    category: "economy",
    rating: 4.5,
    reviewsCount: 128,
    weather: "Sunny",
    weatherIcon: "☀️",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    safetyAdvisory: "Verified tourist corridor. 24/7 tourist helpline and escorted heritage walks active.",
    image: "https://picsum.photos/seed/jaipur/400/250.jpg",
    gallery: [
      "https://picsum.photos/seed/jaipur/400/250.jpg"
    ],
    inclusions: [
      "2 Nights 3-Star Hotel Stay",
      "Daily Breakfast & Dinner",
      "AC Transport for Fort Visits",
      "Licensed Tour Guide at Amer Fort"
    ],
    exclusions: [
      "Monument entry tickets",
      "Personal shopping & camel rides"
    ],
    itinerary: [
      { day: 1, title: "Arrival & City Palace", details: "Arrive in Pink City, hotel check-in. Afternoon visit to City Palace and Jantar Mantar observatory." },
      { day: 2, title: "Amer & Nahargarh Forts", details: "Morning excursion to magnificent Amer Fort, photo stop at Hawa Mahal, sunset from Nahargarh." },
      { day: 3, title: "Local Bazaars & Departure", details: "Souvenir shopping at Johari Bazaar and Bapu Bazaar, drop-off at railway station or airport." }
    ],
    featured: true
  },
  {
    title: "KedarNath Yatra",
    slug: "kedarnath-yatra",
    destination: "Kedarnath, Uttarakhand",
    description: "Sacred Himalayan pilgrimage to one of the holiest Jyotirlingas, nestled amidst majestic snow-capped peaks and spiritual serenity.",
    duration: "3 Nights / 4 Days",
    price: 8500,
    priceDisplay: "₹8,500",
    priceRange: "mid",
    category: "economy",
    rating: 4.8,
    reviewsCount: 340,
    weather: "Sunny",
    weatherIcon: "☀️",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    safetyAdvisory: "Biometric registration required. Medical fitness certificate recommended. Oxygen monitoring assistance provided.",
    image: "https://picsum.photos/seed/kedarnath-temple-himalaya/400/250.jpg",
    gallery: [
      "https://picsum.photos/seed/kedarnath-temple-himalaya/400/250.jpg"
    ],
    inclusions: [
      "Haridwar to Sonprayag Shared Transport",
      "3 Nights Guest House / Camp Stay",
      "Pure Vegetarian Meals (Sattvic)",
      "Yatra Assistance & Medical Kit"
    ],
    exclusions: [
      "Helicopter or pony/palki charges",
      "Personal porter services"
    ],
    itinerary: [
      { day: 1, title: "Haridwar to Guptkashi", details: "Scenic drive along Mandakini River. Evening temple visit and briefing." },
      { day: 2, title: "Trek to Kedarnath", details: "Early morning transfer to Gaurikund. 16 km scenic trek up to Kedarnath Dham." },
      { day: 3, title: "Darshan & Return to Sonprayag", details: "Morning Aarti and Darshan at Kedarnath Temple. Trek back down to Sonprayag." },
      { day: 4, title: "Return to Haridwar", details: "Scenic drive back to Haridwar with unforgettable Himalayan memories." }
    ],
    featured: true
  },
  {
    title: "Vaishno Devi Yatra",
    slug: "vaishno-devi-yatra",
    destination: "Katra, Jammu & Kashmir",
    description: "A spiritually uplifting journey to the holy cave shrine of Mata Vaishno Devi in the Trikuta hills of Jammu.",
    duration: "3 Nights / 4 Days",
    price: 7500,
    priceDisplay: "₹7,500",
    priceRange: "mid",
    category: "economy",
    rating: 4.7,
    reviewsCount: 290,
    weather: "Cool",
    weatherIcon: "⛅",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    safetyAdvisory: "RFID Yatra tracking enabled. Well-lit concrete track with battery vehicle options for seniors.",
    image: "https://picsum.photos/seed/vaishno-devi-cave-mata/400/250.jpg",
    gallery: [
      "https://picsum.photos/seed/vaishno-devi-cave-mata/400/250.jpg"
    ],
    inclusions: [
      "Jammu Station Pick & Drop",
      "2 Nights Hotel Stay in Katra",
      "Daily Breakfast & Dinner",
      "Yatra RFID Registration Assistance"
    ],
    exclusions: [
      "Helicopter tickets & ropeway passes",
      "Special pooja fees"
    ],
    itinerary: [
      { day: 1, title: "Arrival Katra", details: "Pickup from Jammu Tawi / Airport, scenic transfer to Katra hotel. Rest and prep for trek." },
      { day: 2, title: "Bhawan Darshan", details: "Early ascent to Mata Bhawan via Banganga and Ardhkuwari. Holy darshan and Bhairon Nath ropeway." },
      { day: 3, title: "Descent & Katra Leisure", details: "Trek down to Katra. Relaxing Ayurvedic foot massage and local market exploration." },
      { day: 4, title: "Departure", details: "Breakfast and transfer back to Jammu for your return journey." }
    ],
    featured: false
  },
  {
    title: "Goa Beach Trip",
    slug: "goa-beach-trip",
    destination: "North & South Goa",
    description: "Sun, sand, surf, and vibrant nightlife! Relax on golden beaches, explore Portuguese architecture, and indulge in water sports.",
    duration: "3 Nights / 4 Days",
    price: 8500,
    priceDisplay: "₹8,500",
    priceRange: "mid",
    category: "standard",
    rating: 4.6,
    reviewsCount: 412,
    weather: "Humid",
    weatherIcon: "🌴",
    safetyStatus: "Night travel caution",
    safetyIcon: "⚠️",
    safetyAdvisory: "Safe patrolled beaches during daylight. Follow lifeguard beach flag warnings; caution during late-night beach walks.",
    image: "https://picsum.photos/seed/goa/400/250.jpg",
    gallery: [
      "https://picsum.photos/seed/goa/400/250.jpg"
    ],
    inclusions: [
      "Resort Stay near Calangute / Baga",
      "Complimentary Breakfast",
      "South Goa Sightseeing Tour",
      "Mandovi River Sunset Cruise"
    ],
    exclusions: [
      "Watersports package (scuba, jet-ski)",
      "Club entry charges"
    ],
    itinerary: [
      { day: 1, title: "Arrival & Beach Vibes", details: "Welcome drink at resort. Sunset stroll and beach shacks at Baga Beach." },
      { day: 2, title: "North Goa Highlights", details: "Visit Aguada Fort, Chapora Fort (Dil Chahta Hai point), and Anjuna flea market." },
      { day: 3, title: "Old Goa & Sunset Cruise", details: "Explore Basilica of Bom Jesus, Se Cathedral, followed by a vibrant evening cruise." },
      { day: 4, title: "Farewell Goa", details: "Breakfast, souvenir shopping in Panaji, transfer to airport/station." }
    ],
    featured: true
  },
  {
    title: "Ooty",
    slug: "ooty",
    destination: "Ooty & Coonoor, Tamil Nadu",
    description: "The Queen of Hill Stations! Lush rolling tea estates, cool misty mountain breeze, botanical gardens, and heritage toy train ride.",
    duration: "2 Nights / 3 Days",
    price: 20000,
    priceDisplay: "₹20,000",
    priceRange: "high",
    category: "standard",
    rating: 4.9,
    reviewsCount: 165,
    weather: "Sunny",
    weatherIcon: "☀️",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    safetyAdvisory: "Serene hill station with 100% safe, well-maintained mountain roads. Warm jacket recommended for evening chill.",
    image: "https://picsum.photos/seed/ooty/400/250.jpg",
    gallery: [
      "https://picsum.photos/seed/ooty/400/250.jpg"
    ],
    inclusions: [
      "Luxury Valley View Resort",
      "All Meals (Breakfast & Chef's Dinner)",
      "Nilgiri Mountain Railway Toy Train Tickets",
      "Private Chauffeur-driven Sedan"
    ],
    exclusions: [
      "Boating fees at Ooty Lake",
      "Homemade chocolate purchases"
    ],
    itinerary: [
      { day: 1, title: "Coimbatore to Ooty", details: "Scenic ghat drive. Check-in, visit Government Botanical Garden and Ooty Lake." },
      { day: 2, title: "Coonoor & Tea Gardens", details: "Heritage toy train to Coonoor. Visit Sim's Park, Dolphin's Nose, and Tea Factory." },
      { day: 3, title: "Doddabetta Peak & Departure", details: "Panoramic views from highest Nilgiri peak. Return transfer to Coimbatore." }
    ],
    featured: false
  },
  {
    title: "Kashmir Premium Tour",
    slug: "kashmir-premium-tour",
    destination: "Srinagar, Gulmarg & Pahalgam",
    description: "Paradise on Earth! Traditional houseboat stay on Dal Lake, gondola ride in snow-clad Gulmarg, and scenic pine valleys of Pahalgam.",
    duration: "5 Nights / 6 Days",
    price: 50000,
    priceDisplay: "₹50,000",
    priceRange: "high",
    category: "standard",
    rating: 4.7,
    reviewsCount: 220,
    weather: "Snowfall",
    weatherIcon: "❄️",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    safetyAdvisory: "Verified tourist police assistance across Srinagar, Gulmarg, and Pahalgam. All tourist corridors fully secured.",
    image: "https://picsum.photos/seed/kashmir/400/250.jpg",
    gallery: [
      "https://picsum.photos/seed/kashmir/400/250.jpg"
    ],
    inclusions: [
      "1 Night Luxury Houseboat on Dal Lake + 4 Nights 4-Star Hotels",
      "Shikara Ride on Dal Lake",
      "All Breakfasts and Dinners included",
      "Dedicated Private SUV throughout the tour",
      "Gulmarg Gondola Phase 1 passes"
    ],
    exclusions: [
      "Gondola Phase 2 ticket",
      "Pony rides in Baisaran Valley"
    ],
    itinerary: [
      { day: 1, title: "Srinagar & Shikara Ride", details: "Airport welcome. Check in to luxury houseboat, evening romantic Shikara ride." },
      { day: 2, title: "Mughal Gardens Tour", details: "Visit Shalimar Bagh, Nishat Bagh, and Shankaracharya Temple." },
      { day: 3, title: "Gulmarg Day Trip", details: "Ascend Apharwat peak on Gulmarg Gondola. Enjoy snow activities and golf course." },
      { day: 4, title: "Pahalgam Valley", details: "Drive through saffron fields and apple orchards to scenic Betaab Valley." },
      { day: 5, title: "Aru Valley & Riverside", details: "Explore untouched pine landscapes of Aru. Evening Kashmiri Wazwan dinner." },
      { day: 6, title: "Departure", details: "Last-minute souvenir shopping for Pashmina and dry fruits. Srinagar airport drop." }
    ],
    featured: true
  },
  {
    title: "Ladakh",
    slug: "ladakh",
    destination: "Leh, Pangong & Nubra Valley",
    description: "Rugged trans-Himalayan landscapes, azure high-altitude lakes, ancient Buddhist monasteries, and thrilling mountain passes like Khardung La.",
    duration: "2 Nights / 3 Days",
    price: 10000,
    priceDisplay: "₹10,000",
    priceRange: "high",
    category: "standard",
    rating: 4.8,
    reviewsCount: 180,
    weather: "Cool",
    weatherIcon: "⛅",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    safetyAdvisory: "Mandatory 24-hour acclimatization in Leh before traveling to Nubra or Pangong. Oxygen cylinders equipped in all vehicles.",
    image: "https://picsum.photos/seed/ladakh-monastery-buddhist/400/250.jpg",
    gallery: [
      "https://picsum.photos/seed/ladakh-monastery-buddhist/400/250.jpg"
    ],
    inclusions: [
      "Inner Line Permits & Wildlife Fees",
      "Hotel & Camp Stay",
      "Buffet Breakfast & Dinner",
      "Mountain Transport"
    ],
    exclusions: [
      "Camel safari at Hunder sand dunes",
      "Monument and monastery entry fees"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Leh", details: "Arrive at airport. Acclimatization and local market visit." },
      { day: 2, title: "Monasteries & Sightseeing", details: "Visit Thiksey Monastery, Shey Palace, and Shanti Stupa." },
      { day: 3, title: "Departure", details: "Transfer to airport with unforgettable memories." }
    ],
    featured: true
  },
  {
    title: "London Premium Trip",
    slug: "london-premium-trip",
    destination: "London, United Kingdom",
    description: "Experience iconic global landmarks: Big Ben, Tower Bridge, Buckingham Palace, Thames river cruise, and West End theatre.",
    duration: "3 Nights / 4 Days",
    price: 75000,
    priceDisplay: "₹75,000",
    priceRange: "premium",
    category: "premium",
    rating: 5.0,
    reviewsCount: 95,
    weather: "Cool",
    weatherIcon: "⛅",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    safetyAdvisory: "Comprehensive travel insurance included. Emergency concierge available 24/7 across the UK.",
    image: "https://picsum.photos/seed/london-big-ben-parliament/400/250.jpg",
    gallery: [
      "https://picsum.photos/seed/london-big-ben-parliament/400/250.jpg"
    ],
    inclusions: [
      "4-Star Central London Hotel",
      "Daily English Breakfast",
      "Hop-On Hop-Off Bus & Thames River Cruise Pass",
      "Train + Hotel Included"
    ],
    exclusions: [
      "Visa fees & international airfare",
      "Personal expenses"
    ],
    itinerary: [
      { day: 1, title: "Welcome to London", details: "Arrival, express transfer to central hotel. Stroll through Trafalgar Square." },
      { day: 2, title: "Royal London Tour", details: "Watch Changing of the Guard at Buckingham Palace, visit Big Ben." },
      { day: 3, title: "Thames Cruise & Tower", details: "River cruise to Tower Bridge and London Eye." },
      { day: 4, title: "Departure", details: "Shopping and airport departure." }
    ],
    featured: true
  },
  {
    title: "Manali Premium Trip",
    slug: "manali-premium-trip",
    destination: "Manali & Solang Valley, Himachal Pradesh",
    description: "Snow adventures, cedar pine forests, Beas River rafting, hot springs, and breathtaking views of the Rohtang Pass.",
    duration: "2 Nights / 3 Days",
    price: 20000,
    priceDisplay: "₹20,000",
    priceRange: "high",
    category: "premium",
    rating: 4.4,
    reviewsCount: 310,
    weather: "Sunny",
    weatherIcon: "☀️",
    safetyStatus: "Safe Zone",
    safetyIcon: "✅",
    safetyAdvisory: "Certified adventure guides for paragliding & rafting. Atal Tunnel open for all-weather access.",
    image: "https://picsum.photos/seed/manali-rohtang-pass-mountains/400/250.jpg",
    gallery: [
      "https://picsum.photos/seed/manali-rohtang-pass-mountains/400/250.jpg"
    ],
    inclusions: [
      "Riverside Cottage Stay",
      "Breakfast and Dinner Included",
      "Solang Valley & Atal Tunnel Excursion",
      "River Rafting voucher"
    ],
    exclusions: [
      "Personal paragliding & snow rides"
    ],
    itinerary: [
      { day: 1, title: "Arrival Manali", details: "Check-in to riverside cottage. Visit ancient Hadimba Temple." },
      { day: 2, title: "Solang Valley", details: "Adventure day in Solang Valley and Atal Tunnel." },
      { day: 3, title: "Mall Road & Departure", details: "Café hopping and departure transfer." }
    ],
    featured: false
  }
];

module.exports = defaultPackages;
