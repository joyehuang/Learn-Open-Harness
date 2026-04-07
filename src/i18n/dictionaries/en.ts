import type { Dictionary } from "../types";

const dictionary: Dictionary = {
  // Metadata
  metadata: {
    title: "Learn OpenHarness — Official Interactive AI Agent Tutorial",
    description: "Official Interactive Tutorial for OpenHarness – Zero to Hero in 12 Chapters. Learn the architecture behind Claude Code: Agent Loop, Tools, Memory, Multi-Agent.",
  },

  // Sidebar
  sidebar: {
    title: "Learn OpenHarness",
    subtitle: "AI Agent Infrastructure Guide",
    progress: "Progress",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
  },

  // Homepage
  home: {
    badge: "Zero to Hero · 12 Chapters",
    heading: "Learn",
    officialTag: "Official Interactive Tutorial for OpenHarness",
    description: "Understand AI Agent infrastructure the way Claude Code works.",
    description2: "Agent Loop, Tool System, Memory, Multi-Agent collaboration...",
    description3: "12 chapters from zero to mastery. No AI or programming experience needed.",
    startLearning: "Start Learning",
    whatYouLearn: "What You'll Learn",
    chaptersSubtitle: "12 chapters, from fundamentals to advanced, step by step",
    phasePrefix: "Phase",
    coreFormula: "Core Formula",
    formulaDescription: "An AI Agent Harness consists of five core capabilities. OpenHarness implements the complete Harness architecture in ~11,700 lines of code.",
    features: [
      { icon: "🌱", title: "Beginner Friendly", desc: "No AI or programming experience required — every concept has a real-world analogy" },
      { icon: "🎯", title: "Step by Step", desc: "12 chapters from simple to complex, each building on the previous one" },
      { icon: "🧪", title: "Interactive", desc: "Animated demos, interactive simulators, and quizzes with instant feedback" },
    ],
  },

  // Chapter page
  chapter: {
    prefix: "Chapter",
    suffix: "",
    notFound: "Not Found",
    metaSuffix: "— Learn OpenHarness",
    backHome: "Back to Home 🎉",
    analogyDefault: "Real-World Analogy",
    keyConcept: "📌 Key Takeaway",
    comparisonLabel: "Comparison",
  },

  // Quiz
  quiz: {
    title: "🧠 Check Your Understanding",
    retry: "Try Again",
    correct: "✅ Correct!",
    incorrect: "❌ Not quite.",
  },

  // Agent Loop Animation
  agentLoop: {
    title: "🔄 Agent Loop Animation",
    stepPrefix: "Step",
    stepSuffix: "",
    prev: "← Previous",
    next: "Next →",
    steps: [
      { label: "User sends message", description: 'User inputs a request, e.g. "Read the config.json file for me"' },
      { label: "LLM thinks", description: "The LLM analyzes the request and decides to use the Read tool to read the file" },
      { label: "Generate tool call", description: 'Model generates a structured tool call: Read(file_path="config.json")' },
      { label: "Permission check", description: "Harness checks the current permission mode — read operations auto-pass in default mode" },
      { label: "Execute tool", description: "The Read tool is executed, reads the file content, and returns the result" },
      { label: "Return result", description: "Tool result is placed into the message and fed back to the LLM, which generates the final response" },
    ],
    boxes: ["User", "LLM", "Tool Call", "Permission", "Execute", "Result"],
  },

  // Tool Explorer
  toolExplorer: {
    title: "🔧 Tool Explorer — {count}+ built-in tools in OpenHarness",
    searchPlaceholder: "Search tool name or description...",
    readOnly: "Read-only",
    noResults: "No matching tools",
    allCategory: "All",
    categories: {
      "文件": "File",
      "Shell": "Shell",
      "搜索": "Search",
      "Agent": "Agent",
      "任务": "Task",
      "MCP": "MCP",
      "工作流": "Workflow",
      "元工具": "Meta",
      "调度": "Schedule",
    },
    tools: [
      { name: "Read", category: "文件", description: "Read file contents" },
      { name: "Write", category: "文件", description: "Write to a file" },
      { name: "Edit", category: "文件", description: "Exact string replacement in files" },
      { name: "Glob", category: "文件", description: "Search files by name pattern" },
      { name: "Grep", category: "文件", description: "Search file contents (powered by ripgrep)" },
      { name: "NotebookEdit", category: "文件", description: "Edit Jupyter Notebook cells" },
      { name: "Bash", category: "Shell", description: "Execute shell commands and return output" },
      { name: "WebFetch", category: "搜索", description: "Fetch web page content" },
      { name: "WebSearch", category: "搜索", description: "Search the internet for information" },
      { name: "ToolSearch", category: "搜索", description: "Search available deferred tools" },
      { name: "Agent", category: "Agent", description: "Launch a sub-agent for complex tasks" },
      { name: "SendMessage", category: "Agent", description: "Send a message to a running agent" },
      { name: "TaskCreate", category: "任务", description: "Create a new background task" },
      { name: "TaskGet", category: "任务", description: "Get task status and details" },
      { name: "TaskList", category: "任务", description: "List all tasks" },
      { name: "TaskUpdate", category: "任务", description: "Update task status" },
      { name: "TaskStop", category: "任务", description: "Stop a running task" },
      { name: "MCPTool", category: "MCP", description: "Call a tool on an MCP server" },
      { name: "ListMcpResources", category: "MCP", description: "List MCP resources" },
      { name: "ReadMcpResource", category: "MCP", description: "Read MCP resource content" },
      { name: "EnterPlanMode", category: "工作流", description: "Enter plan mode (read-only exploration)" },
      { name: "ExitPlanMode", category: "工作流", description: "Exit plan mode" },
      { name: "EnterWorktree", category: "工作流", description: "Enter an isolated Git worktree" },
      { name: "ExitWorktree", category: "工作流", description: "Exit Git worktree" },
      { name: "Skill", category: "元工具", description: "Load and execute a skill (domain knowledge)" },
      { name: "AskUserQuestion", category: "元工具", description: "Ask the user a question for info" },
      { name: "CronCreate", category: "调度", description: "Create a scheduled task" },
      { name: "CronList", category: "调度", description: "List scheduled tasks" },
      { name: "CronDelete", category: "调度", description: "Delete a scheduled task" },
    ],
  },

  // Permission Simulator
  permissionSim: {
    title: "🛡️ Permission Simulator — Try switching modes",
    modes: {
      default: "Default",
      plan: "Plan",
      "full-auto": "Full Auto",
    },
    modeDescriptions: {
      default: "Default mode: Read operations auto-pass, write operations require user confirmation",
      plan: "Plan mode: Only read operations allowed, all write operations are blocked",
      "full-auto": "Full auto mode: All operations auto-pass, suitable for sandboxed environments",
    },
    statuses: {
      autoPass: "Auto-pass",
      allowed: "Allowed",
      blocked: "Blocked",
      needConfirm: "Needs confirm",
      needConfirmWarn: "Needs confirm ⚠️",
    },
    actions: [
      { name: "Read file", icon: "📖" },
      { name: "Search files", icon: "🔍" },
      { name: "Write new file", icon: "📝" },
      { name: "Edit existing file", icon: "✏️" },
      { name: "Execute shell command", icon: "💻" },
      { name: "Delete file", icon: "🗑️" },
      { name: "Install dependencies", icon: "📦" },
      { name: "Git push", icon: "🚀" },
      { name: "Search the web", icon: "🌐" },
      { name: "Launch sub-agent", icon: "🤖" },
    ],
  },

  // Architecture Diagram
  architecture: {
    title: "🏗️ OpenHarness Architecture — Click a module to jump to its chapter",
    nodes: [
      { id: "engine", label: "Engine", description: "Agent Loop core cycle" },
      { id: "tools", label: "Tools", description: "43+ built-in tools" },
      { id: "permissions", label: "Permissions", description: "Three-tier security guardrails" },
      { id: "hooks", label: "Hooks", description: "Lifecycle event hooks" },
      { id: "skills", label: "Skills", description: "On-demand knowledge loading" },
      { id: "memory", label: "Memory", description: "Cross-session persistence" },
      { id: "mcp", label: "MCP", description: "Model Context Protocol" },
    ],
  },

  // Phases
  phases: {
    A: "Fundamentals",
    B: "Core Mechanisms",
    C: "Intelligence Layer",
    D: "Advanced",
  },
};

export default dictionary;
