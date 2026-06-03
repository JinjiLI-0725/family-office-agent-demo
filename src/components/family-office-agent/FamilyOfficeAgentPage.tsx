"use client";

import { useMemo, useState } from "react";
import { agentResponses, agentRuns, dataRooms, domains, familyMembers, prompts, riskTasks, type PromptId } from "@/data/familyOfficeAgentMock";
import { AgentCommandCenter } from "./AgentCommandCenter";
import { AgentResultPanel } from "./AgentResultPanel";
import { AgentRunStepper } from "./AgentRunStepper";
import { AppShell } from "./AppShell";
import { AuditLogTable } from "./AuditLogTable";
import { DataRoomPanel } from "./DataRoomPanel";
import { DomainOverviewGrid } from "./DomainOverviewGrid";
import { HumanApprovalPanel } from "./HumanApprovalPanel";
import { RiskSummaryCard } from "./RiskSummaryCard";

const metrics = [
  { label: "Data Room", value: "128", suffix: "documents" },
  { label: "Family Members", value: "12", suffix: "people" },
  { label: "Pending Review Items", value: "9", suffix: "items" },
];

export function FamilyOfficeAgentPage() {
  const [selectedPromptId, setSelectedPromptId] = useState<PromptId>("health");
  const selectedPrompt = useMemo(() => prompts.find((prompt) => prompt.id === selectedPromptId) ?? prompts[0], [selectedPromptId]);

  return (
    <AppShell>
      <div className="space-y-6">
        <section className="relative overflow-hidden rounded-[2rem] bg-navy p-6 text-white shadow-premium sm:p-8">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-56 w-56 rounded-full bg-evergreen/40 blur-3xl" />
          <div className="relative grid gap-8 xl:grid-cols-[1.35fr_0.65fr]">
            <div>
              <div className="inline-flex rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Executive Demo · Mock Data</div>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Family Office AI Agent</h1>
              <p className="mt-5 max-w-3xl text-xl text-slate-200">A private data hub and intelligent risk management agent for high-net-worth families.</p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">Unify family health, assets, legal documents, tax and residency records, education planning, governance, privacy controls, and philanthropy data. The Agent helps organize information, flag risks, track tasks, and prepare materials for professional review.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <div className="text-sm text-slate-300">{metric.label}</div>
                  <div className="mt-2 flex items-end gap-2"><span className="text-4xl font-semibold text-white">{metric.value}</span><span className="pb-1 text-sm text-gold">{metric.suffix}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AgentCommandCenter prompts={prompts} selectedPromptId={selectedPromptId} command={selectedPrompt.command} onSelect={setSelectedPromptId} />

        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <AgentRunStepper steps={agentRuns[selectedPromptId]} />
          <AgentResultPanel response={agentResponses[selectedPromptId]} />
        </div>

        <DomainOverviewGrid domains={domains} activeDomainIds={selectedPrompt.activeDomainIds} />

        <div id="risk-items" className="grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-premium">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Portfolio Risk Queue</p>
            <h2 className="mt-2 text-xl font-semibold text-navy">Open risk tasks</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              {riskTasks.map((task) => <RiskSummaryCard key={task.label} label={task.label} count={task.count} tone={task.tone} />)}
            </div>
            <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="font-semibold text-navy">Family member coverage</h3>
              <div className="mt-3 space-y-2">
                {familyMembers.map((group) => (
                  <div key={group.label} className="flex items-center justify-between text-sm"><span className="text-slate-600">{group.label}</span><span className="font-semibold text-slate-900">{group.count}</span></div>
                ))}
              </div>
            </div>
          </section>
          <DataRoomPanel sources={dataRooms} selectedPromptId={selectedPromptId} />
        </div>

        <HumanApprovalPanel />
        <AuditLogTable />
      </div>
    </AppShell>
  );
}
