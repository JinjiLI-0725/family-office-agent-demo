import type { Lang, Prompt } from "@/data/familyOfficeAgentMock";

export function PromptButton({ prompt, lang, isActive, onClick, labels }: { prompt: Prompt; lang: Lang; isActive: boolean; onClick: () => void; labels: { domain: string; riskQueueCount: string; review: string; reviewRequiredStatus: string } }) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border p-4 text-left transition ${
        isActive
          ? "border-[#c7a76b] bg-[#fff8e8] shadow-[0_12px_32px_rgba(139,111,62,0.14)]"
          : "border-[#e7e1d8] bg-white hover:border-[#d8bd80] hover:bg-[#fffdf8]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[15px] font-semibold leading-snug text-[#182230]">{prompt.label[lang]}</h3>
          <span className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${isActive ? "bg-white text-[#8a6f3d] ring-1 ring-[#ead7a9]" : "bg-[#f6f8fa] text-[#667085]"}`}>
            {labels.reviewRequiredStatus}
          </span>
        </div>
        <div className="rounded-2xl bg-white px-3 py-2 text-center shadow-sm ring-1 ring-[#eee5d2]">
          <div className="text-lg font-semibold text-[#8a6f3d]">{prompt.riskCount}</div>
          <div className="text-[10px] font-semibold uppercase tracking-wide text-[#9a7b45]">{labels.riskQueueCount}</div>
        </div>
      </div>
      <div className="mt-3 space-y-1 text-xs leading-5 text-[#5f6b7a]">
        <p><span className="font-semibold text-[#8a6f3d]">{labels.domain}:</span> {prompt.domain[lang]}</p>
        <p><span className="font-semibold text-[#8a6f3d]">{labels.review}:</span> {prompt.review[lang]}</p>
      </div>
      <p className="mt-3 line-clamp-2 text-sm leading-5 text-[#667085]">{prompt.description[lang]}</p>
    </button>
  );
}
