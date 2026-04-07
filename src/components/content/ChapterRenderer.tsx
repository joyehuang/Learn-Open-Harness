"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { Chapter, ContentSection } from "@/content/types";
import { markChapterCompleted } from "@/lib/progress";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import CodeBlock from "./CodeBlock";
import KeyConceptCard from "./KeyConceptCard";
import ComparisonTable from "./ComparisonTable";
import Callout from "@/components/ui/Callout";
import Quiz from "@/components/interactive/Quiz";
import AgentLoopAnimation from "@/components/interactive/AgentLoopAnimation";
import ToolExplorer from "@/components/interactive/ToolExplorer";
import PermissionSimulator from "@/components/interactive/PermissionSimulator";
import ArchitectureDiagram from "@/components/interactive/ArchitectureDiagram";

function SectionRenderer({
  section,
  chapterSlug,
  quizIndex,
  locale,
  dict,
}: {
  section: ContentSection;
  chapterSlug: string;
  quizIndex: number;
  locale: Locale;
  dict: Dictionary;
}) {
  switch (section.type) {
    case "text":
      return (
        <div className="my-4">
          {section.title && (
            <h2 className="text-xl font-bold text-foreground mb-3">
              {section.title}
            </h2>
          )}
          {section.content && (
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          )}
        </div>
      );

    case "analogy":
      return (
        <Callout type="analogy" title={section.title || dict.chapter.analogyDefault}>
          {section.content}
        </Callout>
      );

    case "code":
      return section.code ? (
        <div className="my-4">
          {section.title && (
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">
              {section.title}
            </h3>
          )}
          <CodeBlock code={section.code} />
          {section.content && (
            <p className="text-sm text-muted-foreground mt-2">{section.content}</p>
          )}
        </div>
      ) : null;

    case "diagram":
      if (!section.diagram) return null;
      switch (section.diagram) {
        case "AgentLoopAnimation":
          return <AgentLoopAnimation dict={dict.agentLoop} />;
        case "ToolExplorer":
          return <ToolExplorer dict={dict.toolExplorer} />;
        case "PermissionSimulator":
          return <PermissionSimulator dict={dict.permissionSim} />;
        case "ArchitectureDiagram":
          return <ArchitectureDiagram locale={locale} dict={dict.architecture} />;
        default:
          return null;
      }

    case "quiz":
      return section.quiz ? (
        <Quiz
          chapterSlug={chapterSlug}
          questionIndex={quizIndex}
          quiz={section.quiz}
          dict={dict.quiz}
        />
      ) : null;

    case "key-concept":
      return (
        <KeyConceptCard title={section.title || ""} label={dict.chapter.keyConcept}>
          {section.content}
        </KeyConceptCard>
      );

    case "comparison":
      return section.comparison ? (
        <ComparisonTable {...section.comparison} label={dict.chapter.comparisonLabel} />
      ) : null;

    default:
      return null;
  }
}

export default function ChapterRenderer({
  chapter,
  chapters,
  locale,
  dict,
}: {
  chapter: Chapter;
  chapters: Chapter[];
  locale: Locale;
  dict: Dictionary;
}) {
  const currentIdx = chapters.findIndex((c) => c.slug === chapter.slug);
  const prevChapter = currentIdx > 0 ? chapters[currentIdx - 1] : null;
  const nextChapter =
    currentIdx < chapters.length - 1 ? chapters[currentIdx + 1] : null;

  useEffect(() => {
    markChapterCompleted(chapter.slug);
  }, [chapter.slug]);

  let quizCounter = 0;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-16">
      {/* Chapter header */}
      <div className="mb-8">
        <div className="text-sm text-primary font-medium mb-2">
          {dict.chapter.prefix} {currentIdx + 1} {dict.chapter.suffix}
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {chapter.title}
        </h1>
        <p className="text-lg text-muted-foreground">{chapter.subtitle}</p>
      </div>

      {/* Sections */}
      {chapter.sections.map((section, i) => {
        const qi = section.type === "quiz" ? quizCounter++ : 0;
        return (
          <SectionRenderer
            key={i}
            section={section}
            chapterSlug={chapter.slug}
            quizIndex={qi}
            locale={locale}
            dict={dict}
          />
        );
      })}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
        {prevChapter ? (
          <Link
            href={`/${locale}/chapters/${prevChapter.slug}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {prevChapter.title}
          </Link>
        ) : (
          <div />
        )}
        {nextChapter ? (
          <Link
            href={`/${locale}/chapters/${nextChapter.slug}`}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {nextChapter.title}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <Link
            href={`/${locale}`}
            className="text-sm font-medium text-primary hover:text-primary/80"
          >
            {dict.chapter.backHome}
          </Link>
        )}
      </div>
    </div>
  );
}
