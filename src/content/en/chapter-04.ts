import type { Chapter } from "../types";

const chapter: Chapter = {
  slug: "agent-loop",
  phase: "B",
  phaseLabel: "Core Mechanisms",
  title: "Agent Loop",
  subtitle: "The Agent's heartbeat — a cycle of think, act, observe",
  sections: [
    {
      type: "analogy",
      title: "Like a Chef Cooking",
      content:
        "A chef's process goes: read the recipe (think) → chop vegetables (act) → taste (observe) → decide to add salt or sugar (think again) → keep going. This loop continues until the dish is done and served. The Agent Loop works exactly the same way — the AI continuously cycles through \"think → use tool → check result → think again\" until the task is complete.",
    },
    {
      type: "text",
      title: "What Is the Agent Loop?",
      content:
        "The Agent Loop is the core engine of the entire Harness — you could call it the Agent's \"heartbeat.\"\n\nIts workflow is straightforward:\n\n1. Send the user's message to the LLM\n2. The LLM returns a response — either text or a tool call request\n3. If it's a tool call, execute the tool and feed the result back to the LLM\n4. Go back to step 2, continue the loop\n5. Until the LLM considers the task done, returning a final text response\n\nThis is the secret behind how Agents accomplish complex tasks — they don't give a one-shot answer; they progressively advance through multiple loop iterations.",
    },
    {
      type: "diagram",
      diagram: "AgentLoopAnimation",
    },
    {
      type: "code",
      title: "Let's Look at Real Code (Simplified)",
      content: "Here's the core Agent Loop code from OpenHarness, simplified to under 20 lines:",
      code: {
        language: "python",
        filename: "openharness/engine/query.py",
        source: `async def run_query(context):
    """Agent Loop core: keep looping until the task is done"""

    for turn in range(context.max_turns):
        # Step 1: Send messages to LLM, get response
        response = await stream_response(
            context.api_client,
            context.messages,
            context.tools
        )

        # Step 2: If LLM didn't request a tool call, task is done
        if response.stop_reason != "tool_use":
            break

        # Step 3: Execute each tool the LLM requested
        for tool_call in response.tool_uses:
            result = await execute_tool(tool_call)
            context.messages.append(result)

        # Step 4: Tool results added to messages, back to top of loop`,
        highlights: [1, 7, 13, 16, 20],
      },
    },
    {
      type: "text",
      title: "Why Is the Agent Loop So Important?",
      content:
        "The Agent Loop is the foundation of all Agent capabilities. Without it, tools, permissions, and skills are just scattered components. The Agent Loop strings them together into a complete workflow.\n\nThink about it: if a task requires reading a file, modifying content, running tests, and fixing errors — that takes multiple loop iterations. In each iteration, the LLM decides what to do next based on the previous step's results.\n\nThis \"think → act → observe\" cycle is what makes AI Agents powerful.",
    },
    {
      type: "text",
      title: "The Secret of stop_reason",
      content:
        'In the Agent Loop, there\'s one critical condition: stop_reason.\n\nWhen the LLM returns stop_reason as "tool_use," it means the LLM wants to use a tool — the loop continues.\nWhen stop_reason is something else (like "end_turn"), it means the LLM believes the task is complete — the loop ends.\n\nThis simple check is the mechanism by which the Agent knows when to keep working and when to stop.',
    },
    {
      type: "key-concept",
      title: "The Loop Is the Agent's Core Pattern",
      content:
        "The Agent Loop is a simple but powerful pattern: send message → get response → if tools needed, execute them → feed results back to LLM → repeat. The entire Agent Loop core in OpenHarness is under 70 lines of code, yet it drives all complex functionality.",
    },
    {
      type: "quiz",
      quiz: {
        question: "When does the Agent Loop stop iterating?",
        options: [
          "After a fixed 10 iterations",
          "When the LLM's stop_reason is not tool_use",
          "When the user manually presses a stop button",
          "After every tool has been used once",
        ],
        correctIndex: 1,
        explanation:
          'The Agent Loop stops when the LLM considers the task complete — specifically when stop_reason is no longer "tool_use." This means the LLM itself decided it doesn\'t need to call any more tools.',
      },
    },
    {
      type: "quiz",
      quiz: {
        question: "If an Agent needs to \"read a file → modify content → run tests,\" roughly how many loop iterations will it take?",
        options: [
          "1 — the Agent does everything in a single pass",
          "At least 3 — one loop iteration per tool call",
          "It depends on the LLM's decisions — it might batch or split them",
          "Impossible to tell — it's completely random",
        ],
        correctIndex: 2,
        explanation:
          "The LLM might request multiple tool calls in a single response (parallel execution), or split them across multiple iterations. It depends on the LLM's judgment. But the core pattern remains: each iteration feeds tool results back to the LLM.",
      },
    },
  ],
};

export default chapter;
