"use client";

import { useState, useEffect } from "react";
import type { QuizQuestion } from "@/content/types";
import { getQuizAnswer, saveQuizAnswer } from "@/lib/progress";

interface QuizProps {
  chapterSlug: string;
  questionIndex: number;
  quiz: QuizQuestion;
}

export default function Quiz({ chapterSlug, questionIndex, quiz }: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const saved = getQuizAnswer(chapterSlug, questionIndex);
    if (saved !== undefined) {
      setSelected(saved);
      setRevealed(true);
    }
  }, [chapterSlug, questionIndex]);

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
    saveQuizAnswer(chapterSlug, questionIndex, idx);
  };

  const isCorrect = selected === quiz.correctIndex;

  return (
    <div className="my-6 bg-white rounded-xl border border-gray-200 p-5">
      <div className="text-xs font-semibold text-indigo-500 mb-2">
        🧠 检验理解
      </div>
      <div className="font-medium text-gray-900 mb-4">{quiz.question}</div>
      <div className="space-y-2">
        {quiz.options.map((opt, idx) => {
          let optStyle = "border-gray-200 hover:border-indigo-300 cursor-pointer";
          if (revealed) {
            if (idx === quiz.correctIndex) {
              optStyle = "border-emerald-400 bg-emerald-50";
            } else if (idx === selected && !isCorrect) {
              optStyle = "border-red-400 bg-red-50";
            } else {
              optStyle = "border-gray-200 opacity-60 cursor-default";
            }
          }
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={revealed}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${optStyle}`}
            >
              <span className="font-medium mr-2 text-gray-400">
                {String.fromCharCode(65 + idx)}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {revealed && (
        <div
          className={`mt-4 p-3 rounded-lg text-sm ${isCorrect ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"}`}
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
