"use client";

import { useMemo, useState } from "react";
import { agentResponses, agentRuns, dataRooms, domains, familyMembers, missingInformation, prompts, riskTasks, type Lang, type PromptId, uiCopy } from "@/data/familyOfficeAgentMock";
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

export function FamilyOfficeAgentPage() {
  const [selectedPromptId, setSelectedPromptId] = useState<PromptId>("health");
  const [lang, setLang] = useState<Lang>("en");
  const [runCount, setRunCount] = useState(1);
  const copy = uiCopy[lang];
  const selectedPrompt = useMemo(() => prompts.find((prompt) => prompt.id === selectedPromptId) ?? prompts[0], [selectedPromptId]);

  const handleSelectPrompt = (promptId: PromptId) => {
    setSelectedPromptId(promptId);
    setRunCount((count) => count + 1);
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-[1500px] space-y-8 px-4 py-5 sm:px-6 lg:px-8">
        <header className="relative overflow-hidden rounded-[2rem] border border-[#d8d1c4] bg-[#101b2a] p-6 text-white shadow-[0_28px_90px_rgba(16,27,42,0.24)]">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#d6bd82]/25 blur-3xl" />
          <div className="relative flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d6bd82]/40 bg-[#d6bd82]/10 text-lg font-bold text-[#d6bd82]">FO</div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d6bd82]">{copy.tagline}</p>
                <h1 className="mt-1 text-3xl font-semibold tracking-tight">{copy.product}</h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">{copy.headerSubtitle}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-3">
              <div className="rounded-full border border-white/10 bg-white/[0.08] p-1">
                {(["en", "zh"] as Lang[]).map((item) => (
                  <button key={item} onClick={() => setLang(item)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${lang === item ? "bg-[#d6bd82] text-[#101b2a]" : "text-slate-300 hover:text-white"}`}>
                    {item === "en" ? "EN" : "中文"}
                  </button>
                ))}
              </div>
              <span className="rounded-full border border-[#d6bd82]/30 bg-[#d6bd82]/10 px-3 py-2 text-xs font-semibold text-[#f1d99c]">{copy.executiveDemo}</span>
              <span className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-2 text-xs font-semibold text-slate-200">{copy.mockData}</span>
              <span className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-2 text-xs font-semibold text-slate-200">{copy.noBackend}</span>
              <span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-[#101b2a]">{copy.pendingReviews}</span>
            </div>
          </div>
        </header>

        <section className="rounded-[2rem] border border-[#d8d1c4] bg-[#fbf8f1] p-6 shadow-[0_20px_70px_rgba(44,37,29,0.08)]">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7b45]">{copy.safetyTitle}</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#101b2a]">{copy.thesis}</h2>
            </div>
            <div className="rounded-[1.25rem] border border-[#d6c6a5] bg-white px-5 py-4 text-sm leading-6 text-slate-700">{copy.safetyText}</div>
          </div>
        </section>

        <AgentCommandCenter prompts={prompts} selectedPrompt={selectedPrompt} selectedPromptId={selectedPromptId} lang={lang} copy={copy} onSelect={handleSelectPrompt} onRun={() => setRunCount((count) => count + 1)} />

        <AgentRunStepper key={`${selectedPromptId}-${runCount}-${lang}`} steps={agentRuns[selectedPromptId]} lang={lang} copy={copy} runCount={runCount} />

        <section className="grid gap-8 xl:grid-cols-[minmax(0,1.18fr)_minmax(360px,0.82fr)]">
          <AgentResultPanel response={agentResponses[selectedPromptId]} lang={lang} copy={copy} />
          <div className="space-y-6">
            <DataRoomPanel sources={dataRooms} selectedPromptId={selectedPromptId} lang={lang} copy={copy} />
            <MissingInformationPanel items={missingInformation[selectedPromptId]} lang={lang} copy={copy} />
            <HumanApprovalPanel selectedPromptId={selectedPromptId} lang={lang} copy={copy} />
          </div>
        </section>

        <DomainOverviewGrid domains={domains} activeDomainIds={selectedPrompt.activeDomainIds} lang={lang} copy={copy} />

        <section className="grid gap-8 xl:grid-cols-[360px_minmax(0,1fr)]">
          <div className="rounded-[2rem] border border-[#d8d1c4] bg-white p-6 shadow-[0_20px_70px_rgba(44,37,29,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7b45]">{copy.riskQueue}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              {riskTasks.map((task) => <RiskSummaryCard key={task.label.en} label={task.label} count={task.count} tone={task.tone} lang={lang} />)}
            </div>
            <div className="mt-5 rounded-[1.3rem] border border-[#e5ded1] bg-[#fbf8f1] p-4">
              <h3 className="text-base font-semibold text-[#101b2a]">{copy.familyCoverage}</h3>
              <div className="mt-3 space-y-2">
                {familyMembers.map((group) => (
                  <div key={group.label.en} className="flex items-center justify-between text-sm"><span className="text-slate-600">{group.label[lang]}</span><span className="font-semibold text-[#101b2a]">{group.count}</span></div>
                ))}
              </div>
            </div>
          </div>
          <AuditLogTable lang={lang} copy={copy} />
        </section>
      </div>
    </AppShell>
  );
}
