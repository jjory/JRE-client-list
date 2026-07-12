import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SERVICES } from "@/lib/site";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-brand-muted">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-brand">JRE Global Home</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("Footer.operatedBy")}
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-foreground">
            {t("Nav.services")}
          </p>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.key}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {t(`Services.${s.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-foreground">
            {t("Nav.guide")}
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/areas"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {t("Nav.areas")}
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {t("Nav.blog")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {t("Nav.about")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-foreground">
            {t("Nav.contact")}
          </p>
          <Link
            href="/contact"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {t("Nav.consultCta")}
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-4 text-xs text-muted-foreground">
          {t("Footer.rights", { year })}
        </p>
      </div>
    </footer>
  );
}
