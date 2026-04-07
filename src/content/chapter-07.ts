import type { Chapter } from "./types";

const chapter: Chapter = {
  slug: "hooks",
  phase: "B",
  phaseLabel: "核心机制",
  title: "Hook 系统",
  subtitle: "生命周期事件 — 在关键时刻插入自定义逻辑",
  sections: [
    {
      type: "analogy",
      title: "像门口的安检系统",
      content:
        "想象一栋大厦的大门有安检：每个人进门前要刷卡（PreToolUse），出门后要登记（PostToolUse）。这个安检系统不是大厦的核心功能，但它能在关键时刻做检查、记录、甚至拦截。Hook 系统就是 Agent 的安检系统 —— 在每个工具「进出」的时候，自动执行你设定的逻辑。",
    },
    {
      type: "text",
      title: "什么是 Hook？",
      content:
        "Hook（钩子）是一种编程模式：在程序执行到特定时刻时，自动触发预设的操作。\n\n在 OpenHarness 中，Hook 系统提供了 4 个时机：\n\n• SESSION_START：会话开始时触发\n• SESSION_END：会话结束时触发\n• PRE_TOOL_USE：工具执行之前触发\n• POST_TOOL_USE：工具执行之后触发\n\n其中 PRE_TOOL_USE 和 POST_TOOL_USE 是最常用的，它们让你能在每次工具执行的前后插入自定义逻辑。",
    },
    {
      type: "text",
      title: "Hook 能做什么？",
      content:
        "Hook 的常见用途包括：\n\n📝 日志记录\n记录每次工具调用的参数和结果，用于审计和调试。\n\n🛡️ 额外安全检查\n比如检查 Bash 命令是否包含危险操作，在权限系统之上增加一层防护。\n\n🔄 自动格式化\n在文件写入后自动运行代码格式化工具。\n\n📊 统计分析\n统计工具使用频率、执行时间等数据。\n\n🚫 拦截操作\nPreToolUse Hook 可以阻止工具执行，比如在工作时间外禁止部署操作。",
    },
    {
      type: "code",
      title: "Hook 的执行流程",
      content: "每次工具调用时，Hook 的执行顺序是这样的：",
      code: {
        language: "python",
        filename: "openharness/hooks/executor.py",
        source: `async def execute_tool_with_hooks(tool_call, context):
    # 第 1 步：执行 PreToolUse 钩子
    pre_result = await run_hooks("pre_tool_use", {
        "tool_name": tool_call.name,
        "tool_params": tool_call.params,
    })

    # 如果钩子要求阻止，直接返回
    if pre_result.should_block:
        return ToolResult("操作被 Hook 阻止", is_error=True)

    # 第 2 步：权限检查（在 Hook 之后）
    permission = await check_permission(tool_call)
    if not permission.allowed:
        return ToolResult("权限不足", is_error=True)

    # 第 3 步：真正执行工具
    result = await tool.execute(tool_call.params)

    # 第 4 步：执行 PostToolUse 钩子
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
      title: "四种 Hook 类型",
      content:
        "OpenHarness 支持四种不同类型的 Hook 实现：\n\n1. Command Hook（命令钩子）\n执行一个 Shell 命令。最简单直接的方式。\n\n2. HTTP Hook\n发送一个 HTTP 请求到指定 URL。适合与外部服务集成。\n\n3. Prompt Hook\n让 Agent 自己处理一段提示词。适合复杂的判断逻辑。\n\n4. Agent Hook\n启动一个完整的子 Agent 来处理。适合需要多步推理的场景。\n\n大多数情况下，Command Hook 就足够了。",
    },
    {
      type: "code",
      title: "配置 Hook 的方式",
      content: "Hook 在 settings.json 中配置：",
      code: {
        language: "json",
        filename: "settings.json",
        source: `{
  "hooks": {
    "pre_tool_use": [
      {
        "type": "command",
        "command": "echo '即将执行工具: $TOOL_NAME'",
        "match_tools": ["Bash"]
      }
    ],
    "post_tool_use": [
      {
        "type": "command",
        "command": "echo '工具执行完成: $TOOL_NAME'"
      }
    ]
  }
}`,
        highlights: [3, 5, 7, 10],
      },
    },
    {
      type: "key-concept",
      title: "Hook 让 Harness 可观测、可扩展",
      content:
        "Hook 系统的核心价值是：在不修改引擎代码的情况下，在关键时刻插入自定义逻辑。这使得 OpenHarness 不仅是一个工具，更是一个可观测、可扩展的平台。",
    },
    {
      type: "quiz",
      quiz: {
        question: "PreToolUse Hook 最主要的特殊能力是什么？",
        options: [
          "记录日志",
          "可以阻止工具执行",
          "自动修复错误",
          "加速工具执行",
        ],
        correctIndex: 1,
        explanation:
          "PreToolUse Hook 不仅能记录信息，还能返回 should_block 来阻止工具执行。这使得它可以作为额外的安全层，在权限检查之前就拦截不当操作。",
      },
    },
  ],
};

export default chapter;
