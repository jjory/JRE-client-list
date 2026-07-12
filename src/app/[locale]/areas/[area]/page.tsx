import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { AREAS, getAreaBySlug, LISTINGS_URL } from "@/lib/site";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    AREAS.map((a) => ({ locale, area: a.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; area: string }>;
}): Promise<Metadata> {
  const { locale, area } = await params;
  const entry = getAreaBySlug(area);
  if (!entry) return {};
  const tName = await getTranslations({ locale, namespace: "Areas.names" });
  const t = await getTranslations({ locale, namespace: "AreaDetail" });
  return {
    title: tName(entry.key),
    description: t(`items.${entry.key}.intro`),
  };
}

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ locale: string; area: string }>;
}) {
  const { locale, area } = await params;
  const entry = getAreaBySlug(area);
  if (!entry) notFound();
  setRequestLocale(locale);

  const tName = await getTranslations({ locale, namespace: "Areas.names" });
  const t = await getTranslations({ locale, namespace: "AreaDetail" });
  const highlights = t.raw(`items.${entry.key}.highlights`) as string[];

  return (
    <article>
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <Link
            href="/areas"
            className="text-sm text-brand-foreground/80 hover:text-brand-foreground"
          >
            {t("backToAreas")}
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {tName(entry.key)}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <p className="text-lg text-muted-foreground">
          {t(`items.${entry.key}.intro`)}
        </p>

        <h2 className="mt-12 text-xl font-semibold text-foreground">
          {t("highlightsHeading")}
        </h2>
        <ul className="mt-4 space-y-3">
          {highlights.map((h, i) => (
            <li key={i} className="flex gap-3 text-foreground">
              <span aria-hidden className="mt-1 font-bold text-brand">
                ✓
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href={LISTINGS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            {t("listingsCta")}
          </a>
        </div>
      </section>
    </article>
  );
}
