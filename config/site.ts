/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  JETOUR SITE CONFIGURATION — single source of truth
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every piece of editable content lives in this file: theme, navigation,
 *  hero, vehicles, JETOUR World, technology, media, contact, gallery, footer.
 *
 *  Editing is restricted to authorized administrators: this file lives in the
 *  private repository and changes reach the public site only through a
 *  deployment. The public website has no editing surface, accounts or CMS.
 *
 *  Rules for administrators
 *   • Only add specifications published by JETOUR (source noted per vehicle).
 *   • Only use authorized JETOUR imagery. Use the official asset URLs below:
 *     scripts/images.mjs downloads each one into images-src/ and serves resized
 *     WebP copies from the site itself (runs automatically on dev/build).
 *   • Never add prices, mileage, warranty or range unless officially verified.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const CDN = "https://jetourglobal.com/new-static/images";

/* ── Theme ─────────────────────────────────────────────────────────────── */
export const theme = {
  colors: { background: "#FFFFFF", text: "#101010", muted: "#5C5C5C", line: "#E6E6E6", surface: "#F6F6F6" },
  /** The ONE metallic stroke used on every CTA, active control and highlighted border. */
  metallic: {
    gradient: "linear-gradient(120deg, #2A2A2A 0%, #8A8C8F 22%, #E4E5E6 42%, #6B6D70 60%, #C7C9CB 78%, #2E2E2E 100%)",
    strokeWidth: "1.5px",
  },
  font: "Manrope",
} as const;

/* ── Site / SEO ────────────────────────────────────────────────────────── */
export const site = {
  name: "JETOUR",
  url: "https://ajinshazz07.github.io/jetourglobal", // ← replace with the production domain (no trailing slash)
  title: "JETOUR | Premium Off-Road & Hybrid SUVs",
  description:
    "Discover JETOUR G700, T1, T1 i-DM, T2 and T2 i-DM — premium off-road and plug-in hybrid SUVs built around the Travel+ philosophy.",
  locale: "en",
};

/* ── Navigation (Gallery intentionally excluded) ───────────────────────── */
export const navigation = [
  { id: "models", label: "Models" },
  { id: "world", label: "JETOUR World" },
  { id: "technology", label: "Technology" },
  { id: "media", label: "Media Center" },
  { id: "contact", label: "Connect Us" },
] as const;

/* ── Hero ──────────────────────────────────────────────────────────────── */
export const hero = {
  eyebrow: "JETOUR · Travel+",
  heading: ["Explore Beyond.", "Drive Extraordinary."],
  supporting: "Discover premium SUVs engineered for every journey.",
  image: { src: `${CDN}/vehicles/cars/g700/p1_1.png`, alt: "JETOUR G700 driving across a desert trail, raising dust" },
  ctas: [
    { label: "Explore Our Range", target: "models" },
    { label: "Connect Us", target: "contact" },
  ],
};

/* ── Vehicles ──────────────────────────────────────────────────────────── */
export type Spec = { label: string; value: string };
export type Vehicle = {
  id: string;
  name: string;
  /** Short model line, as published by JETOUR. */
  caption: string;
  description: string;
  /** Exactly three verified specifications. */
  specs: Spec[];
  /** Transparent OEM cutout. */
  cutout: { src: string; width: number; height: number };
  /** Gallery photography for this vehicle (exterior, interior, lifestyle). */
  gallery: { src: string; alt: string; kind: "Exterior" | "Interior" | "Lifestyle" }[];
  /** Model-specific features, shown in the Technology section. */
  features: { category: TechCategoryId; text: string }[];
  /** Official source for every value above. */
  source: string;
  /** Catalogue entries stay hidden until enabled with verified data. */
  enabled: boolean;
};

export type TechCategoryId = "hybrid" | "terrain" | "cockpit" | "comfort";

export const vehicles: Vehicle[] = [
  {
    id: "g700",
    name: "JETOUR G700",
    caption: "All-terrain Premium Hybrid Off-Road SUV",
    description:
      "The flagship of the G Series. GAIA off-road aesthetics, a commanding stance and a high-strength off-road body, paired with a spacious six-seat cabin, Magnetic Ride Control and air suspension.",
    specs: [
      { label: "Powertrain", value: "2.0T Plug-in Hybrid" },
      { label: "L × W × H", value: "5198 × 2050 × 1956 mm" },
      { label: "Wheelbase", value: "2870 mm" },
    ],
    cutout: { src: `${CDN}/home/vehicles/g700/car.png`, width: 1080, height: 420 },
    gallery: [
      { src: `${CDN}/vehicles/image/g700.png`, alt: "JETOUR G700 in deep blue on a rocky desert ridge", kind: "Lifestyle" },
      { src: `${CDN}/vehicles/cars/g700/p1_1.png`, alt: "JETOUR G700 kicking up dust on an off-road trail", kind: "Exterior" },
      { src: `${CDN}/vehicles/cars/g700/p4_1.png`, alt: "JETOUR G700 rear cabin with premium tan multi-function seats", kind: "Interior" },
      { src: `${CDN}/vehicles/cars/g700/p2_1.png`, alt: "JETOUR G700 crossing an open desert plain", kind: "Exterior" },
    ],
    features: [
      { category: "hybrid", text: "2.0T plug-in hybrid · 0–100 km/h in 4.6 s" },
      { category: "hybrid", text: "6.6 kW V2L power export" },
      { category: "cockpit", text: "Multi-screen display · on-board AI assistant with 8255 chip and 4-zone voice control" },
      { category: "comfort", text: "Six-seat cabin with table, leg rest and massage seats" },
      { category: "comfort", text: "Magnetic Ride Control + air suspension" },
    ],
    source: "https://jetourglobal.com/g700",
    enabled: true,
  },
  {
    id: "t1",
    name: "JETOUR T1",
    caption: "Time to Awaken",
    description:
      "A crossover design that blends urban refinement with rugged off-road style. XWD intelligent four-wheel drive, seven driving modes and a quiet, spacious cabin with cloud-like seats.",
    specs: [
      { label: "Engine", value: "1.5T / 2.0T" },
      { label: "L × W × H", value: "4705 × 1967 × 1843 mm" },
      { label: "Wheelbase", value: "2800 mm" },
    ],
    cutout: { src: `${CDN}/home/vehicles/T1/car.png`, width: 1080, height: 420 },
    gallery: [
      { src: `${CDN}/vehicles/cars/T1/p1_1.png`, alt: "JETOUR T1 powering through desert sand", kind: "Exterior" },
      { src: `${CDN}/vehicles/cars/T1/p3_1.png`, alt: "JETOUR T1 cabin viewed through the panoramic roof", kind: "Interior" },
      { src: `${CDN}/vehicles/cars/T1/p5_1.png`, alt: "Travelers relaxing beside the JETOUR T1", kind: "Lifestyle" },
    ],
    features: [
      { category: "terrain", text: "XWD intelligent four-wheel drive · 7 driving modes" },
      { category: "cockpit", text: "TOUR OS 2.0 system" },
      { category: "comfort", text: "Quiet cabin with cloud-like comfort seats" },
    ],
    source: "https://jetourglobal.com/t1",
    enabled: true,
  },
  {
    id: "t1-idm",
    name: "JETOUR T1 i-DM",
    caption: "Awaken Your Passion",
    description:
      "The Red Dot award-winning T1 design with plug-in hybrid power: a hybrid-dedicated 1.5TD engine and 1DHT e-CVT, Storm-eye headlights and a tech cabin built around a 15.6-inch touchscreen.",
    specs: [
      { label: "Powertrain", value: "1.5T Plug-in Hybrid" },
      { label: "L × W × H", value: "4705 × 1967 × 1843 mm" },
      { label: "Wheelbase", value: "2800 mm" },
    ],
    cutout: { src: `${CDN}/home/vehicles/T1iDM/car.png`, width: 1080, height: 420 },
    gallery: [
      { src: `${CDN}/vehicles/image/T1iDM.png`, alt: "JETOUR T1 i-DM on a coastal road beside a cyclist", kind: "Lifestyle" },
      { src: `${CDN}/vehicles/cars/T1iDM/p1_1.jpg`, alt: "JETOUR T1 i-DM studio portrait with Red Dot award mark", kind: "Exterior" },
      { src: `${CDN}/vehicles/cars/T1iDM/p3_1.jpg`, alt: "JETOUR T1 i-DM cockpit with 15.6-inch touchscreen", kind: "Interior" },
    ],
    features: [
      { category: "hybrid", text: "1.5TD hybrid-dedicated engine with 1DHT e-CVT" },
      { category: "cockpit", text: "15.6-inch touchscreen · 10.25-inch digital instruments · Snapdragon 8155" },
      { category: "comfort", text: "Dual-zone automatic climate control · ventilated cloud-like seats" },
    ],
    source: "https://jetourglobal.com/t1idm",
    enabled: true,
  },
  {
    id: "t2",
    name: "JETOUR T2",
    caption: "Rugged Adventure SUV",
    description:
      "A hardcore-styled body with a 2800 mm wheelbase and generous space. XWD fully automatic four-wheel drive, 6+X driving modes and an intelligent limited-slip differential lock for every terrain.",
    specs: [
      { label: "Engine", value: "1.5T / 2.0T" },
      { label: "L × W × H", value: "4785 × 2006 × 1880 mm" },
      { label: "Wheelbase", value: "2800 mm" },
    ],
    cutout: { src: `${CDN}/home/vehicles/T2/car.png`, width: 1080, height: 420 },
    gallery: [
      { src: `${CDN}/vehicles/image/T2.png`, alt: "JETOUR T2 fording a mountain river", kind: "Lifestyle" },
      { src: `${CDN}/vehicles/cars/T2/p3_1.png`, alt: "JETOUR T2 in a desert canyon", kind: "Exterior" },
      { src: `${CDN}/vehicles/cars/T2/p5_1.png`, alt: "JETOUR T2 climbing sand dunes", kind: "Exterior" },
    ],
    features: [
      { category: "terrain", text: "XWD fully automatic 2WD/4WD switching · 6+X driving modes" },
      { category: "terrain", text: "Intelligent limited-slip differential lock · intelligent creeping mode" },
      { category: "cockpit", text: "15.6-inch central screen · Snapdragon 8155 · L2 driving assistance" },
    ],
    source: "https://jetourglobal.com/t2",
    enabled: true,
  },
  {
    id: "t2-idm",
    name: "JETOUR T2 i-DM",
    caption: "Travel Hybrid SUV",
    description:
      "The T2's rugged simplicity with plug-in hybrid efficiency: a fifth-generation 1.5 TGDI hybrid-specific engine, three-speed super hybrid transmission and a 64-inch panoramic sunroof.",
    specs: [
      { label: "Powertrain", value: "1.5T Plug-in Hybrid" },
      { label: "L × W × H", value: "4785 × 2006 × 1875 mm" },
      { label: "Wheelbase", value: "2800 mm" },
    ],
    cutout: { src: `${CDN}/home/vehicles/T2iDM/car.png`, width: 1080, height: 420 },
    gallery: [
      { src: `${CDN}/vehicles/image/T2iDM.png`, alt: "JETOUR T2 i-DM splashing through water", kind: "Lifestyle" },
      { src: `${CDN}/vehicles/cars/T2iDM/p5_1.png`, alt: "JETOUR T2 i-DM in a forest clearing", kind: "Exterior" },
      { src: `${CDN}/vehicles/cars/T2iDM/p4_1.png`, alt: "JETOUR T2 i-DM driving assistance sensing visualisation", kind: "Exterior" },
    ],
    features: [
      { category: "hybrid", text: "5th-gen 1.5 TGDI hybrid-specific engine · three-speed super hybrid transmission" },
      { category: "cockpit", text: "L2 driving assistance · 540° panoramic image · 15.6-inch screen" },
      { category: "comfort", text: "64-inch panoramic sunroof · 50 W wireless phone charging" },
    ],
    source: "https://jetourglobal.com/t2idm",
    enabled: true,
  },

  /* ── Optional catalogue entries ─────────────────────────────────────────
   * Hidden until an administrator adds verified specs, an authorized cutout
   * and sets `enabled: true`. Nothing is invented for these models.        */
  ...(["DASHING", "X70", "X70 PLUS", "X90 PLUS"] as const).map<Vehicle>((n) => ({
    id: n.toLowerCase().replace(/\s+/g, "-"),
    name: `JETOUR ${n}`,
    caption: "",
    description: "",
    specs: [],
    cutout: { src: "", width: 1080, height: 420 },
    gallery: [],
    features: [],
    source: "",
    enabled: false,
  })),
  {
    id: "g700-topfire",
    name: "JETOUR G700 TOPFIRE",
    caption: "",
    description: "",
    specs: [],
    cutout: { src: `${CDN}/home/vehicles/G700WhislingArrow/car.png`, width: 1080, height: 420 },
    gallery: [],
    features: [],
    source: "https://jetourglobal.com/",
    enabled: false,
  },
];

export const activeVehicles = vehicles.filter((v) => v.enabled && v.specs.length === 3 && v.cutout.src);

/* ── JETOUR World ──────────────────────────────────────────────────────── */
export const world = {
  eyebrow: "JETOUR World",
  heading: "Travel+ for travelers.",
  intro:
    "Our mission is to see through the eyes of travelers and build the vehicles that understand travel best. Travel+ is more than a product line — it is a complete approach to the journey.",
  feature: { src: `${CDN}/home/culture1.jpg`, alt: "JETOUR SUV parked beside a snow-covered mountain lake" },
  pillars: [
    {
      title: "Travel+ Philosophy",
      text: "We go beyond delivering the most suitable travel technologies and products — we provide comprehensive travel solutions.",
      image: { src: `${CDN}/home/culture2.jpg`, alt: "JETOUR SUV on a rocky coastline above turquoise water" },
    },
    {
      title: "Brand Identity",
      text: "We go beyond spreading travel culture — we turn every expedition into a legacy worth passing down.",
      image: { src: `${CDN}/home/enterprise_long.jpg`, alt: "JETOUR SUV beneath a natural stone arch" },
    },
    {
      title: "Adventure",
      text: "We go beyond focusing on the present — we contribute to a sustainable future for humanity, sharing the beauty of the journey with millions of travelers.",
      image: { src: `${CDN}/home/culture4.jpg`, alt: "JETOUR SUV on a savanna track with cheetahs nearby" },
    },
  ],
};

/* ── Travel+ Technology ────────────────────────────────────────────────── */
export const technology = {
  eyebrow: "Travel+ Technology",
  heading: "Engineered for the journey.",
  intro: "Four disciplines shape every JETOUR. Select a category to see how each model applies it.",
  categories: [
    {
      id: "hybrid" as TechCategoryId,
      title: "Advanced Hybrid Technology",
      summary: "Plug-in hybrid powertrains with hybrid-dedicated engines and transmissions, built for efficiency and range on long journeys.",
      image: { src: `${CDN}/vehicles/cars/T2iDM/p2_1.png`, alt: "JETOUR hybrid-specific engine render" },
    },
    {
      id: "terrain" as TechCategoryId,
      title: "All-Terrain Performance",
      summary: "XWD intelligent four-wheel drive, multiple terrain modes and differential locking to keep traction on sand, mud, snow and rock.",
      image: { src: `${CDN}/vehicles/image/T2.png`, alt: "JETOUR T2 fording a mountain river" },
    },
    {
      id: "cockpit" as TechCategoryId,
      title: "Intelligent Cockpit",
      summary: "Large central screens, Snapdragon processing, voice control and driver assistance that keep the journey connected and calm.",
      image: { src: `${CDN}/vehicles/cars/T1iDM/p3_1.jpg`, alt: "JETOUR T1 i-DM cockpit with 15.6-inch touchscreen" },
    },
    {
      id: "comfort" as TechCategoryId,
      title: "Premium Comfort",
      summary: "Quiet, spacious cabins with multi-function seats, climate control and adaptive suspension for comfort over every distance.",
      image: { src: `${CDN}/vehicles/cars/g700/p4_1.png`, alt: "JETOUR G700 rear cabin with premium seats" },
    },
  ],
};

/* ── Media Center (max. 3 featured items shown) ────────────────────────── */
export const media = {
  eyebrow: "Media Center",
  heading: "News & brand events.",
  maxItems: 3,
  items: [
    {
      id: "fan-festival-honors",
      date: "2026-11-21",
      title: "Journeyed by Passion: JETOUR Global Fan Festival Honors Travelers Worldwide",
      excerpt: "Nearly 800 users, guests and media gathered in Rio de Janeiro as the Travel+ strategy arrived in Brazil.",
      body: [
        "JETOUR held its “Journeyed by Passion” Global User Fan Festival in Rio de Janeiro, bringing together owners, guests and media for modification culture, off-road experiences and co-creation exchanges.",
        "The festival is the annual reunion of JETOUR travelers. Since its founding in 2018, the brand has entered more than 100 countries and regions, and owner-founded clubs have hosted thousands of user events.",
      ],
      image: { src: "https://jetourglobal.com/data/cms/archive/202611(3)/root1795222185201654.jpg", alt: "JETOUR Global Fan Festival in Rio de Janeiro" },
      source: "https://jetourglobal.com/news/detail?id=11926",
    },
    {
      id: "fan-festival-lineup",
      date: "2026-11-20",
      title: "From Custom Builds to Off-Road Test Drives, JETOUR's Fan Festival in Brazil Showcases a Diverse Lineup",
      excerpt: "Owners and media drove the T1, T2 and G700 over sand, mud and steep slopes.",
      body: [
        "At the Nilton Santos Olympic Stadium, JETOUR displayed official and owner-modified G700, T1 and T2 builds — from personalised exteriors to off-road and outdoor travel setups.",
        "Media and owner representatives then took the T1, T2 and G700 onto an all-terrain course of sand, mud and steep slopes.",
      ],
      image: { src: "https://jetourglobal.com/data/cms/archive/202611(3)/root1795157296701074.jpg", alt: "JETOUR vehicles on an off-road course in Brazil" },
      source: "https://jetourglobal.com/news/detail?id=11923",
    },
    {
      id: "fan-festival-brazil",
      date: "2026-11-19",
      title: "JETOUR Global Fan Festival Comes to Brazil, Strengthening Local Presence",
      excerpt: "From product and network expansion to community engagement, JETOUR builds for the long term in Brazil.",
      body: [
        "The 2026 Global Fan Festival opened in Rio de Janeiro alongside the delivery ceremony for Brazil's first G700 and the launch of the JETOUR Club program in Brazil.",
        "Since entering Brazil in March 2026, JETOUR Brazil has continued to expand its lineup, sales network and localization.",
      ],
      image: { src: "https://jetourglobal.com/data/cms/archive/202611(3)/root1795141131336875.png", alt: "JETOUR Global Fan Festival opening in Brazil" },
      source: "https://jetourglobal.com/news/detail?id=11920",
    },
  ],
};

/* ── Contact / Enquiry ─────────────────────────────────────────────────── */
export const contact = {
  eyebrow: "Connect Us",
  heading: "Hi, we're JETOUR. Let's connect.",
  intro: "Tell us about your journey. A JETOUR specialist will respond to your enquiry.",
  enquiryTypes: ["Test Drive", "Vehicle Information", "Service & Maintenance", "Fleet & Business", "Other"],
  privacyText: "I agree to the processing of my personal data in accordance with the Privacy Policy, for the purpose of responding to this enquiry.",
  /**
   * Public HTTPS endpoint that accepts a JSON POST (e.g. Formspree, Web3Forms, a CRM webhook).
   * The site is static, so this must be a third-party service. Set NEXT_PUBLIC_ENQUIRY_ENDPOINT
   * at build time; when empty, the form says online enquiries are unavailable.
   */
  endpoint: process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT || "",
};

/* ── Gallery ───────────────────────────────────────────────────────────── */
export const gallery = {
  label: "Gallery",
  hoverDelayMs: 3000,
  intervalMs: 3000,
  /** Extra brand imagery appended after vehicle photography. */
  brandImages: [
    { src: `${CDN}/home/culture1.jpg`, alt: "JETOUR SUV beside a snow-covered mountain lake", kind: "Lifestyle" as const },
    { src: `${CDN}/home/enterprise_long.jpg`, alt: "JETOUR SUV beneath a natural stone arch", kind: "Lifestyle" as const },
  ],
};

/* ── Footer (single editable object) ───────────────────────────────────── */
export const footer = {
  company: {
    name: "JETOUR Auto",            // ← client's legal entity / dealership name
    address: "Your showroom address, City, Country",
    phone: "+00 000 000 0000",
    email: "info@example.com",
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/jetourauto/" },
    { label: "Facebook", href: "https://www.facebook.com/JETOUR.Global" },
    { label: "TikTok", href: "https://www.tiktok.com/@jetour.auto" },
    { label: "X", href: "https://twitter.com/JETOUR_Global" },
    { label: "YouTube", href: "https://www.youtube.com/@jetourauto" },
  ],
  legal: [
    { label: "Privacy Policy", href: "https://jetourglobal.com/privacypolicy" },
    { label: "Terms", href: "#" }, // ← link the client's terms page
    { label: "Contact", href: "#contact" },
  ],
  copyright: `© ${new Date().getFullYear()} JETOUR Auto. All rights reserved.`,
};
