import type { DataRoomSource, Lang, PromptId } from "@/data/familyOfficeAgentMock";

const sensitivityStyles = "bg-[#f7f0df] text-[#7b6238] ring-[#d6c6a5]";

export function DataRoomPanel({ sources, selectedPromptId, lang, copy }: { sources: DataRoomSource[]; selectedPromptId: PromptId; lang: Lang; copy: Record<string, string> }) {
  const activeSources = sources.filter((source) => source.promptIds.includes(selectedPromptId));
  return (
    <section id="data-room" className="rounded-[2rem] border border-[#d8d1c4] bg-white p-6 shadow-[0_20px_70px_rgba(44,37,29,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7b45]">{copy.dataRoom}</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#101b2a]">{copy.retrievedRecords}</h2>
        </div>
        <span className="rounded-full bg-[#101b2a] px-3 py-1.5 text-xs font-semibold text-white">{activeSources.length} {copy.sources}</span>
      </div>
      <div className="mt-5 space-y-3">
        {activeSources.map((source) => (
          <article key={source.name.en} className="rounded-[1.3rem] border border-[#e5ded1] bg-[#fbf8f1] p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-[#101b2a]">{source.name[lang]}</h3>
                <p className="mt-1 text-sm text-slate-600">{source.count[lang]} · {source.lastUpdated[lang]}</p>
              </div>
              <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${sensitivityStyles}`}>{source.sensitivity[lang]}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600"><span className="font-semibold text-slate-900">{copy.access}:</span> {source.access[lang]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
