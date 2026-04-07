import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapters } from "@/content/chapters";
import { PHASES } from "@/content/types";
import { isValidLocale, locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale as Locale);
  const { title, description } = dict.metadata;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const chapters = getChapters(locale as Locale);
  const t = dict.home;

  const grouped = Object.entries(PHASES).map(([key]) => ({
    phase: key,
    label: dict.phases[key] || key,
    items: chapters.filter((c) => c.phase === key),
  }));

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          {t.badge}
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
          {t.heading} <span className="text-primary">OpenHarness</span>
        </h1>
        <p className="text-sm text-muted-foreground font-medium mb-4">
          {t.officialTag}
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t.description}
          <br />
          {t.description2}
          <br />
          {t.description3}
        </p>
        <Link
          href={`/${locale}/chapters/${chapters[0].slug}`}
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
        >
          {t.startLearning}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* What you'll learn */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
          {t.whatYouLearn}
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          {t.chaptersSubtitle}
        </p>

        <div className="space-y-8">
          {grouped.map(({ phase, label, items }) => (
            <div key={phase}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {t.phasePrefix} {phase} · {label}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {items.map((chapter) => {
                  const num = chapters.findIndex((c) => c.slug === chapter.slug) + 1;
                  return (
                    <Link
                      key={chapter.slug}
                      href={`/${locale}/chapters/${chapter.slug}`}
                      className="group flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all"
                    >
                      <span className="w-8 h-8 rounded-lg bg-muted text-primary flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground">
                        {num}
                      </span>
                      <div>
                        <div className="font-medium text-card-foreground group-hover:text-primary transition-colors">
                          {chapter.title}
                        </div>
                        <div className="text-sm text-muted-foreground mt-0.5">
                          {chapter.subtitle}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key formula */}
      <div className="bg-muted rounded-2xl p-8 text-center mb-16 border border-border">
        <h2 className="text-xl font-bold text-foreground mb-4">{t.coreFormula}</h2>
        <div className="text-lg font-mono bg-background/70 inline-block px-6 py-3 rounded-xl shadow-sm border border-border">
          <span className="text-primary font-bold">Harness</span> ={" "}
          <span className="text-emerald-600 dark:text-emerald-400">Tools</span> +{" "}
          <span className="text-blue-600 dark:text-blue-400">Knowledge</span> +{" "}
          <span className="text-muted-foreground">Observation</span> +{" "}
          <span className="text-amber-600 dark:text-amber-400">Action</span> +{" "}
          <span className="text-red-500 dark:text-red-400">Permissions</span>
        </div>
        <p className="text-sm text-muted-foreground mt-4 max-w-lg mx-auto">
          {t.formulaDescription}
        </p>
      </div>

      {/* Who is this for */}
      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        {t.features.map((item) => (
          <div
            key={item.title}
            className="text-center p-6 bg-card rounded-xl border border-border"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <div className="font-semibold text-card-foreground mb-1">
              {item.title}
            </div>
            <div className="text-sm text-muted-foreground">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
