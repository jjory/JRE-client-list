import { useTranslations } from "next-intl";

const STATS = [
  { value: "listingsValue", label: "listingsLabel" },
  { value: "licensedValue", label: "licensedLabel" },
  { value: "languagesValue", label: "languagesLabel" },
  { value: "ratingValue", label: "ratingLabel" },
] as const;

export function TrustStats() {
  const t = useTranslations("Stats");

  return (
    <section className="bg-brand text-brand-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="sr-only">{t("heading")}</h2>
        <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.value}>
              <dd className="text-3xl font-bold sm:text-4xl">{t(s.value)}</dd>
              <dt className="mt-1 text-sm text-brand-foreground/80">
                {t(s.label)}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
