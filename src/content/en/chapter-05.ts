import type { Chapter } from "../types";

const chapter: Chapter = {
  slug: "tools",
  phase: "B",
  phaseLabel: "Core Mechanisms",
  title: "The Tool System",
  subtitle: "The Agent's hands — 43+ built-in tools",
  sections: [
    {
      type: "analogy",
      title: "Like Apps on Your Phone",
      content:
        "Your phone by itself is just a screen and a processor. It's the apps that give it all its capabilities: the camera app lets it take photos, the maps app lets it navigate, the payment app lets it handle transactions. OpenHarness's tool system works the same way — each tool is an \"app\" that gives the Agent a specific capability.",
    },
    {
      type: "text",
      title: "How Do Tools Work?",
      content:
        "Every tool follows a unified pattern:\n\n1. Name — The tool's unique identifier, like Read, Bash, Grep\n2. Description — Tells the LLM what this tool can do\n3. Parameters — What inputs the tool needs\n4. Execute — The code that actually does the work\n5. Result — The output of the operation\n\nThe LLM decides which tool to use based on the tool's name and description, then passes in the parameters. The tool executes and returns a result.",
    },
    {
      type: "code",
      title: "Basic Tool Structure",
      content: "In OpenHarness, every tool inherits from BaseTool:",
      code: {
        language: "python",
        filename: "openharness/tools/base.py",
        source: `class BaseTool(ABC):
    """Base class for all tools"""

    @property
    def name(self) -> str:
        """Tool name, e.g. 'Read', 'Bash'"""
        ...

    @property
    def description(self) -> str:
        """Tool description — how the LLM understands its capabilities"""
        ...

    def get_input_schema(self) -> dict:
        """Parameter definition in JSON Schema format"""
        ...

    async def execute(self, params, context) -> ToolResult:
        """Execute the tool, return the result"""
        ...`,
        highlights: [1, 4, 9, 14, 18],
      },
    },
    {
      type: "text",
      title: "Tool Categories",
      content:
        "OpenHarness's 43+ tools fall into these categories:\n\n📁 File Operations (6)\nRead, Write, Edit, Glob, Grep, NotebookEdit\nThe most commonly used category — lets the Agent read, write, and search files.\n\n💻 Shell (1)\nBash — execute any shell command. The most powerful tool and the one that needs the most permission control.\n\n🔍 Search (3)\nWebFetch, WebSearch, ToolSearch\nLets the Agent retrieve information from the internet.\n\n🤖 Agent Collaboration (2)\nAgent, SendMessage\nLets one Agent launch sub-agents to handle complex subtasks.\n\n📋 Task Management (5)\nTaskCreate, TaskGet, TaskList, TaskUpdate, TaskStop\nManage background async tasks.\n\n🌐 MCP (3)\nMCPTool, ListMcpResources, ReadMcpResource\nConnect to external tools via the standard protocol.\n\n🔄 Workflow (4)\nEnterPlanMode, ExitPlanMode, EnterWorktree, ExitWorktree\nControl the Agent's operating mode.",
    },
    {
      type: "diagram",
      diagram: "ToolExplorer",
    },
    {
      type: "code",
      title: "The Registry Pattern",
      content: "All tools are managed through a unified registry:",
      code: {
        language: "python",
        filename: "openharness/tools/registry.py",
        source: `class ToolRegistry:
    """Tool Registry — unified management for all tools"""

    def register(self, tool: BaseTool):
        """Register a new tool"""
        self._tools[tool.name] = tool

    def get_tool(self, name: str) -> BaseTool:
        """Get a tool by name"""
        return self._tools[name]

    def get_tool_schemas(self) -> list[dict]:
        """Get JSON Schemas for all tools (for the LLM to see)"""
        return [tool.to_json_schema() for tool in self._tools.values()]`,
        highlights: [4, 8, 12],
      },
    },
    {
      type: "text",
      title: "ToolResult — The Tool's Return Value",
      content:
        "Every tool returns a ToolResult after execution, with two key fields:\n\n• output: The tool's output (e.g., file contents, command output)\n• is_error: Whether an error occurred\n\nImportantly, tool errors don't crash the program. Error messages are returned to the LLM as results, and the LLM sees the error and tries to correct course. It's like a person who made a mistake and self-corrects.",
    },
    {
      type: "key-concept",
      title: "Unified Interface + Registry = Infinite Extensibility",
      content:
        "The beauty of OpenHarness's tool system: every tool follows the same interface (BaseTool), managed through a unified registry. This means adding a new tool doesn't require modifying the engine — just write a new class and register it. That's why OpenHarness can support 43+ tools while keeping the code clean.",
    },
    {
      type: "quiz",
      quiz: {
        question: "When a tool execution errors out, what does OpenHarness do?",
        options: [
          "Crashes and exits",
          "Ignores the error and continues",
          "Returns the error message as a result to the LLM, letting it decide how to handle it",
          "Automatically retries 3 times",
        ],
        correctIndex: 2,
        explanation:
          "Tool errors are wrapped in a ToolResult (is_error=True) and returned to the LLM as a normal result. The LLM sees the error message and adjusts its strategy accordingly, like retrying with a different approach.",
      },
    },
    {
      type: "quiz",
      quiz: {
        question: "Why does OpenHarness use the 'registry pattern' to manage tools?",
        options: [
          "To make the code look more complex",
          "To limit the number of tools",
          "To enable unified management and runtime dynamic extension",
          "Because Python requires it",
        ],
        correctIndex: 2,
        explanation:
          "The registry pattern lets all tools be managed through a unified interface. Adding a new tool only requires creating a class and registering it — no engine changes needed. It also supports runtime dynamic loading (MCP tools, plugin tools).",
      },
    },
  ],
};

export default chapter;
