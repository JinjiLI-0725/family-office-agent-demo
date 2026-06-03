"use client";

import { useMemo, useState } from "react";
import {
  agentResponses,
  agentRuns,
  auditLogs,
  dataRooms,
  missingInformation,
  prompts,
  type Lang,
  type PromptId,
  type StepStatus,
  uiCopy,
} from "@/data/familyOfficeAgentMock";
import { AppShell } from "./AppShell";
import { AuditLogTable } from "./AuditLogTable";
import { DataRoomPanel } from "./DataRoomPanel";
import { HumanApprovalPanel } from "./HumanApprovalPanel";
import { MissingInformationPanel } from "./MissingInformationPanel";

type TabId = "data" | "missing" | "approval" | "audit";

const reviewChipKeys: Record<
  PromptId,
  Array<"physicianReview" | "legalReview" | "taxReview" | "investmentReview" | "familyPrincipalReview">
> = {
  health: ["physicianReview", "familyPrincipalReview"],
  trust: ["legalReview", "taxReview", "investmentReview", "familyPrincipalReview"],
  meeting: ["physicianReview", "legalReview", "familyPrincipalReview"],
  weekly: ["physicianReview", "legalReview", "taxReview", "investmentReview", "familyPrincipalReview"],
};

const statusLabel: Record<Lang, Record<StepStatus, string>> = {
  en: { Completed: "Done", "In Review": "Review", "Needs Human Approval": "Approval" },
  zh: { Completed: "完成", "In Review": "复核", "Needs Human Approval": "确认" },
};

const statusClass: Record<StepStatus, string> = {
  Completed: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  "In Review": "bg-blue-50 text-blue-700 ring-blue-100",
  "Needs Human Approval": "bg-violet-50 text-violet-700 ring-violet-100",
};

export function FamilyOfficeAgentPage() {
  const [selectedPromptId, setSelectedPromptId] = useState<PromptId>("health");
  const [lang, setLang] = useState<Lang>("zh");
  const [runCount, setRunCount] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(5);
  const [activeTab, setActiveTab] = useState<TabId>("data");

  const copy = uiCopy[lang];
  const selectedPrompt = useMemo(
    () => prompts.find((prompt) => prompt.id === selectedPromptId) ?? prompts[0],
    [selectedPromptId],
  );
  const response = agentResponses[selectedPromptId];
  const steps = agentRuns[selectedPromptId];
  const reviewChips = reviewChipKeys[selectedPromptId].map((key) => copy[key]);
  const runId = `#FO-RUN-${String(18 + runCount).padStart(3, "0")}`;
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

    [1, 2, 3, 4, 5].forEach((step, index) => {
      window.setTimeout(() => setActiveStepIndex(step), (index + 1) * 360);
    });

    window.setTimeout(() => {
      setIsRunning(false);
      setActiveStepIndex(5);
    }, 2300);
  };

  const handleSelectPrompt = (promptId: PromptId) => {
    setSelectedPromptId(promptId);
    setActiveStepIndex(5);
    setRunCount((count) => count + 1);
  };

  const commandTitle =
    lang === "zh" ? "你希望家族办公室 Agent 做什么？" : "What should the Family Office Agent do?";

  const commandSubtitle =
    lang === "zh"
      ? "输入任务，Agent 自动检索资料、识别缺口、生成复核简报。"
      : "Give the Agent a task. It retrieves context, identifies gaps, and generates a review-ready brief.";

  const briefSections = response.sections.filter((section) =>
    ["findings", "actions", "nextSteps", "agenda"].includes(section.key),
  );

  return (
    <AppShell>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eef6ff_0,#f7f8fb_34%,#f4f4f1_100%)] text-slate-900">
        <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-lg shadow-slate-300/60">
                FO
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-semibold tracking-tight">{copy.product}</h1>
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
                    {copy.executiveDemo}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{copy.commandCenter}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="rounded-full bg-slate-100 p-1 ring-1 ring-slate-200">
                {(["en", "zh"] as Lang[]).map((item) => (
                  <button
                    key={item}
                    onClick={() => setLang(item)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                      lang === item ? "bg-slate-950 text-white shadow-sm" : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {item === "en" ? "EN" : "中文"}
                  </button>
                ))}
              </div>
              <span className="hidden rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100 sm:inline-flex">
                {copy.mockDataOnly}
              </span>
              <span className="hidden rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200 sm:inline-flex">
                {copy.noBackendConnected}
              </span>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1440px] space-y-5 px-6 py-6">
          <section className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_360px]">
              <div>
                <div className="mb-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-blue-600">
                    {copy.agentWorkspace}
                  </p>
                  <h2 className="text-4xl font-semibold tracking-tight text-slate-950">{commandTitle}</h2>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{commandSubtitle}</p>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/70 p-4">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <div className="min-w-0 flex-1 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {copy.selectedTask}
                      </p>
                      <p className="text-base font-medium leading-7 text-slate-900">{selectedPrompt.command[lang]}</p>
                    </div>
                    <button
                      disabled={isRunning}
                      onClick={startMockRun}
                      className="rounded-2xl bg-slate-950 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-slate-300/70 transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
                    >
                      {isRunning ? copy.agentRunning : copy.runAgent}
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {prompts.map((prompt) => {
                      const active = prompt.id === selectedPromptId;
                      return (
                        <button
                          key={prompt.id}
                          onClick={() => handleSelectPrompt(prompt.id)}
                          className={`group rounded-2xl px-4 py-3 text-left transition ${
                            active
                              ? "bg-slate-950 text-white shadow-lg shadow-slate-300/60"
                              : "bg-white text-slate-700 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:ring-blue-200"
                          }`}
                        >
                          <div className="text-sm font-semibold">{prompt.label[lang]}</div>
                          <div className={`mt-1 text-xs ${active ? "text-slate-300" : "text-slate-500"}`}>
                            {copy.riskQueue}: {prompt.riskCount} · {prompt.review[lang]}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-300/70">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
                      {copy.executionStatus}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">{runId}</h3>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-emerald-200 ring-1 ring-white/15">
                    {isRunning ? copy.agentRunning : copy.runCompletedShort}
                  </span>
                </div>

                <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-400 via-emerald-300 to-violet-300 transition-all duration-500"
                    style={{ width: `${((activeStepIndex + 1) / steps.length) * 100}%` }}
                  />
                </div>

                <div className="mt-5 space-y-2">
                  {executionMessages.map((message, index) => (
                    <div
                      key={message}
                      className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${
                        isRunning && index === Math.min(activeStepIndex, executionMessages.length - 1)
                          ? "bg-white/15 text-white"
                          : "text-slate-300"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      {message}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-white/8 p-4 ring-1 ring-white/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {copy.runSummary}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{selectedPrompt.runSummary[lang]}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
            <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.07)]">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                    {copy.workflowTitle}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">{copy.workflowSubtitle}</h3>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                  {copy.runCompleted}
                </span>
              </div>

              <div className="space-y-3">
                {steps.map((step, index) => {
                  const highlighted = index <= activeStepIndex;
                  return (
                    <div
                      key={`${step.name.en}-${index}`}
                      className={`grid gap-4 rounded-2xl border p-4 transition md:grid-cols-[42px_minmax(0,1fr)_auto] md:items-center ${
                        highlighted
                          ? "border-blue-100 bg-gradient-to-r from-blue-50/80 to-white"
                          : "border-slate-200 bg-white opacity-65"
                      }`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-700 shadow-sm ring-1 ring-blue-100">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-950">{step.name[lang]}</h4>
                        <p className="mt-1 text-sm text-slate-500">{step.detail[lang]}</p>
                        <p className="mt-1 text-xs font-semibold text-blue-700">{step.metadata[lang]}</p>
                      </div>
                      <span className={`w-fit rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${statusClass[step.status]}`}>
                        {statusLabel[lang][step.status]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/80 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <div className="border-b border-slate-200 pb-5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                  {copy.generatedBrief}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                  {copy.generatedBrief} {response.briefId}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{response.title[lang]}</p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <BriefMeta label={copy.preparedFor} value={response.preparedFor[lang]} />
                <BriefMeta label={copy.preparedBy} value={response.preparedBy[lang]} />
                <BriefMeta label={copy.review} value={response.memoReview[lang]} />
                <BriefMeta label={copy.memoStatus} value={response.memoStatus[lang]} />
              </div>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  {copy.executiveSummary}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{response.executiveSummary[lang]}</p>
              </div>

              {briefSections.slice(0, 2).map((section) => (
                <div key={section.key} className="mt-5">
                  <h4 className="mb-2 text-sm font-semibold text-slate-950">{section.heading[lang]}</h4>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600">
                    {section.items[lang].slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="mt-5 flex flex-wrap gap-2">
                {reviewChips.map((chip) => (
                  <span key={chip} className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 ring-1 ring-violet-100">
                    {chip}
                  </span>
                ))}
              </div>

              <p className="mt-5 rounded-2xl bg-slate-50 p-3 text-xs leading-5 text-slate-500">
                {response.disclaimer?.[lang]}
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/80 bg-white/85 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.07)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
              <div className="flex flex-wrap gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeTab === tab.id
                        ? "bg-slate-950 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tab.label}
                    <span className="ml-1 opacity-70">{tab.count}</span>
                  </button>
                ))}
              </div>
              <p className="text-sm text-slate-500">{copy.safetyText}</p>
            </div>
            <div className="pt-4">
              {activeTab === "data" && (
                <DataRoomPanel sources={dataRooms} selectedPromptId={selectedPromptId} lang={lang} copy={copy} embedded />
              )}
              {activeTab === "missing" && (
                <MissingInformationPanel items={missingInformation[selectedPromptId]} lang={lang} copy={copy} embedded />
              )}
              {activeTab === "approval" && (
                <HumanApprovalPanel selectedPromptId={selectedPromptId} lang={lang} copy={copy} embedded />
              )}
              {activeTab === "audit" && <AuditLogTable lang={lang} copy={copy} embedded />}
            </div>
          </section>
        </main>
      </div>
    </AppShell>
  );
}

function BriefMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{label}</div>
      <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
    </div>
  );
}
