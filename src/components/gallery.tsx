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
import { FadeIn } from "@/components/motion";
import { galleryImagesWithBlur } from "@/lib/images";

export function Gallery() {
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
            captured in time.
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
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden group cursor-pointer">
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
                      className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                      aria-hidden="true"
                    >
                      <p className="text-sm text-foreground">{image.alt}</p>
                    </div>
                    {/* Border */}
                    <div
                      className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-lg transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
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
          Swipe to see more
        </p>
      </div>
    </section>
  );
}
