"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/types";

const icons = ["💬", "🧠", "🔧", "🛡️", "⚡", "📋"];
const highlights = ["user", "llm", "tool-call", "permission", "execute", "result"];

const boxColors = [
  "bg-blue-100 border-blue-300 text-blue-700",
  "bg-purple-100 border-purple-300 text-purple-700",
  "bg-indigo-100 border-indigo-300 text-indigo-700",
  "bg-red-100 border-red-300 text-red-700",
  "bg-emerald-100 border-emerald-300 text-emerald-700",
  "bg-amber-100 border-amber-300 text-amber-700",
];

const boxPositions = [
  { x: 50, y: 20 },
  { x: 200, y: 20 },
  { x: 350, y: 20 },
  { x: 350, y: 100 },
  { x: 200, y: 100 },
  { x: 50, y: 100 },
];

export default function AgentLoopAnimation({
  dict,
}: {
  dict: Dictionary["agentLoop"];
}) {
  const [currentStep, setCurrentStep] = useState(0);

  const step = dict.steps[currentStep];

  return (
    <div className="my-6 bg-white rounded-xl border border-gray-200 p-5">
      <div className="text-xs font-semibold text-indigo-500 mb-4">
        {dict.title}
      </div>

      {/* Flow diagram */}
      <div className="relative h-48 mb-4">
        {dict.boxes.map((label, i) => {
          const isActive = highlights[currentStep] === highlights[i];
          const pos = boxPositions[i];
          return (
            <div
              key={i}
              className={`absolute px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? `${boxColors[i]} scale-110 shadow-lg`
                  : "bg-gray-50 border-gray-200 text-gray-400"
              }`}
              style={{ left: pos.x, top: pos.y }}
            >
              {label}
            </div>
          );
        })}
        {/* Arrows */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 480 160">
          <path d="M 130 35 L 195 35" stroke="#d1d5db" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M 270 35 L 345 35" stroke="#d1d5db" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M 385 55 L 385 95" stroke="#d1d5db" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M 345 115 L 280 115" stroke="#d1d5db" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M 195 115 L 140 115" stroke="#d1d5db" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M 85 95 L 85 65 L 195 65 L 220 55" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrow)" />
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#9ca3af" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Current step info */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">{icons[currentStep]}</span>
          <span className="font-semibold text-gray-900">
            {dict.stepPrefix} {currentStep + 1} {dict.stepSuffix}：{step.label}
          </span>
        </div>
        <p className="text-sm text-gray-600 ml-8">{step.description}</p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {dict.prev}
        </button>
        <div className="flex gap-1.5">
          {dict.steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentStep(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentStep ? "bg-indigo-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() =>
            setCurrentStep(Math.min(dict.steps.length - 1, currentStep + 1))
          }
          disabled={currentStep === dict.steps.length - 1}
          className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {dict.next}
        </button>
      </div>
    </div>
  );
}
