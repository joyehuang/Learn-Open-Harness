import type { Chapter } from "./types";

const chapter: Chapter = {
  slug: "full-picture",
  phase: "D",
  phaseLabel: "进阶",
  title: "全流程串联",
  subtitle: "从用户输入到 Agent 响应的完整之旅",
  sections: [
    {
      type: "analogy",
      title: "跟着一个请求走一遍",
      content:
        "就像在工厂里跟着一个产品从原材料变成成品，我们现在要跟着一个用户请求，走完它在 OpenHarness 中的完整旅程。这一章把前面学到的所有知识串联起来。",
    },
    {
      type: "text",
      title: "场景：用户说「帮我修复 login.py 中的 Bug」",
      content:
        "让我们完整追踪这个请求在 OpenHarness 中的每一步：",
    },
    {
      type: "text",
      title: "第 1 步：CLI 入口",
      content:
        "用户在终端输入请求。CLI（命令行界面）接收到文字后，将其包装成一条用户消息（User Message），传递给 Engine。\n\n📂 涉及代码：cli.py → 解析命令行参数和输入",
    },
    {
      type: "text",
      title: "第 2 步：Engine 初始化",
      content:
        "Engine 准备 Agent Loop 需要的所有组件：\n\n• 加载系统提示词（System Prompt）\n• 注入 MEMORY.md 中的记忆\n• 准备工具列表（内置 + MCP）\n• 初始化权限检查器\n\n📂 涉���代码：engine/query_engine.py → 组装运行上下文",
    },
    {
      type: "text",
      title: "第 3 步：Agent Loop 第一轮",
      content:
        "消息被发送给 LLM（通过 Anthropic API）。LLM 分析请求，决定先读取文件：\n\n返回：tool_use → Read(file_path=\"login.py\")\n\n📂 涉及代码：engine/query.py → run_query 循环",
    },
    {
      type: "text",
      title: "第 4 步：Hook + 权���检查",
      content:
        "在执行 Read 工具之前：\n\n1. PreToolUse Hook 被触发 → 记录日志\n2. PermissionChecker 检查 → Read 是只读操作，默认模式下自动通过\n\n📂 涉及���码：hooks/executor.py + permissions/checker.py",
    },
    {
      type: "text",
      title: "第 5 步：工具执行",
      content:
        "Read 工具被执行：\n• 打开 login.py 文件\n• 读取内容\n• 包装成 ToolResult 返回\n\n结果被添加到消息历史中。\n\n���� 涉及代码���tools/file_read.py → execute()",
    },
    {
      type: "text",
      title: "第 6 步：Agent Loop 第二轮",
      content:
        "LLM 看到了文件内容，发现第 42 行有一个条件判断写反了。决定修复：\n\n返回：tool_use → Edit(file_path=\"login.py\", old_string=\"if user == None\", new_string=\"if user is not None\")\n\n这次 Edit 是写入操作。在默认模式下：\n• Hook 触发\n• 权限检查 → 需要用户确认\n• 用户在终端看到确认提示，点击「允许」\n• Edit 工具执行修改",
    },
    {
      type: "text",
      title: "第 7 步：Agent Loop 第三轮",
      content:
        "LLM 看到修改成功，决定运行测试确认：\n\n返回：tool_use → Bash(command=\"python -m pytest test_login.py\")\n\n用户确认后，测试运行通过。",
    },
    {
      type: "text",
      title: "第 8 步：循环结束",
      content:
        "LLM 认为任务完成，返回最终响应（stop_reason=\"end_turn\"）：\n\n「已修复 login.py 第 42 行的 Bug。问题是条件判断 `if user == None` 应该改为 `if user is not None`。测试已通过。���\n\nAgent Loop 结束，结果显示在终端。",
    },
    {
      type: "text",
      title: "第 9 步：记忆（可选）",
      content:
        "如果在过程中发现了值得记住的信息（比如这是一个反复出现的 Bug 模式），Agent 会写入记忆文件，供下次对话参考。",
    },
    {
      type: "text",
      title: "全流程总结",
      content:
        "让我们回顾涉及的所有子系统：\n\n1. CLI / UI → 用户界面\n2. Engine → Agent Loop 核心循环（3 轮）\n3. API → 与 LLM 通信（3 次调用）\n4. Tools → Read、Edit、Bash（3 个工具）\n5. Hooks → PreToolUse / PostToolUse（每次工具前后）\n6. Permissions → 读取自动通过、写入需确认（2 次确认）\n7. Memory → 可选的跨会话记忆\n\n看到了吗？一个简单的「修复 Bug」请求，就涉及了 OpenHarness 的大部分子系统。这就是 Harness 的威力 —— 所有组件协同工作，让 Agent 能完���复杂任务。",
    },
    {
      type: "key-concept",
      title: "所有概念串联起来了",
      content:
        "恭喜你完成了全部 12 章的学习！现在你理解了：Agent 是什么、Harness 的五大能力、Agent Loop 循环、工具系统、权限控制、Hook 生命周期、技能按需加载、记忆持久化、MCP 标准协议、多 Agent 协作，以及它们如何在一个真实请求中协同工作。",
    },
    {
      type: "text",
      title: "下一步该做什么？",
      content:
        "现在你对 OpenHarness 有了全面的理解，可以考��：\n\n🔍 阅读源码\nOpenHarness 只有约 11,700 行代码，按照这门课的���序阅读会非常顺畅。\n\n🔧 写一个自定义工具\n继承 BaseTool，实现自己的工具，注册到工具列表中。\n\n📚 编写一个 Skill\n为你的项目或团队编写专属技能文件。\n\n🌐 搭建 MCP Server\n把你常用的服务封装成 MCP Server，让 Agent 能直接使用。\n\n🤝 贡献代码\nOpenHarness 是开源的，欢迎贡献代��和想法。",
    },
    {
      type: "quiz",
      quiz: {
        question:
          "在「修复 Bug」的完整流程中，Agent Loop 一共循环了几轮？",
        options: ["1 ���", "2 轮", "3 轮", "4 轮"],
        correctIndex: 2,
        explanation:
          "3 轮：第一轮读取文件（Read），第二轮修改文件（Edit），第三��运行测试（Bash）。LLM 在第三轮测试通过后认为任务完成，返回最终响应，结束循环。",
      },
    },
    {
      type: "quiz",
      quiz: {
        question: "在默认权限模式下，这个流程中哪些操作需要用户确认？",
        options: [
          "所有 3 个操作都需要",
          "只有 Edit 和 Bash（写入操作）需要",
          "只有 Bash 需要",
          "都不需要",
        ],
        correctIndex: 1,
        explanation:
          "在默认模式下，Read（读取）自动通过，而 Edit（修改文件���和 Bash（执行命令）是写入操作，需要用户确认。这就是权限系统的分级设计。",
      },
    },
  ],
};

export default chapter;
