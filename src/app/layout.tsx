import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { jsonLdSchemas } from "@/lib/schema";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const baseUrl = "https://nocturnecoffee.id";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Nocturne Coffee | Specialty Coffee for the Midnight Hour",
    template: "%s | Nocturne Coffee",
  },
  description:
    "Experience specialty coffee crafted for night owls. Open late until 2AM, serving artisan coffee in an intimate, late-night atmosphere in South Jakarta, Kemang.",
  keywords: [
    "coffee shop",
    "specialty coffee",
    "late night cafe",
    "Jakarta coffee",
    "Kemang",
    "artisan coffee",
    "night cafe",
    "espresso bar",
    "pour over coffee",
    "coffee shop Jakarta",
  ],
  authors: [{ name: "Nocturne Coffee" }],
  creator: "Nocturne Coffee",
  publisher: "Nocturne Coffee",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Nocturne Coffee",
    title: "Nocturne Coffee | Where Night Meets Coffee",
    description:
      "Specialty coffee crafted for the midnight hour. Experience the art of coffee in an intimate, late-night atmosphere. Open until 2AM.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nocturne Coffee - Specialty Coffee for the Midnight Hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nocturne Coffee | Where Night Meets Coffee",
    description:
      "Specialty coffee crafted for the midnight hour. Open until 2AM in Kemang, South Jakarta.",
    images: ["/images/og-image.jpg"],
    creator: "@nocturnecoffee",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#D4A574",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  category: "food & drink",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Preload hero image for faster LCP */}
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
          fetchPriority="high"
        />
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchemas),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to content
        </a>
        {children}
        <Toaster position="top-center" richColors />

        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
