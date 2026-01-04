"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/motion";
import { galleryImagesWithBlur } from "@/lib/images";

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Prepare slides for lightbox
  const slides = galleryImagesWithBlur.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));

  return (
    <section id="gallery" className="py-24 bg-card" aria-labelledby="gallery-heading">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2
            id="gallery-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Gallery
          </h2>
          <Separator className="w-20 bg-primary h-1 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Step inside Nocturne. Experience our atmosphere through moments
            captured in time. Click any image to view fullscreen.
          </p>
        </FadeIn>

        {/* Carousel */}
        <FadeIn delay={0.2}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
            aria-label="Gallery images carousel"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImagesWithBlur.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <button
                    onClick={() => openLightbox(index)}
                    className="relative aspect-[4/5] rounded-lg overflow-hidden group cursor-pointer w-full block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    aria-label={`View ${image.alt} in fullscreen`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL={image.blurDataURL}
                    />
                    {/* Overlay on hover */}
                    <div
                      className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <div className="text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mx-auto mb-2 text-primary"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                          <path d="M11 8v6" />
                          <path d="M8 11h6" />
                        </svg>
                        <p className="text-sm text-foreground">Click to zoom</p>
                      </div>
                    </div>
                    {/* Border */}
                    <div
                      className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-lg transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="hidden md:flex -left-12 cursor-pointer"
              aria-label="Previous image"
            />
            <CarouselNext
              className="hidden md:flex -right-12 cursor-pointer"
              aria-label="Next image"
            />
          </Carousel>
        </FadeIn>

        {/* Mobile indicator */}
        <p
          className="text-center text-muted-foreground text-sm mt-6 md:hidden"
          aria-hidden="true"
        >
          Swipe to see more, tap to zoom
        </p>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Zoom, Fullscreen]}
        styles={{
          container: { backgroundColor: "rgba(10, 10, 10, 0.95)" },
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        carousel={{
          finite: false,
        }}
        animation={{
          fade: 300,
          swipe: 300,
        }}
      />
    </section>
  );
}
