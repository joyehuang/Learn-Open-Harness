"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import type { Chapter } from "@/content/types";
import { PHASES } from "@/content/types";
import { isChapterCompleted, resetProgress } from "@/lib/progress";
import { Progress } from "@/components/ui/progress";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

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
  const [completedSlugs, setCompletedSlugs] = useState<Set<string>>(new Set());
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const slugs = new Set<string>();
    chapters.forEach((c) => {
      if (isChapterCompleted(c.slug)) slugs.add(c.slug);
    });
    setCompletedSlugs(slugs);
  }, [pathname]);

  const completedCount = completedSlugs.size;
  const totalCount = chapters.length;
  const progressPct = Math.round((completedCount / totalCount) * 100);

  const grouped = Object.entries(PHASES).map(([key, { color }]) => ({
    phase: key,
    label: dict.phases[key] || key,
    items: chapters.filter((c) => c.phase === key),
  }));

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-5 border-b border-border">
        <Link href={`/${locale}`} className="block" onClick={() => setMobileOpen(false)}>
          <h1 className="text-lg font-bold text-indigo-600">
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
        {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
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
