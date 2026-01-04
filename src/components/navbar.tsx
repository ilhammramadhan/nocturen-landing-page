"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="container mx-auto px-4 h-20 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
          aria-label="Nocturne Coffee - Home"
        >
          <Coffee className="h-8 w-8 text-primary" aria-hidden="true" />
          <span className="font-serif text-xl font-bold text-foreground">
            Nocturne
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8" role="menubar">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="menuitem"
              className={cn(
                "relative text-sm font-medium transition-colors duration-200 cursor-pointer py-1",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm",
                activeSection === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
              aria-current={
                activeSection === link.href.replace("#", "") ? "page" : undefined
              }
            >
              {link.label}
              {/* Active indicator */}
              {activeSection === link.href.replace("#", "") && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild className="cursor-pointer">
            <Link href="#location">Visit Us</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] bg-card"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Logo */}
              <div className="flex items-center gap-2 mb-8 pt-4">
                <Coffee className="h-8 w-8 text-primary" aria-hidden="true" />
                <span className="font-serif text-xl font-bold">Nocturne</span>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col gap-4" role="navigation">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-lg font-medium transition-colors py-2 cursor-pointer",
                        activeSection === link.href.replace("#", "")
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-auto pb-8">
                <SheetClose asChild>
                  <Button asChild className="w-full cursor-pointer">
                    <Link href="#location">Visit Us</Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
