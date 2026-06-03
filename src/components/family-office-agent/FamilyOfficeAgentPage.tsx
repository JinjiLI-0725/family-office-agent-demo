"use client";

import { useMemo, useState } from "react";
import { agentResponses, agentRuns, auditLogs, dataRooms, missingInformation, prompts, type Lang, type PromptId, uiCopy } from "@/data/familyOfficeAgentMock";
import { AgentCommandCenter } from "./AgentCommandCenter";
import { AgentResultPanel } from "./AgentResultPanel";
import { AgentRunStepper } from "./AgentRunStepper";
import { AppShell } from "./AppShell";
import { AuditLogTable } from "./AuditLogTable";
import { DataRoomPanel } from "./DataRoomPanel";
import { HumanApprovalPanel } from "./HumanApprovalPanel";
import { MissingInformationPanel } from "./MissingInformationPanel";

type TabId = "data" | "missing" | "approval" | "audit";

const reviewChipKeys: Record<PromptId, Array<"physicianReview" | "legalReview" | "taxReview" | "investmentReview" | "familyPrincipalReview">> = {
  health: ["physicianReview", "familyPrincipalReview"],
  trust: ["legalReview", "taxReview", "investmentReview", "familyPrincipalReview"],
  meeting: ["physicianReview", "legalReview", "familyPrincipalReview"],
  weekly: ["physicianReview", "legalReview", "taxReview", "investmentReview", "familyPrincipalReview"],
};

export function FamilyOfficeAgentPage() {
  const [selectedPromptId, setSelectedPromptId] = useState<PromptId>("health");
  const [lang, setLang] = useState<Lang>("en");
  const [runCount, setRunCount] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(3);
  const [activeTab, setActiveTab] = useState<TabId>("data");
  const copy = uiCopy[lang];
  const selectedPrompt = useMemo(() => prompts.find((prompt) => prompt.id === selectedPromptId) ?? prompts[0], [selectedPromptId]);
  const reviewChips = reviewChipKeys[selectedPromptId].map((key) => copy[key]);
  const executionMessages = [copy.classifyingRequest, copy.scanningRecords, copy.checkingMissing, copy.briefGenerated];
  const tabs: Array<{ id: TabId; label: string; count: number }> = [
    { id: "data", label: copy.dataRoomTab, count: dataRooms.filter((source) => source.promptIds.includes(selectedPromptId)).length },
    { id: "missing", label: copy.missingTab, count: missingInformation[selectedPromptId].length },
    { id: "approval", label: copy.approvalTab, count: reviewChips.length },
    { id: "audit", label: copy.auditTab, count: auditLogs.length },
  ];

  const startMockRun = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStepIndex(0);
    setRunCount((count) => count + 1);

    [1, 2, 3].forEach((step, index) => {
      window.setTimeout(() => setActiveStepIndex(step), (index + 1) * 420);
    });
    window.setTimeout(() => {
      setIsRunning(false);
      setActiveStepIndex(3);
    }, 1780);
  };

  const handleSelectPrompt = (promptId: PromptId) => {
    setSelectedPromptId(promptId);
    setActiveStepIndex(3);
    setRunCount((count) => count + 1);
  };

  return (
    <AppShell>
      <div className="min-h-screen bg-[#f5f3ee]">
        <header className="sticky top-0 z-30 border-b border-[#e5ded1] bg-white/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1680px] flex-wrap items-center justify-between gap-3 px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8bd80] bg-[#fff8e8] text-sm font-bold text-[#8a6f3d]">FO</div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-lg font-semibold text-[#182230]">{copy.product}</h1>
                  <span className="rounded-full border border-[#d8bd80] bg-[#fff8e8] px-2.5 py-1 text-xs font-semibold text-[#7a5f2e]">{copy.executiveDemo}</span>
                </div>
                <p className="text-xs text-[#667085]">{copy.commandCenter}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="rounded-full border border-[#e0d8ca] bg-[#fbfaf6] p-1">
                {(["en", "zh"] as Lang[]).map((item) => (
                  <button key={item} onClick={() => setLang(item)} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${lang === item ? "bg-[#182230] text-white" : "text-[#536071] hover:text-[#182230]"}`}>
                    {item === "en" ? "EN" : "中文"}
                  </button>
                ))}
              </div>
              <span className="rounded-full bg-[#eef7f3] px-3 py-1.5 text-xs font-semibold text-[#1f6b5a]">{copy.mockDataOnly}</span>
              <span className="rounded-full bg-[#f1f4f7] px-3 py-1.5 text-xs font-semibold text-[#536071]">{copy.noBackendConnected}</span>
              <span className="rounded-full bg-[#fff8e8] px-3 py-1.5 text-xs font-semibold text-[#7a5f2e]">{copy.pendingReviews}</span>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1680px] space-y-4 px-5 py-5">
          <section className="grid gap-5 xl:grid-cols-[250px_minmax(760px,1.35fr)_390px]">
            <AgentCommandCenter prompts={prompts} selectedPromptId={selectedPromptId} lang={lang} copy={copy} onSelect={handleSelectPrompt} />
            <AgentRunStepper steps={agentRuns[selectedPromptId]} selectedPrompt={selectedPrompt} lang={lang} copy={copy} runCount={runCount} onRun={startMockRun} isRunning={isRunning} activeStepIndex={activeStepIndex} executionMessages={executionMessages} />
            <AgentResultPanel response={agentResponses[selectedPromptId]} lang={lang} copy={copy} reviewChips={reviewChips} />
          </section>

          <section className="rounded-[1.75rem] border border-[#e0d8ca] bg-white p-4 shadow-[0_18px_50px_rgba(40,35,28,0.07)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#eee8dc] pb-3">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeTab === tab.id ? "bg-[#182230] text-white" : "bg-[#f6f4ef] text-[#536071] hover:bg-[#eee8dc]"}`}>
                    {tab.label} <span className="ml-1 opacity-70">{tab.count}</span>
                  </button>
                ))}
              </div>
              <p className="text-sm text-[#667085]">{copy.safetyText}</p>
            </div>
            <div className="pt-4">
              {activeTab === "data" && <DataRoomPanel sources={dataRooms} selectedPromptId={selectedPromptId} lang={lang} copy={copy} embedded />}
              {activeTab === "missing" && <MissingInformationPanel items={missingInformation[selectedPromptId]} lang={lang} copy={copy} embedded />}
              {activeTab === "approval" && <HumanApprovalPanel selectedPromptId={selectedPromptId} lang={lang} copy={copy} embedded />}
              {activeTab === "audit" && <AuditLogTable lang={lang} copy={copy} embedded />}
            </div>
          </section>
        </main>
      </div>
    </AppShell>
  );
}
