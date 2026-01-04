import Link from "next/link";
import { Coffee, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Coffee className="h-12 w-12 text-primary" aria-hidden="true" />
          <span className="font-serif text-3xl font-bold text-foreground">
            Nocturne
          </span>
        </div>

        {/* 404 Number */}
        <h1 className="font-serif text-8xl font-bold text-primary mb-4">404</h1>

        {/* Message */}
        <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          Looks like this page took a coffee break and never came back.
          Let&apos;s get you back to somewhere warm.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="cursor-pointer">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" aria-hidden="true" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="cursor-pointer">
            <Link href="/#menu">
              <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
              View Menu
            </Link>
          </Button>
        </div>

        {/* Decorative coffee cup */}
        <div className="mt-16 text-6xl opacity-20" aria-hidden="true">
          ☕
        </div>
      </div>
    </div>
  );
}
