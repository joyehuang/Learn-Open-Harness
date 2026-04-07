import type { Chapter } from "./types";

const chapter: Chapter = {
  slug: "agent-loop",
  phase: "B",
  phaseLabel: "核心机制",
  title: "Agent Loop",
  subtitle: "Agent 的心跳 — 思考、行动、观察的循环",
  sections: [
    {
      type: "analogy",
      title: "像厨师做菜一样",
      content:
        "一个厨师做菜的过程是：看菜谱（思考）→ 切菜（行动）→ 尝味道（观察）→ 决定加盐还是加糖（再思考）→ 继续操作。这个循环会一直进行，直到菜做好上桌。Agent Loop 就是完全一样的过程 —— AI 不断循环「思考 → 使用工具 → 查看结果 → 再思考」，直到任务完成。",
    },
    {
      type: "text",
      title: "Agent Loop 是什么？",
      content:
        "Agent Loop 是整个 Harness 的核心引擎，可以说是 Agent 的「心跳」。\n\n它的工作流程非常简单：\n\n1. 把用户的消息发送给 LLM\n2. LLM 返回响应 —— 可能是文字，也可能是工具调用请求\n3. 如果是工具调用，执行工具，把结果反馈给 LLM\n4. 回到步骤 2，继续循环\n5. 直到 LLM 认为任务完成，返回最终文字响应\n\n这就是 Agent 能完成复杂任务的秘密 —— 它不是一次性给出答案，而是通过多轮循环，逐步推进任务。",
    },
    {
      type: "diagram",
      diagram: "AgentLoopAnimation",
    },
    {
      type: "code",
      title: "来看看真实的代码（简化版）",
      content: "这是 OpenHarness 中 Agent Loop 的核心代码，简化后只有不到 20 行：",
      code: {
        language: "python",
        filename: "openharness/engine/query.py",
        source: `async def run_query(context):
    """Agent Loop 的核心：不断循环直到任务完成"""

    for turn in range(context.max_turns):
        # 第 1 步：把消息发给 LLM，获取响应
        response = await stream_response(
            context.api_client,
            context.messages,
            context.tools
        )

        # 第 2 步：如果 LLM 没有请求工具调用，说明任务完成
        if response.stop_reason != "tool_use":
            break

        # 第 3 步：执行 LLM 请求的每个工具
        for tool_call in response.tool_uses:
            result = await execute_tool(tool_call)
            context.messages.append(result)

        # 第 4 步：工具结果已加入消息，回到循环顶部`,
        highlights: [1, 7, 13, 16, 20],
      },
    },
    {
      type: "text",
      title: "为什么 Agent Loop 如此重要？",
      content:
        "Agent Loop 是 Agent 所有能力的基础。没有它，工具、权限、技能这些子系统都只是零散的组件。是 Agent Loop 把它们串联起来，形成一个完整的工作流程。\n\n想想看：如果一个任务需要读取文件、修改内容、运行测试、修复错误 —— 这需要多次循环才能完成。每次循环中，LLM 都会根据前一步的结果来决定下一步做什么。\n\n这种「思考 → 行动 → 观察」的循环，正是 AI Agent 强大的原因。",
    },
    {
      type: "text",
      title: "stop_reason 的秘密",
      content:
        '在 Agent Loop 中，有一个关键的判断条件：stop_reason。\n\n当 LLM 返回的 stop_reason 是 "tool_use" 时，意味着 LLM 想要使用工具，循环继续。\n当 stop_reason 是其他值（比如 "end_turn"）时，意味着 LLM 认为任务已完成，循环结束。\n\n这个简单的判断，就是 Agent 知道何时继续工作、何时停止的机制。',
    },
    {
      type: "key-concept",
      title: "循环是 Agent 的核心模式",
      content:
        "Agent Loop 是一个简单但强大的模式：发送消息 → 获取响应 → 如果需要工具就执行 → 把结果反馈给 LLM → 重复。整个 OpenHarness 的 Agent Loop 核心代码不到 70 行，但它驱动了所有复杂功能。",
    },
    {
      type: "quiz",
      quiz: {
        question: "Agent Loop 什么时候会停止循环？",
        options: [
          "固定循环 10 次后停止",
          "当 LLM 返回的 stop_reason 不是 tool_use 时",
          "当用户手动按下停止键时",
          "当所有工具都被使用过一次后",
        ],
        correctIndex: 1,
        explanation:
          'Agent Loop 会在 LLM 认为任务完成时停止 —— 具体表现为 stop_reason 不再是 "tool_use"。这意味着 LLM 自己判断不需要再调用任何工具了。',
      },
    },
    {
      type: "quiz",
      quiz: {
        question: "如果 Agent 需要完成「读取文件 → 修改内容 → 运行测试」这个任务，Agent Loop 大概会循环几次？",
        options: [
          "1 次，Agent 会一次性完成所有操作",
          "至少 3 次，每次循环处理一个工具调用",
          "取决于 LLM 的决策，可能合并也可能分开",
          "无法确定，完全随机",
        ],
        correctIndex: 2,
        explanation:
          "LLM 可能会在一次响应中请求多个工具调用（并行执行），也可能分成多次循环。这取决于 LLM 的判断。但核心模式不变：每次循环都会把工具结果反馈给 LLM。",
      },
    },
  ],
};

export default chapter;
