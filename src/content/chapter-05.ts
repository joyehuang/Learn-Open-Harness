import type { Chapter } from "./types";

const chapter: Chapter = {
  slug: "tools",
  phase: "B",
  phaseLabel: "核心机制",
  title: "工具系统",
  subtitle: "Agent 的双手 — 43+ 个内置工具",
  sections: [
    {
      type: "analogy",
      title: "像手机上的 App",
      content:
        "你的手机本身只是一块屏幕和处理器，是 App 赋予了它各种能力：相机 App 让它能拍照，地图 App 让它能导航，支付 App 让它能付款。OpenHarness 的工具系统也是一样 —— 每个工具就是一个「App」，赋予 Agent 一种特定的能力。",
    },
    {
      type: "text",
      title: "工具是怎么工作的？",
      content:
        "每个工具都遵循一个统一的模式：\n\n1. 名字（Name）：工具的唯一标识，比如 Read、Bash、Grep\n2. 描述（Description）：告诉 LLM 这个工具能做什么\n3. 参数定义（Parameters）：工具需要什么输入\n4. 执行逻辑（Execute）：真正做事的代码\n5. 返回结果（Result）：操作的输出\n\nLLM 会根据工具的名字和描述来决定使用哪个工具，然后传入参数，工具执行后返回结果。",
    },
    {
      type: "code",
      title: "工具的基本结构",
      content: "在 OpenHarness 中，每个工具都继承自 BaseTool：",
      code: {
        language: "python",
        filename: "openharness/tools/base.py",
        source: `class BaseTool(ABC):
    """所有工具的基类"""

    @property
    def name(self) -> str:
        """工具名称，如 'Read', 'Bash'"""
        ...

    @property
    def description(self) -> str:
        """工具描述，LLM 通过这个了解工具能力"""
        ...

    def get_input_schema(self) -> dict:
        """参数定义，用 JSON Schema 格式"""
        ...

    async def execute(self, params, context) -> ToolResult:
        """执行工具，返回结果"""
        ...`,
        highlights: [1, 4, 9, 14, 18],
      },
    },
    {
      type: "text",
      title: "工具的分类",
      content:
        "OpenHarness 的 43+ 个工具可以分为以下几大类：\n\n📁 文件操作（6 个）\nRead、Write、Edit、Glob、Grep、NotebookEdit\n这是最常用的一类工具，让 Agent 能读写和搜索文件。\n\n💻 Shell（1 个）\nBash —— 执行任意 Shell 命令，是最强大也最需要权限控制的工具。\n\n🔍 搜索（3 个）\nWebFetch、WebSearch、ToolSearch\n让 Agent 能从互联网获取信息。\n\n🤖 Agent 协作（2 个）\nAgent、SendMessage\n让一个 Agent 启动子 Agent 来处理复杂子任务。\n\n📋 任务管理（5 个）\nTaskCreate、TaskGet、TaskList、TaskUpdate、TaskStop\n管理后台异步任务。\n\n🌐 MCP（3 个）\nMCPTool、ListMcpResources、ReadMcpResource\n通过标准协议连接外部工具。\n\n🔄 工作流（4 个）\nEnterPlanMode、ExitPlanMode、EnterWorktree、ExitWorktree\n控制 Agent 的工作模式。",
    },
    {
      type: "diagram",
      diagram: "ToolExplorer",
    },
    {
      type: "code",
      title: "工具注册表模式",
      content: "所有工具通过一个「注册表」统一管理：",
      code: {
        language: "python",
        filename: "openharness/tools/registry.py",
        source: `class ToolRegistry:
    """工具注册表 —— 统一管理所有工具"""

    def register(self, tool: BaseTool):
        """注册一个新工具"""
        self._tools[tool.name] = tool

    def get_tool(self, name: str) -> BaseTool:
        """按名称获取工具"""
        return self._tools[name]

    def get_tool_schemas(self) -> list[dict]:
        """获取所有工具的 JSON Schema（给 LLM 看的）"""
        return [tool.to_json_schema() for tool in self._tools.values()]`,
        highlights: [4, 8, 12],
      },
    },
    {
      type: "text",
      title: "ToolResult —— 工具的返回值",
      content:
        '每个工具执行后都会返回一个 ToolResult，它有两个关键字段：\n\n• output：工具的输出内容（比如文件内容、命令输出）\n• is_error：是否出错\n\n重要的是，工具的错误不会导致程序崩溃。错误信息会被当作结果返回给 LLM，LLM 会看到错误并尝试修正。这就像一个人做错了事会自我纠正一样。',
    },
    {
      type: "key-concept",
      title: "统一接口 + 注册表 = 无限扩展",
      content:
        "OpenHarness 工具系统的精妙之处在于：每个工具都遵循相同的接口（BaseTool），通过注册表统一管理。这意味着添加新工具不需要修改引擎代码 —— 只需要写一个新类、注册进去即可。这就是为什么 OpenHarness 能支持 43+ 个工具而代码依然简洁。",
    },
    {
      type: "quiz",
      quiz: {
        question: "当工具执行出错时，OpenHarness 会怎么处理？",
        options: [
          "程序崩溃并退出",
          "忽略错误继续执行",
          "把错误信息作为结果返回给 LLM，让 LLM 决定怎么处理",
          "自动重试 3 次",
        ],
        correctIndex: 2,
        explanation:
          "工具错误被封装在 ToolResult 中（is_error=True），作为普通结果返回给 LLM。LLM 能看到错误信息并据此调整策略，比如换一种方式重试。",
      },
    },
    {
      type: "quiz",
      quiz: {
        question: "为什么 OpenHarness 使用「注册表模式」来管理工具？",
        options: [
          "为了让代码看起来更复杂",
          "为了限制工具数量",
          "为了实现统一管理和运行时动态扩展",
          "因为 Python 要求这么做",
        ],
        correctIndex: 2,
        explanation:
          "注册表模式让所有工具通过统一接口管理。添加新工具只需创建类并注册，无需修改引擎。这也支持运行时动态加载（如 MCP 工具、插件工具）。",
      },
    },
  ],
};

export default chapter;
