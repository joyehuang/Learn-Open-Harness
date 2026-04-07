"use client";

import Link from "next/link";

interface SubsystemNode {
  id: string;
  label: string;
  icon: string;
  description: string;
  chapterSlug?: string;
  x: number;
  y: number;
  color: string;
}

const nodes: SubsystemNode[] = [
  { id: "engine", label: "Engine\n引擎", icon: "🧠", description: "Agent Loop 核心循环", chapterSlug: "agent-loop", x: 240, y: 20, color: "#64748b" },
  { id: "tools", label: "Tools\n工具", icon: "🔧", description: "43+ 内置工具", chapterSlug: "tools", x: 420, y: 80, color: "#34d399" },
  { id: "permissions", label: "Permissions\n权限", icon: "🛡️", description: "三级安全护栏", chapterSlug: "permissions", x: 420, y: 180, color: "#f87171" },
  { id: "hooks", label: "Hooks", icon: "⚡", description: "生命周期事件钩子", chapterSlug: "hooks", x: 340, y: 270, color: "#fbbf24" },
  { id: "skills", label: "Skills\n技能", icon: "📚", description: "按需加载知识", chapterSlug: "skills", x: 140, y: 270, color: "#14b8a6" },
  { id: "memory", label: "Memory\n记忆", icon: "💾", description: "跨会话持久化", chapterSlug: "memory", x: 60, y: 180, color: "#60a5fa" },
  { id: "mcp", label: "MCP", icon: "🌐", description: "模型上下文协议", chapterSlug: "mcp", x: 60, y: 80, color: "#22d3ee" },
];

export default function ArchitectureDiagram() {
  return (
    <div className="my-6 bg-card rounded-xl border border-border p-5">
      <div className="text-xs font-semibold text-primary mb-3">
        🏗️ OpenHarness 架构图 — 点击模块跳转到对应章节
      </div>

      <div className="relative mx-auto" style={{ width: 520, height: 320 }}>
        {/* Center label */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto">
            <span className="text-2xl">⚙️</span>
          </div>
          <div className="text-xs font-semibold text-muted-foreground mt-1">
            Harness
          </div>
        </div>

        {/* Nodes */}
        {nodes.map((node) => {
          const inner = (
            <div
              className="absolute group cursor-pointer"
              style={{ left: node.x, top: node.y }}
            >
              <div
                className="px-3 py-2 rounded-lg border-2 text-center transition-all hover:scale-105 hover:shadow-lg bg-card"
                style={{ borderColor: node.color }}
              >
                <div className="text-lg">{node.icon}</div>
                <div className="text-[10px] font-semibold text-card-foreground whitespace-pre-line leading-tight">
                  {node.label}
                </div>
              </div>
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {node.description}
              </div>
            </div>
          );

          return node.chapterSlug ? (
            <Link key={node.id} href={`/chapters/${node.chapterSlug}`}>
              {inner}
            </Link>
          ) : (
            <div key={node.id}>{inner}</div>
          );
        })}
      </div>
    </div>
  );
}
