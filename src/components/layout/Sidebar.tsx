"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { chapters } from "@/content/chapters";
import { PHASES } from "@/content/types";
import { isChapterCompleted, getCompletedCount } from "@/lib/progress";

export default function Sidebar() {
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

  const grouped = Object.entries(PHASES).map(([key, { label }]) => ({
    phase: key,
    label,
    items: chapters.filter((c) => c.phase === key),
  }));

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-5 border-b border-indigo-100">
        <Link href="/" className="block" onClick={() => setMobileOpen(false)}>
          <h1 className="text-lg font-bold text-indigo-600">
            OpenHarness 学习
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            AI Agent 基础设施入门指南
          </p>
        </Link>
        {/* Progress bar */}
        <div className="mt-3">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>学习进度</span>
            <span>
              {completedCount}/{totalCount} ({progressPct}%)
            </span>
          </div>
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Chapter list */}
      <nav className="flex-1 overflow-y-auto p-3">
        {grouped.map(({ phase, label, items }) => (
          <div key={phase} className="mb-4">
            <div className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {phase}. {label}
            </div>
            {items.map((chapter, idx) => {
              const href = `/chapters/${chapter.slug}`;
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
                      ? "bg-indigo-50 text-indigo-700 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                      isCompleted
                        ? "bg-emerald-500 text-white"
                        : isActive
                          ? "bg-indigo-500 text-white"
                          : "bg-gray-200 text-gray-500"
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
        className="fixed top-3 left-3 z-50 lg:hidden bg-white shadow-md rounded-lg p-2"
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
        className={`fixed top-0 left-0 h-full w-72 bg-white border-r border-gray-200 z-40 transform transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:z-auto`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
