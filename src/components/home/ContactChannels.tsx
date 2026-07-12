import { useTranslations } from "next-intl";
import { CONTACT_CHANNELS } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function ContactChannels() {
  const t = useTranslations("Contact");

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading title={t("heading")} subtitle={t("subheading")} />
      <div className="grid gap-4 sm:grid-cols-3">
        {CONTACT_CHANNELS.map((c) => (
          <a
            key={c.key}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl border border-border bg-background px-6 py-5 font-semibold text-foreground transition-shadow hover:shadow-md"
          >
            <span
              aria-hidden
              className="inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: c.color }}
            />
            {t(`channels.${c.key}`)}
          </a>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{t("note")}</p>
    </section>
  );
}
