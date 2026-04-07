interface CalloutProps {
  type?: "info" | "warning" | "tip" | "analogy";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  info: "bg-blue-50 border-blue-200 text-blue-800",
  warning: "bg-red-50 border-red-200 text-red-800",
  tip: "bg-emerald-50 border-emerald-200 text-emerald-800",
  analogy: "bg-amber-50 border-amber-200 text-amber-800",
};

const icons = {
  info: "💡",
  warning: "⚠️",
  tip: "✅",
  analogy: "🎯",
};

export default function Callout({
  type = "info",
  title,
  children,
}: CalloutProps) {
  return (
    <div className={`rounded-xl border p-4 my-4 ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <span className="text-lg flex-shrink-0">{icons[type]}</span>
        <div>
          {title && <div className="font-semibold mb-1">{title}</div>}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
