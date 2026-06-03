import type { Lang, Prompt } from "@/data/familyOfficeAgentMock";

export function PromptButton({ prompt, lang, isActive, onClick, labels }: { prompt: Prompt; lang: Lang; isActive: boolean; onClick: () => void; labels: { domain: string; riskQueueCount: string; review: string; reviewRequiredStatus: string } }) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border px-3.5 py-3 text-left transition ${
        isActive
          ? "border-[#c7a76b] bg-[#fff8e8] shadow-[0_12px_28px_rgba(139,111,62,0.12)]"
          : "border-[#e7e1d8] bg-white hover:border-[#d8bd80] hover:bg-[#fffdf8]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-sm font-semibold leading-snug text-[#182230]">{prompt.label[lang]}</h3>
          <p className="mt-1 truncate text-xs text-[#667085]">{prompt.review[lang]}</p>
        </div>
        <div className="shrink-0 rounded-xl bg-white px-2.5 py-1.5 text-center shadow-sm ring-1 ring-[#eee5d2]">
          <div className="text-base font-semibold leading-none text-[#8a6f3d]">{prompt.riskCount}</div>
          <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-wide text-[#9a7b45]">{labels.riskQueueCount}</div>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <span className="rounded-full bg-[#f6f8fa] px-2 py-1 text-[10px] font-semibold text-[#5f6b7a]">{labels.domain}: {prompt.domain[lang]}</span>
        <span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${isActive ? "bg-white text-[#8a6f3d] ring-1 ring-[#ead7a9]" : "bg-[#f6f8fa] text-[#667085]"}`}>{labels.reviewRequiredStatus}</span>
      </div>
    </button>
  );
}
