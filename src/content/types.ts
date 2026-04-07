export type SectionType =
  | "text"
  | "analogy"
  | "code"
  | "diagram"
  | "quiz"
  | "key-concept"
  | "comparison";

export interface CodeContent {
  language: string;
  source: string;
  highlights?: number[];
  filename?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ComparisonItem {
  label: string;
  left: string;
  right: string;
}

export interface ContentSection {
  type: SectionType;
  title?: string;
  content?: string;
  code?: CodeContent;
  quiz?: QuizQuestion;
  comparison?: {
    leftTitle: string;
    rightTitle: string;
    items: ComparisonItem[];
  };
  diagram?: string; // component name
}

export interface Chapter {
  slug: string;
  phase: "A" | "B" | "C" | "D";
  phaseLabel: string;
  title: string;
  subtitle: string;
  sections: ContentSection[];
}

export const PHASES = {
  A: { label: "基础认知", color: "emerald" },
  B: { label: "核心机制", color: "blue" },
  C: { label: "智能层", color: "slate" },
  D: { label: "进阶", color: "amber" },
} as const;
