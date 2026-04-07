import type { Chapter } from "../types";

const chapter: Chapter = {
  slug: "permissions",
  phase: "B",
  phaseLabel: "Core Mechanisms",
  title: "The Permission System",
  subtitle: "Three-tier safety guardrails — keeping the Agent safe",
  sections: [
    {
      type: "analogy",
      title: "Like a Company's Approval Process",
      content:
        "Imagine you're an employee at a company. Viewing documents (read-only operations) you can do on your own. But if you need to spend a large sum of money (dangerous operation), you need manager approval. And during an annual audit (plan mode), you can only view reports, not move money. The Agent's permission system follows the same logic — different operations require different levels of authorization.",
    },
    {
      type: "text",
      title: "Why Is the Permission System So Important?",
      content:
        "Imagine what would happen if an Agent had no permission restrictions:\n\n• It might accidentally delete important files\n• It might execute dangerous shell commands\n• It might leak sensitive information\n• It might modify code without your knowledge\n\nThe permission system is the Agent's \"safety guardrail.\" It ensures every operation goes through appropriate checks before execution.",
    },
    {
      type: "text",
      title: "Three Permission Modes",
      content:
        "OpenHarness provides three permission modes for different scenarios:\n\n🟢 Default Mode\n• Read operations auto-pass (reading files, searching — harmless operations)\n• Write operations require user confirmation (modifying files, executing commands, etc.)\n• Best for: everyday development\n\n🔵 Plan Mode\n• Only read operations are allowed\n• All write operations are blocked\n• Best for: code exploration before a major refactor\n\n🔴 Full Auto Mode\n• All operations auto-pass\n• Best for: sandbox environments or fully trusted scenarios\n• ⚠️ Not recommended for production",
    },
    {
      type: "diagram",
      diagram: "PermissionSimulator",
    },
    {
      type: "code",
      title: "The Permission Check Flow",
      content: "Before every tool execution, a permission check occurs:",
      code: {
        language: "python",
        filename: "openharness/permissions/checker.py",
        source: `class PermissionChecker:
    async def check(self, tool_name, params, mode):
        # Step 1: Check if tool is in the deny list
        if tool_name in self.denied_tools:
            return PermissionResult.DENIED

        # Step 2: Check path rules
        if not self.check_path_rules(params):
            return PermissionResult.DENIED

        # Step 3: Decide based on permission mode
        if mode == "plan":
            # Plan mode only allows read-only operations
            return ALLOW if is_read_only(tool_name) else DENIED

        if mode == "full_auto":
            return PermissionResult.ALLOW

        # Default mode: read-only auto-pass, writes need confirmation
        if is_read_only(tool_name):
            return PermissionResult.ALLOW
        return PermissionResult.ASK_USER`,
        highlights: [4, 13, 17, 21],
      },
    },
    {
      type: "text",
      title: "Fine-Grained Control",
      content:
        "Beyond the three modes, OpenHarness also supports more granular permission controls:\n\n• Path Rules — Block access to specific directories, like /etc/*\n• Denied Commands — Prevent execution of specific dangerous commands\n• Tool Allow/Deny Lists — Control which tools are available\n\nThese rules can be configured in settings files, giving the Agent precisely defined safety boundaries.",
    },
    {
      type: "key-concept",
      title: "Permission Checks Happen Before Every Tool Execution",
      content:
        "The permission system is not a post-hoc audit — it's a pre-check. In every tool call within the Agent Loop, the Harness first runs the PermissionChecker; only if it passes does the tool actually execute. This ensures security is built-in, not bolted on.",
    },
    {
      type: "quiz",
      quiz: {
        question: "In default permission mode, what happens when the Agent runs a Read (file read) operation?",
        options: [
          "A confirmation dialog pops up for the user",
          "It auto-passes without user confirmation",
          "It's directly rejected",
          "A password is required",
        ],
        correctIndex: 1,
        explanation:
          "In default mode, read operations (like Read, Glob, Grep) are considered safe and auto-pass. Only write operations (like Write, Bash, Edit) require user confirmation.",
      },
    },
    {
      type: "quiz",
      quiz: {
        question: "What scenario is best suited for Plan Mode?",
        options: [
          "Everyday code writing",
          "When you need to complete tasks quickly",
          "Before a major refactor — let the Agent explore the code and design a plan first",
          "Running on a production server",
        ],
        correctIndex: 2,
        explanation:
          "Plan mode only allows read operations. It's ideal for letting the Agent explore code, understand the architecture, and design a plan. Once you confirm the plan, switch to default mode to execute changes.",
      },
    },
  ],
};

export default chapter;
