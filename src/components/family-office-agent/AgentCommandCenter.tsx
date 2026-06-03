import type { Prompt, PromptId } from "@/data/familyOfficeAgentMock";
import { PromptButton } from "./PromptButton";

export function AgentCommandCenter({ prompts, selectedPromptId, command, onSelect }: { prompts: Prompt[]; selectedPromptId: PromptId; command: string; onSelect: (id: PromptId) => void }) {
  return (
    <section id="agent-command" className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-premium sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Agent Command Center</p>
          <h2 className="mt-2 text-2xl font-semibold text-navy">Give the Agent a family office task</h2>
        </div>
        <div className="rounded-full border border-evergreen/20 bg-evergreen/5 px-4 py-2 text-sm font-semibold text-evergreen">No backend · Mock data only</div>
      </div>
      <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4">
        <textarea value={command} readOnly className="min-h-24 w-full resize-none border-0 bg-transparent text-base leading-7 text-slate-800 outline-none" placeholder="Enter a family office task, e.g. review genetic risk, check trust documents, prepare family meeting materials…" />
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {prompts.map((prompt) => (
          <PromptButton key={prompt.id} prompt={prompt} isActive={prompt.id === selectedPromptId} onClick={() => onSelect(prompt.id)} />
        ))}
      </div>
    </section>
  );
}
