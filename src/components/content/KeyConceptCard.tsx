interface KeyConceptCardProps {
  title: string;
  children: React.ReactNode;
}

export default function KeyConceptCard({
  title,
  children,
}: KeyConceptCardProps) {
  return (
    <div className="my-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-5 border border-indigo-100">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-indigo-500 font-bold text-sm">📌 关键要点</span>
      </div>
      {title && (
        <div className="font-semibold text-gray-900 mb-2">{title}</div>
      )}
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}
