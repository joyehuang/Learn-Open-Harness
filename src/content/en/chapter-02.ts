import type { Chapter } from "../types";

const chapter: Chapter = {
  slug: "what-is-harness",
  phase: "A",
  phaseLabel: "Fundamentals",
  title: "What Is a Harness",
  subtitle: "The equipment system for an Agent",
  sections: [
    {
      type: "analogy",
      title: "RPG Game Analogy",
      content:
        "Imagine you're playing an RPG. Your character (the LLM) has max intelligence, but without weapons, armor, potions, and maps, they can only stand in place. The Harness is the equipment system — it gives the LLM tools (weapons), knowledge (maps), permissions (rules), and memory (a journal), turning it into a real adventurer.",
    },
    {
      type: "text",
      title: "What Exactly Is a Harness?",
      content:
        'In English, a harness is the gear strapped onto a horse — it lets the rider control and guide the animal.\n\nIn the AI world, a Harness (also called an Agent Harness) is the "middleware layer" between the LLM and the real world. It\'s not the AI itself — it\'s the AI\'s infrastructure.\n\nThe core problem a Harness solves: how do you turn a "brain that can only think" into a "person who can act"?\n\nThe answer: give it five core capabilities.',
    },
    {
      type: "text",
      title: "Five Core Capabilities of a Harness",
      content:
        "1. 🔧 Tools — The Agent's hands\n   Let the AI read/write files, execute commands, search the web, etc.\n\n2. 📚 Knowledge — The Agent's supplementary brain\n   Load domain-specific knowledge and guidance on demand\n\n3. 👀 Observation — The Agent's eyes\n   Get real-time results from tool execution, perceive environment changes\n\n4. ⚡ Action — The Agent's execution power\n   Actually execute decisions, turning ideas into reality\n\n5. 🛡️ Permissions — The Agent's rules\n   Ensure the AI operates within safe boundaries and doesn't perform dangerous actions",
    },
    {
      type: "text",
      title: "Why Do We Need OpenHarness?",
      content:
        "There are already some commercial Agent products (like Claude Code, Cursor), but their internals are closed — you can't see how they work.\n\nOpenHarness is an open-source project that implements a complete Agent Harness in about 11,700 lines of Python code. Its purpose is to:\n\n• Help developers understand the underlying principles of Agents\n• Provide a reference implementation for learning, experimenting, and extending\n• Be compatible with Claude Code's tool and plugin ecosystem\n\nIf Claude Code is a complete car, then OpenHarness is a transparent training vehicle — you can see how every part works.",
    },
    {
      type: "key-concept",
      title: "The Harness Is the Bridge Between LLM and Reality",
      content:
        "A Harness isn't the AI itself — it's the infrastructure that makes AI capabilities real. It contains five core elements: Tools, Knowledge, Observation, Action, and Permissions. OpenHarness is the open-source implementation of this infrastructure, letting you see exactly how an Agent operates internally.",
    },
    {
      type: "quiz",
      quiz: {
        question: "What is the role of a Harness in AI Agent architecture?",
        options: [
          "It is the large language model itself",
          "It's the middleware infrastructure between the LLM and the real world",
          "It's a database",
          "It's the user interface",
        ],
        correctIndex: 1,
        explanation:
          "The Harness is the middleware infrastructure that provides the LLM with tools, knowledge, permissions, and more, enabling it to interact with the real world.",
      },
    },
    {
      type: "quiz",
      quiz: {
        question: "What is OpenHarness's unique value compared to Claude Code?",
        options: [
          "More features",
          "Faster performance",
          "Open-source and transparent — you can study the internals",
          "Doesn't require an API key",
        ],
        correctIndex: 2,
        explanation:
          "OpenHarness implements the complete Harness architecture in about 11,700 lines of code. The code is transparent and readable, making it the best resource for learning how Agents work under the hood.",
      },
    },
  ],
};

export default chapter;
