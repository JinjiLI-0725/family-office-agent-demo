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
  const runId = `#FO-RUN-${String(18 + runCount).padStart(3, "0")}`;

  return (
    <section className="rounded-[1.75rem] border border-[#d8d0c2] bg-white p-6 shadow-[0_24px_70px_rgba(40,35,28,0.11)]">
      <div className="flex flex-wrap items-start justify-between gap-5 border-b border-[#eee8dc] pb-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a7b45]">{copy.agentWorkspace}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#182230]">{selectedPrompt.label[lang]}</h2>
          <p className="mt-2 text-sm leading-6 text-[#667085]">{copy.mainValue}</p>
        </div>
        <button disabled={isRunning} onClick={onRun} className="rounded-full bg-[#1f6b5a] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_32px_rgba(31,107,90,0.24)] transition hover:bg-[#195748] disabled:cursor-not-allowed disabled:bg-[#88a99f]">
          {isRunning ? copy.agentRunning : copy.runAgent}
        </button>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div className="rounded-2xl border border-[#e0d8ca] bg-[#fbfaf6] p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7b45]">{copy.selectedTask}</div>
          <p className="mt-2 text-base leading-7 text-[#3f4a5a]">{selectedPrompt.command[lang]}</p>
        </div>
        <div className="rounded-2xl border border-[#d8bd80] bg-[#fffaf0] p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7b45]">{copy.executionStatus}</div>
          <div className="mt-2 text-lg font-semibold text-[#182230]">{runId}</div>
          <div className="mt-2 rounded-full bg-[#eef7f3] px-3 py-1.5 text-center text-xs font-semibold text-[#1f6b5a] ring-1 ring-[#cbe9dd]">{isRunning ? copy.agentRunning : copy.runCompletedShort}</div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {executionMessages.map((message, index) => {
          const active = isRunning ? index === activeStepIndex : index === executionMessages.length - 1;
          return (
            <span key={message} className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${active ? "bg-[#e8f6ef] text-[#176145] ring-1 ring-[#bfe4d1]" : "bg-[#f6f4ef] text-[#6d7480]"}`}>
              {message}
            </span>
          );
        })}
      </div>

      <div className="mt-5 rounded-2xl border border-[#e5e0d6] bg-white px-4 py-3">
        {steps.map((step, index) => {
          const highlighted = isRunning ? index <= activeStepIndex + 1 : true;
          return (
            <div key={`${step.name.en}-${index}`} className="relative grid grid-cols-[32px_minmax(0,1fr)] gap-3 pb-3 last:pb-0">
              {index < steps.length - 1 && <div className="absolute left-4 top-9 h-[calc(100%-1.75rem)] w-px bg-[#e4ded2]" />}
              <div className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${highlighted ? "bg-[#f4ead3] text-[#8a6f3d] ring-4 ring-white" : "bg-[#f1f4f7] text-[#98a2b3] ring-4 ring-white"}`}>{index + 1}</div>
              <div className={`rounded-xl px-3 py-2 transition ${highlighted ? "bg-[#fffdf8]" : "bg-white opacity-60"}`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-sm font-semibold text-[#182230]">{step.name[lang]}</h4>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ring-1 ${statusStyles[step.status]}`}>{statusLabel[lang][step.status]}</span>
                </div>
                <p className="mt-1 text-xs leading-5 text-[#667085]">{step.detail[lang]}</p>
                <div className="mt-1 text-xs font-semibold text-[#8a6f3d]">{step.metadata[lang]}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-2xl border border-[#d8bd80] bg-[#fff8e8] p-4">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7b45]">{copy.runSummary}</div>
        <p className="mt-2 text-sm leading-6 text-[#3f4a5a]">{selectedPrompt.runSummary[lang]}</p>
      </div>
    </section>
  );
}
