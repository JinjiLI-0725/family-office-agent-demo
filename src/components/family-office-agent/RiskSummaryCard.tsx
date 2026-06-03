export function RiskSummaryCard({ label, count, tone }: { label: string; count: number; tone: string }) {
  const toneClass = tone === "high" ? "text-rose-700 bg-rose-50 ring-rose-100" : tone === "medium" ? "text-amber-700 bg-amber-50 ring-amber-100" : "text-emerald-700 bg-emerald-50 ring-emerald-100";
  return (
    <div className={`rounded-2xl p-3 ring-1 ${toneClass}`}>
      <div className="text-2xl font-semibold">{count}</div>
      <div className="mt-0.5 text-xs font-medium">{label}</div>
    </div>
  );
}
