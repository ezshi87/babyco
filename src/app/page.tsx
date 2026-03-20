import HeroSection from "@/components/home/HeroSection";
import BrandsStrip from "@/components/home/BrandsStrip";
import ProductCategories from "@/components/home/ProductCategories";
import WhyBabyCo from "@/components/home/WhyBabyCo";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandsStrip />
      <ProductCategories />
      <WhyBabyCo />
      <CTABanner />
    </>
  );
}
