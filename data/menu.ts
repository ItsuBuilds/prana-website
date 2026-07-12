export type MenuItem = {
  id: number;
  name: string;
  category: string;
  subCategory?: string;
  description: string;
  price: number;
  image?: string;
  featured?: boolean;
  veg?: boolean;
};

export const menu: MenuItem[] = [
  {
    id: 1,
    name: "Berry Martini",
    category: "Drinks",
    subCategory: "Signature Cocktails",
    description: "Vodka • Blueberry • Triple Sec • Lime Juice",
    price: 490,
    image: "/images/about/cocktail.webp",
    featured: true,
    veg: true,
  },

  {
    id: 2,
    name: "Smokey Date",
    category: "Drinks",
    subCategory: "Signature Cocktails",
    description: "Whisky • Passionfruit • Apple Juice • Rosemary Smoke",
    price: 490,
    image: "/images/about/cocktail.webp",
    featured: true,
    veg: true,
  },

  {
    id: 3,
    name: "Prana Butter Chicken",
    category: "Indian",
    description:
      "Tandoor roasted chicken cooked in buttery tomato gravy.",
    price: 410,
    image: "/images/about/food.webp",
    featured: true,
    veg: false,
  },

  {
    id: 4,
    name: "Basque Cheesecake",
    category: "Desserts",
    description:
      "Classic cheesecake with a caramelized top and seasonal fruits.",
    price: 290,
    image: "/images/about/food.webp",
    featured: true,
    veg: true,
  },
];