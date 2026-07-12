import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "./SectionHeading";

const ITEM_KEYS = ["one", "two", "three"] as const;

// 콘텐츠는 후속 단계(/blog, /guide)에서 실제 포스트로 대체. 현재는 플레이스홀더 카드.
export function LatestPosts() {
  const t = useTranslations("Posts");

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading title={t("heading")} subtitle={t("subheading")} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ITEM_KEYS.map((key) => (
          <Link
            key={key}
            href="/blog"
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-shadow hover:shadow-md"
          >
            <div className="flex aspect-[16/9] items-center justify-center bg-brand-muted text-xs text-muted-foreground">
              {t("comingSoon")}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="text-xs font-medium uppercase tracking-wide text-brand">
                {t(`items.${key}.category`)}
              </span>
              <h3 className="mt-2 flex-1 text-base font-semibold text-foreground">
                {t(`items.${key}.title`)}
              </h3>
              <span className="mt-3 text-sm text-muted-foreground group-hover:underline">
                {t("readMore")} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
