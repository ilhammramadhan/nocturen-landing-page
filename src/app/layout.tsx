import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
