import type { Chapter } from "../types";

const chapter: Chapter = {
  slug: "what-is-agent",
  phase: "A",
  phaseLabel: "Fundamentals",
  title: "What Is an AI Agent",
  subtitle: "From 'just talking' to 'getting things done'",
  sections: [
    {
      type: "analogy",
      title: "Imagine this...",
      content:
        "You walk into a restaurant and order a steak. If the waiter just stands there chatting about how a steak should be cooked but never actually places an order — that's a plain Large Language Model (LLM). But if the waiter can talk to you, walk into the kitchen, place the order, bring your food, and handle the check — that's an AI Agent.",
    },
    {
      type: "text",
      title: "LLM vs AI Agent",
      content:
        'You\'ve probably already used AI tools like ChatGPT or Claude. Under the hood, they run on Large Language Models (LLMs).\n\nLLMs are incredibly smart — they can understand your questions, write essays, write code, and analyze data. But they have a fundamental limitation: they can only "talk," they can\'t "do."\n\nFor example, if you ask an LLM to "change line 10 of this file to hello," it can tell you how to make the change, but it can\'t actually open the file, modify the content, or save it.\n\nAI Agents exist to solve this problem. They add a layer of "infrastructure" on top of the LLM, enabling the AI to actually:\n\n• Read and write files\n• Execute commands\n• Search for information\n• Interact with external tools\n• Coordinate multiple subtasks',
    },
    {
      type: "comparison",
      comparison: {
        leftTitle: "Plain LLM",
        rightTitle: "AI Agent",
        items: [
          { label: "Core capability", left: "Understand and generate text", right: "Understand, decide, and execute" },
          { label: "Can it modify files?", left: "❌ No", right: "✅ Yes" },
          { label: "Can it run code?", left: "❌ No", right: "✅ Yes" },
          { label: "Can it search the web?", left: "❌ No", right: "✅ Yes" },
          { label: "How it works", left: "Single Q&A exchange", right: "Loop: think → act → observe → think again" },
          { label: "Analogy", left: "A brilliant brain", right: "A brilliant person with hands and feet" },
        ],
      },
    },
    {
      type: "text",
      title: "Why Are AI Agents So Important?",
      content:
        'Imagine this scenario:\n\nYou tell an AI: "Create a new React project, install dependencies, write a login page, and run the tests."\n\nA plain LLM can only give you step-by-step text instructions.\n\nBut an AI Agent will actually:\n1. Run npx create-react-app to create the project\n2. Run npm install to install dependencies\n3. Create files and write code\n4. Run npm test to check results\n5. If tests fail, automatically fix and retry\n\nThat\'s the power of an AI Agent — it doesn\'t just give advice, it actually completes the task.',
    },
    {
      type: "key-concept",
      title: "AI Agent = LLM + Infrastructure",
      content:
        "The core formula for an AI Agent is simple: take the intelligence of a Large Language Model and layer on top of it an \"infrastructure\" (also called a Harness) that lets it perceive its environment, use tools, and take action. In the next chapter, we'll dive into what exactly this \"infrastructure\" is.",
    },
    {
      type: "quiz",
      quiz: {
        question: "Which description most accurately distinguishes an LLM from an AI Agent?",
        options: [
          "LLMs are smarter, Agents are dumber",
          "LLMs can only generate text, Agents can perform real-world actions",
          "Agents don't need LLMs — they're completely different things",
          "There's no fundamental difference between LLMs and Agents",
        ],
        correctIndex: 1,
        explanation:
          "An AI Agent builds on top of an LLM by adding tool-use capabilities. The LLM provides intelligence (thinking and deciding), and the Agent's infrastructure provides the ability to act (using tools and executing operations).",
      },
    },
    {
      type: "quiz",
      quiz: {
        question:
          'When you tell an AI Agent "add a field to config.json," what does it do?',
        options: [
          "Tells you how to manually add it",
          "Generates the complete modified file content",
          "Actually reads the file → modifies the content → writes it back",
          "Does nothing, because it doesn't understand file operations",
        ],
        correctIndex: 2,
        explanation:
          "This is exactly the difference between an Agent and a plain LLM. An Agent uses tools (like Read and Edit) to actually perform file operations, rather than just telling you how to do it.",
      },
    },
  ],
};

export default chapter;
