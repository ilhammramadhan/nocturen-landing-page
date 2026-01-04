import { Coffee } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative">
          <Coffee
            className="h-16 w-16 text-primary animate-pulse"
            aria-hidden="true"
          />
          {/* Steam animation */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
            <span className="w-1 h-4 bg-primary/40 rounded-full animate-steam1" />
            <span className="w-1 h-6 bg-primary/30 rounded-full animate-steam2" />
            <span className="w-1 h-4 bg-primary/40 rounded-full animate-steam3" />
          </div>
        </div>

        {/* Loading text */}
        <p className="mt-6 text-muted-foreground font-medium animate-pulse">
          Brewing your experience...
        </p>
      </div>
    </div>
  );
}
