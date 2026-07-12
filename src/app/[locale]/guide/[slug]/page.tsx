import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { GUIDE_TOPICS, getGuideTopicBySlug } from "@/lib/site";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    GUIDE_TOPICS.map((g) => ({ locale, slug: g.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const entry = getGuideTopicBySlug(slug);
  if (!entry) return {};
  const t = await getTranslations({ locale, namespace: "GuidePage" });
  return {
    title: t(`items.${entry.key}.title`),
    description: t(`items.${entry.key}.intro`),
  };
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const entry = getGuideTopicBySlug(slug);
  if (!entry) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "GuidePage" });
  const steps = t.raw(`items.${entry.key}.steps`) as string[];

  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <Link
        href="/guide"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        {t("backToGuide")}
      </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
        {t(`items.${entry.key}.title`)}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        {t(`items.${entry.key}.intro`)}
      </p>

      <h2 className="mt-10 text-xl font-semibold text-foreground">
        {t("stepsHeading")}
      </h2>
      <ol className="mt-4 space-y-3">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3 text-foreground">
            <span
              aria-hidden
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-brand-foreground"
            >
              {i + 1}
            </span>
            <span className="pt-0.5">{s}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}
