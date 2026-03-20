export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Nursery Furniture",
    description:
      "Cribs, dressers, changing tables, and rocking chairs from Europe's finest makers.",
    icon: "Armchair",
  },
  {
    id: "2",
    name: "Feeding & Nutrition",
    description:
      "Bottles, breast pumps, high chairs, and organic food essentials.",
    icon: "UtensilsCrossed",
  },
  {
    id: "3",
    name: "Travel & Mobility",
    description:
      "Strollers, car seats, carriers, and travel bags for families on the go.",
    icon: "Navigation",
  },
  {
    id: "4",
    name: "Safety & Health",
    description:
      "Monitors, gates, thermometers, and certified safety products.",
    icon: "ShieldCheck",
  },
  {
    id: "5",
    name: "Clothing & Accessories",
    description:
      "Organic cotton garments, shoes, and accessories for newborns to toddlers.",
    icon: "Shirt",
  },
  {
    id: "6",
    name: "Toys & Development",
    description:
      "Sensory toys, play gyms, and learning tools designed by child experts.",
    icon: "Star",
  },
];
