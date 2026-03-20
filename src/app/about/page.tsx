import PageHero from "@/components/ui/PageHero";
import CompanyStory from "@/components/about/CompanyStory";
import StatsRow from "@/components/about/StatsRow";
import ValuesGrid from "@/components/about/ValuesGrid";
import CTABanner from "@/components/home/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Baby Co.",
  description:
    "Learn about Baby Co.'s story, mission, and values. 15+ years connecting premium baby brands with retailers and wholesalers worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Passionate About Baby Products"
        subtitle="For over 15 years, Baby Co. has been the trusted bridge between the world's finest baby brands and the retailers who share our commitment to quality."
      />
      <StatsRow />
      <CompanyStory />
      <ValuesGrid />
      <CTABanner />
    </>
  );
}
