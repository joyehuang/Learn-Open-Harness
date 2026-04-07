import type { Chapter } from "../types";

const chapter: Chapter = {
  slug: "skills",
  phase: "C",
  phaseLabel: "Intelligence Layer",
  title: "The Skills System",
  subtitle: "An on-demand knowledge library",
  sections: [
    {
      type: "analogy",
      title: "Like Borrowing Books from a Library",
      content:
        "You can't memorize every book in a library. But when you know what topic you need, you go and borrow the right book. The Agent's skill system works the same way — it doesn't stuff all knowledge into the prompt. Instead, it \"borrows\" the relevant skill manual when needed.",
    },
    {
      type: "text",
      title: "Why Do We Need a Skills System?",
      content:
        "An LLM's knowledge is limited — it might not know your project's specific conventions, workflows, or best practices.\n\nAt the same time, the system prompt has a length limit. Cramming everything in would:\n• Consume massive amounts of tokens (higher cost)\n• Bury key information\n• Slow down response time\n\nThe skills system's solution: normally load only the core prompt, and dynamically load the relevant skill knowledge when the Agent encounters a specific task.",
    },
    {
      type: "text",
      title: "What Does a Skill Look Like?",
      content:
        "Each skill is a Markdown file containing metadata and specific knowledge:",
    },
    {
      type: "code",
      title: "Skill File Example",
      code: {
        language: "markdown",
        filename: "skills/commit.md",
        source: `---
name: commit
description: Help users create well-formatted Git commits
---

# Git Commit Guidelines

## When to Use
Use this skill when the user asks to commit code.

## Workflow
1. Run git status to check changes
2. Run git diff to see specific modifications
3. Analyze changes and compose a commit message
4. Commit message format: type(scope): description

## Notes
- Don't use git add -A; add files individually
- Keep commit messages concise — explain "why" not "what"
- Don't commit files containing secrets`,
        highlights: [1, 2, 3],
      },
    },
    {
      type: "text",
      title: "Skill Discovery and Loading",
      content:
        "OpenHarness discovers skills from these locations:\n\n1. Built-in skills — Bundled with OpenHarness (e.g., commit, review-pr)\n2. User directory — Custom skills in ~/.openharness/skills/\n3. Plugin-provided — Skills registered through the plugin system\n\nWhen the Agent encounters a relevant task, it uses the Skill tool to load the corresponding skill. Once loaded, the skill's content is injected into the current conversation context.",
    },
    {
      type: "text",
      title: "Skill Design Philosophy",
      content:
        "Good skills should:\n\n✅ Focus on a single domain — one skill solves one type of problem\n✅ Include concrete workflows — not just knowledge, but steps\n✅ Describe \"when to use\" — so the Agent knows when to load it\n✅ Provide caveats — prevent common mistakes\n\nBad skills:\n❌ Content too broad, tries to cover everything\n❌ Only abstract concepts, no concrete steps\n❌ Missing description of when to use",
    },
    {
      type: "key-concept",
      title: "On-Demand Loading = Efficient + Precise",
      content:
        "The core idea of the skills system is \"on-demand loading.\" It solves the \"too much knowledge to fit\" problem by giving the Agent domain-specific knowledge only when needed. Each skill is just a Markdown file — simple yet powerful.",
    },
    {
      type: "quiz",
      quiz: {
        question: "Why not put all knowledge into the system prompt?",
        options: [
          "It's technically impossible",
          "The LLM can't understand very long prompts",
          "It wastes tokens, buries key information, and slows down responses",
          "Security reasons",
        ],
        correctIndex: 2,
        explanation:
          "Stuffing all knowledge into the prompt wastes massive amounts of tokens (higher cost), key information gets buried in the noise (lower quality), and processing long prompts slows response time. On-demand loading is the more efficient approach.",
      },
    },
  ],
};

export default chapter;
