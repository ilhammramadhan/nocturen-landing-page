"use client";

import { MapPin, Clock, Phone, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { businessInfo } from "@/lib/data";

export function Location() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(businessInfo.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      console.error("Failed to copy address");
    }
  };

  return (
    <section
      id="location"
      className="py-24 bg-background"
      aria-labelledby="location-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2
            id="location-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Find Us
          </h2>
          <Separator className="w-20 bg-primary h-1 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visit us in the heart of Kemang. We&apos;re waiting to serve you the
            perfect cup.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <FadeIn direction="left">
            <div className="relative aspect-square lg:aspect-auto rounded-lg overflow-hidden bg-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.044!2d106.814!3d-6.260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMzYuMCJTIDEwNsKwNDgnNTAuNCJF!5e0!3m2!1sen!2sid!4v1"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: "400px",
                  filter: "invert(90%) hue-rotate(180deg)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nocturne Coffee Location Map"
              />
            </div>
          </FadeIn>

          {/* Info Cards */}
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {/* Address Card */}
            <StaggerItem>
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start justify-between gap-4">
                    <address className="text-muted-foreground not-italic">
                      {businessInfo.address}
                    </address>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={copyAddress}
                      className="shrink-0 cursor-pointer"
                      aria-label={copied ? "Address copied" : "Copy address"}
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-500" aria-hidden="true" />
                      ) : (
                        <Copy className="h-4 w-4" aria-hidden="true" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Hours Card */}
            <StaggerItem>
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                    Opening Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-2">
                    {businessInfo.hours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <dt className="text-muted-foreground">{schedule.day}</dt>
                        <dd className="text-primary font-medium">
                          {schedule.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* Contact Card */}
            <StaggerItem>
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>{businessInfo.phone}</span>
                  </a>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>{businessInfo.email}</span>
                  </a>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* CTA */}
            <StaggerItem>
              <Button asChild size="lg" className="w-full cursor-pointer">
                <a
                  href="https://maps.google.com/?q=Kemang+Raya+Jakarta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
