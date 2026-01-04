"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { menuData, type MenuItem } from "@/lib/data";

const badgeVariant = (badge: MenuItem["badge"]) => {
  switch (badge) {
    case "Popular":
      return "default";
    case "New":
      return "secondary";
    case "Signature":
      return "outline";
    default:
      return "default";
  }
};

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-background" aria-labelledby="menu-heading">
      <div className="container mx-auto px-4">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2
            id="menu-heading"
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Our Menu
          </h2>
          <Separator className="w-20 bg-primary h-1 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crafted with passion, served with love. Every item on our menu is
            designed to complement your late-night moments.
          </p>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.2}>
          <Tabs defaultValue="coffee" className="w-full">
            <TabsList
              className="grid w-full max-w-md mx-auto grid-cols-4 mb-12 bg-card"
              aria-label="Menu categories"
            >
              {menuData.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {menuData.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, index) => (
                    <StaggerItem key={index} index={index}>
                      <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group h-full">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {item.name}
                              </h3>
                              {item.badge && (
                                <Badge
                                  variant={badgeVariant(item.badge)}
                                  className="text-xs"
                                >
                                  {item.badge}
                                </Badge>
                              )}
                            </div>
                            <span className="text-primary font-bold text-lg whitespace-nowrap ml-2">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </TabsContent>
            ))}
          </Tabs>
        </FadeIn>
      </div>
    </section>
  );
}
