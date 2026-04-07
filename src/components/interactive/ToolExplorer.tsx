"use client";

import { useState } from "react";

interface ToolInfo {
  name: string;
  category: string;
  description: string;
  readOnly: boolean;
}

const tools: ToolInfo[] = [
  // File I/O
  { name: "Read", category: "文件", description: "读取文件内容", readOnly: true },
  { name: "Write", category: "文件", description: "写入文件", readOnly: false },
  { name: "Edit", category: "文件", description: "精确替换文件中的字符串", readOnly: false },
  { name: "Glob", category: "文件", description: "按文件名模式搜索文件", readOnly: true },
  { name: "Grep", category: "文件", description: "按内容搜索文件（基于 ripgrep）", readOnly: true },
  { name: "NotebookEdit", category: "文件", description: "编辑 Jupyter Notebook 单元格", readOnly: false },
  // Shell
  { name: "Bash", category: "Shell", description: "执行 Shell 命令并返回输出", readOnly: false },
  // Search
  { name: "WebFetch", category: "搜索", description: "获取网页内容", readOnly: true },
  { name: "WebSearch", category: "搜索", description: "在互联网上搜索信息", readOnly: true },
  { name: "ToolSearch", category: "搜索", description: "搜索可用的延迟加载工具", readOnly: true },
  // Agent
  { name: "Agent", category: "Agent", description: "启动子 Agent 处理复杂任务", readOnly: false },
  { name: "SendMessage", category: "Agent", description: "向已启动的 Agent 发送消息", readOnly: false },
  // Task
  { name: "TaskCreate", category: "任务", description: "创建新的后台任务", readOnly: false },
  { name: "TaskGet", category: "任务", description: "获取任务状态和详情", readOnly: true },
  { name: "TaskList", category: "任务", description: "列出所有任务", readOnly: true },
  { name: "TaskUpdate", category: "任务", description: "更新任务状态", readOnly: false },
  { name: "TaskStop", category: "任务", description: "停止运行中的任务", readOnly: false },
  // MCP
  { name: "MCPTool", category: "MCP", description: "调用 MCP 服务器上的工具", readOnly: false },
  { name: "ListMcpResources", category: "MCP", description: "列出 MCP 资源", readOnly: true },
  { name: "ReadMcpResource", category: "MCP", description: "读取 MCP 资源内容", readOnly: true },
  // Workflow
  { name: "EnterPlanMode", category: "工作流", description: "进入规划模式（只读探索）", readOnly: true },
  { name: "ExitPlanMode", category: "工作流", description: "退出规划模式", readOnly: false },
  { name: "EnterWorktree", category: "工作流", description: "进入独立的 Git 工作树", readOnly: false },
  { name: "ExitWorktree", category: "工作流", description: "退出 Git 工作树", readOnly: false },
  // Meta
  { name: "Skill", category: "元工具", description: "加载并执行技能（领域知识）", readOnly: true },
  { name: "AskUserQuestion", category: "元工具", description: "向用户提问以获取信息", readOnly: true },
  // Scheduling
  { name: "CronCreate", category: "调度", description: "创建定时任务", readOnly: false },
  { name: "CronList", category: "调度", description: "列出定时任务", readOnly: true },
  { name: "CronDelete", category: "调度", description: "删除定时任务", readOnly: false },
];

const categories = ["全部", ...Array.from(new Set(tools.map((t) => t.category)))];

export default function ToolExplorer() {
  const [filter, setFilter] = useState("全部");
  const [search, setSearch] = useState("");

  const filtered = tools.filter((t) => {
    if (filter !== "全部" && t.category !== filter) return false;
    if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.description.includes(search))
      return false;
    return true;
  });

  return (
    <div className="my-6 bg-card rounded-xl border border-border p-5">
      <div className="text-xs font-semibold text-primary mb-3">
        🔧 工具浏览器 — OpenHarness 的 {tools.length}+ 个内置工具
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="搜索工具名称或描述..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-2 border border-border bg-background text-foreground placeholder:text-muted-foreground rounded-lg text-sm mb-3 focus:outline-none focus:border-primary/50"
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
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            }`}
          >
            {cat}
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
                  只读
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">{tool.description}</p>
            <span className="inline-block mt-1 text-[10px] text-muted-foreground">
              {tool.category}
            </span>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-gray-400 text-sm py-8">没有匹配的工具</p>
      )}
    </div>
  );
}
