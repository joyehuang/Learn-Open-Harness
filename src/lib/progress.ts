const STORAGE_KEY = "openharness-learn-progress";
const PROGRESS_EVENT = "openharness-learn-progress-change";

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
  emitProgressChange();
}

function emitProgressChange() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(PROGRESS_EVENT));
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
  emitProgressChange();
}

export function getCompletedChaptersSnapshot(): string {
  return getProgress().completedChapters.join("\n");
}

export function getServerCompletedChaptersSnapshot(): string {
  return "";
}

export function subscribeToProgress(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const handler = () => callback();
  window.addEventListener(PROGRESS_EVENT, handler);
  window.addEventListener("storage", handler);

  return () => {
    window.removeEventListener(PROGRESS_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}
