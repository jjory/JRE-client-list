import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV_ITEMS = [
  { key: "services", href: "/services" },
  { key: "areas", href: "/areas" },
  { key: "guide", href: "/guide" },
  { key: "blog", href: "/blog" },
  { key: "about", href: "/about" },
] as const;

export function Header() {
  const t = useTranslations("Nav");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="text-lg font-bold tracking-tight text-brand">
          JRE Global Home
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="rounded-md bg-brand px-3 py-2 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
          >
            {t("consultCta")}
          </Link>
        </div>
      </div>
    </header>
  );
}
