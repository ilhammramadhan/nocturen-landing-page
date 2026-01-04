"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

function useInView(options: { once?: boolean; margin?: string } = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.once) {
            observer.unobserve(element);
          }
        } else if (!options.once) {
          setIsInView(false);
        }
      },
      {
        rootMargin: options.margin || "-100px",
        threshold: 0.1,
      }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [options.once, options.margin]);

  return { ref, isInView };
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: FadeInProps) {
  const { ref, isInView } = useInView({ once, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const directionClass: Record<string, string> = {
    up: "animate-fade-in-up",
    down: "animate-fade-in-down",
    left: "animate-fade-in-left",
    right: "animate-fade-in-right",
    none: "animate-fade-in",
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? directionClass[direction] : "opacity-0"}`}
      style={{
        animationDelay: isInView ? `${delay}s` : undefined,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
}: StaggerContainerProps) {
  const { ref, isInView } = useInView({ once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className} data-in-view={isInView}>
      {children}
    </div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export function StaggerItem({ children, className = "", index = 0 }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const [parentInView, setParentInView] = useState(false);

  useEffect(() => {
    // Check if parent StaggerContainer is in view
    const checkParent = () => {
      const element = document.querySelector(`[data-in-view="true"]`);
      if (element) setParentInView(true);
    };

    // Use MutationObserver to detect changes
    const observer = new MutationObserver(checkParent);
    observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ["data-in-view"] });
    checkParent();

    return () => observer.disconnect();
  }, []);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={`${className} ${parentInView ? "animate-fade-in-up" : "opacity-0"}`}
      style={{
        animationDelay: parentInView ? `${index * 0.1}s` : undefined,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}

interface ScaleOnHoverProps {
  children: ReactNode;
  className?: string;
}

export function ScaleOnHover({
  children,
  className = "",
}: ScaleOnHoverProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={`${className} transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]`}
    >
      {children}
    </div>
  );
}
