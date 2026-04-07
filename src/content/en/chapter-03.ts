import type { Chapter } from "../types";

const chapter: Chapter = {
  slug: "harness-equation",
  phase: "A",
  phaseLabel: "Fundamentals",
  title: "The Harness Equation",
  subtitle: "Tools + Knowledge + Observation + Action + Permissions",
  sections: [
    {
      type: "analogy",
      title: "Like Assembling a Robot",
      content:
        "Imagine building a robot that can do work for you. Just having a smart brain (LLM) isn't enough — you also need to attach arms (Tools), a knowledge base (Knowledge), cameras (Observation), actuators (Action), and safety locks (Permissions). These five things combined make a complete Harness.",
    },
    {
      type: "text",
      title: "The Core Equation",
      content:
        "The overall architecture of OpenHarness can be summarized in one simple equation:\n\nHarness = Tools + Knowledge + Observation + Action + Permissions\n\nLet's break down each part:",
    },
    {
      type: "text",
      title: "🔧 Tools — 43+ Built-in Tools",
      content:
        "Tools are the interfaces through which an Agent interacts with the outside world. OpenHarness has 43+ built-in tools covering:\n\n• File operations: Read, Write, Edit, Glob, Grep\n• Shell commands: Bash\n• Search: WebFetch, WebSearch\n• Agent collaboration: Agent, SendMessage\n• Task management: TaskCreate, TaskUpdate\n• MCP integration: MCPTool\n• Workflow control: EnterPlanMode, EnterWorktree\n\nEvery tool follows a unified interface: receive parameters → execute operation → return result.",
    },
    {
      type: "text",
      title: "📚 Knowledge — On-Demand Loading",
      content:
        "An Agent can't fit all knowledge into a single prompt. OpenHarness's Skills system allows loading domain-specific knowledge on demand, like a library — grab the book you need when you need it.",
    },
    {
      type: "text",
      title: "👀 Observation — Real-Time Feedback",
      content:
        'Every time a tool finishes executing, the result is fed back to the LLM. This is "observation" — the Agent can see what effect its action had, then decide what to do next.',
    },
    {
      type: "text",
      title: "⚡ Action — Iterative Execution",
      content:
        "An Agent doesn't complete a task in one shot. It continuously loops (Agent Loop): think → call a tool → observe the result → think again. This loop is the Agent's heartbeat — we'll cover it in detail in Chapter 4.",
    },
    {
      type: "text",
      title: "🛡️ Permissions — Safety Guardrails",
      content:
        "Letting AI operate freely is dangerous. OpenHarness provides three permission tiers to ensure the Agent doesn't perform inappropriate actions. This is one of the most important design elements of the Harness.",
    },
    {
      type: "diagram",
      diagram: "ArchitectureDiagram",
    },
    {
      type: "text",
      title: "OpenHarness's 10 Subsystems",
      content:
        "At the code level, OpenHarness breaks those five capabilities into 10 subsystems:\n\n1. Engine — Agent Loop core cycle\n2. Tools — 43+ built-in tools\n3. Skills — On-demand knowledge loading\n4. Plugins — Extension mechanism\n5. Permissions — Safety checks\n6. Hooks — Lifecycle events\n7. Commands — 54 user-interaction commands\n8. MCP — Model Context Protocol integration\n9. Memory — Cross-session persistence\n10. Tasks — Background task management\n\nIn the following chapters, we'll dive deep into each subsystem.",
    },
    {
      type: "key-concept",
      title: "Five Capabilities, Ten Subsystems",
      content:
        "Remember this equation: Harness = Tools + Knowledge + Observation + Action + Permissions. OpenHarness implements this as 10 cleanly separated subsystems at the code level, each with a single responsibility, composed together through a registry pattern.",
    },
    {
      type: "quiz",
      quiz: {
        question: 'What does "Observation" refer to in the Harness equation?',
        options: [
          "Users observing the Agent's behavior",
          "The Agent observing tool execution results and making decisions based on them",
          "System monitoring and logging",
          "Data visualization",
        ],
        correctIndex: 1,
        explanation:
          "Observation means the Agent can perceive the results of tool execution. For example, after reading a file, the Agent sees the file contents and decides what to do next based on them.",
      },
    },
  ],
};

export default chapter;
