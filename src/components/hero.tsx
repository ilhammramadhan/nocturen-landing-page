"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Welcome to Nocturne Coffee"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={images.hero.blurDataURL}
          quality={85}
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Grain Texture Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <Badge
            variant="outline"
            className="mb-6 text-primary border-primary/50 px-4 py-1.5"
          >
            Open Until 2AM
          </Badge>
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          Where Night
          <br />
          <span className="text-primary">Meets Coffee</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          Specialty coffee crafted for the midnight hour. Experience the art of
          coffee in an intimate, late-night atmosphere.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          <Button asChild size="lg" className="text-base cursor-pointer">
            <Link href="#menu">Explore Menu</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base cursor-pointer"
          >
            <Link href="#location">Find Us</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      >
        <Link
          href="#about"
          className="flex items-center justify-center w-11 h-11 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer animate-bounce-arrow"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
