import { useTranslations } from "next-intl";
import { SectionHeading } from "./SectionHeading";

const ITEM_KEYS = ["one", "two", "three", "four"] as const;

// 네이티브 <details>로 구현 — JS 없이 동작하고 접근성 기본 지원.
export function Faq() {
  const t = useTranslations("Faq");

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <SectionHeading title={t("heading")} />
      <div className="divide-y divide-border rounded-xl border border-border bg-background">
        {ITEM_KEYS.map((key) => (
          <details key={key} className="group px-5">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-medium text-foreground">
              {t(`items.${key}.q`)}
              <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="pb-4 text-sm text-muted-foreground">
              {t(`items.${key}.a`)}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
