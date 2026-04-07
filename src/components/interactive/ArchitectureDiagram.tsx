"use client";

import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

const nodesMeta = [
  { icon: "🧠", chapterSlug: "agent-loop", x: 240, y: 20, color: "#818cf8" },
  { icon: "🔧", chapterSlug: "tools", x: 420, y: 80, color: "#34d399" },
  { icon: "🛡️", chapterSlug: "permissions", x: 420, y: 180, color: "#f87171" },
  { icon: "⚡", chapterSlug: "hooks", x: 340, y: 270, color: "#fbbf24" },
  { icon: "📚", chapterSlug: "skills", x: 140, y: 270, color: "#a78bfa" },
  { icon: "💾", chapterSlug: "memory", x: 60, y: 180, color: "#60a5fa" },
  { icon: "🌐", chapterSlug: "mcp", x: 60, y: 80, color: "#f472b6" },
];

export default function ArchitectureDiagram({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["architecture"];
}) {
  return (
    <div className="my-6 bg-white rounded-xl border border-gray-200 p-5">
      <div className="text-xs font-semibold text-indigo-500 mb-3">
        {dict.title}
      </div>

      <div className="relative mx-auto" style={{ width: 520, height: 320 }}>
        {/* Center label */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center mx-auto">
            <span className="text-2xl">⚙️</span>
          </div>
          <div className="text-xs font-semibold text-gray-500 mt-1">
            Harness
          </div>
        </div>

        {/* Nodes */}
        {dict.nodes.map((node, i) => {
          const meta = nodesMeta[i];
          const inner = (
            <div
              className="absolute group cursor-pointer"
              style={{ left: meta.x, top: meta.y }}
            >
              <div
                className="px-3 py-2 rounded-lg border-2 text-center transition-all hover:scale-105 hover:shadow-lg bg-white"
                style={{ borderColor: meta.color }}
              >
                <div className="text-lg">{meta.icon}</div>
                <div className="text-[10px] font-semibold text-gray-700 whitespace-pre-line leading-tight">
                  {node.label}
                </div>
              </div>
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {node.description}
              </div>
            </div>
          );

          return meta.chapterSlug ? (
            <Link key={node.id} href={`/${locale}/chapters/${meta.chapterSlug}`}>
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
