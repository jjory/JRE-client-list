import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PopularAreas } from "@/components/home/PopularAreas";
import { LatestPosts } from "@/components/home/LatestPosts";
import { TrustStats } from "@/components/home/TrustStats";
import { ContactChannels } from "@/components/home/ContactChannels";
import { AboutSummary } from "@/components/home/AboutSummary";
import { Faq } from "@/components/home/Faq";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ServicesSection />
      <PopularAreas />
      <LatestPosts />
      <TrustStats />
      <ContactChannels />
      <AboutSummary />
      <Faq />
    </>
  );
}
