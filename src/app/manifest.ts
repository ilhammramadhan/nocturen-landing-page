import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nocturne Coffee",
    short_name: "Nocturne",
    description: "Specialty coffee for the midnight hour. Experience artisan coffee in an intimate, late-night atmosphere.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#D4A574",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["food", "lifestyle"],
    lang: "en",
  };
}
