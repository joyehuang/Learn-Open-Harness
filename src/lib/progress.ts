const STORAGE_KEY = "openharness-learn-progress";

export interface Progress {
  completedChapters: string[];
  quizAnswers: Record<string, Record<number, number>>;
}

function getProgress(): Progress {
  if (typeof window === "undefined") {
    return { completedChapters: [], quizAnswers: {} };
  }
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { completedChapters: [], quizAnswers: {} };
}

function saveProgress(p: Progress) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function isChapterCompleted(slug: string): boolean {
  return getProgress().completedChapters.includes(slug);
}

export function markChapterCompleted(slug: string) {
  const p = getProgress();
  if (!p.completedChapters.includes(slug)) {
    p.completedChapters.push(slug);
    saveProgress(p);
  }
}

export function getCompletedCount(): number {
  return getProgress().completedChapters.length;
}

export function getQuizAnswer(
  chapterSlug: string,
  questionIndex: number,
): number | undefined {
  return getProgress().quizAnswers[chapterSlug]?.[questionIndex];
}

export function saveQuizAnswer(
  chapterSlug: string,
  questionIndex: number,
  answerIndex: number,
) {
  const p = getProgress();
  if (!p.quizAnswers[chapterSlug]) {
    p.quizAnswers[chapterSlug] = {};
  }
  p.quizAnswers[chapterSlug][questionIndex] = answerIndex;
  saveProgress(p);
}
