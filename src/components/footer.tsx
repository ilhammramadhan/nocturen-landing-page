"use client";

import Link from "next/link";
import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <Link href="#home" className="flex items-center gap-2 mb-4 cursor-pointer">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="font-serif text-2xl font-bold text-foreground">
                Nocturne
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Specialty coffee for the midnight hour. Where night meets coffee,
              and conversations flow freely.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
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
              <p>Monday - Thursday: 4PM - 2AM</p>
              <p>Friday - Saturday: 4PM - 3AM</p>
              <p>Sunday: 4PM - 12AM</p>
            </div>
            <Separator className="my-4 bg-border" />
            <p className="text-sm text-muted-foreground">
              Jl. Kemang Raya No. 45
              <br />
              South Jakarta, Indonesia
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="my-8 bg-border" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Nocturne Coffee. All rights reserved.</p>
          <p>
            Crafted with love for night owls everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
