import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapters } from "@/content/chapters";
import { PHASES } from "@/content/types";
import { isValidLocale } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

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

  const grouped = Object.entries(PHASES).map(([key, { color }]) => ({
    phase: key,
    label: dict.phases[key] || key,
    items: chapters.filter((c) => c.phase === key),
  }));

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-white/10 text-indigo-600 dark:text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          {t.badge}
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          {t.heading} <span className="text-indigo-600 dark:text-white">OpenHarness</span>
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">
          {t.officialTag}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {t.description}
          <br />
          {t.description2}
          <br />
          {t.description3}
        </p>
        <Link
          href={`/${locale}/chapters/${chapters[0].slug}`}
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-indigo-600 dark:bg-white text-white dark:text-black rounded-xl font-medium hover:bg-indigo-700 dark:hover:bg-gray-200 transition-colors shadow-lg shadow-indigo-200 dark:shadow-none"
        >
          {t.startLearning}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* What you'll learn */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2 text-center">
          {t.whatYouLearn}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
          {t.chaptersSubtitle}
        </p>

        <div className="space-y-8">
          {grouped.map(({ phase, label, items }) => (
            <div key={phase}>
              <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                {t.phasePrefix} {phase} · {label}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {items.map((chapter) => {
                  const num = chapters.findIndex((c) => c.slug === chapter.slug) + 1;
                  return (
                    <Link
                      key={chapter.slug}
                      href={`/${locale}/chapters/${chapter.slug}`}
                      className="group flex items-start gap-3 p-4 bg-white dark:bg-card rounded-xl border border-gray-200 dark:border-border hover:border-indigo-300 dark:hover:border-white/30 hover:shadow-md dark:hover:shadow-none transition-all"
                    >
                      <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-white/10 text-indigo-600 dark:text-white flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-indigo-100 dark:group-hover:bg-white/15">
                        {num}
                      </span>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
                          {chapter.title}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
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
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-zinc-950 dark:to-black rounded-2xl p-8 text-center mb-16 border border-indigo-100 dark:border-white/10">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-4">{t.coreFormula}</h2>
        <div className="text-lg font-mono bg-white/70 dark:bg-card inline-block px-6 py-3 rounded-xl shadow-sm border border-white/50 dark:border-border">
          <span className="text-indigo-600 dark:text-white font-bold">Harness</span> ={" "}
          <span className="text-emerald-600 dark:text-emerald-400">Tools</span> +{" "}
          <span className="text-blue-600 dark:text-blue-400">Knowledge</span> +{" "}
          <span className="text-purple-600 dark:text-gray-200">Observation</span> +{" "}
          <span className="text-amber-600 dark:text-amber-400">Action</span> +{" "}
          <span className="text-red-500 dark:text-red-400">Permissions</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 max-w-lg mx-auto">
          {t.formulaDescription}
        </p>
      </div>

      {/* Who is this for */}
      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        {t.features.map((item) => (
          <div
            key={item.title}
            className="text-center p-6 bg-white dark:bg-card rounded-xl border border-gray-200 dark:border-border"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {item.title}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
