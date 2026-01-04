"use client";

import Image from "next/image";
import { Coffee, Moon, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const features = [
  {
    icon: Coffee,
    title: "Specialty Beans",
    description:
      "Sourced from the finest farms across Ethiopia, Colombia, and Indonesia.",
  },
  {
    icon: Moon,
    title: "Night Ambiance",
    description:
      "Designed for those who find inspiration in the quiet hours after dark.",
  },
  {
    icon: Sparkles,
    title: "Artisan Craft",
    description:
      "Every cup is handcrafted with precision and passion by our expert baristas.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-card" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop"
                alt="Barista carefully crafting a pour-over coffee"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gold accent border */}
              <div
                className="absolute inset-0 border-2 border-primary/20 rounded-lg"
                aria-hidden="true"
              />
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeIn direction="right">
              <h2
                id="about-heading"
                className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
              >
                Our Story
              </h2>

              <Separator className="w-20 bg-primary h-1 mb-8" />

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Born from a love of late nights and exceptional coffee, Nocturne
                opened its doors for those who thrive when the sun goes down. We
                believe that the best conversations happen over midnight espressos
                and that creativity flows freely in the quiet hours.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Our beans are carefully selected from sustainable farms, roasted
                in small batches, and brewed to perfection. Every cup tells a
                story of craftsmanship and dedication.
              </p>
            </FadeIn>

            {/* Feature Cards */}
            <StaggerContainer className="grid gap-4" staggerDelay={0.15}>
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <Card className="bg-background border-border hover:border-primary/50 transition-colors cursor-pointer group">
                    <CardContent className="flex items-start gap-4 p-4">
                      <div
                        className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                        aria-hidden="true"
                      >
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
