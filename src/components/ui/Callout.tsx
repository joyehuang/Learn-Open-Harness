import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

interface CalloutProps {
  type?: "info" | "warning" | "tip" | "analogy";
  title?: string;
  children: React.ReactNode;
}

const typeStyles: Record<NonNullable<CalloutProps["type"]>, string> = {
  info: "border-blue-500/30 bg-blue-500/5 text-blue-900 dark:text-blue-200 [&_[data-slot=alert-description]]:text-blue-800/80 dark:[&_[data-slot=alert-description]]:text-blue-200/70",
  warning: "border-red-500/30 bg-red-500/5 text-red-900 dark:text-red-200 [&_[data-slot=alert-description]]:text-red-800/80 dark:[&_[data-slot=alert-description]]:text-red-200/70",
  tip: "border-emerald-500/30 bg-emerald-500/5 text-emerald-900 dark:text-emerald-200 [&_[data-slot=alert-description]]:text-emerald-800/80 dark:[&_[data-slot=alert-description]]:text-emerald-200/70",
  analogy: "border-amber-500/30 bg-amber-500/5 text-amber-900 dark:text-amber-200 [&_[data-slot=alert-description]]:text-amber-800/80 dark:[&_[data-slot=alert-description]]:text-amber-200/70",
};

const icons: Record<NonNullable<CalloutProps["type"]>, string> = {
  info: "💡",
  warning: "⚠️",
  tip: "✅",
  analogy: "🎯",
};

export default function Callout({ type = "info", title, children }: CalloutProps) {
  return (
    <Alert className={cn("my-4 flex gap-3", typeStyles[type])}>
      <span className="text-lg flex-shrink-0 leading-none mt-0.5">{icons[type]}</span>
      <div className="flex-1 min-w-0">
        {title && <AlertTitle>{title}</AlertTitle>}
        <AlertDescription>{children}</AlertDescription>
      </div>
    </Alert>
  );
}
