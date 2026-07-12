import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SERVICES } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  const t = useTranslations("ServicesSection");
  const tLabel = useTranslations("Services");

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading title={t("heading")} subtitle={t("subheading")} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.key}
            href={`/services/${s.slug}`}
            className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {tLabel(s.key)}
            </h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              {t(`desc.${s.key}`)}
            </p>
            <span className="mt-4 text-sm font-medium text-brand group-hover:underline">
              {t("detailCta")} →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
