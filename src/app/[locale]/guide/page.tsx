import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { GUIDE_TOPICS } from "@/lib/site";
import { SectionHeading } from "@/components/home/SectionHeading";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "GuidePage" });
  return { title: t("heading"), description: t("subheading") };
}

export default async function GuideHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "GuidePage" });

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading title={t("heading")} subtitle={t("subheading")} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDE_TOPICS.map((g) => (
          <Link
            key={g.key}
            href={`/guide/${g.slug}`}
            className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {t(`items.${g.key}.title`)}
            </h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              {t(`items.${g.key}.intro`)}
            </p>
            <span className="mt-4 text-sm font-medium text-brand group-hover:underline">
              {t("readMore")} →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
