import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";

// Dynamic imports for below-the-fold components (reduces initial bundle size)
const Menu = dynamic(() => import("@/components/menu").then((mod) => mod.Menu), {
  loading: () => <MenuSkeleton />,
});

const Gallery = dynamic(
  () => import("@/components/gallery").then((mod) => mod.Gallery),
  {
    loading: () => <SectionSkeleton title="Gallery" />,
  }
);

const Location = dynamic(
  () => import("@/components/location").then((mod) => mod.Location),
  {
    loading: () => <SectionSkeleton title="Find Us" />,
  }
);

const Contact = dynamic(
  () => import("@/components/contact").then((mod) => mod.Contact),
  {
    loading: () => <SectionSkeleton title="Get in Touch" />,
  }
);

const Footer = dynamic(
  () => import("@/components/footer").then((mod) => mod.Footer)
);

// Skeleton components for loading states
function MenuSkeleton() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-12 w-48 bg-card rounded mx-auto mb-4 animate-pulse" />
          <div className="h-1 w-20 bg-primary/30 mx-auto mb-6" />
          <div className="h-6 w-96 max-w-full bg-card rounded mx-auto animate-pulse" />
        </div>
        <div className="flex justify-center gap-2 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-10 w-20 bg-card rounded animate-pulse" />
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-32 bg-card rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionSkeleton({ title }: { title: string }) {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground/20 mb-4">
            {title}
          </h2>
          <div className="h-1 w-20 bg-primary/30 mx-auto mb-6" />
          <div className="h-6 w-96 max-w-full bg-muted rounded mx-auto animate-pulse" />
        </div>
        <div className="h-64 bg-muted rounded-lg animate-pulse max-w-4xl mx-auto" />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
