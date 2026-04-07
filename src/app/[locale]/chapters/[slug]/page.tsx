import { notFound } from "next/navigation";
import { getChapters, chapters } from "@/content/chapters";
import { locales, isValidLocale } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import ChapterRenderer from "@/components/content/ChapterRenderer";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    chapters.map((c) => ({ locale, slug: c.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return { title: "Not Found" };
  const dict = await getDictionary(locale as Locale);
  const localeChapters = getChapters(locale as Locale);
  const chapter = localeChapters.find((c) => c.slug === slug);
  if (!chapter) return { title: dict.chapter.notFound };

  const title = `${chapter.title} ${dict.chapter.metaSuffix}`;
  const description = chapter.subtitle;
  const canonicalUrl = `/${locale}/chapters/${slug}`;

  return {
    title,
    description,
    keywords: ["OpenHarness", "AI Agent", chapter.title, chapter.slug.replace(/-/g, " ")],
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/chapters/${slug}`])
      ),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
    },
  };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const localeChapters = getChapters(locale as Locale);
  const chapter = localeChapters.find((c) => c.slug === slug);
  if (!chapter) notFound();
  return <ChapterRenderer chapter={chapter} chapters={localeChapters} locale={locale as Locale} dict={dict} />;
}
