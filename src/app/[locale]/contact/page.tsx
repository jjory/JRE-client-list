import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactChannels } from "@/components/home/ContactChannels";
import { CONTACT } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return { title: t("heading"), description: t("subheading") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return (
    <div>
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("heading")}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-brand-foreground/85">
            {t("subheading")}
          </p>
        </div>
      </section>

      <ContactChannels />

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <dl className="grid gap-4 rounded-xl border border-border bg-background p-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-muted-foreground">{t("emailLabel")}</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-medium text-brand hover:underline"
              >
                {CONTACT.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">{t("kakaoLabel")}</dt>
            <dd className="mt-1">
              <a
                href={CONTACT.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand hover:underline"
              >
                {CONTACT.kakaoId}
              </a>
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm text-muted-foreground">{t("hours")}</dt>
            <dd className="mt-1 text-sm text-foreground">
              {t("responseNote")}
            </dd>
          </div>
          <div className="sm:col-span-2 border-t border-border pt-4 text-sm text-muted-foreground">
            {t("companyLine")}
          </div>
        </dl>
      </section>
    </div>
  );
}
