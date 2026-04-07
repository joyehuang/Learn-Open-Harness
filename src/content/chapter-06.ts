import type { Chapter } from "./types";

const chapter: Chapter = {
  slug: "permissions",
  phase: "B",
  phaseLabel: "核心机制",
  title: "权限系统",
  subtitle: "三级安全护栏 — 让 Agent 安全地工作",
  sections: [
    {
      type: "analogy",
      title: "像公司里的审批流程",
      content:
        "想象你是一家公司的员工。查看文件（只读操作）你可以自己做。但如果要花一大笔钱（危险操作），需要经理审批。如果是在做年度审计（规划模式），你就只能看报表不能动钱。Agent 的权限系统也是同样的逻辑 —— 不同的操作需要不同级别的许可。",
    },
    {
      type: "text",
      title: "为什么权限系统如此重要？",
      content:
        "想象一下，如果 Agent 没有任何权限限制会怎样：\n\n• 它可能会误删重要文件\n• 它可能会执行危险的 Shell 命令\n• 它可能会泄露敏感信息\n• 它可能会在你不知情的情况下修改代码\n\n权限系统就是 Agent 的「安全护栏」。它确保 Agent 在执行每个操作之前，都经过适当的检查。",
    },
    {
      type: "text",
      title: "三种权限模式",
      content:
        'OpenHarness 提供三种权限模式，适用于不同场景：\n\n🟢 默认模式（Default）\n• 读取操作自动通过（读文件、搜索等无害操作）\n• 写入操作需要用户确认（修改文件、执行命令等）\n• 适用于日常开发\n\n🔵 规划模式（Plan）\n• 只允许读取操作\n• 所有写入操作都被阻止\n• 适用于大型重构前的代码探索阶段\n\n🔴 全自动模式（Full Auto）\n• 所有操作自动通过\n• 适用于沙箱环境或完全信任的场景\n• ⚠️ 生产环境不建议使用',
    },
    {
      type: "diagram",
      diagram: "PermissionSimulator",
    },
    {
      type: "code",
      title: "权限检查的流程",
      content: "每次工具执行前，都会经过权限检查：",
      code: {
        language: "python",
        filename: "openharness/permissions/checker.py",
        source: `class PermissionChecker:
    async def check(self, tool_name, params, mode):
        # 第 1 步：检查工具是否在拒绝列表中
        if tool_name in self.denied_tools:
            return PermissionResult.DENIED

        # 第 2 步：检查路径规则
        if not self.check_path_rules(params):
            return PermissionResult.DENIED

        # 第 3 步：根据权限模式判断
        if mode == "plan":
            # 规划模式只允许只读操作
            return ALLOW if is_read_only(tool_name) else DENIED

        if mode == "full_auto":
            return PermissionResult.ALLOW

        # 默认模式：只读自动通过，写入需确认
        if is_read_only(tool_name):
            return PermissionResult.ALLOW
        return PermissionResult.ASK_USER`,
        highlights: [4, 13, 17, 21],
      },
    },
    {
      type: "text",
      title: "细粒度控制",
      content:
        "除了三种模式之外，OpenHarness 还支持更细粒度的权限控制：\n\n• 路径规则（Path Rules）：可以禁止访问特定目录，比如 /etc/*\n• 命令拒绝列表（Denied Commands）：禁止执行特定危险命令\n• 工具拒绝/允许列表：控制哪些工具可用\n\n这些规则可以在配置文件中设置，给 Agent 划定精确的安全边界。",
    },
    {
      type: "key-concept",
      title: "权限检查发生在每次工具执行之前",
      content:
        "权限系统不是事后审计，而是事前检查。在 Agent Loop 的每一次工具调用中，Harness 都会先通过 PermissionChecker 检查，只有通过了才会真正执行工具。这确保了安全性是内建的，而不是附加的。",
    },
    {
      type: "quiz",
      quiz: {
        question: "在默认权限模式下，Agent 执行 Read（读取文件）操作时会发生什么？",
        options: [
          "弹出确认对话框让用户确认",
          "自动通过，不需要用户确认",
          "被直接拒绝",
          "需要输入密码",
        ],
        correctIndex: 1,
        explanation:
          "在默认模式下，读取操作（如 Read、Glob、Grep）被认为是安全的，会自动通过。只有写入操作（如 Write、Bash、Edit）才需要用户确认。",
      },
    },
    {
      type: "quiz",
      quiz: {
        question: "什么场景最适合使用「规划模式」？",
        options: [
          "日常代码编写",
          "需要快速完成任务时",
          "大型重构前，先让 Agent 探索代码，设计方案",
          "在生产服务器上运行时",
        ],
        correctIndex: 2,
        explanation:
          "规划模式只允许读取操作，适合让 Agent 先探索代码、理解架构、设计方案，等用户确认方案后再切换到默认模式执行修改。",
      },
    },
  ],
};

export default chapter;
