"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

// 현재 경로를 유지한 채 로케일 프리픽스만 교체
export function LanguageSwitcher() {
  const t = useTranslations("Language");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1" aria-label={t("label")}>
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          aria-current={loc === locale ? "true" : undefined}
          onClick={() => router.replace(pathname, { locale: loc })}
          className={`rounded px-2 py-1 text-sm transition-colors ${
            loc === locale
              ? "bg-brand text-brand-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {t(loc)}
        </button>
      ))}
    </div>
  );
}
