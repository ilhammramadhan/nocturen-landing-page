"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop",
    alt: "Coffee shop interior with warm ambient lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2070&auto=format&fit=crop",
    alt: "Freshly brewed latte with art",
  },
  {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=2070&auto=format&fit=crop",
    alt: "Barista at work",
  },
  {
    src: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=2012&auto=format&fit=crop",
    alt: "Night exterior of coffee shop",
  },
  {
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2061&auto=format&fit=crop",
    alt: "Coffee beans close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop",
    alt: "Coffee cup on table",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <Separator className="w-20 bg-primary h-1 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Step inside Nocturne. Experience our atmosphere through moments
            captured in time.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-sm text-foreground">{image.alt}</p>
                  </div>
                  {/* Border */}
                  <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-lg transition-colors duration-300" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 cursor-pointer" />
          <CarouselNext className="hidden md:flex -right-12 cursor-pointer" />
        </Carousel>

        {/* Mobile indicator */}
        <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">
          Swipe to see more
        </p>
      </div>
    </section>
  );
}
