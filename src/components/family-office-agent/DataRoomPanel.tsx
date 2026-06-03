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
    <section id="data-room" className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-premium">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Data Room Context</p>
          <h2 className="mt-1 text-lg font-semibold text-navy">Retrieved records</h2>
        </div>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-700">{activeSources.length} sources</span>
      </div>
      <div className="mt-4 space-y-2.5">
        {activeSources.map((source) => (
          <article key={source.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-navy">{source.name}</h3>
                <p className="mt-0.5 text-xs text-slate-500">{source.count} · {source.lastUpdated}</p>
              </div>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${sensitivityStyles[source.sensitivity]}`}>{source.sensitivity}</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-600"><span className="font-semibold text-slate-800">Access:</span> {source.access}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
