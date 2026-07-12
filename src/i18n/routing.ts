import { defineRouting } from "next-intl/routing";

// 지원 로케일: 한국어 / 영어 / 일본어(코드상 ja)
export const locales = ["ko", "en", "ja"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  // 기본 로케일: KO 고정 — `/` 접근 시 `/ko`로 리다이렉트
  defaultLocale: "ko",
  // 모든 경로에 명시적 프리픽스 (/ko, /en, /ja) — SEO/hreflang 명확화
  localePrefix: "always",
});
