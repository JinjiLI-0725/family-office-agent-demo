import type { Lang, Prompt, PromptId } from "@/data/familyOfficeAgentMock";
import { PromptButton } from "./PromptButton";

export function AgentCommandCenter({ prompts, selectedPromptId, lang, copy, onSelect }: { prompts: Prompt[]; selectedPromptId: PromptId; lang: Lang; copy: Record<string, string>; onSelect: (id: PromptId) => void }) {
  return (
    <aside className="rounded-[1.75rem] border border-[#e0d8ca] bg-[#fbfaf6] p-5 shadow-[0_18px_50px_rgba(40,35,28,0.07)]">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a7b45]">{copy.scenarioLibrary}</p>
        <h2 className="mt-2 text-xl font-semibold text-[#182230]">{copy.riskQueue}</h2>
      </div>
      <div className="space-y-3">
        {prompts.map((prompt) => (
          <PromptButton key={prompt.id} prompt={prompt} lang={lang} isActive={prompt.id === selectedPromptId} onClick={() => onSelect(prompt.id)} labels={copy} />
        ))}
      </div>
    </aside>
  );
}
