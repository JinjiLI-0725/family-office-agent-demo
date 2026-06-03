import type { Lang, Prompt, PromptId } from "@/data/familyOfficeAgentMock";
import { PromptButton } from "./PromptButton";

export function AgentCommandCenter({ prompts, selectedPrompt, selectedPromptId, lang, copy, onSelect, onRun }: { prompts: Prompt[]; selectedPrompt: Prompt; selectedPromptId: PromptId; lang: Lang; copy: Record<string, string>; onSelect: (id: PromptId) => void; onRun: () => void }) {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
      <div className="rounded-[2rem] border border-[#d8d1c4] bg-[#fbf8f1]/90 p-6 shadow-[0_28px_80px_rgba(44,37,29,0.10)]">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7b45]">{copy.scenarioSelector}</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#101b2a]">{copy.tagline}</h2>
            <p className="mt-2 text-sm text-slate-600">{copy.scenarioSubtitle}</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {prompts.map((prompt) => (
            <PromptButton key={prompt.id} prompt={prompt} lang={lang} isActive={prompt.id === selectedPromptId} onClick={() => onSelect(prompt.id)} labels={copy} />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-[#d6c6a5] bg-[#101b2a] p-6 text-white shadow-[0_32px_90px_rgba(16,27,42,0.32)]">
        <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-[#b99a5f]/25 blur-3xl" />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d6bd82]">{copy.agentTaskRunner}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">{copy.selectedTask}</h2>
            </div>
            <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-100">{copy.runReady}</span>
          </div>
          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
            <div className="text-xl font-semibold text-white">{selectedPrompt.label[lang]}</div>
            <p className="mt-3 text-sm leading-7 text-slate-200">{selectedPrompt.command[lang]}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-black/20 p-3 text-sm text-slate-200"><span className="text-[#d6bd82]">{copy.domain}</span><br />{selectedPrompt.domain[lang]}</div>
              <div className="rounded-2xl bg-black/20 p-3 text-sm text-slate-200"><span className="text-[#d6bd82]">{copy.review}</span><br />{selectedPrompt.review[lang]}</div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="max-w-md text-sm leading-6 text-slate-300">{copy.safetyText}</div>
            <button onClick={onRun} className="rounded-full bg-[#d6bd82] px-7 py-3 text-sm font-bold text-[#101b2a] shadow-[0_18px_45px_rgba(214,189,130,0.24)] transition hover:bg-[#e4cb91]">
              {copy.runAgent}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
