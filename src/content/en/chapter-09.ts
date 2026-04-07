import type { Chapter } from "../types";

const chapter: Chapter = {
  slug: "memory",
  phase: "C",
  phaseLabel: "Intelligence Layer",
  title: "The Memory System",
  subtitle: "Letting the Agent remember you across conversations",
  sections: [
    {
      type: "analogy",
      title: "Like Your Personal Notebook",
      content:
        "Imagine you have an assistant who gets amnesia every morning. You have to re-explain your preferences, project context, and work habits every single day. Now give them a notebook where they can write down important things — the next day, they just flip it open and know everything. That's the Agent's memory system.",
    },
    {
      type: "text",
      title: "The LLM's \"Amnesia\" Problem",
      content:
        "Large language models have a fundamental limitation: every new conversation starts from scratch. They don't remember what you told them yesterday, don't know your preferences, and have no context about your project.\n\nThis means you might need to repeatedly explain:\n• What tech stack your project uses\n• What coding style you prefer\n• What bug was fixed in the last conversation\n• Your role and work priorities\n\nThe memory system exists to solve this problem.",
    },
    {
      type: "text",
      title: "OpenHarness's Memory Mechanism",
      content:
        "OpenHarness uses a file-based memory system with these core components:\n\n📄 MEMORY.md\nThe memory index file that lists all memory entries with titles and links. It's loaded into context at the start of every conversation.\n\n📁 Memory Directory\nEach memory entry is stored as an independent Markdown file, organized by topic.\n\nThe design is elegant: MEMORY.md serves as an index that's always in context, so the Agent quickly knows what memories are available. When needed, it reads the specific files.",
    },
    {
      type: "text",
      title: "Four Types of Memory",
      content:
        "OpenHarness defines four memory types:\n\n👤 User Memory\nInformation about the user: role, preferences, expertise level, etc.\nExample: \"User is a senior Go developer but new to React\"\n\n💬 Feedback Memory\nUser corrections and confirmations of Agent behavior.\nExample: \"Don't summarize at the end of every response\"\n\n📋 Project Memory\nProject-related information: goals, deadlines, special agreements.\nExample: \"Code freeze starts March 5th\"\n\n🔗 Reference Memory\nLocations of external resources.\nExample: \"Bug tracking is in the Linear INGEST project\"",
    },
    {
      type: "code",
      title: "What a Memory Entry Looks Like",
      code: {
        language: "markdown",
        filename: "memory/feedback_testing.md",
        source: `---
name: Testing preferences
description: User's preferences on testing approach
type: feedback
---

Integration tests must use a real database, no mocks.

**Why:** Last quarter, mocked tests all passed but the real
database migration failed, causing a production incident.

**How to apply:** All database-related tests should use
a test database instance, no mocking whatsoever.`,
        highlights: [1, 2, 3, 4, 7],
      },
    },
    {
      type: "text",
      title: "Memory Lifecycle",
      content:
        "1. Create: The Agent writes a memory file when it discovers information worth remembering\n2. Index: The memory entry is added to the MEMORY.md index\n3. Load: MEMORY.md is loaded into context at the start of every new conversation\n4. Use: The Agent adjusts its behavior based on memories\n5. Update: If information becomes outdated, the Agent updates or deletes the memory\n\nImportantly, the Agent verifies that memories are still accurate before acting on them. Memories can become stale, so the Agent cross-references them with the current code state.",
    },
    {
      type: "key-concept",
      title: "Files = Persistence, Index = Efficient Access",
      content:
        "OpenHarness's memory system is elegantly designed: simple Markdown files store memories (easy to read, easy to edit), and MEMORY.md serves as the index (quick lookup). No database needed, no complex vector store — the file system is the best persistence solution.",
    },
    {
      type: "quiz",
      quiz: {
        question: "What is MEMORY.md's role in the memory system?",
        options: [
          "Stores the full content of all memories",
          "Serves as an index, listing all memory entry titles and links",
          "Configures memory system parameters",
          "Records the Agent's conversation history",
        ],
        correctIndex: 1,
        explanation:
          "MEMORY.md is the memory index file. Each memory's full content is stored in its own Markdown file. MEMORY.md only lists titles and links, making it easy for the Agent to quickly see what memories are available.",
      },
    },
  ],
};

export default chapter;
