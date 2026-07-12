import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  return { title: t("heading"), description: t("lead") };
}

const COMPANY_ROWS = [
  { label: "labelCompany", value: "valueCompany" },
  { label: "labelBusiness", value: "valueBusiness" },
  { label: "labelLocation", value: "valueLocation" },
  { label: "labelLanguages", value: "valueLanguages" },
] as const;

const VALUE_KEYS = ["one", "two", "three"] as const;
const TESTIMONIAL_KEYS = ["one", "two"] as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  const tAbout = await getTranslations({ locale, namespace: "About" });
  const tNav = await getTranslations({ locale, namespace: "Nav" });

  return (
    <div>
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("heading")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-foreground/85">
            {t("lead")}
          </p>
        </div>
      </section>

      {/* 회사 정보 */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="text-xl font-semibold text-foreground">
          {t("companyHeading")}
        </h2>
        <dl className="mt-4 divide-y divide-border rounded-xl border border-border bg-background">
          {COMPANY_ROWS.map((row) => (
            <div key={row.label} className="grid grid-cols-3 gap-4 px-5 py-4">
              <dt className="text-sm text-muted-foreground">{t(row.label)}</dt>
              <dd className="col-span-2 text-sm font-medium text-foreground">
                {t(row.value)}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 우리의 약속 */}
      <section className="bg-brand-muted">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="text-xl font-semibold text-foreground">
            {t("valuesHeading")}
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {VALUE_KEYS.map((key) => (
              <div
                key={key}
                className="rounded-xl border border-border bg-background p-5"
              >
                <h3 className="font-semibold text-brand">
                  {t(`values.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(`values.${key}.body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 후기 */}
      <section className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="text-xl font-semibold text-foreground">
          {tAbout("testimonialsHeading")}
        </h2>
        <div className="mt-6 space-y-4">
          {TESTIMONIAL_KEYS.map((key) => (
            <figure
              key={key}
              className="rounded-xl border border-border bg-background p-5"
            >
              <blockquote className="text-sm text-foreground">
                “{tAbout(`testimonials.${key}.quote`)}”
              </blockquote>
              <figcaption className="mt-3 text-xs text-muted-foreground">
                {tAbout(`testimonials.${key}.author`)}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            {tNav("consultCta")}
          </Link>
        </div>
      </section>
    </div>
  );
}
