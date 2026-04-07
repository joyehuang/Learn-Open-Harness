"use client";

import { useState } from "react";

const steps = [
  {
    id: 1,
    label: "用户发送消息",
    icon: "💬",
    description: "用户输入一个请求，比如「帮我读取 config.json 文件」",
    highlight: "user",
  },
  {
    id: 2,
    label: "LLM 思考",
    icon: "🧠",
    description:
      "大语言模型分析请求，决定需要使用 Read 工具来读取文件",
    highlight: "llm",
  },
  {
    id: 3,
    label: "生成工具调用",
    icon: "🔧",
    description:
      '模型生成结构化的工具调用请求：Read(file_path="config.json")',
    highlight: "tool-call",
  },
  {
    id: 4,
    label: "权限检查",
    icon: "🛡️",
    description:
      "Harness 检查当前权限模式，读取操作在默认模式下自动通过",
    highlight: "permission",
  },
  {
    id: 5,
    label: "执行工具",
    icon: "⚡",
    description: "Read 工具被执行，读取文件内容，返回结果",
    highlight: "execute",
  },
  {
    id: 6,
    label: "结果返回",
    icon: "📋",
    description:
      "工具结果被放入消息中，反馈给 LLM。LLM 根据文件内容生成最终回复",
    highlight: "result",
  },
];

const boxPositions = [
  { id: "user", label: "用户", x: 50, y: 20, color: "bg-blue-100 border-blue-300 text-blue-700" },
  { id: "llm", label: "LLM", x: 200, y: 20, color: "bg-purple-100 border-purple-300 text-purple-700" },
  { id: "tool-call", label: "工具调用", x: 350, y: 20, color: "bg-indigo-100 border-indigo-300 text-indigo-700" },
  { id: "permission", label: "权限检查", x: 350, y: 100, color: "bg-red-100 border-red-300 text-red-700" },
  { id: "execute", label: "执行工具", x: 200, y: 100, color: "bg-emerald-100 border-emerald-300 text-emerald-700" },
  { id: "result", label: "返回结果", x: 50, y: 100, color: "bg-amber-100 border-amber-300 text-amber-700" },
];

export default function AgentLoopAnimation() {
  const [currentStep, setCurrentStep] = useState(0);

  const step = steps[currentStep];

  return (
    <div className="my-6 bg-white rounded-xl border border-gray-200 p-5">
      <div className="text-xs font-semibold text-indigo-500 mb-4">
        🔄 Agent Loop 动画演示
      </div>

      {/* Flow diagram */}
      <div className="relative h-48 mb-4">
        {boxPositions.map((box) => {
          const isActive = step.highlight === box.id;
          return (
            <div
              key={box.id}
              className={`absolute px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? `${box.color} scale-110 shadow-lg`
                  : "bg-gray-50 border-gray-200 text-gray-400"
              }`}
              style={{ left: box.x, top: box.y }}
            >
              {box.label}
            </div>
          );
        })}
        {/* Arrows */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 480 160">
          {/* User -> LLM */}
          <path d="M 130 35 L 195 35" stroke="#d1d5db" strokeWidth="2" markerEnd="url(#arrow)" />
          {/* LLM -> Tool Call */}
          <path d="M 270 35 L 345 35" stroke="#d1d5db" strokeWidth="2" markerEnd="url(#arrow)" />
          {/* Tool Call -> Permission */}
          <path d="M 385 55 L 385 95" stroke="#d1d5db" strokeWidth="2" markerEnd="url(#arrow)" />
          {/* Permission -> Execute */}
          <path d="M 345 115 L 280 115" stroke="#d1d5db" strokeWidth="2" markerEnd="url(#arrow)" />
          {/* Execute -> Result */}
          <path d="M 195 115 L 140 115" stroke="#d1d5db" strokeWidth="2" markerEnd="url(#arrow)" />
          {/* Result -> LLM (loop back) */}
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
          <span className="text-xl">{step.icon}</span>
          <span className="font-semibold text-gray-900">
            第 {step.id} 步：{step.label}
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
          ← 上一步
        </button>
        <div className="flex gap-1.5">
          {steps.map((_, i) => (
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
            setCurrentStep(Math.min(steps.length - 1, currentStep + 1))
          }
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          下一步 →
        </button>
      </div>
    </div>
  );
}
