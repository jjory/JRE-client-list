import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/site";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    BLOG_POSTS.map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const entry = getBlogPostBySlug(slug);
  if (!entry) return {};
  const t = await getTranslations({ locale, namespace: "BlogPage" });
  return {
    title: t(`items.${entry.key}.title`),
    description: t(`items.${entry.key}.excerpt`),
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const entry = getBlogPostBySlug(slug);
  if (!entry) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "BlogPage" });

  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        {t("backToBlog")}
      </Link>
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-brand">
        {t(`items.${entry.key}.category`)}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
        {t(`items.${entry.key}.title`)}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-foreground">
        {t(`items.${entry.key}.body`)}
      </p>
      <p className="mt-8 rounded-lg border border-border bg-brand-muted px-4 py-3 text-sm text-muted-foreground">
        {t("comingSoonNote")}
      </p>
    </article>
  );
}
