import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const TESTIMONIAL_KEYS = ["one", "two"] as const;

export function AboutSummary() {
  const t = useTranslations("About");

  return (
    <section className="bg-brand-muted">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t("heading")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("body")}</p>
          <p className="mt-4 text-sm font-medium text-brand">{t("license")}</p>
          <Link
            href="/about"
            className="mt-6 inline-block rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            {t("cta")}
          </Link>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {t("testimonialsHeading")}
          </h3>
          <div className="space-y-4">
            {TESTIMONIAL_KEYS.map((key) => (
              <figure
                key={key}
                className="rounded-xl border border-border bg-background p-5"
              >
                <blockquote className="text-sm text-foreground">
                  “{t(`testimonials.${key}.quote`)}”
                </blockquote>
                <figcaption className="mt-3 text-xs text-muted-foreground">
                  {t(`testimonials.${key}.author`)}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
