"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: "Popular" | "New" | "Signature";
}

interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "coffee",
    label: "Coffee",
    items: [
      {
        name: "Midnight Espresso",
        description: "Bold double shot with rich crema, perfect for night owls",
        price: "28K",
        badge: "Signature",
      },
      {
        name: "Dark Roast Pour Over",
        description: "Single origin Ethiopian Yirgacheffe, notes of dark chocolate",
        price: "35K",
      },
      {
        name: "Nocturne Latte",
        description: "Espresso with velvety steamed milk and a hint of vanilla",
        price: "42K",
        badge: "Popular",
      },
      {
        name: "Cold Brew Black",
        description: "18-hour steeped, smooth and refreshing",
        price: "38K",
      },
      {
        name: "Affogato",
        description: "Vanilla gelato drowned in hot espresso",
        price: "45K",
      },
      {
        name: "Mocha Noir",
        description: "Dark chocolate meets espresso with steamed milk",
        price: "48K",
        badge: "New",
      },
    ],
  },
  {
    id: "non-coffee",
    label: "Non-Coffee",
    items: [
      {
        name: "Matcha Moonlight",
        description: "Ceremonial grade matcha with oat milk",
        price: "38K",
        badge: "Popular",
      },
      {
        name: "Hot Chocolate Noir",
        description: "Belgian dark chocolate, rich and velvety",
        price: "32K",
      },
      {
        name: "Chai Latte",
        description: "Spiced masala chai with steamed milk",
        price: "35K",
      },
      {
        name: "Golden Turmeric",
        description: "Turmeric, ginger, and honey with warm milk",
        price: "36K",
        badge: "New",
      },
      {
        name: "Fresh Juice",
        description: "Orange, watermelon, or mixed fruits",
        price: "30K",
      },
    ],
  },
  {
    id: "pastries",
    label: "Pastries",
    items: [
      {
        name: "Butter Croissant",
        description: "Flaky, golden, freshly baked daily",
        price: "25K",
        badge: "Popular",
      },
      {
        name: "Chocolate Tart",
        description: "Dark chocolate ganache on crisp pastry",
        price: "35K",
        badge: "New",
      },
      {
        name: "Almond Croissant",
        description: "Filled with almond cream, topped with sliced almonds",
        price: "32K",
      },
      {
        name: "Cinnamon Roll",
        description: "Soft, swirled with cinnamon and cream cheese glaze",
        price: "28K",
      },
      {
        name: "Banana Bread",
        description: "Moist, with walnuts and a hint of cinnamon",
        price: "22K",
      },
    ],
  },
  {
    id: "specials",
    label: "Specials",
    items: [
      {
        name: "Midnight Set",
        description: "Nocturne Latte + Croissant + Chocolate Tart",
        price: "85K",
        badge: "Popular",
      },
      {
        name: "Coffee Flight",
        description: "Taste 3 different single origins",
        price: "75K",
        badge: "Signature",
      },
      {
        name: "Date Night Package",
        description: "2 drinks + shared pastry platter for two",
        price: "150K",
      },
      {
        name: "Night Owl Bundle",
        description: "Large cold brew + any 2 pastries",
        price: "70K",
        badge: "New",
      },
    ],
  },
];

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
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Menu
          </h2>
          <Separator className="w-20 bg-primary h-1 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crafted with passion, served with love. Every item on our menu is
            designed to complement your late-night moments.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12 bg-card">
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-2">
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
                        <span className="text-primary font-bold text-lg">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
