import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AREAS } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function PopularAreas() {
  const t = useTranslations("Areas");

  return (
    <section className="bg-brand-muted">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading title={t("heading")} subtitle={t("subheading")} />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {AREAS.map((a) => (
            <Link
              key={a.key}
              href={`/areas/${a.slug}`}
              className="flex aspect-square flex-col items-center justify-center rounded-xl border border-border bg-background text-center transition-colors hover:border-brand"
            >
              <span className="text-base font-semibold text-foreground">
                {t(`names.${a.key}`)}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                {t("viewCta")} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
