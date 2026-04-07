import { notFound } from "next/navigation";
import { chapters } from "@/content/chapters";
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
  const chapter = chapters.find((c) => c.slug === slug);
  if (!chapter) return { title: dict.chapter.notFound };
  return {
    title: `${chapter.title} ${dict.chapter.metaSuffix}`,
    description: chapter.subtitle,
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
  const chapter = chapters.find((c) => c.slug === slug);
  if (!chapter) notFound();
  return <ChapterRenderer chapter={chapter} locale={locale as Locale} dict={dict} />;
}
