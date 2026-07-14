import { useTranslations } from "next-intl";
import { SearchBar } from "./SearchBar";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative overflow-hidden bg-brand text-brand-foreground">
      {/* 배경 그라디언트 (에스프레소 톤) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand to-[#16130e]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-brand-foreground/80">
          {t("subtitle")}
        </p>
        <div className="mt-10 max-w-4xl">
          <SearchBar />
          <p className="mt-3 text-xs text-brand-foreground/70">
            {t("searchNote")}
          </p>
        </div>
      </div>
    </section>
  );
}
