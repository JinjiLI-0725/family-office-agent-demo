export function RiskSummaryCard({ label, count, tone }: { label: string; count: number; tone: string }) {
  const toneClass = tone === "high" ? "text-rose-700 bg-rose-50 ring-rose-100" : tone === "medium" ? "text-amber-700 bg-amber-50 ring-amber-100" : "text-emerald-700 bg-emerald-50 ring-emerald-100";
  return (
    <div className={`rounded-2xl p-4 ring-1 ${toneClass}`}>
      <div className="text-3xl font-semibold">{count}</div>
      <div className="mt-1 text-sm font-medium">{label}</div>
    </div>
  );
}
