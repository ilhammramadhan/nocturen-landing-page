import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
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

export const metadata: Metadata = {
  title: "Nocturne Coffee | Specialty Coffee for the Midnight Hour",
  description:
    "Experience specialty coffee crafted for night owls. Open late, serving artisan coffee in an intimate, late-night atmosphere in South Jakarta.",
  keywords: [
    "coffee shop",
    "specialty coffee",
    "late night cafe",
    "Jakarta coffee",
    "Kemang",
    "artisan coffee",
  ],
  authors: [{ name: "Nocturne Coffee" }],
  openGraph: {
    title: "Nocturne Coffee | Where Night Meets Coffee",
    description:
      "Specialty coffee crafted for the midnight hour. Experience the art of coffee in an intimate, late-night atmosphere.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
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
      </body>
    </html>
  );
}
