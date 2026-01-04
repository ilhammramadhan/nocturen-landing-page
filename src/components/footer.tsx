"use client";

import Link from "next/link";
import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/motion";
import { navLinks, businessInfo } from "@/lib/data";

const socialLinks = [
  { href: businessInfo.social.instagram, icon: Instagram, label: "Instagram" },
  { href: businessInfo.social.facebook, icon: Facebook, label: "Facebook" },
  { href: businessInfo.social.twitter, icon: Twitter, label: "Twitter" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-background border-t border-border"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 py-16">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Column */}
            <div>
              <Link
                href="#home"
                className="flex items-center gap-2 mb-4 cursor-pointer"
                aria-label="Nocturne Coffee - Home"
              >
                <Coffee className="h-8 w-8 text-primary" aria-hidden="true" />
                <span className="font-serif text-2xl font-bold text-foreground">
                  Nocturne
                </span>
              </Link>
              <p className="text-muted-foreground mb-6">
                {businessInfo.tagline}. Where night meets coffee, and
                conversations flow freely.
              </p>
              {/* Social Links */}
              <div className="flex gap-4" role="list" aria-label="Social media links">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    aria-label={`Follow us on ${social.label}`}
                    role="listitem"
                  >
                    <social.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-2" aria-label="Footer navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                {businessInfo.hours.map((schedule, index) => (
                  <p key={index}>
                    {schedule.day}: {schedule.time}
                  </p>
                ))}
              </div>
              <Separator className="my-4 bg-border" />
              <address className="text-sm text-muted-foreground not-italic">
                Jl. Kemang Raya No. 45
                <br />
                South Jakarta, Indonesia
              </address>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Bar */}
        <Separator className="my-8 bg-border" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Nocturne Coffee. All rights reserved.</p>
          <p>Crafted with love for night owls everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
