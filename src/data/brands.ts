export interface Brand {
  id: string;
  name: string;
  country: string;
  description: string;
  logoSrc: string;
  category: string;
}

export const brands: Brand[] = [
  {
    id: "1",
    name: "PureCrib",
    country: "Germany",
    description:
      "Premium nursery furniture crafted from sustainably sourced wood. Known for clean Scandinavian design and exceptional safety standards.",
    logoSrc: "/brands/brand-1.svg",
    category: "Nursery Furniture",
  },
  {
    id: "2",
    name: "LittleSips",
    country: "Sweden",
    description:
      "Award-winning feeding and nutrition products designed for every stage of a baby's development, from first bottle to toddler cup.",
    logoSrc: "/brands/brand-2.svg",
    category: "Feeding & Nutrition",
  },
  {
    id: "3",
    name: "SoftSteps",
    country: "Denmark",
    description:
      "Ethically made baby clothing in certified organic cotton. Gentle on sensitive skin and thoughtfully designed for easy dressing.",
    logoSrc: "/brands/brand-3.svg",
    category: "Clothing & Accessories",
  },
  {
    id: "4",
    name: "RoamLight",
    country: "Netherlands",
    description:
      "Innovative travel systems and lightweight strollers built for modern families on the move. Trusted by parents in over 25 countries.",
    logoSrc: "/brands/brand-4.svg",
    category: "Travel & Mobility",
  },
  {
    id: "5",
    name: "SafeNest",
    country: "France",
    description:
      "Industry-leading baby monitors and safety devices that give parents peace of mind. Certified to the highest EU safety standards.",
    logoSrc: "/brands/brand-5.svg",
    category: "Safety & Health",
  },
  {
    id: "6",
    name: "WonderPlay",
    country: "Japan",
    description:
      "Developmentally focused toys and sensory play kits designed by child development experts to stimulate curiosity and growth.",
    logoSrc: "/brands/brand-6.svg",
    category: "Toys & Development",
  },
  {
    id: "7",
    name: "CloudSleep",
    country: "Finland",
    description:
      "Luxury sleep solutions including mattresses, sleep sacks, and bedding. Hypoallergenic, breathable, and tested for optimal baby sleep.",
    logoSrc: "/brands/brand-7.svg",
    category: "Nursery Furniture",
  },
  {
    id: "8",
    name: "BathBuddy",
    country: "Italy",
    description:
      "Beautifully designed bath and skincare essentials made from natural, dermatologist-tested ingredients safe for newborns.",
    logoSrc: "/brands/brand-8.svg",
    category: "Safety & Health",
  },
];
