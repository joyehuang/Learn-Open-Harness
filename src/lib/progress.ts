const STORAGE_KEY = "openharness-learn-progress";

export interface Progress {
  completedChapters: string[];
}

function getProgress(): Progress {
  if (typeof window === "undefined") {
    return { completedChapters: [] };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { completedChapters: [] };
}

function saveProgress(p: Progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
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

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}
