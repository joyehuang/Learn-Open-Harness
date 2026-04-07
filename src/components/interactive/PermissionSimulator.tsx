"use client";

import { useState } from "react";

type PermissionMode = "default" | "plan" | "full-auto";

interface ActionExample {
  name: string;
  icon: string;
  isRead: boolean;
  isWrite: boolean;
  isDangerous: boolean;
}

const actions: ActionExample[] = [
  { name: "读取文件", icon: "📖", isRead: true, isWrite: false, isDangerous: false },
  { name: "搜索文件", icon: "🔍", isRead: true, isWrite: false, isDangerous: false },
  { name: "写入新文件", icon: "📝", isRead: false, isWrite: true, isDangerous: false },
  { name: "编辑现有文件", icon: "✏️", isRead: false, isWrite: true, isDangerous: false },
  { name: "执行 Shell 命令", icon: "💻", isRead: false, isWrite: true, isDangerous: false },
  { name: "删除文件", icon: "🗑️", isRead: false, isWrite: true, isDangerous: true },
  { name: "安装依赖", icon: "📦", isRead: false, isWrite: true, isDangerous: false },
  { name: "Git push", icon: "🚀", isRead: false, isWrite: true, isDangerous: true },
  { name: "搜索网页", icon: "🌐", isRead: true, isWrite: false, isDangerous: false },
  { name: "启动子 Agent", icon: "🤖", isRead: false, isWrite: true, isDangerous: false },
];

function getStatus(action: ActionExample, mode: PermissionMode) {
  if (mode === "full-auto") {
    return { label: "自动通过", color: "text-emerald-600 bg-emerald-50" };
  }
  if (mode === "plan") {
    if (action.isRead) return { label: "允许", color: "text-emerald-600 bg-emerald-50" };
    return { label: "阻止", color: "text-red-600 bg-red-50" };
  }
  // default
  if (action.isRead) return { label: "自动通过", color: "text-emerald-600 bg-emerald-50" };
  if (action.isDangerous) return { label: "需要确认 ⚠️", color: "text-amber-600 bg-amber-50" };
  return { label: "需要确认", color: "text-amber-600 bg-amber-50" };
}

const modeDescriptions: Record<PermissionMode, string> = {
  default: "默认模式：读取操作自动通过，写入操作需要用户确认",
  plan: "规划模式：只允许读取操作，所有写入操作都被阻止",
  "full-auto": "全自动模式：所有操作自动通过，适用于沙箱环境",
};

export default function PermissionSimulator() {
  const [mode, setMode] = useState<PermissionMode>("default");

  return (
    <div className="my-6 bg-card rounded-xl border border-border p-5">
      <div className="text-xs font-semibold text-primary mb-3">
        🛡️ 权限模拟器 — 试试切换不同模式
      </div>

      {/* Mode toggles */}
      <div className="flex gap-2 mb-3">
        {(["default", "plan", "full-auto"] as PermissionMode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === m
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            {m === "default" ? "默认" : m === "plan" ? "规划" : "全自动"}
          </button>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mb-4">{modeDescriptions[mode]}</p>

      {/* Actions */}
      <div className="space-y-1.5">
        {actions.map((action) => {
          const status = getStatus(action, mode);
          return (
            <div
              key={action.name}
              className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-2 text-sm">
                <span>{action.icon}</span>
                <span className="text-foreground">{action.name}</span>
              </div>
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-medium ${status.color}`}
              >
                {status.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
