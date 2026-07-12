import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { SERVICES, getServiceBySlug, LISTINGS_URL } from "@/lib/site";

// 로케일 × 서비스 슬러그 조합을 모두 정적 생성
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SERVICES.map((s) => ({ locale, service: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Metadata> {
  const { locale, service } = await params;
  const entry = getServiceBySlug(service);
  if (!entry) return {};
  const tLabel = await getTranslations({ locale, namespace: "Services" });
  const tDetail = await getTranslations({ locale, namespace: "ServiceDetail" });
  return {
    title: tLabel(entry.key),
    description: tDetail(`items.${entry.key}.tagline`),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service } = await params;
  const entry = getServiceBySlug(service);
  if (!entry) notFound();
  setRequestLocale(locale);

  const tLabel = await getTranslations({ locale, namespace: "Services" });
  const t = await getTranslations({ locale, namespace: "ServiceDetail" });
  const features = t.raw(`items.${entry.key}.features`) as string[];

  return (
    <article>
      {/* 히어로 */}
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <Link
            href="/services"
            className="text-sm text-brand-foreground/80 hover:text-brand-foreground"
          >
            {t("backToServices")}
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {tLabel(entry.key)}
          </h1>
          <p className="mt-3 text-lg text-brand-foreground/85">
            {t(`items.${entry.key}.tagline`)}
          </p>
        </div>
      </section>

      {/* 본문 */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <p className="text-lg text-muted-foreground">
          {t(`items.${entry.key}.intro`)}
        </p>

        <h2 className="mt-12 text-xl font-semibold text-foreground">
          {t("featuresHeading")}
        </h2>
        <ul className="mt-4 space-y-3">
          {features.map((f, i) => (
            <li key={i} className="flex gap-3 text-foreground">
              <span aria-hidden className="mt-1 font-bold text-brand">
                ✓
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            {t("ctaContact")}
          </Link>
          <a
            href={LISTINGS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand"
          >
            {t("ctaListings")}
          </a>
        </div>
      </section>
    </article>
  );
}
