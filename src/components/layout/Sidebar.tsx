"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import type { Chapter } from "@/content/types";
import { PHASES } from "@/content/types";
import {
  getCompletedChaptersSnapshot,
  getServerCompletedChaptersSnapshot,
  resetProgress,
  subscribeToProgress,
} from "@/lib/progress";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

const localeLabels: Record<Locale, string> = {
  "zh-CN": "中文",
  en: "EN",
};

export default function Sidebar({
  locale,
  dict,
  chapters,
}: {
  locale: Locale;
  dict: Dictionary;
  chapters: Chapter[];
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null);
  const completedSnapshot = useSyncExternalStore(
    subscribeToProgress,
    getCompletedChaptersSnapshot,
    getServerCompletedChaptersSnapshot,
  );

  const completedSlugs = new Set(
    completedSnapshot ? completedSnapshot.split("\n") : [],
  );

  const completedCount = completedSlugs.size;
  const totalCount = chapters.length;
  const progressPct = Math.round((completedCount / totalCount) * 100);

  const grouped = Object.entries(PHASES).map(([key]) => ({
    phase: key,
    label: dict.phases[key] || key,
    items: chapters.filter((c) => c.phase === key),
  }));

  useEffect(() => {
    if (!pendingLocale) return;

    document.cookie = `locale=${pendingLocale};path=/;max-age=${60 * 60 * 24 * 365}`;
    const newPath = pathname.replace(`/${locale}`, `/${pendingLocale}`);
    router.push(newPath);
  }, [locale, pathname, pendingLocale, router]);

  function switchLocale(newLocale: Locale) {
    if (newLocale === locale) return;
    setPendingLocale(newLocale);
  }

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-5 border-b border-border">
        <Link href={`/${locale}`} className="block" onClick={() => setMobileOpen(false)}>
          <h1 className="text-lg font-bold text-primary">
            {dict.sidebar.title}
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            {dict.sidebar.subtitle}
          </p>
        </Link>
        {/* Progress bar */}
        <div className="mt-3">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>{dict.sidebar.progress}</span>
            <span>
              {completedCount}/{totalCount} ({progressPct}%)
            </span>
          </div>
          <Progress value={progressPct} className="h-1.5" />
          {completedCount > 0 && (
            <button
              onClick={() => {
                resetProgress();
              }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors mt-1"
            >
              {dict.sidebar.resetProgress}
            </button>
          )}
        </div>
      </div>

      {/* Chapter list */}
      <nav className="flex-1 overflow-y-auto p-3 min-h-0">
        {grouped.map(({ phase, label, items }) => (
          <div key={phase} className="mb-4">
            <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {phase}. {label}
            </div>
            {items.map((chapter) => {
              const href = `/${locale}/chapters/${chapter.slug}`;
              const isActive = pathname === href;
              const isCompleted = completedSlugs.has(chapter.slug);
              const chapterNum =
                chapters.findIndex((c) => c.slug === chapter.slug) + 1;

              return (
                <Link
                  key={chapter.slug}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm transition-colors mb-0.5 ${
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span
                    className={`size-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                      isCompleted
                        ? "bg-emerald-500 text-white"
                        : isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isCompleted ? "✓" : chapterNum}
                  </span>
                  <span className="truncate">{chapter.title}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-border space-y-1">
        {/* Language switcher */}
        <div className="flex gap-1 px-2 py-1">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                l === locale
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {localeLabels[l]}
            </button>
          ))}
        </div>
        {/* Dark mode toggle */}
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-2 text-muted-foreground"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HugeiconsIcon
            icon={theme === "dark" ? Sun03Icon : Moon02Icon}
            className="size-4"
            strokeWidth={1.5}
          />
          {theme === "dark" ? dict.sidebar.lightMode : dict.sidebar.darkMode}
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-3 left-3 z-50 lg:hidden bg-background shadow-md rounded-lg p-2 border border-border"
        aria-label="Toggle menu"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-background border-r border-border z-40 transform transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:z-auto`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
