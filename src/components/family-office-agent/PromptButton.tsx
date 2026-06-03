import type { Prompt } from "@/data/familyOfficeAgentMock";

export function PromptButton({ prompt, isActive, onClick }: { prompt: Prompt; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group w-full rounded-2xl border p-3 text-left transition ${
        isActive
          ? "border-gold/70 bg-gold/15 text-white shadow-[0_18px_45px_rgba(201,164,92,0.16)]"
          : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-gold/40 hover:bg-white/[0.07]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold">{prompt.label}</span>
        <span className={`h-2 w-2 rounded-full ${isActive ? "bg-gold" : "bg-slate-600 group-hover:bg-gold/70"}`} />
      </div>
      <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-400">{prompt.command}</p>
    </button>
  );
}
