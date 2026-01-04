// Menu Data
export interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: "Popular" | "New" | "Signature";
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
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

// Gallery Data
export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop",
    alt: "Coffee shop interior with warm ambient lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2070&auto=format&fit=crop",
    alt: "Freshly brewed latte with art",
  },
  {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=2070&auto=format&fit=crop",
    alt: "Barista at work",
  },
  {
    src: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=2012&auto=format&fit=crop",
    alt: "Night exterior of coffee shop",
  },
  {
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2061&auto=format&fit=crop",
    alt: "Coffee beans close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop",
    alt: "Coffee cup on table",
  },
];

// Business Info
export const businessInfo = {
  name: "Nocturne Coffee",
  tagline: "Specialty coffee for the midnight hour",
  address: "Jl. Kemang Raya No. 45, South Jakarta, Indonesia 12730",
  phone: "+62 21 7890 1234",
  email: "hello@nocturnecoffee.id",
  hours: [
    { day: "Monday - Thursday", time: "4PM - 2AM" },
    { day: "Friday - Saturday", time: "4PM - 3AM" },
    { day: "Sunday", time: "4PM - 12AM" },
  ],
  social: {
    instagram: "https://instagram.com/nocturnecoffee",
    facebook: "https://facebook.com/nocturnecoffee",
    twitter: "https://twitter.com/nocturnecoffee",
  },
};

// Navigation Links
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];
