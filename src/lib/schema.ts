import { businessInfo } from "./data";

// JSON-LD Structured Data for CafeOrCoffeeShop
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "@id": "https://nocturnecoffee.id/#business",
  name: businessInfo.name,
  description: businessInfo.tagline,
  url: "https://nocturnecoffee.id",
  telephone: businessInfo.phone,
  email: businessInfo.email,
  image: [
    "https://nocturnecoffee.id/images/hero.jpg",
    "https://nocturnecoffee.id/images/about.jpg",
  ],
  logo: "https://nocturnecoffee.id/images/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Kemang Raya No. 45",
    addressLocality: "South Jakarta",
    addressRegion: "DKI Jakarta",
    postalCode: "12730",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.2600,
    longitude: 106.8140,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "16:00",
      closes: "02:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "16:00",
      closes: "03:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "16:00",
      closes: "00:00",
    },
  ],
  servesCuisine: ["Coffee", "Pastries", "Light Snacks"],
  priceRange: "$$",
  currenciesAccepted: "IDR",
  paymentAccepted: "Cash, Credit Card, Debit Card, Digital Wallet",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Outdoor Seating", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wheelchair Accessible", value: true },
  ],
  sameAs: [
    businessInfo.social.instagram,
    businessInfo.social.facebook,
    businessInfo.social.twitter,
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "324",
    bestRating: "5",
    worstRating: "1",
  },
};

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://nocturnecoffee.id/#organization",
  name: businessInfo.name,
  url: "https://nocturnecoffee.id",
  logo: "https://nocturnecoffee.id/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: businessInfo.phone,
    contactType: "customer service",
    availableLanguage: ["Indonesian", "English"],
  },
  sameAs: [
    businessInfo.social.instagram,
    businessInfo.social.facebook,
    businessInfo.social.twitter,
  ],
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nocturnecoffee.id/#website",
  name: businessInfo.name,
  url: "https://nocturnecoffee.id",
  description: `${businessInfo.name} - ${businessInfo.tagline}`,
  publisher: {
    "@id": "https://nocturnecoffee.id/#organization",
  },
};

// Combine all schemas
export const jsonLdSchemas = [
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
];
