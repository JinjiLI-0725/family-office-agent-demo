import type { Prompt } from "@/data/familyOfficeAgentMock";

export function PromptButton({ prompt, isActive, onClick }: { prompt: Prompt; isActive: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${isActive ? "border-gold bg-gold/15 text-navy shadow-md" : "border-slate-200 bg-white text-slate-700 hover:border-gold/60 hover:bg-gold/5"}`}>
      {prompt.label}
    </button>
  );
}
