"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/types";

interface ToolInfo {
  name: string;
  category: string;
  description: string;
  readOnly: boolean;
}

const readOnlyTools = new Set([
  "Read", "Glob", "Grep", "WebFetch", "WebSearch", "ToolSearch",
  "TaskGet", "TaskList", "ListMcpResources", "ReadMcpResource",
  "EnterPlanMode", "Skill", "AskUserQuestion", "CronList",
]);

export default function ToolExplorer({
  dict,
}: {
  dict: Dictionary["toolExplorer"];
}) {
  const tools: ToolInfo[] = dict.tools.map((t) => ({
    ...t,
    readOnly: readOnlyTools.has(t.name),
  }));

  const categoryKeys = Array.from(new Set(tools.map((t) => t.category)));
  const categories = [dict.allCategory, ...categoryKeys];

  const [filter, setFilter] = useState(dict.allCategory);
  const [search, setSearch] = useState("");

  const filtered = tools.filter((t) => {
    if (filter !== dict.allCategory && t.category !== filter) return false;
    if (
      search &&
      !t.name.toLowerCase().includes(search.toLowerCase()) &&
      !t.description.toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="my-6 bg-white rounded-xl border border-gray-200 p-5">
      <div className="text-xs font-semibold text-indigo-500 mb-3">
        {dict.title.replace("{count}", String(tools.length))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder={dict.searchPlaceholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm mb-3 focus:outline-none focus:border-indigo-300"
      />

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              filter === cat
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {dict.categories[cat] || cat}
          </button>
        ))}
      </div>

      {/* Tool grid */}
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tool) => (
          <div
            key={tool.name}
            className="p-3 rounded-lg border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-sm font-semibold text-gray-900">
                {tool.name}
              </span>
              {tool.readOnly && (
                <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] rounded font-medium">
                  {dict.readOnly}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500">{tool.description}</p>
            <span className="inline-block mt-1 text-[10px] text-gray-400">
              {dict.categories[tool.category] || tool.category}
            </span>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-gray-400 text-sm py-8">{dict.noResults}</p>
      )}
    </div>
  );
}
