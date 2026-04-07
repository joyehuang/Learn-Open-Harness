import type { Chapter } from "../types";

const chapter: Chapter = {
  slug: "hooks",
  phase: "B",
  phaseLabel: "Core Mechanisms",
  title: "The Hook System",
  subtitle: "Lifecycle events — inject custom logic at key moments",
  sections: [
    {
      type: "analogy",
      title: "Like a Building's Security System",
      content:
        "Imagine a building's entrance has security: everyone swipes a badge on the way in (PreToolUse) and signs a log on the way out (PostToolUse). The security system isn't the building's core function, but it can check, record, and even block people at key moments. The Hook system is the Agent's security system — at every tool \"entry and exit,\" it automatically runs your custom logic.",
    },
    {
      type: "text",
      title: "What Is a Hook?",
      content:
        "A Hook is a programming pattern: when a program reaches a specific moment, it automatically triggers a preset action.\n\nIn OpenHarness, the Hook system provides 4 timing points:\n\n• SESSION_START — Triggered when a session begins\n• SESSION_END — Triggered when a session ends\n• PRE_TOOL_USE — Triggered before tool execution\n• POST_TOOL_USE — Triggered after tool execution\n\nPRE_TOOL_USE and POST_TOOL_USE are the most commonly used — they let you insert custom logic before and after each tool execution.",
    },
    {
      type: "text",
      title: "What Can Hooks Do?",
      content:
        "Common use cases for hooks:\n\n📝 Logging\nRecord every tool call's parameters and results for auditing and debugging.\n\n🛡️ Extra Security Checks\nFor example, check if a Bash command contains dangerous operations — an extra layer of defense on top of the permission system.\n\n🔄 Auto-Formatting\nAutomatically run a code formatter after file writes.\n\n📊 Analytics\nTrack tool usage frequency, execution time, etc.\n\n🚫 Blocking Operations\nPreToolUse hooks can prevent tool execution — for example, blocking deploys outside work hours.",
    },
    {
      type: "code",
      title: "Hook Execution Flow",
      content: "Every time a tool is called, hooks execute in this order:",
      code: {
        language: "python",
        filename: "openharness/hooks/executor.py",
        source: `async def execute_tool_with_hooks(tool_call, context):
    # Step 1: Run PreToolUse hooks
    pre_result = await run_hooks("pre_tool_use", {
        "tool_name": tool_call.name,
        "tool_params": tool_call.params,
    })

    # If a hook requests blocking, return immediately
    if pre_result.should_block:
        return ToolResult("Blocked by Hook", is_error=True)

    # Step 2: Permission check (after hooks)
    permission = await check_permission(tool_call)
    if not permission.allowed:
        return ToolResult("Permission denied", is_error=True)

    # Step 3: Actually execute the tool
    result = await tool.execute(tool_call.params)

    # Step 4: Run PostToolUse hooks
    await run_hooks("post_tool_use", {
        "tool_name": tool_call.name,
        "result": result,
    })

    return result`,
        highlights: [2, 9, 18, 21],
      },
    },
    {
      type: "text",
      title: "Four Types of Hooks",
      content:
        "OpenHarness supports four different hook implementations:\n\n1. Command Hook\nExecutes a shell command. The simplest and most direct approach.\n\n2. HTTP Hook\nSends an HTTP request to a specified URL. Ideal for integrating with external services.\n\n3. Prompt Hook\nLets the Agent process a prompt itself. Suitable for complex judgment logic.\n\n4. Agent Hook\nLaunches a full sub-agent to handle it. For scenarios requiring multi-step reasoning.\n\nIn most cases, a Command Hook is sufficient.",
    },
    {
      type: "code",
      title: "How to Configure Hooks",
      content: "Hooks are configured in settings.json:",
      code: {
        language: "json",
        filename: "settings.json",
        source: `{
  "hooks": {
    "pre_tool_use": [
      {
        "type": "command",
        "command": "echo 'About to execute tool: $TOOL_NAME'",
        "match_tools": ["Bash"]
      }
    ],
    "post_tool_use": [
      {
        "type": "command",
        "command": "echo 'Tool execution complete: $TOOL_NAME'"
      }
    ]
  }
}`,
        highlights: [3, 5, 7, 10],
      },
    },
    {
      type: "key-concept",
      title: "Hooks Make the Harness Observable and Extensible",
      content:
        "The core value of the Hook system: inject custom logic at key moments without modifying engine code. This makes OpenHarness not just a tool, but an observable, extensible platform.",
    },
    {
      type: "quiz",
      quiz: {
        question: "What is the most important special ability of PreToolUse hooks?",
        options: [
          "Logging",
          "They can block tool execution",
          "Auto-fixing errors",
          "Speeding up tool execution",
        ],
        correctIndex: 1,
        explanation:
          "PreToolUse hooks can not only record information but also return should_block to prevent tool execution. This makes them an extra safety layer that can intercept inappropriate operations before even reaching the permission check.",
      },
    },
  ],
};

export default chapter;
