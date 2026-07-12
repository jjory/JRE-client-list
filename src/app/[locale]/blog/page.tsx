import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BLOG_POSTS } from "@/lib/site";
import { SectionHeading } from "@/components/home/SectionHeading";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPage" });
  return { title: t("heading"), description: t("subheading") };
}

export default async function BlogHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "BlogPage" });

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading title={t("heading")} subtitle={t("subheading")} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((p) => (
          <Link
            key={p.key}
            href={`/blog/${p.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-shadow hover:shadow-md"
          >
            <div className="flex aspect-[16/9] items-center justify-center bg-brand-muted text-xs font-medium uppercase tracking-wide text-brand">
              {t(`items.${p.key}.category`)}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold text-foreground">
                {t(`items.${p.key}.title`)}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {t(`items.${p.key}.excerpt`)}
              </p>
              <span className="mt-3 text-sm text-brand group-hover:underline">
                {t("readMore")} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
