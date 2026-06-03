import type { AgentRunStep, Lang, Prompt, StepStatus } from "@/data/familyOfficeAgentMock";

const statusStyles: Record<StepStatus, string> = {
  Completed: "bg-[#e8f6ef] text-[#176145] ring-[#bfe4d1]",
  "In Review": "bg-[#fff6df] text-[#8a6419] ring-[#ead198]",
  "Needs Human Approval": "bg-[#eef2f6] text-[#415064] ring-[#d7dee8]",
};

const statusLabel: Record<Lang, Record<StepStatus, string>> = {
  en: { Completed: "Completed", "In Review": "In Review", "Needs Human Approval": "Needs Human Approval" },
  zh: { Completed: "已完成", "In Review": "复核中", "Needs Human Approval": "需要人工确认" },
};

export function AgentRunStepper({ steps, selectedPrompt, lang, copy, runCount, onRun, isRunning, activeStepIndex, executionMessages }: { steps: AgentRunStep[]; selectedPrompt: Prompt; lang: Lang; copy: Record<string, string>; runCount: number; onRun: () => void; isRunning: boolean; activeStepIndex: number; executionMessages: string[] }) {
  return (
    <section className="rounded-[1.75rem] border border-[#d8d0c2] bg-white p-6 shadow-[0_22px_60px_rgba(40,35,28,0.10)] xl:scale-[1.01] xl:shadow-[0_26px_70px_rgba(40,35,28,0.12)]">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#eee8dc] pb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a7b45]">{copy.agentWorkspace}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#182230]">{selectedPrompt.label[lang]}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#667085]">{copy.mainValue}</p>
        </div>
        <button disabled={isRunning} onClick={onRun} className="rounded-full bg-[#1f6b5a] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(31,107,90,0.22)] transition hover:bg-[#195748] disabled:cursor-not-allowed disabled:bg-[#88a99f]">
          {isRunning ? copy.agentRunning : copy.runAgent}
        </button>
      </div>

      <div className="mt-5 rounded-2xl border border-[#e0d8ca] bg-[#fbfaf6] p-4">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7b45]">{copy.selectedTask}</div>
        <p className="mt-2 text-base leading-7 text-[#3f4a5a]">{selectedPrompt.command[lang]}</p>
      </div>

      <div className="mt-5 rounded-2xl border border-[#d8bd80] bg-[#fffaf0] p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7b45]">{copy.executionStatus}</div>
          <span className="rounded-full bg-[#eef7f3] px-3 py-1.5 text-xs font-semibold text-[#1f6b5a] ring-1 ring-[#cbe9dd]">{isRunning ? copy.agentRunning : copy.runCompletedShort} · #{runCount}</span>
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-4">
          {executionMessages.map((message, index) => {
            const active = isRunning ? index === activeStepIndex : index === executionMessages.length - 1;
            return (
              <div key={message} className={`rounded-xl px-3 py-2 text-xs font-medium transition ${active ? "bg-white text-[#1f6b5a] shadow-sm ring-1 ring-[#cbe9dd]" : "bg-[#f8f1df] text-[#7a6a4d]"}`}>
                {message}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => {
          const highlighted = isRunning ? index <= activeStepIndex + 1 : true;
          return (
            <article key={`${step.name.en}-${index}`} className={`rounded-2xl border bg-white p-4 shadow-[0_8px_22px_rgba(40,35,28,0.05)] transition ${highlighted ? "border-[#d8bd80]" : "border-[#e5e0d6] opacity-60"}`}>
              <div className="flex items-start justify-between gap-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold ${highlighted ? "bg-[#f4ead3] text-[#8a6f3d]" : "bg-[#f1f4f7] text-[#98a2b3]"}`}>{index + 1}</div>
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ring-1 ${statusStyles[step.status]}`}>{statusLabel[lang][step.status]}</span>
              </div>
              <h4 className="mt-3 text-sm font-semibold text-[#182230]">{step.name[lang]}</h4>
              <p className="mt-2 text-xs leading-5 text-[#667085]">{step.detail[lang]}</p>
              <div className="mt-3 rounded-full bg-[#f6f8fa] px-3 py-1.5 text-xs font-semibold text-[#536071]">{step.metadata[lang]}</div>
            </article>
          );
        })}
      </div>

      <div className="mt-5 rounded-2xl border border-[#d8bd80] bg-[#fff8e8] p-4">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7b45]">{copy.runSummary}</div>
        <p className="mt-2 text-sm leading-6 text-[#3f4a5a]">{selectedPrompt.runSummary[lang]}</p>
      </div>
    </section>
  );
}
