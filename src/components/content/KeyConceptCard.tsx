interface KeyConceptCardProps {
  title: string;
  children: React.ReactNode;
}

export default function KeyConceptCard({ title, children }: KeyConceptCardProps) {
  return (
    <div className="my-6 bg-primary/5 rounded-xl p-5 border border-primary/15">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-primary font-bold text-sm">📌 关键要点</span>
      </div>
      {title && (
        <div className="font-semibold text-foreground mb-2">{title}</div>
      )}
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}
