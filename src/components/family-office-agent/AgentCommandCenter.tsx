import type { Prompt, PromptId } from "@/data/familyOfficeAgentMock";
import { PromptButton } from "./PromptButton";

export function AgentCommandCenter({ prompts, selectedPromptId, command, onSelect, onRun }: { prompts: Prompt[]; selectedPromptId: PromptId; command: string; onSelect: (id: PromptId) => void; onRun: () => void }) {
  const selectedPrompt = prompts.find((prompt) => prompt.id === selectedPromptId) ?? prompts[0];

  return (
    <div className="grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)]">
      <section className="rounded-[1.6rem] border border-white/10 bg-navy p-4 shadow-premium">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Scenario Selector</p>
            <h2 className="mt-1 text-lg font-semibold text-white">Sample tasks</h2>
          </div>
          <span className="rounded-full border border-gold/30 px-2.5 py-1 text-[10px] font-semibold text-gold">4 runs</span>
        </div>
        <div className="mt-4 space-y-2.5">
          {prompts.map((prompt) => (
            <PromptButton key={prompt.id} prompt={prompt} isActive={prompt.id === selectedPromptId} onClick={() => onSelect(prompt.id)} />
          ))}
        </div>
      </section>

      <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-premium">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Agent Task Runner</p>
            <h2 className="mt-1 text-xl font-semibold text-navy">Run a family office workflow</h2>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">Agent ready</span>
        </div>
        <div className="mt-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-3">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" /> Selected task
          </div>
          <textarea
            value={command}
            readOnly
            className="mt-3 min-h-20 w-full resize-none border-0 bg-transparent text-sm leading-6 text-slate-800 outline-none"
            placeholder="Enter a family office task, e.g. review genetic risk, check trust documents, prepare family meeting materials…"
          />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-600">
              <span className="font-semibold text-slate-900">Current scenario:</span> {selectedPrompt.label}
            </div>
            <button onClick={onRun} className="rounded-2xl bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-navy/20 transition hover:bg-evergreen">
              Run Agent
            </button>
          </div>
        </div>
        <div className="mt-3 grid gap-2 text-xs text-slate-500 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 px-3 py-2">1. Classify request</div>
          <div className="rounded-xl bg-slate-50 px-3 py-2">2. Retrieve context</div>
          <div className="rounded-xl bg-slate-50 px-3 py-2">3. Produce review brief</div>
        </div>
      </section>
    </div>
  );
}
