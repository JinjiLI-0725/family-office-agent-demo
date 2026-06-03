import type { DataRoomSource, PromptId } from "@/data/familyOfficeAgentMock";

const sensitivityStyles: Record<DataRoomSource["sensitivity"], string> = {
  Standard: "bg-slate-100 text-slate-700",
  Confidential: "bg-blue-50 text-blue-700",
  Sensitive: "bg-amber-50 text-amber-700",
  "Highly Sensitive": "bg-rose-50 text-rose-700",
};

export function DataRoomPanel({ sources, selectedPromptId }: { sources: DataRoomSource[]; selectedPromptId: PromptId }) {
  const activeSources = sources.filter((source) => source.promptIds.includes(selectedPromptId));
  return (
    <section id="data-room" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-premium">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Data Room Context</p>
          <h2 className="mt-2 text-xl font-semibold text-navy">Records used by this run</h2>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{activeSources.length} sources retrieved</span>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {activeSources.map((source) => (
          <article key={source.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-navy">{source.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{source.count}</p>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${sensitivityStyles[source.sensitivity]}`}>{source.sensitivity}</span>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>{source.lastUpdated}</p>
              <p><span className="font-semibold text-slate-800">Access:</span> {source.access}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
