"use client";

import { useEffect } from "react";
import { Coffee, RefreshCw, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

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

        {/* Error Icon */}
        <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl" role="img" aria-label="Error">
            ☕
          </span>
        </div>

        {/* Message */}
        <h1 className="font-serif text-2xl font-semibold text-foreground mb-4">
          Something went wrong
        </h1>
        <p className="text-muted-foreground mb-2">
          Looks like our coffee machine hit a snag. Don&apos;t worry, our
          baristas are on it!
        </p>
        {error.digest && (
          <p className="text-xs text-muted-foreground/60 mb-8 font-mono">
            Error ID: {error.digest}
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="cursor-pointer">
            <RefreshCw className="h-4 w-4 mr-2" aria-hidden="true" />
            Try Again
          </Button>
          <Button asChild variant="outline" className="cursor-pointer">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" aria-hidden="true" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
