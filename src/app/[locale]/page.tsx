import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("Home");
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <p className="mb-4 inline-block rounded-full bg-brand-muted px-3 py-1 text-sm font-medium text-brand">
        {t("scaffoldNotice")}
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {t("heroTitle")}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        {t("heroSubtitle")}
      </p>
    </section>
  );
}
