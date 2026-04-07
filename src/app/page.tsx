import Link from "next/link";
import { chapters } from "@/content/chapters";
import { PHASES } from "@/content/types";

export default function HomePage() {
  const grouped = Object.entries(PHASES).map(([key, { label }]) => ({
    phase: key,
    label,
    items: chapters.filter((c) => c.phase === key),
  }));

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          Zero to Hero · 12 Chapters
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
          学习 <span className="text-primary">OpenHarness</span>
        </h1>
        <p className="text-sm text-muted-foreground font-medium mb-4">
          Official Interactive Tutorial for OpenHarness
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          像理解 Claude Code 一样学习 AI Agent 基础设施。
          <br />
          Agent Loop、工具系统、Memory、多 Agent 协作……
          <br />
          12 章从零到精通，不需要任何 AI 或编程基础。
        </p>
        <Link
          href={`/chapters/${chapters[0].slug}`}
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
        >
          开始学习
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      {/* What you'll learn */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
          你将学到什么？
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          12 个章节，从基础到进阶，循序渐进
        </p>

        <div className="space-y-8">
          {grouped.map(({ phase, label, items }) => (
            <div key={phase}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                阶段 {phase} · {label}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {items.map((chapter) => {
                  const num =
                    chapters.findIndex((c) => c.slug === chapter.slug) + 1;
                  return (
                    <Link
                      key={chapter.slug}
                      href={`/chapters/${chapter.slug}`}
                      className="group flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/40 hover:shadow-md transition-all"
                    >
                      <span className="w-8 h-8 rounded-lg bg-muted text-primary flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground">
                        {num}
                      </span>
                      <div>
                        <div className="font-medium text-card-foreground group-hover:text-primary transition-colors">
                          {chapter.title}
                        </div>
                        <div className="text-sm text-muted-foreground mt-0.5">
                          {chapter.subtitle}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key formula */}
      <div className="bg-muted rounded-2xl p-8 text-center mb-16 border border-border">
        <h2 className="text-xl font-bold text-foreground mb-4">核心公式</h2>
        <div className="text-lg font-mono bg-background/70 inline-block px-6 py-3 rounded-xl shadow-sm border border-border">
          <span className="text-primary font-bold">Harness</span> ={" "}
          <span className="text-emerald-600 dark:text-emerald-400">Tools</span> +{" "}
          <span className="text-blue-600 dark:text-blue-400">Knowledge</span> +{" "}
          <span className="text-muted-foreground">Observation</span> +{" "}
          <span className="text-amber-600 dark:text-amber-400">Action</span> +{" "}
          <span className="text-red-500 dark:text-red-400">Permissions</span>
        </div>
        <p className="text-sm text-muted-foreground mt-4 max-w-lg mx-auto">
          一个 AI Agent Harness 由五大核心能力组成。OpenHarness 用 ~11,700
          行代码实现了完整的 Harness 架构。
        </p>
      </div>

      {/* Who is this for */}
      <div className="grid sm:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: "🌱",
            title: "零基础友好",
            desc: "不需要任何 AI 或编程经验，每个概念都有生活类比",
          },
          {
            icon: "🎯",
            title: "循序渐进",
            desc: "12 章从简单到复杂，每章都建立在前一章的基础上",
          },
          {
            icon: "🧪",
            title: "互动学习",
            desc: "包含动画演示、交互模拟器和即时反馈的小测验",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="text-center p-6 bg-card rounded-xl border border-border"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <div className="font-semibold text-card-foreground mb-1">
              {item.title}
            </div>
            <div className="text-sm text-muted-foreground">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
