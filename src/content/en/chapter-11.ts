import type { Chapter } from "../types";

const chapter: Chapter = {
  slug: "multi-agent",
  phase: "D",
  phaseLabel: "Advanced",
  title: "Multi-Agent Collaboration",
  subtitle: "Making multiple Agents work like a team",
  sections: [
    {
      type: "analogy",
      title: "Like a Project Team",
      content:
        "Imagine a software project: the project manager coordinates, the frontend dev writes the UI, the backend dev writes the API, and the QA engineer runs tests. Everyone has their specialty, and the PM assigns tasks to the right person. Multi-Agent collaboration works the same way — a main Agent coordinates the big picture and launches specialized sub-agents to handle different subtasks.",
    },
    {
      type: "text",
      title: "Why Do We Need Multiple Agents?",
      content:
        "A single Agent runs into several issues with complex tasks:\n\n• Limited context window — one Agent can only hold so much information\n• Tasks are too complex — multiple aspects need simultaneous attention (code, tests, docs)\n• Parallel processing — independent subtasks can run concurrently\n• Specialization — different subtasks may need different prompts and tool configurations\n\nMulti-Agent collaboration lets you decompose big tasks into smaller ones, delegating them to specialized Agents.",
    },
    {
      type: "text",
      title: "OpenHarness's Multi-Agent Architecture",
      content:
        "OpenHarness implements multi-Agent collaboration through these components:\n\n🤖 Agent Tool\nThe main Agent launches sub-agents via the Agent tool. Each sub-agent has its own independent conversation context and toolset.\n\n📨 SendMessage Tool\nSend messages to an already-running sub-agent, continuing a previous conversation.\n\n👥 TeamRegistry\nThe team registry manages all active sub-agents and their states.\n\n📋 TaskManager\nThe task manager coordinates sub-agent task assignment and lifecycle.",
    },
    {
      type: "code",
      title: "How to Launch Sub-Agents",
      content: "The main Agent can launch sub-agents like this:",
      code: {
        language: "python",
        filename: "System prompt — Agent tool description",
        source: `# How to use the Agent tool

# Launch a sub-agent specialized in code search
Agent(
    description="Search for auth-related code",
    prompt="Find all files and functions related to user authentication",
    subagent_type="Explore"  # Exploration agent
)

# Launch a planning sub-agent
Agent(
    description="Design refactoring plan",
    prompt="Analyze the current auth module architecture and design a refactor plan",
    subagent_type="Plan"  # Planning agent
)

# Launch in the background (doesn't block the main Agent)
Agent(
    description="Run test suite",
    prompt="Run all tests and report results",
    run_in_background=True
)`,
        highlights: [4, 11, 18],
      },
    },
    {
      type: "text",
      title: "Sub-Agent Types",
      content:
        "OpenHarness predefines several sub-agent types:\n\n🔍 Explore Agent\nSpecialized for code search and exploration. Has search-related tools but no edit permissions. Fast and safe.\n\n📐 Plan Agent\nSpecialized for designing plans. Can search and read code but can't modify it. Ideal for planning before implementation.\n\n🔧 General Purpose Agent\nA full-featured Agent with the complete toolset. For subtasks that require executing operations.\n\nEach type has a different toolset and permissions, ensuring sub-agents only do what they're supposed to.",
    },
    {
      type: "text",
      title: "Parallel vs Sequential",
      content:
        "A core advantage of multi-Agent is parallel processing. For example:\n\nSequential (slow):\nSearch frontend code → Search backend code → Search test code\n\nParallel (fast):\nLaunch 3 Explore Agents simultaneously, each searching frontend, backend, and test code respectively\n\nThe main Agent can use run_in_background=True to let sub-agents run in the background while it continues with other work. Sub-agents automatically notify the main Agent when they finish.",
    },
    {
      type: "key-concept",
      title: "Divide and Conquer, Each With Their Own Role",
      content:
        "The core philosophy of multi-Agent collaboration is \"divide and conquer.\" The main Agent handles understanding and coordination; sub-agents handle specific execution. Each sub-agent has an independent context and toolset, with no interference. This pattern lets Agent systems tackle tasks far beyond any single Agent's capabilities.",
    },
    {
      type: "quiz",
      quiz: {
        question: "Why not have a single Agent do everything alone?",
        options: [
          "Because one Agent isn't smart enough",
          "Because context is limited, tasks can be parallelized, and specialization improves results",
          "Because multiple Agents are cheaper",
          "Because of technical limitations that prevent single Agents from doing it",
        ],
        correctIndex: 1,
        explanation:
          "The main motivations for multi-Agent: a single Agent's context window is limited (can't remember too much), independent subtasks can be parallelized (faster), and different subtasks may need different tools and configurations (specialization).",
      },
    },
  ],
};

export default chapter;
