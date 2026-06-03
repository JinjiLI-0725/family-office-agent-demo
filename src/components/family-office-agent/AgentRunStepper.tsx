import type { AgentRunStep, StepStatus } from "@/data/familyOfficeAgentMock";

const statusStyles: Record<StepStatus, string> = {
  Completed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "In Review": "bg-amber-50 text-amber-700 ring-amber-200",
  "Needs Human Approval": "bg-slate-100 text-slate-700 ring-slate-300",
};

export function AgentRunStepper({ steps }: { steps: AgentRunStep[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-premium">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Agent Run Trace</p>
          <h2 className="mt-2 text-xl font-semibold text-navy">Structured workflow execution</h2>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">Agent analysis completed</span>
      </div>
      <div className="mt-6 space-y-4">
        {steps.map((step, index) => (
          <div key={step.name} className="relative flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white ring-4 ring-white">{index + 1}</div>
              {index < steps.length - 1 && <div className="mt-2 h-full min-h-8 w-px bg-slate-200" />}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold text-slate-900">{step.name}</h3>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusStyles[step.status]}`}>{step.status}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
