"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/content/types";

interface QuizProps {
  chapterSlug: string;
  questionIndex: number;
  quiz: QuizQuestion;
}

export default function Quiz({ chapterSlug, questionIndex, quiz }: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
  };

  const handleReset = () => {
    setSelected(null);
    setRevealed(false);
  };

  const isCorrect = selected === quiz.correctIndex;

  return (
    <div className="my-6 bg-card rounded-xl border border-border p-5">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs font-semibold text-primary">
          🧠 检验理解
        </div>
        {revealed && (
          <button
            onClick={handleReset}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            重新作答
          </button>
        )}
      </div>
      <div className="font-medium text-foreground mb-4">{quiz.question}</div>
      <div className="flex flex-col gap-2">
        {quiz.options.map((opt, idx) => {
          let optStyle = "border-border hover:border-primary/50 cursor-pointer text-foreground";
          if (revealed) {
            if (idx === quiz.correctIndex) {
              optStyle = "border-emerald-400 bg-emerald-500/10 text-foreground";
            } else if (idx === selected && !isCorrect) {
              optStyle = "border-red-400 bg-red-500/10 text-foreground";
            } else {
              optStyle = "border-border opacity-60 cursor-default text-foreground";
            }
          }
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={revealed}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${optStyle}`}
            >
              <span className="font-medium mr-2 text-muted-foreground">
                {String.fromCharCode(65 + idx)}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {revealed && (
        <div
          className={`mt-4 p-3 rounded-lg text-sm ${isCorrect ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300" : "bg-amber-500/10 text-amber-700 dark:text-amber-300"}`}
        >
          <span className="font-semibold">
            {isCorrect ? "✅ 正确！" : "❌ 不太对。"}
          </span>{" "}
          {quiz.explanation}
        </div>
      )}
    </div>
  );
}
