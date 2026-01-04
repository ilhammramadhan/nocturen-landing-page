"use client";

import { MapPin, Clock, Phone, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Monday - Thursday", time: "4PM - 2AM" },
  { day: "Friday - Saturday", time: "4PM - 3AM" },
  { day: "Sunday", time: "4PM - 12AM" },
];

const contactInfo = {
  address: "Jl. Kemang Raya No. 45, South Jakarta, Indonesia 12730",
  phone: "+62 21 7890 1234",
  email: "hello@nocturnecoffee.id",
};

export function Location() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(contactInfo.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Us
          </h2>
          <Separator className="w-20 bg-primary h-1 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visit us in the heart of Kemang. We&apos;re waiting to serve you the
            perfect cup.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="relative aspect-square lg:aspect-auto rounded-lg overflow-hidden bg-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.044!2d106.814!3d-6.260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMzYuMCJTIDEwNsKwNDgnNTAuNCJF!5e0!3m2!1sen!2sid!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px", filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nocturne Coffee Location"
            />
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            {/* Address Card */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-muted-foreground">{contactInfo.address}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyAddress}
                    className="shrink-0 cursor-pointer"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {hours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-muted-foreground">
                        {schedule.day}
                      </span>
                      <span className="text-primary font-medium">
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Phone className="h-5 w-5 text-primary" />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <Phone className="h-4 w-4" />
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <Mail className="h-4 w-4" />
                  {contactInfo.email}
                </a>
              </CardContent>
            </Card>

            {/* CTA */}
            <Button asChild size="lg" className="w-full cursor-pointer">
              <a
                href="https://goo.gl/maps/xxxxx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
