import type { ClientFollowUpProfile, Lang } from "@/data/familyOfficeAgentMock";

const cardRows: Array<{ labelKey: string; valueKey: keyof Pick<ClientFollowUpProfile, "clientSource" | "clientType" | "mainAdvisoryNeed" | "insuranceSignal" | "internalRouting" | "priority" | "nextAction"> }> = [
  { labelKey: "clientSource", valueKey: "clientSource" },
  { labelKey: "clientType", valueKey: "clientType" },
  { labelKey: "mainAdvisoryNeed", valueKey: "mainAdvisoryNeed" },
  { labelKey: "insuranceSignal", valueKey: "insuranceSignal" },
  { labelKey: "recommendedInternalRouting", valueKey: "internalRouting" },
  { labelKey: "followUpPriority", valueKey: "priority" },
  { labelKey: "nextAction", valueKey: "nextAction" },
];

export function AgentRunStepper({ profile, lang, copy, runCount, onRun, isRunning, activeStepIndex, executionMessages }: { profile: ClientFollowUpProfile; lang: Lang; copy: Record<string, string>; runCount: number; onRun: () => void; isRunning: boolean; activeStepIndex: number; executionMessages: string[] }) {
  const runId = `#FO-RUN-${String(18 + runCount).padStart(3, "0")}`;

  return (
    <section className="rounded-[2rem] border border-[#cfd8e3] bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,0.10)]">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3 border-b border-[#e5ebf2] pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8a6f3d]">{copy.clientFollowUpCard}</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#0f2337]">{copy.clientFollowUpCard} #CIC-2026-004</h2>
            <span className="rounded-full border border-[#d6bf83] bg-[#fbf6ea] px-3 py-1 text-xs font-bold text-[#7a5f2e]">{copy.internalReview}</span>
          </div>
          <p className="mt-1 text-sm text-[#64748b]">{copy.cardSubtitle} · {runId}</p>
        </div>
        <button disabled={isRunning} onClick={onRun} className="rounded-full bg-[#17324d] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(23,50,77,0.20)] transition hover:bg-[#10263c] disabled:cursor-not-allowed disabled:bg-[#8191a2]">
          {isRunning ? copy.agentRunning : copy.runAgent}
        </button>
      </div>

      <div className="mb-4 rounded-2xl border border-[#dbe3ec] bg-[#f8fafc] px-3 py-3">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748b]">{copy.activityStrip}</span>
          <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#31516d] ring-1 ring-[#d8e0e9]">{isRunning ? copy.agentRunning : copy.runCompletedShort}</span>
        </div>
        <div className="grid gap-2 md:grid-cols-4">
          {executionMessages.map((message, index) => {
            const active = isRunning ? index === activeStepIndex : index === executionMessages.length - 1;
            const complete = isRunning ? index < activeStepIndex : true;
            return (
              <div key={message} className={`rounded-xl border px-3 py-2 text-xs font-semibold transition ${active ? "border-[#9fb6ca] bg-white text-[#102a43] shadow-sm" : complete ? "border-[#dbe7df] bg-[#f4fbf7] text-[#2f6b54]" : "border-[#e5ebf2] bg-white/70 text-[#7a8797]"}`}>
                <span className={`mr-2 inline-block h-1.5 w-1.5 rounded-full ${active ? "bg-[#a98b50]" : complete ? "bg-[#2f8a65]" : "bg-[#b9c3cf]"}`} />
                {message}
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-[#d6dde7] bg-[linear-gradient(180deg,#ffffff_0%,#fbfcfe_100%)] p-5 shadow-inner shadow-white">
        <div className="mb-5 flex items-center justify-between gap-3 border-b border-[#e8edf3] pb-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9a7b45]">{copy.executiveMemoLabel}</p>
            <h3 className="mt-1 text-xl font-semibold text-[#102033]">{profile.clientType[lang]}</h3>
          </div>
          <div className="rounded-2xl border border-[#e7d6a3] bg-[#fffaf0] px-4 py-3 text-right">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9a7b45]">{copy.followUpPriority}</div>
            <div className="mt-1 text-sm font-bold text-[#172a3f]">{profile.priority[lang]}</div>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          {cardRows.slice(0, 4).map((row) => (
            <MemoRow key={row.labelKey} label={copy[row.labelKey]} value={profile[row.valueKey][lang]} />
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-[#e5ebf2] bg-white p-4">
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#64748b]">{copy.missingInformationLabel}</div>
          <div className="grid gap-2 md:grid-cols-3">
            {profile.missingInformation.map((item) => (
              <div key={item.en} className="rounded-xl border border-[#e8edf3] bg-[#f8fafc] px-3 py-2 text-xs font-semibold leading-5 text-[#334155]">{item[lang]}</div>
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {cardRows.slice(4).map((row) => (
            <MemoRow key={row.labelKey} label={copy[row.labelKey]} value={profile[row.valueKey][lang]} wide />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemoRow({ label, value, wide }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={`rounded-2xl border border-[#e3e9f0] bg-white px-4 py-3 ${wide ? "" : "min-h-[96px]"}`}>
      <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#718096]">{label}</div>
      <div className="mt-2 text-sm font-semibold leading-6 text-[#132338]">{value}</div>
    </div>
  );
}
