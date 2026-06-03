import type { Lang, Prompt } from "@/data/familyOfficeAgentMock";

export function PromptButton({ prompt, lang, isActive, onClick, labels }: { prompt: Prompt; lang: Lang; isActive: boolean; onClick: () => void; labels: { domain: string; riskCount: string; review: string } }) {
  return (
    <button
      onClick={onClick}
      className={`group h-full rounded-[1.4rem] border p-5 text-left transition ${
        isActive
          ? "border-[#b99a5f] bg-[#101b2a] text-white shadow-[0_24px_70px_rgba(16,27,42,0.28)]"
          : "border-[#d8d1c4] bg-white/85 text-slate-800 shadow-sm hover:border-[#b99a5f]/70 hover:bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className={`text-xs font-semibold uppercase tracking-[0.18em] ${isActive ? "text-[#d6bd82]" : "text-[#9a7b45]"}`}>{labels.domain}: {prompt.domain[lang]}</div>
          <h3 className="mt-3 text-lg font-semibold leading-snug">{prompt.label[lang]}</h3>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${isActive ? "bg-[#d6bd82] text-[#101b2a]" : "bg-[#f3efe6] text-[#7b6238]"}`}>{prompt.riskCount}</span>
      </div>
      <p className={`mt-4 text-sm leading-6 ${isActive ? "text-slate-200" : "text-slate-600"}`}>{prompt.description[lang]}</p>
      <div className={`mt-5 rounded-2xl border px-3 py-2 text-xs font-semibold ${isActive ? "border-white/10 bg-white/10 text-slate-200" : "border-[#e5ded1] bg-[#faf7f0] text-slate-700"}`}>
        {labels.riskCount}: {prompt.riskCount} · {labels.review}: {prompt.review[lang]}
      </div>
    </button>
  );
}
