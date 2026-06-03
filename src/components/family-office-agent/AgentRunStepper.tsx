import type { AgentRunStep, StepStatus } from "@/data/familyOfficeAgentMock";

const statusStyles: Record<StepStatus, string> = {
  Completed: "bg-emerald-500/10 text-emerald-700 ring-emerald-200",
  "In Review": "bg-gold/15 text-amber-800 ring-gold/30",
  "Needs Human Approval": "bg-slate-900 text-white ring-slate-900",
};

export function AgentRunStepper({ steps }: { steps: AgentRunStep[] }) {
  return (
    <section className="rounded-[1.6rem] border border-slate-200 bg-[#0b1522] p-4 text-white shadow-premium">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">Agent Run Trace</p>
          <h2 className="mt-1 text-xl font-semibold">Execution timeline</h2>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">Run completed</span>
      </div>
      <div className="mt-4 space-y-2.5">
        {steps.map((step, index) => (
          <article key={step.name} className="grid grid-cols-[34px_minmax(0,1fr)] gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <div className="relative flex justify-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-gold/15 text-xs font-semibold text-gold">{index + 1}</div>
              {index < steps.length - 1 && <div className="absolute top-9 h-8 w-px bg-gradient-to-b from-gold/50 to-transparent" />}
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-white">{step.name}</h3>
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ring-1 ${statusStyles[step.status]}`}>{step.status}</span>
              </div>
              <p className="mt-1 text-xs leading-5 text-slate-300">{step.detail}</p>
              <div className="mt-2 inline-flex rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-300">{step.metadata}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
