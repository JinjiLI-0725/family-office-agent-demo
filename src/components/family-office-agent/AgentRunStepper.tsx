import type { AgentRunStep, Lang, StepStatus } from "@/data/familyOfficeAgentMock";

const statusStyles: Record<StepStatus, string> = {
  Completed: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
  "In Review": "border-[#d6bd82]/40 bg-[#d6bd82]/15 text-[#f1d99c]",
  "Needs Human Approval": "border-white/20 bg-white/[0.12] text-white",
};

const statusLabel: Record<Lang, Record<StepStatus, string>> = {
  en: { Completed: "Completed", "In Review": "In Review", "Needs Human Approval": "Needs Human Approval" },
  zh: { Completed: "已完成", "In Review": "复核中", "Needs Human Approval": "需要人工确认" },
};

export function AgentRunStepper({ steps, lang, copy, runCount }: { steps: AgentRunStep[]; lang: Lang; copy: Record<string, string>; runCount: number }) {
  return (
    <section className="relative overflow-hidden rounded-[2.2rem] border border-[#1e2f43] bg-[#0b1421] p-7 text-white shadow-[0_34px_100px_rgba(12,20,33,0.32)]">
      <div className="absolute left-1/2 top-0 h-56 w-[70%] -translate-x-1/2 rounded-full bg-[#b99a5f]/15 blur-3xl" />
      <div className="relative flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d6bd82]">{copy.workflowTitle}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">{copy.workflowSubtitle}</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100">{copy.runCompleted}</span>
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs text-slate-300">Run #{runCount}</span>
        </div>
      </div>
      <div className="relative mt-8 grid gap-4 lg:grid-cols-6">
        {steps.map((step, index) => (
          <article key={`${step.name.en}-${index}`} className="relative rounded-[1.4rem] border border-white/10 bg-white/[0.055] p-4 backdrop-blur">
            {index < steps.length - 1 && <div className="absolute left-[calc(100%-0.5rem)] top-10 hidden h-px w-6 bg-[#d6bd82]/40 lg:block" />}
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#d6bd82]/40 bg-[#d6bd82]/15 text-sm font-bold text-[#d6bd82]">{index + 1}</div>
              <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${statusStyles[step.status]}`}>{statusLabel[lang][step.status]}</span>
            </div>
            <h3 className="mt-4 text-base font-semibold leading-snug text-white">{step.name[lang]}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{step.detail[lang]}</p>
            <div className="mt-4 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-semibold text-[#d6bd82]">{step.metadata[lang]}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
