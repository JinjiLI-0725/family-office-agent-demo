"use client";

import { useMemo, useState } from "react";
import { agentResponses, agentRuns, dataRooms, domains, familyMembers, missingInformation, prompts, riskTasks, type PromptId } from "@/data/familyOfficeAgentMock";
import { AgentCommandCenter } from "./AgentCommandCenter";
import { AgentResultPanel } from "./AgentResultPanel";
import { AgentRunStepper } from "./AgentRunStepper";
import { AppShell } from "./AppShell";
import { AuditLogTable } from "./AuditLogTable";
import { DataRoomPanel } from "./DataRoomPanel";
import { DomainOverviewGrid } from "./DomainOverviewGrid";
import { HumanApprovalPanel } from "./HumanApprovalPanel";
import { MissingInformationPanel } from "./MissingInformationPanel";
import { RiskSummaryCard } from "./RiskSummaryCard";

const metrics = [
  { label: "Data Room", value: "128 docs" },
  { label: "Family Members", value: "12 people" },
  { label: "Review Items", value: "9 pending" },
];

export function FamilyOfficeAgentPage() {
  const [selectedPromptId, setSelectedPromptId] = useState<PromptId>("health");
  const [runCount, setRunCount] = useState(1);
  const selectedPrompt = useMemo(() => prompts.find((prompt) => prompt.id === selectedPromptId) ?? prompts[0], [selectedPromptId]);
  const selectedResponse = agentResponses[selectedPromptId];

  const handleSelectPrompt = (promptId: PromptId) => {
    setSelectedPromptId(promptId);
    setRunCount((count) => count + 1);
  };

  return (
    <AppShell>
      <div className="space-y-4">
        <header className="rounded-[1.6rem] border border-slate-200 bg-white/95 px-4 py-3 shadow-premium backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-sm font-semibold text-gold">FO</div>
              <div>
                <h1 className="text-xl font-semibold tracking-tight text-navy">Family Office AI Agent</h1>
                <p className="text-xs text-slate-500">Command center for classifying tasks, retrieving private context, flagging risks, and generating advisor-ready materials.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-gold">Executive Demo · Mock Data</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-700">No backend connected</span>
              <span className="rounded-full bg-navy px-3 py-1.5 text-white">9 pending review items</span>
            </div>
          </div>
        </header>

        <section id="agent-command" className="grid gap-4 xl:grid-cols-[minmax(0,1.55fr)_420px]">
          <div className="space-y-4">
            <AgentCommandCenter prompts={prompts} selectedPromptId={selectedPromptId} command={selectedPrompt.command} onSelect={handleSelectPrompt} onRun={() => setRunCount((count) => count + 1)} />
            <div className="grid gap-4 2xl:grid-cols-[0.88fr_1.12fr]">
              <div key={`trace-${selectedPromptId}-${runCount}`}>
                <AgentRunStepper steps={agentRuns[selectedPromptId]} />
              </div>
              <AgentResultPanel response={selectedResponse} />
            </div>
          </div>
          <aside className="space-y-4">
            <div className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-premium">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Selected Task Summary</p>
              <h2 className="mt-1 text-lg font-semibold text-navy">{selectedPrompt.label}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">The Agent will classify this request, retrieve relevant mock data-room records, identify missing information, and prepare a professional-review deliverable.</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl bg-slate-50 p-3">
                    <div className="text-[10px] uppercase tracking-wide text-slate-500">{metric.label}</div>
                    <div className="mt-1 text-sm font-semibold text-navy">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <DataRoomPanel sources={dataRooms} selectedPromptId={selectedPromptId} />
            <MissingInformationPanel items={missingInformation[selectedPromptId]} />
            <HumanApprovalPanel selectedPromptId={selectedPromptId} compact />
          </aside>
        </section>

        <DomainOverviewGrid domains={domains} activeDomainIds={selectedPrompt.activeDomainIds} />

        <div id="risk-items" className="grid gap-4 xl:grid-cols-[360px_minmax(0,1fr)]">
          <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-premium">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Risk Queue</p>
            <h2 className="mt-1 text-lg font-semibold text-navy">Open task load</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-3 xl:grid-cols-1">
              {riskTasks.map((task) => <RiskSummaryCard key={task.label} label={task.label} count={task.count} tone={task.tone} />)}
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <h3 className="text-sm font-semibold text-navy">Family member coverage</h3>
              <div className="mt-2 space-y-1.5">
                {familyMembers.map((group) => (
                  <div key={group.label} className="flex items-center justify-between text-xs"><span className="text-slate-600">{group.label}</span><span className="font-semibold text-slate-900">{group.count}</span></div>
                ))}
              </div>
            </div>
          </section>
          <div className="space-y-4">
            <HumanApprovalPanel />
            <AuditLogTable />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
