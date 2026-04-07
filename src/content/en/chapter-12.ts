import type { Chapter } from "../types";

const chapter: Chapter = {
  slug: "full-picture",
  phase: "D",
  phaseLabel: "Advanced",
  title: "The Full Picture",
  subtitle: "The complete journey from user input to Agent response",
  sections: [
    {
      type: "analogy",
      title: "Follow a Request End to End",
      content:
        "Like following a product through a factory from raw materials to finished goods, we're now going to follow a user request through its complete journey in OpenHarness. This chapter ties together everything you've learned.",
    },
    {
      type: "text",
      title: 'Scenario: User says "Fix the bug in login.py"',
      content:
        "Let's trace this request through every step in OpenHarness:",
    },
    {
      type: "text",
      title: "Step 1: CLI Entry Point",
      content:
        "The user types a request in the terminal. The CLI receives the text, wraps it into a User Message, and passes it to the Engine.\n\n📂 Relevant code: cli.py → parse CLI arguments and input",
    },
    {
      type: "text",
      title: "Step 2: Engine Initialization",
      content:
        "The Engine prepares everything the Agent Loop needs:\n\n• Load the system prompt\n• Inject memories from MEMORY.md\n• Prepare the tool list (built-in + MCP)\n• Initialize the permission checker\n\n📂 Relevant code: engine/query_engine.py → assemble runtime context",
    },
    {
      type: "text",
      title: "Step 3: Agent Loop — Round 1",
      content:
        'The message is sent to the LLM (via the Anthropic API). The LLM analyzes the request and decides to read the file first:\n\nReturns: tool_use → Read(file_path="login.py")\n\n📂 Relevant code: engine/query.py → run_query loop',
    },
    {
      type: "text",
      title: "Step 4: Hook + Permission Check",
      content:
        "Before executing the Read tool:\n\n1. PreToolUse Hook is triggered → logs the action\n2. PermissionChecker checks → Read is a read-only operation, auto-passes in default mode\n\n📂 Relevant code: hooks/executor.py + permissions/checker.py",
    },
    {
      type: "text",
      title: "Step 5: Tool Execution",
      content:
        "The Read tool executes:\n• Opens the login.py file\n• Reads the content\n• Wraps it in a ToolResult and returns\n\nThe result is added to the message history.\n\n📂 Relevant code: tools/file_read.py → execute()",
    },
    {
      type: "text",
      title: "Step 6: Agent Loop — Round 2",
      content:
        'The LLM sees the file content and finds a reversed condition on line 42. It decides to fix it:\n\nReturns: tool_use → Edit(file_path="login.py", old_string="if user == None", new_string="if user is not None")\n\nThis time, Edit is a write operation. In default mode:\n• Hook fires\n• Permission check → requires user confirmation\n• User sees a confirmation prompt in the terminal and clicks "Allow"\n• The Edit tool executes the modification',
    },
    {
      type: "text",
      title: "Step 7: Agent Loop — Round 3",
      content:
        'The LLM sees the edit succeeded and decides to run tests to confirm:\n\nReturns: tool_use → Bash(command="python -m pytest test_login.py")\n\nAfter user confirmation, the tests run and pass.',
    },
    {
      type: "text",
      title: "Step 8: Loop Ends",
      content:
        'The LLM considers the task complete and returns a final response (stop_reason="end_turn"):\n\n"Fixed the bug on line 42 of login.py. The issue was that `if user == None` should be `if user is not None`. Tests pass."\n\nThe Agent Loop ends, and the result is displayed in the terminal.',
    },
    {
      type: "text",
      title: "Step 9: Memory (Optional)",
      content:
        "If something worth remembering was discovered during the process (like a recurring bug pattern), the Agent writes it to a memory file for future conversations.",
    },
    {
      type: "text",
      title: "Full Flow Summary",
      content:
        "Let's review all the subsystems involved:\n\n1. CLI / UI → User interface\n2. Engine → Agent Loop core cycle (3 rounds)\n3. API → Communication with the LLM (3 API calls)\n4. Tools → Read, Edit, Bash (3 tools)\n5. Hooks → PreToolUse / PostToolUse (before and after each tool)\n6. Permissions → Read auto-passes, writes need confirmation (2 confirmations)\n7. Memory → Optional cross-session memory\n\nSee? A simple \"fix a bug\" request involved most of OpenHarness's subsystems. That's the power of the Harness — all components work together to let the Agent accomplish complex tasks.",
    },
    {
      type: "key-concept",
      title: "Everything Comes Together",
      content:
        "Congratulations on completing all 12 chapters! Now you understand: what an Agent is, the Harness's five capabilities, the Agent Loop cycle, the tool system, permission control, Hook lifecycle, on-demand skills loading, memory persistence, the MCP standard protocol, multi-Agent collaboration, and how they all work together in a real request.",
    },
    {
      type: "text",
      title: "What's Next?",
      content:
        "Now that you have a comprehensive understanding of OpenHarness, consider:\n\n🔍 Read the Source Code\nOpenHarness is only about 11,700 lines of code. Reading it in the order of this course will feel very natural.\n\n🔧 Build a Custom Tool\nInherit from BaseTool, implement your own tool, and register it.\n\n📚 Write a Skill\nCreate a custom skill file for your project or team.\n\n🌐 Build an MCP Server\nWrap a service you frequently use as an MCP Server so Agents can use it directly.\n\n🤝 Contribute\nOpenHarness is open source — contributions of code and ideas are welcome.",
    },
    {
      type: "quiz",
      quiz: {
        question:
          'In the "fix a bug" full flow, how many rounds did the Agent Loop iterate?',
        options: ["1 round", "2 rounds", "3 rounds", "4 rounds"],
        correctIndex: 2,
        explanation:
          "3 rounds: Round 1 read the file (Read), Round 2 modified the file (Edit), Round 3 ran tests (Bash). After tests passed in Round 3, the LLM considered the task complete and returned the final response, ending the loop.",
      },
    },
    {
      type: "quiz",
      quiz: {
        question: "In default permission mode, which operations in this flow required user confirmation?",
        options: [
          "All 3 operations",
          "Only Edit and Bash (write operations)",
          "Only Bash",
          "None of them",
        ],
        correctIndex: 1,
        explanation:
          "In default mode, Read (reading) auto-passes, while Edit (modifying files) and Bash (executing commands) are write operations that require user confirmation. This is the tiered design of the permission system.",
      },
    },
  ],
};

export default chapter;
