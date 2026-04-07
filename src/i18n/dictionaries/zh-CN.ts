import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  // Metadata
  metadata: {
    title: "Learn OpenHarness — Official Interactive AI Agent Tutorial | 学习 OpenHarness",
    description: "Official Interactive Tutorial for OpenHarness – Zero to Hero in 12 Chapters. Learn OpenHarness like Claude Code: Agent Loop, Tools, Memory, Multi-Agent. 面向零基础的 AI Agent 交互式教程。",
  },

  // Sidebar
  sidebar: {
    title: "OpenHarness 学习",
    subtitle: "AI Agent 基础设施入门指南",
    progress: "学习进度",
    lightMode: "浅色模式",
    darkMode: "深色模式",
  },

  // Homepage
  home: {
    badge: "Zero to Hero · 12 Chapters",
    heading: "学习",
    officialTag: "Official Interactive Tutorial for OpenHarness",
    description: "像理解 Claude Code 一样学习 AI Agent 基础设施。",
    description2: "Agent Loop、工具系统、Memory、多 Agent 协作……",
    description3: "12 章从零到精通，不需要任何 AI 或编程基础。",
    startLearning: "开始学习",
    whatYouLearn: "你将学到什么？",
    chaptersSubtitle: "12 个章节，从基础到进阶，循序渐进",
    phasePrefix: "阶段",
    coreFormula: "核心公式",
    formulaDescription: "一个 AI Agent Harness 由五大核心能力组成。OpenHarness 用 ~11,700 行代码实现了完整的 Harness 架构。",
    features: [
      { icon: "🌱", title: "零基础友好", desc: "不需要任何 AI 或编程经验，每个概念都有生活类比" },
      { icon: "🎯", title: "循序渐进", desc: "12 章从简单到复杂，每章都建立在前一章的基础上" },
      { icon: "🧪", title: "互动学习", desc: "包含动画演示、交互模拟器和即时反馈的小测验" },
    ],
  },

  // Chapter page
  chapter: {
    prefix: "第",
    suffix: "章",
    notFound: "未找到",
    metaSuffix: "— 学习 OpenHarness",
    backHome: "返回首页 🎉",
    analogyDefault: "生活类比",
    keyConcept: "📌 关键要点",
    comparisonLabel: "对比项",
  },

  // Quiz
  quiz: {
    title: "🧠 检验理解",
    retry: "重新作答",
    correct: "✅ 正确！",
    incorrect: "❌ 不太对。",
  },

  // Agent Loop Animation
  agentLoop: {
    title: "🔄 Agent Loop 动画演示",
    stepPrefix: "第",
    stepSuffix: "步",
    prev: "← 上一步",
    next: "下一步 →",
    steps: [
      { label: "用户发送消息", description: "用户输入一个请求，比如「帮我读取 config.json 文件」" },
      { label: "LLM 思考", description: "大语言模型分析请求，决定需要使用 Read 工具来读取文件" },
      { label: "生成工具调用", description: '模型生成结构化的工具调用请求：Read(file_path="config.json")' },
      { label: "权限检查", description: "Harness 检查当前权限模式，读取操作在默认模式下自动通过" },
      { label: "执行工具", description: "Read 工具被执行，读取文件内容，返回结果" },
      { label: "结果返回", description: "工具结果被放入消息中，反馈给 LLM。LLM 根据文件内容生成最终回复" },
    ],
    boxes: ["用户", "LLM", "工具调用", "权限检查", "执行工具", "返回结果"],
  },

  // Tool Explorer
  toolExplorer: {
    title: "🔧 工具浏览器 — OpenHarness 的 {count}+ 个内置工具",
    searchPlaceholder: "搜索工具名称或描述...",
    readOnly: "只读",
    noResults: "没有匹配的工具",
    allCategory: "全部",
    categories: {
      "文件": "文件",
      "Shell": "Shell",
      "搜索": "搜索",
      "Agent": "Agent",
      "任务": "任务",
      "MCP": "MCP",
      "工作流": "工作流",
      "元工具": "元工具",
      "调度": "调度",
    },
    tools: [
      { name: "Read", category: "文件", description: "读取文件内容" },
      { name: "Write", category: "文件", description: "写入文件" },
      { name: "Edit", category: "文件", description: "精确替换文件中的字符串" },
      { name: "Glob", category: "文件", description: "按文件名模式搜索文件" },
      { name: "Grep", category: "文件", description: "按内容搜索文件（基于 ripgrep）" },
      { name: "NotebookEdit", category: "文件", description: "编辑 Jupyter Notebook 单元格" },
      { name: "Bash", category: "Shell", description: "执行 Shell 命令并返回输出" },
      { name: "WebFetch", category: "搜索", description: "获取网页内容" },
      { name: "WebSearch", category: "搜索", description: "在互联网上搜索信息" },
      { name: "ToolSearch", category: "搜索", description: "搜索可用的延迟加载工具" },
      { name: "Agent", category: "Agent", description: "启动子 Agent 处理复杂任务" },
      { name: "SendMessage", category: "Agent", description: "向已启动的 Agent 发送消息" },
      { name: "TaskCreate", category: "任务", description: "创建新的后台任务" },
      { name: "TaskGet", category: "任务", description: "获取任务状态和详情" },
      { name: "TaskList", category: "任务", description: "列出所有任务" },
      { name: "TaskUpdate", category: "任务", description: "更新任务状态" },
      { name: "TaskStop", category: "任务", description: "停止运行中的任务" },
      { name: "MCPTool", category: "MCP", description: "调用 MCP 服务器上的工具" },
      { name: "ListMcpResources", category: "MCP", description: "列出 MCP 资源" },
      { name: "ReadMcpResource", category: "MCP", description: "读取 MCP 资源内容" },
      { name: "EnterPlanMode", category: "工作流", description: "进入规划模式（只读探索）" },
      { name: "ExitPlanMode", category: "工作流", description: "退出规划模式" },
      { name: "EnterWorktree", category: "工作流", description: "进入独立的 Git 工作树" },
      { name: "ExitWorktree", category: "工作流", description: "退出 Git 工作树" },
      { name: "Skill", category: "元工具", description: "加载并执行技能（领域知识）" },
      { name: "AskUserQuestion", category: "元工具", description: "向用户提问以获取信息" },
      { name: "CronCreate", category: "调度", description: "创建定时任务" },
      { name: "CronList", category: "调度", description: "列出定时任务" },
      { name: "CronDelete", category: "调度", description: "删除定时任务" },
    ],
  },

  // Permission Simulator
  permissionSim: {
    title: "🛡️ 权限模拟器 — 试试切换不同模式",
    modes: {
      default: "默认",
      plan: "规划",
      "full-auto": "全自动",
    },
    modeDescriptions: {
      default: "默认模式：读取操作自动通过，写入操作需要用户确认",
      plan: "规划模式：只允许读取操作，所有写入操作都被阻止",
      "full-auto": "全自动模式：所有操作自动通过，适用于沙箱环境",
    },
    statuses: {
      autoPass: "自动通过",
      allowed: "允许",
      blocked: "阻止",
      needConfirm: "需要确认",
      needConfirmWarn: "需要确认 ⚠️",
    },
    actions: [
      { name: "读取文件", icon: "📖" },
      { name: "搜索文件", icon: "🔍" },
      { name: "写入新文件", icon: "📝" },
      { name: "编辑现有文件", icon: "✏️" },
      { name: "执行 Shell 命令", icon: "💻" },
      { name: "删除文件", icon: "🗑️" },
      { name: "安装依赖", icon: "📦" },
      { name: "Git push", icon: "🚀" },
      { name: "搜索网页", icon: "🌐" },
      { name: "启动子 Agent", icon: "🤖" },
    ],
  },

  // Architecture Diagram
  architecture: {
    title: "🏗️ OpenHarness 架构图 — 点击模块跳转到对应章节",
    nodes: [
      { id: "engine", label: "Engine\n引擎", description: "Agent Loop 核心循环" },
      { id: "tools", label: "Tools\n工具", description: "43+ 内置工具" },
      { id: "permissions", label: "Permissions\n权限", description: "三级安全护栏" },
      { id: "hooks", label: "Hooks", description: "生命周期事件钩子" },
      { id: "skills", label: "Skills\n技能", description: "按需加载知识" },
      { id: "memory", label: "Memory\n记忆", description: "跨会话持久化" },
      { id: "mcp", label: "MCP", description: "模型上下文协议" },
    ],
  },

  // Phases
  phases: {
    A: "基础认知",
    B: "核心机制",
    C: "智能层",
    D: "进阶",
  },
};

export default dictionary;
