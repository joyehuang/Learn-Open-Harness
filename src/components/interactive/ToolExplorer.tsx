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
    <div className="my-6 bg-card rounded-xl border border-border p-5">
      <div className="text-xs font-semibold text-primary mb-3">
        {dict.title.replace("{count}", String(tools.length))}
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder={dict.searchPlaceholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-2 border border-input rounded-lg text-sm mb-3 focus:outline-none focus:border-ring bg-background text-foreground"
      />

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              filter === cat
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
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
            className="p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-muted/50 transition-all"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-sm font-semibold text-foreground">
                {tool.name}
              </span>
              {tool.readOnly && (
                <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] rounded font-medium">
                  {dict.readOnly}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">{tool.description}</p>
            <span className="inline-block mt-1 text-[10px] text-muted-foreground">
              {dict.categories[tool.category] || tool.category}
            </span>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground text-sm py-8">{dict.noResults}</p>
      )}
    </div>
  );
}
