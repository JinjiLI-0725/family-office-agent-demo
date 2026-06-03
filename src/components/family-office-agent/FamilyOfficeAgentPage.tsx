"use client";

import { useMemo, useState } from "react";
import { agentResponses,
  clientFollowUpProfiles, agentRuns, auditLogs, dataRooms, domains, missingInformation, prompts, approvalItems, type AgentResponse, type AgentResponseSection, type AgentRunStep, type ApprovalItem, type DataRoomSource, type Domain, type Lang, type MissingInformationItem, type Priority, type Prompt, type PromptId, uiCopy } from "@/data/familyOfficeAgentMock";
import { AgentCommandCenter } from "./AgentCommandCenter";
import { AgentResultPanel } from "./AgentResultPanel";
import { AgentRunStepper } from "./AgentRunStepper";
import { AppShell } from "./AppShell";
import { AuditLogTable } from "./AuditLogTable";
import { DataRoomPanel } from "./DataRoomPanel";
import { HumanApprovalPanel } from "./HumanApprovalPanel";
import { MissingInformationPanel } from "./MissingInformationPanel";

type TabId = "data" | "missing" | "approval" | "audit";
type MobileTabId = "profile" | "followUp" | "routing";

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
  const [activeMobileTab, setActiveMobileTab] = useState<MobileTabId>("followUp");
  const copy = uiCopy[lang];
  const selectedPrompt = useMemo(() => prompts.find((prompt) => prompt.id === selectedPromptId) ?? prompts[0], [selectedPromptId]);
  const response = agentResponses[selectedPromptId];
  const selectedProfile = clientFollowUpProfiles[selectedPromptId];
  const activeDataRooms = dataRooms.filter((source) => source.promptIds.includes(selectedPromptId));
  const activeDomains = domains.filter((domain) => selectedPrompt.activeDomainIds.includes(domain.id));
  const activeMissingInformation = missingInformation[selectedPromptId];
  const activeApprovalItems = approvalItems.filter((item) => item.promptIds.includes(selectedPromptId));
  const reviewChips = reviewChipKeys[selectedPromptId].map((key) => copy[key]);
  const highestPriority = getHighestPriority(activeMissingInformation);
  const executionMessages = [copy.classifyingRequest, copy.scanningRecords, copy.checkingMissing, copy.briefGenerated];
  const tabs: Array<{ id: TabId; label: string; count: number }> = [
    { id: "data", label: copy.dataRoomTab, count: activeDataRooms.length },
    { id: "missing", label: copy.missingTab, count: activeMissingInformation.length },
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
          <MobileExecutiveWorkflow
            activeTab={activeMobileTab}
            activeApprovalItems={activeApprovalItems}
            activeDataRooms={activeDataRooms}
            activeDomains={activeDomains}
            activeMissingInformation={activeMissingInformation}
            activeStepIndex={activeStepIndex}
            copy={copy}
            executionMessages={executionMessages}
            highestPriority={highestPriority}
            isRunning={isRunning}
            lang={lang}
            onRun={startMockRun}
            onSelectPrompt={handleSelectPrompt}
            onTabChange={setActiveMobileTab}
            prompts={prompts}
            response={response}
            reviewChips={reviewChips}
            runCount={runCount}
            selectedPrompt={selectedPrompt}
            selectedPromptId={selectedPromptId}
            steps={agentRuns[selectedPromptId]}
          />

          <section className="hidden gap-5 lg:grid lg:grid-cols-[250px_minmax(760px,1.35fr)_390px]">
            <AgentCommandCenter prompts={prompts} selectedPromptId={selectedPromptId} lang={lang} copy={copy} onSelect={handleSelectPrompt} profile={selectedProfile} />
            <AgentRunStepper profile={selectedProfile} lang={lang} copy={copy} runCount={runCount} onRun={startMockRun} isRunning={isRunning} activeStepIndex={activeStepIndex} executionMessages={executionMessages} />
            <AgentResultPanel profile={selectedProfile} lang={lang} copy={copy} />
          </section>

          <section className="hidden rounded-[1.75rem] border border-[#e0d8ca] bg-white p-4 shadow-[0_18px_50px_rgba(40,35,28,0.07)] lg:block">
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
              {activeTab === "missing" && <MissingInformationPanel items={activeMissingInformation} lang={lang} copy={copy} embedded />}
              {activeTab === "approval" && <HumanApprovalPanel selectedPromptId={selectedPromptId} lang={lang} copy={copy} embedded />}
              {activeTab === "audit" && <AuditLogTable lang={lang} copy={copy} embedded />}
            </div>
          </section>
        </main>
      </div>
    </AppShell>
  );
}

type MobileExecutiveWorkflowProps = {
  activeTab: MobileTabId;
  activeApprovalItems: ApprovalItem[];
  activeDataRooms: DataRoomSource[];
  activeDomains: Domain[];
  activeMissingInformation: MissingInformationItem[];
  activeStepIndex: number;
  copy: Record<string, string>;
  executionMessages: string[];
  highestPriority: Priority;
  isRunning: boolean;
  lang: Lang;
  onRun: () => void;
  onSelectPrompt: (id: PromptId) => void;
  onTabChange: (tab: MobileTabId) => void;
  prompts: Prompt[];
  response: AgentResponse;
  reviewChips: string[];
  runCount: number;
  selectedPrompt: Prompt;
  selectedPromptId: PromptId;
  steps: AgentRunStep[];
};

function MobileExecutiveWorkflow({
  activeTab,
  activeApprovalItems,
  activeDataRooms,
  activeDomains,
  activeMissingInformation,
  activeStepIndex,
  copy,
  executionMessages,
  highestPriority,
  isRunning,
  lang,
  onRun,
  onSelectPrompt,
  onTabChange,
  prompts,
  response,
  reviewChips,
  runCount,
  selectedPrompt,
  selectedPromptId,
  steps,
}: MobileExecutiveWorkflowProps) {
  const runId = `#FO-RUN-${String(18 + runCount).padStart(3, "0")}`;
  const mobileTabs: Array<{ id: MobileTabId; label: string; eyebrow: string }> = [
    { id: "profile", label: copy.mobileProfileTab, eyebrow: "01" },
    { id: "followUp", label: copy.mobileFollowUpTab, eyebrow: "02" },
    { id: "routing", label: copy.mobileRoutingTab, eyebrow: "03" },
  ];

  return (
    <section className="lg:hidden">
      <div className="space-y-4 pb-24">
        <section className="overflow-hidden rounded-[1.75rem] border border-[#ded6c8] bg-white shadow-[0_22px_60px_rgba(40,35,28,0.11)]">
          <div className="bg-[linear-gradient(135deg,#fffdf8_0%,#f7efe0_52%,#eef7f3_100%)] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9a7b45]">{copy.clientFollowUpCard}</p>
                <h2 className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-tight text-[#182230]">{response.title[lang]}</h2>
                <p className="mt-1 text-sm font-semibold text-[#7a5f2e]">{response.briefId}</p>
              </div>
              <span className="shrink-0 rounded-full border border-[#d8bd80] bg-white/80 px-3 py-1.5 text-xs font-bold text-[#7a5f2e] shadow-sm">{copy[highestPriority.toLowerCase()]}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#3f4a5a]">{response.executiveSummary[lang]}</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <MobileMetric label={copy.memoStatus} value={response.memoStatus[lang]} />
              <MobileMetric label={copy.executionStatus} value={isRunning ? copy.agentRunning : copy.runCompletedShort} />
            </div>
            <button disabled={isRunning} onClick={onRun} className="mt-5 w-full rounded-full bg-[#1f6b5a] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(31,107,90,0.24)] transition hover:bg-[#195748] disabled:cursor-not-allowed disabled:bg-[#88a99f]">
              {isRunning ? copy.agentRunning : copy.runAgent}
            </button>
          </div>
          <div className="border-t border-[#eee8dc] bg-[#fbfaf6] px-5 py-3">
            <div className="flex flex-wrap gap-2">
              {executionMessages.map((message, index) => {
                const active = isRunning ? index === activeStepIndex : index === executionMessages.length - 1;
                return (
                  <span key={message} className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${active ? "bg-[#e8f6ef] text-[#176145] ring-1 ring-[#bfe4d1]" : "bg-white text-[#667085] ring-1 ring-[#ece6dc]"}`}>
                    {message}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        <div className="rounded-[1.35rem] border border-[#e0d8ca] bg-white p-1.5 shadow-[0_12px_34px_rgba(40,35,28,0.07)]">
          <div className="grid grid-cols-3 gap-1">
            {mobileTabs.map((tab) => (
              <button key={tab.id} onClick={() => onTabChange(tab.id)} className={`rounded-[1rem] px-2 py-2.5 text-center transition ${activeTab === tab.id ? "bg-[#182230] text-white shadow-sm" : "text-[#667085] hover:bg-[#f6f4ef]"}`}>
                <span className="block text-[10px] font-bold opacity-60">{tab.eyebrow}</span>
                <span className="mt-0.5 block text-xs font-bold leading-tight">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {activeTab === "profile" && <MobileProfileTab activeDataRooms={activeDataRooms} activeDomains={activeDomains} copy={copy} lang={lang} onSelectPrompt={onSelectPrompt} prompts={prompts} selectedPrompt={selectedPrompt} selectedPromptId={selectedPromptId} />}
        {activeTab === "followUp" && <MobileFollowUpTab activeMissingInformation={activeMissingInformation} copy={copy} lang={lang} response={response} reviewChips={reviewChips} selectedPrompt={selectedPrompt} />}
        {activeTab === "routing" && <MobileRoutingTab activeApprovalItems={activeApprovalItems} copy={copy} lang={lang} runId={runId} steps={steps} />}

        <section className="rounded-[1.35rem] border border-[#e7dfd2] bg-white/70 p-4 text-xs leading-5 text-[#7b8491] shadow-[0_10px_26px_rgba(40,35,28,0.04)]">
          <div className="font-semibold text-[#536071]">{copy.safetyTitle}</div>
          <p className="mt-1">{copy.safetyText}</p>
          <p className="mt-2">{response.disclaimer?.[lang]}</p>
        </section>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e5ded1] bg-white/90 px-5 py-3 shadow-[0_-18px_40px_rgba(40,35,28,0.1)] backdrop-blur-xl">
        <button disabled={isRunning} onClick={onRun} className="flex w-full items-center justify-center gap-2 rounded-full bg-[#182230] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(24,34,48,0.22)] disabled:cursor-not-allowed disabled:bg-[#8a94a3]">
          <span>{isRunning ? copy.agentRunning : copy.runAgent}</span>
          <span className="rounded-full bg-white/15 px-2 py-0.5 text-[11px]">{runId}</span>
        </button>
      </div>
    </section>
  );
}

function MobileProfileTab({ activeDataRooms, activeDomains, copy, lang, onSelectPrompt, prompts, selectedPrompt, selectedPromptId }: { activeDataRooms: DataRoomSource[]; activeDomains: Domain[]; copy: Record<string, string>; lang: Lang; onSelectPrompt: (id: PromptId) => void; prompts: Prompt[]; selectedPrompt: Prompt; selectedPromptId: PromptId }) {
  return (
    <div className="space-y-3">
      <section className="rounded-[1.5rem] border border-[#e0d8ca] bg-white p-4 shadow-[0_14px_38px_rgba(40,35,28,0.07)]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9a7b45]">{copy.scenarioSelector}</p>
            <h3 className="mt-1 text-lg font-semibold text-[#182230]">{selectedPrompt.label[lang]}</h3>
          </div>
          <span className="rounded-full bg-[#fff8e8] px-3 py-1 text-xs font-bold text-[#7a5f2e]">{selectedPrompt.riskCount} {copy.riskQueueCount}</span>
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {prompts.map((prompt) => (
            <button key={prompt.id} onClick={() => onSelectPrompt(prompt.id)} className={`shrink-0 rounded-full px-3 py-2 text-xs font-semibold transition ${prompt.id === selectedPromptId ? "bg-[#182230] text-white" : "bg-[#f6f4ef] text-[#536071]"}`}>
              {prompt.label[lang]}
            </button>
          ))}
        </div>
      </section>

      <div className="grid gap-3 sm:grid-cols-2">
        <MobileSummaryCard label={copy.domain} value={selectedPrompt.domain[lang]} detail={selectedPrompt.description[lang]} />
        <MobileSummaryCard label={copy.review} value={selectedPrompt.review[lang]} detail={copy.professionalReviewRequired} />
        <MobileSummaryCard label={copy.dataRoom} value={`${activeDataRooms.length} ${copy.sources}`} detail={activeDataRooms.slice(0, 2).map((source) => source.name[lang]).join(" · ")} />
        <MobileSummaryCard label={copy.activeDomains} value={`${activeDomains.length}`} detail={activeDomains.map((domain) => domain.name[lang]).join(" · ")} />
      </div>
    </div>
  );
}

function MobileFollowUpTab({ activeMissingInformation, copy, lang, response, reviewChips, selectedPrompt }: { activeMissingInformation: MissingInformationItem[]; copy: Record<string, string>; lang: Lang; response: AgentResponse; reviewChips: string[]; selectedPrompt: Prompt }) {
  const memoSections = response.sections.filter((section) => ["findings", "actions", "agenda", "materials", "priority", "nextSteps"].includes(section.key));

  return (
    <div className="space-y-3">
      <section className="rounded-[1.5rem] border border-[#e0d8ca] bg-white p-4 shadow-[0_14px_38px_rgba(40,35,28,0.07)]">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9a7b45]">{copy.generatedDeliverable}</p>
        <h3 className="mt-2 text-xl font-semibold text-[#182230]">{copy.generatedBrief} {response.briefId}</h3>
        <p className="mt-2 text-sm leading-6 text-[#3f4a5a]">{response.executiveSummary[lang]}</p>
        <div className="mt-4 grid gap-2 text-sm">
          <MobileMetaRow label={copy.preparedFor} value={response.preparedFor[lang]} />
          <MobileMetaRow label={copy.preparedBy} value={response.preparedBy[lang]} />
          <MobileMetaRow label={copy.memoStatus} value={response.memoStatus[lang]} />
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-[#e0d8ca] bg-white p-4 shadow-[0_14px_38px_rgba(40,35,28,0.07)]">
        <div className="mb-3 flex items-center justify-between gap-2">
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#8a6f3d]">{copy.mobileMemo}</h3>
          <span className="rounded-full bg-[#f6f4ef] px-2.5 py-1 text-xs font-semibold text-[#667085]">{copy.professionalDraft}</span>
        </div>
        <div className="space-y-4">
          {memoSections.map((section, index) => <MobileMemoSection key={`${section.key}-${section.heading.en}-${index}`} lang={lang} section={section} />)}
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-[#e0d8ca] bg-white p-4 shadow-[0_14px_38px_rgba(40,35,28,0.07)]">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#8a6f3d]">{copy.missingInfo}</h3>
          <span className="rounded-full bg-[#fff8e8] px-2.5 py-1 text-xs font-bold text-[#7a5f2e]">{activeMissingInformation.length}</span>
        </div>
        <div className="mt-3 space-y-2">
          {activeMissingInformation.map((item) => (
            <div key={item.item.en} className="rounded-2xl border border-[#eee8dc] bg-[#fffdf8] p-3">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold leading-5 text-[#182230]">{item.item[lang]}</p>
                <span className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-bold ${priorityStyles[item.priority]}`}>{copy[item.priority.toLowerCase()]}</span>
              </div>
              <p className="mt-2 text-xs text-[#667085]">{copy.owner}: {item.owner[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-[#e0d8ca] bg-white p-4 shadow-[0_14px_38px_rgba(40,35,28,0.07)]">
        <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#8a6f3d]">{copy.mobileInternalRouting}</h3>
        <p className="mt-2 text-sm leading-6 text-[#3f4a5a]">{selectedPrompt.runSummary[lang]}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {reviewChips.map((chip) => <span key={chip} className="rounded-full border border-[#d8bd80] bg-[#fff8e8] px-3 py-1 text-xs font-semibold text-[#7a5f2e]">{chip}</span>)}
        </div>
      </section>
    </div>
  );
}

function MobileRoutingTab({ activeApprovalItems, copy, lang, runId, steps }: { activeApprovalItems: ApprovalItem[]; copy: Record<string, string>; lang: Lang; runId: string; steps: AgentRunStep[] }) {
  return (
    <div className="space-y-3">
      <section className="rounded-[1.5rem] border border-[#e0d8ca] bg-white p-4 shadow-[0_14px_38px_rgba(40,35,28,0.07)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9a7b45]">{copy.approvalTab}</p>
            <h3 className="mt-1 text-xl font-semibold text-[#182230]">{copy.advisorSequence}</h3>
          </div>
          <span className="rounded-full bg-[#eef7f3] px-3 py-1 text-xs font-bold text-[#1f6b5a]">{runId}</span>
        </div>
        <div className="mt-5 space-y-3">
          {activeApprovalItems.map((item, index) => (
            <div key={item.category.en} className="relative grid grid-cols-[34px_minmax(0,1fr)] gap-3 pb-1">
              {index < activeApprovalItems.length - 1 && <div className="absolute left-[16px] top-9 h-[calc(100%-1.25rem)] w-px bg-[#e4ded2]" />}
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#f4ead3] text-xs font-bold text-[#8a6f3d] ring-4 ring-white">{index + 1}</div>
              <div className="rounded-2xl border border-[#eee8dc] bg-[#fffdf8] p-3">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-semibold text-[#182230]">{item.category[lang]}</h4>
                  <span className="rounded-full bg-white px-2 py-1 text-[10px] font-bold text-[#667085] ring-1 ring-[#e7dfd2]">{item.pending}</span>
                </div>
                <p className="mt-1 text-xs leading-5 text-[#667085]">{item.status[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-[#e0d8ca] bg-white p-4 shadow-[0_14px_38px_rgba(40,35,28,0.07)]">
        <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#8a6f3d]">{copy.workflowTitle}</h3>
        <div className="mt-3 space-y-2">
          {steps.map((step, index) => (
            <div key={`${step.name.en}-${index}`} className="rounded-2xl border border-[#eee8dc] bg-[#fbfaf6] p-3">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm font-semibold text-[#182230]">{step.name[lang]}</h4>
                <span className="text-xs font-bold text-[#8a6f3d]">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-1 text-xs leading-5 text-[#667085]">{step.detail[lang]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const priorityRank: Record<Priority, number> = { High: 3, Medium: 2, Low: 1 };
const priorityStyles: Record<Priority, string> = {
  High: "bg-[#fef3f2] text-[#b42318]",
  Medium: "bg-[#fff8e8] text-[#7a5f2e]",
  Low: "bg-[#eef7f3] text-[#1f6b5a]",
};

function getHighestPriority(items: MissingInformationItem[]): Priority {
  return items.reduce<Priority>((highest, item) => (priorityRank[item.priority] > priorityRank[highest] ? item.priority : highest), "Low");
}

function MobileMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/70 p-3 shadow-sm">
      <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#9a7b45]">{label}</div>
      <div className="mt-1 text-sm font-semibold text-[#182230]">{value}</div>
    </div>
  );
}

function MobileSummaryCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <section className="rounded-[1.35rem] border border-[#e0d8ca] bg-white p-4 shadow-[0_12px_32px_rgba(40,35,28,0.06)]">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9a7b45]">{label}</p>
      <h3 className="mt-2 text-base font-semibold text-[#182230]">{value}</h3>
      <p className="mt-2 text-xs leading-5 text-[#667085]">{detail}</p>
    </section>
  );
}

function MobileMetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-2xl bg-[#fbfaf6] px-3 py-2">
      <span className="text-xs font-semibold text-[#8a6f3d]">{label}</span>
      <span className="text-right text-xs font-semibold text-[#182230]">{value}</span>
    </div>
  );
}

function MobileMemoSection({ lang, section }: { lang: Lang; section: AgentResponseSection }) {
  const content = section.items[lang].slice(0, 4);

  return (
    <section className="border-b border-[#eee8dc] pb-4 last:border-b-0 last:pb-0">
      <h4 className="text-sm font-semibold text-[#182230]">{section.heading[lang]}</h4>
      {section.ordered ? (
        <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm leading-6 text-[#536071]">
          {content.map((item) => <li key={item}>{item}</li>)}
        </ol>
      ) : (
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[#536071]">
          {content.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
    </section>
  );
}
