import type { Lang, Prompt } from "@/data/familyOfficeAgentMock";

export function PromptButton({ prompt, lang, isActive, onClick, labels }: { prompt: Prompt; lang: Lang; isActive: boolean; onClick: () => void; labels: { domain: string; riskCount: string; review: string } }) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border p-4 text-left transition ${
        isActive
          ? "border-[#c7a76b] bg-[#fff8e8] shadow-[0_10px_30px_rgba(139,111,62,0.12)]"
          : "border-[#e4ded2] bg-white hover:border-[#d8bd80] hover:bg-[#fffdf8]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-snug text-[#182230]">{prompt.label[lang]}</h3>
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${isActive ? "bg-[#c7a76b] text-white" : "bg-[#f1f4f7] text-[#5d6978]"}`}>{prompt.riskCount}</span>
      </div>
      <div className="mt-3 space-y-1.5 text-xs text-[#687384]">
        <p><span className="font-semibold text-[#8a6f3d]">{labels.domain}:</span> {prompt.domain[lang]}</p>
        <p><span className="font-semibold text-[#8a6f3d]">{labels.review}:</span> {prompt.review[lang]}</p>
      </div>
      <p className="mt-3 text-sm leading-5 text-[#536071]">{prompt.description[lang]}</p>
      <div className="mt-3 text-xs font-medium text-[#8a6f3d]">{labels.riskCount}: {prompt.riskCount}</div>
    </button>
  );
}
