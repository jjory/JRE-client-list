import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PopularAreas } from "@/components/home/PopularAreas";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Areas" });
  return { title: t("heading"), description: t("subheading") };
}

export default async function AreasHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PopularAreas />;
}
