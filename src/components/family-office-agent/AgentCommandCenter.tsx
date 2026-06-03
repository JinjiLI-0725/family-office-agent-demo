import type { ClientFollowUpProfile, Lang, Prompt, PromptId } from "@/data/familyOfficeAgentMock";

const inputFields: Array<{ key: keyof Pick<ClientFollowUpProfile, "clientSource" | "clientType" | "mainAdvisoryNeed" | "insuranceSignal" | "familyContext" | "priority">; labelKey: string }> = [
  { key: "clientSource", labelKey: "clientSource" },
  { key: "clientType", labelKey: "clientType" },
  { key: "mainAdvisoryNeed", labelKey: "mainAdvisoryNeed" },
  { key: "insuranceSignal", labelKey: "insuranceSignal" },
  { key: "familyContext", labelKey: "familyContext" },
  { key: "priority", labelKey: "followUpPriority" },
];

export function AgentCommandCenter({ prompts, selectedPromptId, lang, copy, onSelect, profile }: { prompts: Prompt[]; selectedPromptId: PromptId; lang: Lang; copy: Record<string, string>; onSelect: (id: PromptId) => void; profile: ClientFollowUpProfile }) {
  return (
    <aside className="rounded-[1.75rem] border border-[#dbe2ea] bg-white/95 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.07)]">
      <div className="mb-4 flex items-start justify-between gap-3 border-b border-[#e8edf3] pb-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#64748b]">{copy.clientProfileInput}</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#0f2337]">{copy.clientProfile}</h2>
        </div>
        <span className="rounded-full border border-[#c9d7e5] bg-[#f7fafc] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#38536d]">{copy.noInsuranceQuote}</span>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2">
        {prompts.map((prompt) => {
          const active = prompt.id === selectedPromptId;
          return (
            <button
              key={prompt.id}
              onClick={() => onSelect(prompt.id)}
              className={`rounded-2xl border px-3 py-2 text-left transition ${active ? "border-[#19324a] bg-[#19324a] text-white shadow-[0_10px_22px_rgba(25,50,74,0.18)]" : "border-[#dbe2ea] bg-[#f8fafc] text-[#475569] hover:border-[#aab8c8] hover:bg-white"}`}
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-70">{prompt.domain[lang]}</div>
              <div className="mt-1 line-clamp-2 text-xs font-semibold leading-4">{prompt.label[lang]}</div>
            </button>
          );
        })}
      </div>

      <div className="space-y-2.5">
        {inputFields.map((field) => (
          <ProfileSelector key={field.key} label={copy[field.labelKey]} value={profile[field.key][lang]} emphasize={field.key === "insuranceSignal" || field.key === "priority"} />
        ))}
      </div>
    </aside>
  );
}

function ProfileSelector({ label, value, emphasize }: { label: string; value: string; emphasize?: boolean }) {
  return (
    <button className={`group w-full rounded-2xl border px-3.5 py-3 text-left transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)] ${emphasize ? "border-[#c7d1df] bg-[#f6f8fb]" : "border-[#e3e8ef] bg-white"}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#718096]">{label}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-[#a98b50] shadow-[0_0_0_4px_rgba(169,139,80,0.12)]" />
      </div>
      <div className="mt-1.5 text-sm font-semibold leading-5 text-[#142334]">{value}</div>
    </button>
  );
}
