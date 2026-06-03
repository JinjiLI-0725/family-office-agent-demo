export type Lang = "en" | "zh";
export type PromptId = "health" | "trust" | "meeting" | "weekly";
export type StepStatus = "Completed" | "In Review" | "Needs Human Approval";
export type Priority = "High" | "Medium" | "Low";

type Localized = Record<Lang, string>;

export type Domain = {
  id: string;
  name: Localized;
  manages: Localized;
  agentCanDo: Localized;
  riskCount: number;
};

export type Prompt = {
  id: PromptId;
  label: Localized;
  command: Localized;
  domain: Localized;
  description: Localized;
  review: Localized;
  runSummary: Localized;
  riskCount: number;
  activeDomainIds: string[];
};

export type AgentRunStep = {
  name: Localized;
  status: StepStatus;
  detail: Localized;
  metadata: Localized;
};

export type AgentResponseSection = {
  key: "retrieved" | "findings" | "actions" | "agenda" | "materials" | "priority" | "nextSteps";
  heading: Localized;
  items: Record<Lang, string[]>;
  ordered?: boolean;
  priority?: "high" | "medium" | "low";
};

export type AgentResponse = {
  title: Localized;
  briefId: string;
  preparedFor: Localized;
  preparedBy: Localized;
  memoReview: Localized;
  memoStatus: Localized;
  executiveSummary: Localized;
  reviewRequired: Localized;
  disclaimer?: Localized;
  sections: AgentResponseSection[];
};

export type DataRoomSource = {
  name: Localized;
  count: Localized;
  sensitivity: Record<Lang, "Standard" | "Confidential" | "Sensitive" | "Highly Sensitive" | "标准" | "机密" | "敏感" | "高度敏感">;
  lastUpdated: Localized;
  access: Localized;
  promptIds: PromptId[];
};

export type MissingInformationItem = {
  item: Localized;
  priority: Priority;
  owner: Localized;
};

export type ApprovalItem = {
  category: Localized;
  pending: number;
  status: Localized;
  promptIds: PromptId[];
};

export type AuditLog = {
  user: Localized;
  role: Localized;
  resource: Localized;
  sensitivity: Localized;
  time: Localized;
  action: Localized;
};

export type RoutingStatus = "Queued" | "Review Required" | "Ready for Meeting";

export type ClientFollowUpProfile = {
  id: PromptId;
  clientSource: Localized;
  clientType: Localized;
  mainAdvisoryNeed: Localized;
  insuranceSignal: Localized;
  familyContext: Localized;
  priority: Localized;
  missingInformation: Localized[];
  internalRouting: Localized;
  nextAction: Localized;
  routingChain: Array<{ role: Localized; status: RoutingStatus; note: Localized }>;
};

export const uiCopy = {
  en: {
    product: "Family Office AI Agent",
    tagline: "Family Office Agent Command Center",
    thesis: "This is not a document dashboard. This is an executable Family Office AI Agent that processes family office tasks.",
    headerSubtitle: "Classify tasks, retrieve private context, flag risks, and generate advisor-ready materials.",
    executiveDemo: "Executive Demo",
    mockData: "Mock Data",
    noBackend: "No Backend Connected",
    pendingReviews: "Pending Review Items: 9",
    commandCenter: "Agent Command Center",
    mainValue: "This Agent can execute a family office task and generate a professional brief.",
    scenarioTitle: "Scenario title",
    riskQueueCount: "Risk Queue",
    reviewRequiredStatus: "Review Required",
    agentRunning: "Agent running...",
    runCompletedShort: "Run completed",
    executionStatus: "Execution status",
    classifyingRequest: "Classifying request...",
    scanningRecords: "Scanning records...",
    checkingMissing: "Checking missing information...",
    briefGenerated: "Brief generated.",
    preparedFor: "Prepared for",
    preparedBy: "Prepared by",
    memoStatus: "Status",
    draftForReview: "Draft for Professional Review",
    scenarioSelector: "Executive Workflows",
    scenarioLibrary: "Scenario Library",
    agentWorkspace: "Agent Workspace",
    outputReview: "Output & Review",
    generatedBrief: "Generated Brief",
    mockDataOnly: "Mock Data Only",
    noBackendConnected: "No Backend Connected",
    runSummary: "Agent reasoning summary",
    dataRoomTab: "Data Room Context",
    missingTab: "Missing Information",
    auditTab: "Audit Log",
    approvalTab: "Approval Routing",
    viewFullBrief: "View full brief",
    physicianReview: "Physician Review",
    legalReview: "Legal Review",
    taxReview: "Tax Review",
    investmentReview: "Investment Review",
    familyPrincipalReview: "Principal Review",
    premiumThesis: "This is a premium workflow Agent, not a dashboard.",
    scenarioSubtitle: "Select a family office task for the Agent to run.",
    domain: "Domain",
    riskCount: "Risk count",
    review: "Review",
    agentTaskRunner: "Agent Task Runner",
    selectedTask: "Selected task",
    runAgent: "Run Agent",
    runReady: "Agent ready",
    safetyTitle: "Safety boundary",
    safetyText: "Mock data only · Supporting material only · Professional review required",
    workflowTitle: "Agent Run Trace",
    workflowSubtitle: "Live-style execution trace for the selected task",
    runCompleted: "Agent analysis completed",
    generatedDeliverable: "Generated Deliverable",
    professionalDraft: "Executive brief draft",
    executiveSummary: "Executive Summary",
    professionalReviewRequired: "Professional Review Required",
    disclaimer: "Disclaimer",
    contextApproval: "Context & Approval Stack",
    dataRoom: "Data Room Context",
    retrievedRecords: "Retrieved mock records",
    sources: "sources",
    access: "Access",
    missingInfo: "Missing Information",
    exceptionsFound: "Agent exceptions found",
    owner: "Owner",
    approvals: "Human Approval Required",
    approvalSubtitle: "Professional review routing for this workflow.",
    generateBrief: "Generate Review Brief",
    activeDomains: "Activated Domains",
    riskQueue: "Risk Queue",
    familyCoverage: "Family member coverage",
    auditLog: "Audit Log",
    auditSubtitle: "Compact role-based access trail",
    user: "User",
    role: "Role",
    resource: "Resource",
    sensitivity: "Sensitivity",
    time: "Time",
    action: "Action",
    standard: "Standard",
    confidential: "Confidential",
    sensitive: "Sensitive",
    highlySensitive: "Highly Sensitive",
    clientProfileInput: "Client Profile Input",
    clientProfile: "Client Profile",
    clientFollowUpCard: "Client Follow-up Card",
    clientSource: "Client Source",
    clientType: "Client Type",
    mainAdvisoryNeed: "Main Advisory Need",
    insuranceSignal: "Insurance-related Signal",
    familyContext: "Family Context",
    followUpPriority: "Follow-up Priority",
    missingInformationLabel: "Missing Information",
    recommendedInternalRouting: "Recommended Internal Routing",
    nextAction: "Next Action",
    advisorRouting: "Advisor Routing",
    internalReview: "Internal Review",
    noInsuranceQuote: "No insurance quote generated",
    activityStrip: "Agent Activity",
    analyzingClientProfile: "Analyzing client profile",
    checkingMissingInfo: "Checking missing info",
    generatingFollowUpCard: "Generating follow-up card",
    routingToAdvisors: "Routing to advisors",
    queued: "Queued",
    reviewRequired: "Review Required",
    readyForMeeting: "Ready for Meeting",
    cardSubtitle: "Internal executive memo for advisor coordination",
    executiveMemoLabel: "Executive Memo",
    high: "High",
    medium: "Medium",
    low: "Low",
  },
  zh: {
    product: "家族办公室 AI Agent",
    tagline: "家族办公室 Agent 指挥中心",
    thesis: "这不是一个静态资料库，而是一个可以执行家族办公室任务的 AI Agent。",
    headerSubtitle: "识别任务、检索私有上下文、提示风险，并生成顾问复核材料。",
    executiveDemo: "高管演示",
    mockData: "模拟数据",
    noBackend: "未连接后端",
    pendingReviews: "待复核事项：9",
    commandCenter: "Agent 指挥中心",
    mainValue: "这个 Agent 可以执行家族办公室任务，并生成专业复核材料。",
    scenarioTitle: "场景名称",
    riskQueueCount: "风险队列",
    reviewRequiredStatus: "需要复核",
    agentRunning: "Agent 运行中...",
    runCompletedShort: "运行完成",
    executionStatus: "执行状态",
    classifyingRequest: "正在识别任务...",
    scanningRecords: "正在扫描资料...",
    checkingMissing: "正在检查缺失信息...",
    briefGenerated: "简报已生成。",
    preparedFor: "对象",
    preparedBy: "生成方",
    memoStatus: "状态",
    draftForReview: "专业复核草稿",
    scenarioSelector: "可执行工作流",
    scenarioLibrary: "场景库",
    agentWorkspace: "Agent 工作台",
    outputReview: "输出与复核",
    generatedBrief: "生成简报",
    mockDataOnly: "仅使用模拟数据",
    noBackendConnected: "未连接真实后端",
    runSummary: "Agent 推理摘要",
    dataRoomTab: "资料库上下文",
    missingTab: "缺失资料",
    auditTab: "审计记录",
    approvalTab: "复核流转",
    viewFullBrief: "查看完整简报",
    physicianReview: "医生复核",
    legalReview: "律师复核",
    taxReview: "税务师复核",
    investmentReview: "投资顾问复核",
    familyPrincipalReview: "负责人复核",
    premiumThesis: "这不是一个后台看板，而是一个真正可以执行家族办公室任务的 Agent 工作台。",
    scenarioSubtitle: "选择一个家族办公室任务，由 Agent 执行。",
    domain: "领域",
    riskCount: "风险事项",
    review: "复核",
    agentTaskRunner: "Agent 任务运行器",
    selectedTask: "已选择任务",
    runAgent: "运行 Agent",
    runReady: "Agent 就绪",
    safetyTitle: "安全边界",
    safetyText: "仅使用模拟数据 · 仅作为辅助材料 · 需要专业人士复核",
    workflowTitle: "Agent 执行轨迹",
    workflowSubtitle: "所选任务的流程化执行记录",
    runCompleted: "Agent 分析已完成",
    generatedDeliverable: "生成结果",
    professionalDraft: "高管简报草稿",
    executiveSummary: "执行摘要",
    professionalReviewRequired: "需要专业人士复核",
    disclaimer: "免责声明",
    contextApproval: "数据上下文与复核要求",
    dataRoom: "资料库上下文",
    retrievedRecords: "已检索模拟资料",
    sources: "个来源",
    access: "访问权限",
    missingInfo: "缺失资料",
    exceptionsFound: "Agent 发现的异常事项",
    owner: "负责人",
    approvals: "需要人工确认",
    approvalSubtitle: "该工作流对应的专业复核路径。",
    generateBrief: "生成复核简报",
    activeDomains: "已激活领域",
    riskQueue: "风险队列",
    familyCoverage: "家族成员覆盖",
    auditLog: "审计日志",
    auditSubtitle: "紧凑的角色访问记录",
    user: "用户",
    role: "角色",
    resource: "访问资源",
    sensitivity: "敏感级别",
    time: "时间",
    action: "操作",
    standard: "标准",
    confidential: "机密",
    sensitive: "敏感",
    highlySensitive: "高度敏感",
    clientProfileInput: "客户画像输入",
    clientProfile: "客户画像",
    clientFollowUpCard: "客户跟进卡",
    clientSource: "客户来源",
    clientType: "客户类型",
    mainAdvisoryNeed: "顾问服务需求",
    insuranceSignal: "保险相关信号",
    familyContext: "家族背景",
    followUpPriority: "跟进优先级",
    missingInformationLabel: "缺失信息",
    recommendedInternalRouting: "建议内部流转",
    nextAction: "后续跟进行动",
    advisorRouting: "顾问流转",
    internalReview: "内部复核",
    noInsuranceQuote: "不生成保险报价",
    activityStrip: "Agent 活动",
    analyzingClientProfile: "分析客户画像",
    checkingMissingInfo: "检查缺失信息",
    generatingFollowUpCard: "生成客户跟进卡",
    routingToAdvisors: "流转至顾问",
    queued: "排队中",
    reviewRequired: "需要复核",
    readyForMeeting: "可安排会议",
    cardSubtitle: "用于顾问协同的内部高管备忘卡",
    executiveMemoLabel: "高管备忘",
    high: "高",
    medium: "中",
    low: "低",
  },
} as const;

export const domains: Domain[] = [
  { id: "health", name: { en: "Health & Genetic Risk", zh: "健康与遗传风险" }, manages: { en: "Health checks, family history, genetic risk reports, and physician notes.", zh: "体检报告、家族病史、遗传风险报告和医生备注。" }, agentCanDo: { en: "Organize records and prepare briefs for medical review.", zh: "整理资料，并准备医疗专业人士复核材料。" }, riskCount: 3 },
  { id: "wealth", name: { en: "Wealth & Assets", zh: "财富与资产" }, manages: { en: "Insurance, properties, holdings, operating companies, and asset files.", zh: "保险、房产、股权、运营公司和资产文件。" }, agentCanDo: { en: "Flag document gaps and prepare asset context packs.", zh: "提示文件缺口，并准备资产上下文材料。" }, riskCount: 4 },
  { id: "legal", name: { en: "Legal & Succession", zh: "法律与传承" }, manages: { en: "Trust deeds, wills, succession plans, resolutions, and counsel correspondence.", zh: "信托契约、遗嘱、传承计划、决议和律师沟通记录。" }, agentCanDo: { en: "Create review checklists for legal counsel.", zh: "为律师生成复核清单。" }, riskCount: 2 },
  { id: "tax", name: { en: "Tax & Residency", zh: "税务与居留" }, manages: { en: "Residency calendars, passport data, tax folders, and cross-border reminders.", zh: "居留日历、护照资料、税务文件夹和跨境提醒。" }, agentCanDo: { en: "Prepare supporting materials for tax advisor review.", zh: "准备税务顾问复核辅助材料。" }, riskCount: 1 },
  { id: "education", name: { en: "Education & Next Generation", zh: "教育与下一代发展" }, manages: { en: "Applications, mentorship goals, development plans, and milestones.", zh: "申请材料、导师目标、发展计划和里程碑。" }, agentCanDo: { en: "Track missing materials and summarize next-generation actions.", zh: "追踪缺失材料并总结下一代发展行动。" }, riskCount: 3 },
  { id: "governance", name: { en: "Family Governance", zh: "家族治理" }, manages: { en: "Meeting minutes, family council decisions, charters, and task ownership.", zh: "会议纪要、家族委员会决策、章程和任务归属。" }, agentCanDo: { en: "Generate meeting briefs and task trackers.", zh: "生成会议简报和任务追踪表。" }, riskCount: 2 },
  { id: "privacy", name: { en: "Privacy & Security", zh: "隐私与安全" }, manages: { en: "Access policies, audit logs, data sensitivity, and approval boundaries.", zh: "访问策略、审计日志、数据敏感级别和审批边界。" }, agentCanDo: { en: "Show access trails and mark approval requirements.", zh: "展示访问轨迹并标记复核要求。" }, riskCount: 1 },
  { id: "philanthropy", name: { en: "Philanthropy & Impact", zh: "慈善与影响力" }, manages: { en: "Foundation projects, grants, annual reports, budgets, and impact metrics.", zh: "基金会项目、捐赠、年度报告、预算和影响力指标。" }, agentCanDo: { en: "Flag missing impact reporting data.", zh: "提示影响力报告缺失数据。" }, riskCount: 1 },
];

export const prompts: Prompt[] = [
  { id: "health", label: { en: "Health & Genetic Risk Review", zh: "健康与遗传风险复核" }, domain: { en: "Health / Medical", zh: "健康 / 医疗" }, description: { en: "Review mock health and genetic-risk records and prepare supporting material for physician review.", zh: "复核模拟健康与遗传风险资料，并准备医生复核辅助材料。" }, review: { en: "Physician / Genetic Counselor", zh: "医生 / 遗传咨询师" }, runSummary: { en: "The Agent scanned 31 mock records, identified 3 missing or review-sensitive items, and prepared a physician-review brief.", zh: "Agent 已检索 31 条模拟资料，识别 3 项缺失或需复核事项，并生成医生复核材料。" }, riskCount: 3, command: { en: "Review family health and genetic risk across recent records and prepare supporting materials for physician review.", zh: "复核近期家族健康与遗传风险资料，并准备医生复核辅助材料。" }, activeDomainIds: ["health", "privacy"] },
  { id: "trust", label: { en: "Asset & Trust Document Check", zh: "资产与信托文件检查" }, domain: { en: "Assets / Legal / Tax", zh: "资产 / 法律 / 税务" }, description: { en: "Check trust, insurance, shareholding, and property documents for review windows and gaps.", zh: "检查信托、保险、公司股权和房产文件的复核窗口与缺口。" }, review: { en: "Legal / Tax / Investment Advisors", zh: "律师 / 税务顾问 / 投资顾问" }, runSummary: { en: "The Agent scanned 30 mock records, found 3 document exceptions, and prepared a counsel-ready review checklist.", zh: "Agent 已检索 30 份模拟资料，发现 3 项文件异常，并生成律师复核清单。" }, riskCount: 4, command: { en: "Check asset and trust documents for upcoming review windows, outdated beneficiary records, and missing governance files.", zh: "检查资产与信托文件的复核窗口、过期受益人信息和缺失治理文件。" }, activeDomainIds: ["wealth", "legal", "tax", "privacy"] },
  { id: "meeting", label: { en: "Family Meeting Brief", zh: "家族会议材料准备" }, domain: { en: "Governance / Next Generation", zh: "治理 / 下一代发展" }, description: { en: "Prepare an advisor-ready meeting packet with risks, agenda, materials, and task ownership.", zh: "准备包含风险、议程、材料和任务归属的会议资料包。" }, review: { en: "Family Principal + Advisors", zh: "家族负责人 + 顾问" }, runSummary: { en: "The Agent scanned 46 mock records, organized 5 agenda blocks, and generated meeting materials for principal approval.", zh: "Agent 已检索 46 条模拟资料，整理 5 个会议议程模块，并生成负责人确认材料。" }, riskCount: 6, command: { en: "Prepare next week’s family meeting brief with risk items, agenda, generated materials, and task ownership.", zh: "准备下周家族会议简报，包括风险事项、议程、生成材料和任务归属。" }, activeDomainIds: ["health", "legal", "education", "governance", "philanthropy"] },
  { id: "weekly", label: { en: "Weekly Risk Summary", zh: "本周风险事项总结" }, domain: { en: "Cross-domain Risk", zh: "跨领域风险" }, description: { en: "Summarize this week’s open risk items and route confirmations to professionals.", zh: "总结本周未关闭风险事项，并安排专业人士确认。" }, review: { en: "Multi-advisor Review", zh: "多顾问复核" }, runSummary: { en: "The Agent scanned 58 mock records, prioritized 5 open risk items, and prepared a multi-advisor confirmation plan.", zh: "Agent 已检索 58 条模拟资料，梳理 5 项未关闭风险，并生成多顾问确认计划。" }, riskCount: 5, command: { en: "Summarize this week’s family office risk items and group next steps for professional review.", zh: "总结本周家族办公室风险事项，并整理后续专业复核行动。" }, activeDomainIds: ["health", "legal", "tax", "education", "philanthropy", "privacy"] },
];

export const agentRuns: Record<PromptId, AgentRunStep[]> = {
  health: [
    { name: { en: "Classify request", zh: "识别任务类型" }, status: "Completed", detail: { en: "Detected a medical-record organization task with genetic-risk context and privacy constraints.", zh: "识别为包含遗传风险上下文和隐私约束的医疗资料整理任务。" }, metadata: { en: "2 domains activated", zh: "已激活 2 个领域" } },
    { name: { en: "Retrieve private data room context", zh: "检索私有资料库上下文" }, status: "Completed", detail: { en: "Retrieved health checks, family medical history, genetic testing reports, and physician notes.", zh: "已检索体检报告、家族病史、基因检测报告和医生备注。" }, metadata: { en: "31 records scanned", zh: "已扫描 31 条记录" } },
    { name: { en: "Check missing records", zh: "检查缺失资料" }, status: "Completed", detail: { en: "Compared annual coverage and physician interpretation status across mock records.", zh: "比对年度覆盖情况和医生解读状态。" }, metadata: { en: "2 missing items found", zh: "发现 2 项缺失" } },
    { name: { en: "Generate risk summary", zh: "生成风险摘要" }, status: "In Review", detail: { en: "Prepared non-diagnostic risk flags for communication planning.", zh: "生成非诊断性质的风险提示，用于沟通准备。" }, metadata: { en: "3 risk signals grouped", zh: "归纳 3 类风险信号" } },
    { name: { en: "Prepare advisor-ready brief", zh: "准备顾问复核材料" }, status: "In Review", detail: { en: "Drafted supporting material for physician and genetic counselor review.", zh: "已起草医生和遗传咨询师复核辅助材料。" }, metadata: { en: "Brief draft generated", zh: "简报草稿已生成" } },
    { name: { en: "Require human approval", zh: "等待人工确认" }, status: "Needs Human Approval", detail: { en: "Medical conclusions require physician or genetic counselor review before use.", zh: "所有医学结论在使用前必须由医生或遗传咨询师复核。" }, metadata: { en: "Professional review required", zh: "需要专业人士复核" } },
  ],
  trust: [
    { name: { en: "Classify request", zh: "识别任务类型" }, status: "Completed", detail: { en: "Detected asset, trust, legal, tax, and governance document review requirements.", zh: "识别为资产、信托、法律、税务和治理文件复核任务。" }, metadata: { en: "4 domains activated", zh: "已激活 4 个领域" } },
    { name: { en: "Retrieve private data room context", zh: "检索私有资料库上下文" }, status: "Completed", detail: { en: "Retrieved trust documents, insurance files, shareholding records, and property documents.", zh: "已检索信托、保险、股权和房产文件。" }, metadata: { en: "30 records scanned", zh: "已扫描 30 份资料" } },
    { name: { en: "Check missing records", zh: "检查缺失资料" }, status: "Completed", detail: { en: "Matched beneficiary metadata, review windows, and corporate governance attachments.", zh: "核对受益人信息、复核窗口和公司治理附件。" }, metadata: { en: "3 exceptions found", zh: "发现 3 项异常" } },
    { name: { en: "Generate risk summary", zh: "生成风险摘要" }, status: "Completed", detail: { en: "Flagged maintenance risks without giving legal, tax, or investment advice.", zh: "提示文件维护风险，不提供法律、税务或投资建议。" }, metadata: { en: "90-day review window", zh: "90 天复核窗口" } },
    { name: { en: "Prepare advisor-ready brief", zh: "准备顾问复核材料" }, status: "In Review", detail: { en: "Prepared legal counsel checklist and manager follow-up tasks.", zh: "准备律师复核清单和家办经理跟进任务。" }, metadata: { en: "Counsel packet ready", zh: "律师材料包已准备" } },
    { name: { en: "Require human approval", zh: "等待人工确认" }, status: "Needs Human Approval", detail: { en: "Legal, tax, and investment professionals must review related conclusions.", zh: "相关结论必须由律师、税务顾问和投资顾问复核。" }, metadata: { en: "Advisor sign-off required", zh: "需要顾问确认" } },
  ],
  meeting: [
    { name: { en: "Classify request", zh: "识别任务类型" }, status: "Completed", detail: { en: "Detected cross-domain family governance and meeting-preparation workflow.", zh: "识别为跨领域家族治理与会议材料准备流程。" }, metadata: { en: "5 domains activated", zh: "已激活 5 个领域" } },
    { name: { en: "Retrieve private data room context", zh: "检索私有资料库上下文" }, status: "Completed", detail: { en: "Pulled open risk tasks, governance minutes, education plans, and philanthropy updates.", zh: "已调取风险任务、治理纪要、教育规划和慈善项目更新。" }, metadata: { en: "46 records scanned", zh: "已扫描 46 条记录" } },
    { name: { en: "Check missing records", zh: "检查缺失资料" }, status: "Completed", detail: { en: "Validated meeting inputs and identified incomplete education and impact-report materials.", zh: "校验会议输入，并识别教育和影响力报告缺失材料。" }, metadata: { en: "4 agenda inputs missing", zh: "4 项议程输入缺失" } },
    { name: { en: "Generate risk summary", zh: "生成风险摘要" }, status: "Completed", detail: { en: "Grouped weekly risks into meeting-ready discussion topics.", zh: "将本周风险归纳为可用于会议讨论的议题。" }, metadata: { en: "5 agenda blocks", zh: "5 个议程模块" } },
    { name: { en: "Prepare advisor-ready brief", zh: "准备顾问复核材料" }, status: "Completed", detail: { en: "Generated the meeting brief, decision list, and post-meeting task tracker.", zh: "已生成会议简报、决策清单和会后任务追踪表。" }, metadata: { en: "3 deliverables created", zh: "已生成 3 份材料" } },
    { name: { en: "Require human approval", zh: "等待人工确认" }, status: "Needs Human Approval", detail: { en: "Family principal and relevant advisors approve materials before circulation.", zh: "材料分发前需要家族负责人和相关顾问确认。" }, metadata: { en: "Principal approval required", zh: "需要负责人确认" } },
  ],
  weekly: [
    { name: { en: "Classify request", zh: "识别任务类型" }, status: "Completed", detail: { en: "Detected a weekly cross-domain risk summary request for principal review.", zh: "识别为供负责人复核的本周跨领域风险摘要。" }, metadata: { en: "6 domains activated", zh: "已激活 6 个领域" } },
    { name: { en: "Retrieve private data room context", zh: "检索私有资料库上下文" }, status: "Completed", detail: { en: "Pulled risk tasks from health, legal, tax, education, philanthropy, and audit contexts.", zh: "已从健康、法律、税务、教育、慈善和审计上下文中调取风险任务。" }, metadata: { en: "58 records scanned", zh: "已扫描 58 条记录" } },
    { name: { en: "Check missing records", zh: "检查缺失资料" }, status: "Completed", detail: { en: "Checked passport, visa, application, medical-review, and reporting gaps.", zh: "检查护照、签证、申请、医疗复核和报告缺口。" }, metadata: { en: "5 open items found", zh: "发现 5 项未关闭事项" } },
    { name: { en: "Generate risk summary", zh: "生成风险摘要" }, status: "Completed", detail: { en: "Prioritized issues into high, medium, and low bands for professional follow-up.", zh: "按高、中、低优先级整理事项，便于专业人士跟进。" }, metadata: { en: "2 high priority", zh: "2 项高优先级" } },
    { name: { en: "Prepare advisor-ready brief", zh: "准备顾问复核材料" }, status: "In Review", detail: { en: "Drafted a weekly confirmation schedule and owner map.", zh: "已起草本周确认安排和负责人映射。" }, metadata: { en: "Review plan drafted", zh: "复核计划已起草" } },
    { name: { en: "Require human approval", zh: "等待人工确认" }, status: "Needs Human Approval", detail: { en: "Specialist advisors must confirm medical, legal, tax, and investment implications.", zh: "医疗、法律、税务和投资相关影响必须由专业顾问确认。" }, metadata: { en: "Multi-advisor approval", zh: "多顾问复核" } },
  ],
};

export const agentResponses: Record<PromptId, AgentResponse> = {
  health: {
    title: { en: "Family Health & Genetic Risk Review", zh: "家族健康与遗传风险复核" },
    briefId: "#FO-2026-001",
    preparedFor: { en: "Family Principal", zh: "家族负责人" },
    preparedBy: { en: "Family Office AI Agent", zh: "家族办公室 AI Agent" },
    memoReview: { en: "Physician / Genetic Counselor", zh: "医生 / 遗传咨询师" },
    memoStatus: { en: "Draft for Professional Review", zh: "专业复核草稿" },
    executiveSummary: { en: "The Agent organized recent mock health and genetic-risk materials into a physician-review packet, flagged missing annual coverage, and prepared communication support without drawing medical conclusions.", zh: "Agent 将近期模拟健康与遗传风险资料整理为医生复核材料包，提示年度体检覆盖缺口，并准备沟通辅助材料，不作医学结论。" },
    reviewRequired: { en: "Physician / Genetic Counselor Review", zh: "医生 / 遗传咨询师复核" },
    disclaimer: { en: "This output is for information organization and communication preparation only. It does not constitute medical diagnosis. All medical conclusions must be reviewed by a physician or genetic counselor.", zh: "以下内容仅用于资料整理和沟通准备，不构成医疗诊断。所有医学结论必须由医生或遗传咨询师复核。" },
    sections: [
      { key: "retrieved", heading: { en: "Retrieved Records", zh: "已检索资料" }, items: { en: ["18 health check reports from the last three years", "6 family medical history records", "3 genetic testing reports", "4 private physician notes"], zh: ["已检索近三年体检报告 18 份", "家族病史记录 6 条", "基因检测报告 3 份", "私人医生备注 4 条"] } },
      { key: "findings", heading: { en: "Key Findings", zh: "关键发现" }, items: { en: ["Second-generation family member A is missing a health check report from the last 12 months", "Repeated cardiovascular risk indicators appear in family history records", "One genetic testing report does not include physician interpretation"], zh: ["第二代成员 A 缺少最近 12 个月体检报告", "家族病史中出现重复心血管风险记录", "一份基因检测报告缺少医生解读"] } },
      { key: "actions", heading: { en: "Recommended Actions", zh: "建议行动" }, items: { en: ["Arrange physician review of the family health summary", "Create annual screening reminders for relevant members", "Generate a communication brief for a genetic counselor"], zh: ["建议安排医生复核家族健康摘要", "建议为相关成员建立年度筛查提醒", "建议生成给遗传咨询师的沟通材料"] } },
    ],
  },
  trust: {
    title: { en: "Asset & Trust Document Review", zh: "资产与信托文件复核" },
    briefId: "#FO-2026-002",
    preparedFor: { en: "Family Principal", zh: "家族负责人" },
    preparedBy: { en: "Family Office AI Agent", zh: "家族办公室 AI Agent" },
    memoReview: { en: "Legal / Tax / Investment Advisors", zh: "律师 / 税务顾问 / 投资顾问" },
    memoStatus: { en: "Draft for Professional Review", zh: "专业复核草稿" },
    executiveSummary: { en: "The Agent reviewed mock asset, insurance, property, and trust records to identify document-maintenance risks and prepare a counsel-ready checklist.", zh: "Agent 复核模拟资产、保险、房产和信托资料，识别文件维护风险，并准备律师复核清单。" },
    reviewRequired: { en: "Legal Counsel, Tax Advisor, and Investment Advisor Review", zh: "律师、税务顾问和投资顾问复核" },
    disclaimer: { en: "This output is for document organization and risk flagging only. It does not constitute legal, tax, or investment advice.", zh: "以下内容仅用于文件整理和风险提示，不构成法律、税务或投资建议。" },
    sections: [
      { key: "retrieved", heading: { en: "Retrieved Records", zh: "已检索资料" }, items: { en: ["5 trust documents", "11 insurance documents", "8 company shareholding records", "6 property documents"], zh: ["已检索信托文件 5 份", "保险文件 11 份", "公司股权文件 8 份", "房产文件 6 份"] } },
      { key: "findings", heading: { en: "Key Findings", zh: "关键发现" }, items: { en: ["One trust document enters its review window within 90 days", "Two insurance beneficiary records are outdated", "One company shareholding file is missing the latest board resolution"], zh: ["一份信托文件将在 90 天内进入复核窗口", "两份保险受益人信息未更新", "一份公司股权文件缺少最新董事会决议"] } },
      { key: "actions", heading: { en: "Recommended Actions", zh: "建议行动" }, items: { en: ["Prepare a review checklist for legal counsel", "Ask the family office manager to update beneficiary information", "Collect missing corporate governance documents"], zh: ["建议准备律师复核清单", "建议更新保险受益人信息", "建议补充公司治理文件"] } },
    ],
  },
  meeting: {
    title: { en: "Family Meeting Brief Preparation", zh: "家族会议材料准备" },
    briefId: "#FO-2026-003",
    preparedFor: { en: "Family Principal", zh: "家族负责人" },
    preparedBy: { en: "Family Office AI Agent", zh: "家族办公室 AI Agent" },
    memoReview: { en: "Family Principal / Advisors", zh: "家族负责人 / 顾问" },
    memoStatus: { en: "Draft for Professional Review", zh: "专业复核草稿" },
    executiveSummary: { en: "The Agent assembled a cross-domain family meeting packet with risk topics, agenda structure, generated materials, and post-meeting ownership cues.", zh: "Agent 整合跨领域家族会议资料包，包含风险议题、会议议程、生成文件和会后任务归属。" },
    reviewRequired: { en: "Family Principal and Relevant Advisor Approval", zh: "家族负责人及相关顾问确认" },
    sections: [
      { key: "findings", heading: { en: "Key Risk Items This Week", zh: "本周关键风险事项" }, items: { en: ["2 health review items", "1 trust document review item", "3 missing education application materials", "Philanthropy annual impact report requires update"], zh: ["本周健康复核事项 2 项", "信托文件复核事项 1 项", "教育申请材料缺失 3 项", "慈善项目年度影响力报告待更新"] } },
      { key: "agenda", heading: { en: "Meeting Agenda", zh: "会议议程" }, ordered: true, items: { en: ["Family health and risk updates", "Asset and trust document review", "Next-generation education planning", "Philanthropy budget and impact reporting", "Post-meeting task assignment"], zh: ["家族健康与风险事项更新", "资产与信托文件复核", "第三代教育规划", "慈善项目预算与影响力报告", "会后任务分配"] } },
      { key: "materials", heading: { en: "Generated Materials", zh: "生成文件" }, items: { en: ["Family Meeting Brief", "Decision Items List", "Post-Meeting Task Tracker"], zh: ["家族会议简报", "待决策事项清单", "会后任务追踪表"] } },
    ],
  },
  weekly: {
    title: { en: "Weekly Family Office Risk Summary", zh: "本周家族办公室风险事项总结" },
    briefId: "#FO-2026-004",
    preparedFor: { en: "Family Principal", zh: "家族负责人" },
    preparedBy: { en: "Family Office AI Agent", zh: "家族办公室 AI Agent" },
    memoReview: { en: "Family Principal / Multi-advisor Review", zh: "家族负责人 / 多顾问复核" },
    memoStatus: { en: "Draft for Professional Review", zh: "专业复核草稿" },
    executiveSummary: { en: "The Agent consolidated this week’s mock family office risks into priority bands and suggested advisor confirmations for the family office manager.", zh: "Agent 将本周模拟家族办公室风险事项按优先级整理，并建议家办经理安排专业人士确认。" },
    reviewRequired: { en: "Physician, Legal Counsel, Tax Advisor, Investment Advisor, and Family Principal Review", zh: "医生、律师、税务顾问、投资顾问和家族负责人复核" },
    sections: [
      { key: "priority", heading: { en: "High Priority", zh: "高优先级" }, priority: "high", items: { en: ["Genetic risk report requires physician review", "Trust document enters review window"], zh: ["遗传风险报告需医生复核", "信托文件进入复核窗口"] } },
      { key: "priority", heading: { en: "Medium Priority", zh: "中优先级" }, priority: "medium", items: { en: ["Passport and visa records need updating", "Education application materials are incomplete"], zh: ["护照/签证资料需更新", "教育申请材料不完整"] } },
      { key: "priority", heading: { en: "Low Priority", zh: "低优先级" }, priority: "low", items: { en: ["Philanthropy impact report needs additional data"], zh: ["慈善影响力报告需补充数据"] } },
      { key: "nextSteps", heading: { en: "Suggested Next Steps", zh: "建议后续行动" }, items: { en: ["Schedule separate confirmations with physician, legal counsel, and the family office principal this week"], zh: ["建议本周分别安排医生、律师、家族办公室负责人确认相关事项"] } },
    ],
  },
};

export const dataRooms: DataRoomSource[] = [
  { name: { en: "Family Members", zh: "家族成员" }, count: { en: "12 people", zh: "12 人" }, sensitivity: { en: "Confidential", zh: "机密" }, lastUpdated: { en: "Updated today", zh: "今日更新" }, access: { en: "Family Principal + Family Office Manager", zh: "家族负责人 + 家族办公室经理" }, promptIds: ["health", "meeting", "weekly"] },
  { name: { en: "Health Records", zh: "健康记录" }, count: { en: "18 files", zh: "18 份文件" }, sensitivity: { en: "Highly Sensitive", zh: "高度敏感" }, lastUpdated: { en: "Updated 2 days ago", zh: "2 天前更新" }, access: { en: "Medical Advisor + Family Principal", zh: "医疗顾问 + 家族负责人" }, promptIds: ["health", "meeting", "weekly"] },
  { name: { en: "Asset Documents", zh: "资产文件" }, count: { en: "30 files", zh: "30 份文件" }, sensitivity: { en: "Highly Sensitive", zh: "高度敏感" }, lastUpdated: { en: "Updated 4 days ago", zh: "4 天前更新" }, access: { en: "Family Principal + Investment Advisor", zh: "家族负责人 + 投资顾问" }, promptIds: ["trust", "meeting"] },
  { name: { en: "Legal Documents", zh: "法律文件" }, count: { en: "14 files", zh: "14 份文件" }, sensitivity: { en: "Highly Sensitive", zh: "高度敏感" }, lastUpdated: { en: "Updated 1 week ago", zh: "1 周前更新" }, access: { en: "Legal Counsel + Family Principal", zh: "律师 + 家族负责人" }, promptIds: ["trust", "meeting", "weekly"] },
  { name: { en: "Tax & Residency", zh: "税务与居留" }, count: { en: "21 records", zh: "21 条记录" }, sensitivity: { en: "Sensitive", zh: "敏感" }, lastUpdated: { en: "Updated 3 days ago", zh: "3 天前更新" }, access: { en: "Tax Advisor + Family Office Manager", zh: "税务顾问 + 家族办公室经理" }, promptIds: ["trust", "weekly"] },
  { name: { en: "Education Plans", zh: "教育规划" }, count: { en: "9 plans", zh: "9 份规划" }, sensitivity: { en: "Confidential", zh: "机密" }, lastUpdated: { en: "Updated yesterday", zh: "昨日更新" }, access: { en: "Family Office Manager + Education Lead", zh: "家办经理 + 教育负责人" }, promptIds: ["meeting", "weekly"] },
  { name: { en: "Governance Minutes", zh: "治理会议纪要" }, count: { en: "16 minutes", zh: "16 份纪要" }, sensitivity: { en: "Confidential", zh: "机密" }, lastUpdated: { en: "Updated 5 days ago", zh: "5 天前更新" }, access: { en: "Family Council + Family Office Manager", zh: "家族委员会 + 家办经理" }, promptIds: ["meeting", "weekly"] },
  { name: { en: "Philanthropy Projects", zh: "慈善项目" }, count: { en: "7 projects", zh: "7 个项目" }, sensitivity: { en: "Standard", zh: "标准" }, lastUpdated: { en: "Updated 6 days ago", zh: "6 天前更新" }, access: { en: "Foundation Lead + Family Principal", zh: "基金会负责人 + 家族负责人" }, promptIds: ["meeting", "weekly"] },
];

export const familyMembers = [
  { label: { en: "First generation", zh: "第一代" }, count: 2 },
  { label: { en: "Second generation", zh: "第二代" }, count: 5 },
  { label: { en: "Next generation", zh: "下一代" }, count: 5 },
];

export const riskTasks = [
  { label: { en: "Medical review", zh: "医疗复核" }, count: 2, tone: "high" },
  { label: { en: "Document review", zh: "文件复核" }, count: 3, tone: "medium" },
  { label: { en: "Governance follow-up", zh: "治理跟进" }, count: 4, tone: "low" },
];

export const missingInformation: Record<PromptId, MissingInformationItem[]> = {
  health: [
    { item: { en: "Latest health check report missing for second-generation member A", zh: "第二代成员 A 缺少最近 12 个月体检报告" }, priority: "High", owner: { en: "Family Office Manager", zh: "家族办公室经理" } },
    { item: { en: "Genetic testing report lacks physician interpretation", zh: "一份基因检测报告缺少医生解读" }, priority: "High", owner: { en: "Medical Advisor", zh: "医疗顾问" } },
    { item: { en: "Annual screening reminder preferences not confirmed", zh: "年度筛查提醒偏好尚未确认" }, priority: "Medium", owner: { en: "Family Principal", zh: "家族负责人" } },
  ],
  trust: [
    { item: { en: "Trust review window starts within 90 days", zh: "一份信托文件将在 90 天内进入复核窗口" }, priority: "High", owner: { en: "Legal Counsel", zh: "律师" } },
    { item: { en: "Insurance beneficiary record outdated", zh: "保险受益人信息未更新" }, priority: "High", owner: { en: "Family Office Manager", zh: "家族办公室经理" } },
    { item: { en: "Latest board resolution missing from shareholding file", zh: "公司股权文件缺少最新董事会决议" }, priority: "Medium", owner: { en: "Corporate Secretary", zh: "公司秘书" } },
  ],
  meeting: [
    { item: { en: "Education application recommendation letter missing", zh: "教育申请推荐信缺失" }, priority: "Medium", owner: { en: "Education Lead", zh: "教育负责人" } },
    { item: { en: "Philanthropy annual impact report needs updated metrics", zh: "慈善项目年度影响力报告待更新" }, priority: "Medium", owner: { en: "Foundation Lead", zh: "基金会负责人" } },
    { item: { en: "Post-meeting decision owner list requires principal confirmation", zh: "会后决策负责人清单需要家族负责人确认" }, priority: "Low", owner: { en: "Family Principal", zh: "家族负责人" } },
  ],
  weekly: [
    { item: { en: "Genetic risk report requires physician review", zh: "遗传风险报告需医生复核" }, priority: "High", owner: { en: "Medical Advisor", zh: "医疗顾问" } },
    { item: { en: "Passport and visa records need updating", zh: "护照/签证资料需更新" }, priority: "Medium", owner: { en: "Tax Advisor", zh: "税务顾问" } },
    { item: { en: "Education application materials are incomplete", zh: "教育申请材料不完整" }, priority: "Medium", owner: { en: "Education Lead", zh: "教育负责人" } },
    { item: { en: "Philanthropy impact report needs additional data", zh: "慈善影响力报告需补充数据" }, priority: "Low", owner: { en: "Foundation Lead", zh: "基金会负责人" } },
  ],
};

export const approvalItems: ApprovalItem[] = [
  { category: { en: "Physician / Genetic Counselor", zh: "医生 / 遗传咨询师" }, pending: 2, status: { en: "Specialist review required", zh: "需要专业人士复核" }, promptIds: ["health", "meeting", "weekly"] },
  { category: { en: "Legal Counsel", zh: "律师" }, pending: 3, status: { en: "Counsel brief ready", zh: "律师简报已准备" }, promptIds: ["trust", "meeting", "weekly"] },
  { category: { en: "Tax Advisor", zh: "税务顾问" }, pending: 1, status: { en: "Residency context pending", zh: "居留上下文待确认" }, promptIds: ["trust", "weekly"] },
  { category: { en: "Investment Advisor", zh: "投资顾问" }, pending: 1, status: { en: "Supporting material only", zh: "仅作为辅助材料" }, promptIds: ["trust", "weekly"] },
  { category: { en: "Family Principal", zh: "家族负责人" }, pending: 3, status: { en: "Final circulation approval", zh: "最终分发确认" }, promptIds: ["health", "trust", "meeting", "weekly"] },
];

export const auditLogs: AuditLog[] = [
  { user: { en: "Family Principal", zh: "家族负责人" }, role: { en: "Owner", zh: "所有者" }, resource: { en: "Health Summary", zh: "健康摘要" }, sensitivity: { en: "Highly Sensitive", zh: "高度敏感" }, time: { en: "10 min ago", zh: "10 分钟前" }, action: { en: "Viewed", zh: "查看" } },
  { user: { en: "Medical Advisor", zh: "医疗顾问" }, role: { en: "Professional Reviewer", zh: "专业复核人" }, resource: { en: "Genetic Report", zh: "基因报告" }, sensitivity: { en: "Highly Sensitive", zh: "高度敏感" }, time: { en: "35 min ago", zh: "35 分钟前" }, action: { en: "Viewed", zh: "查看" } },
  { user: { en: "Legal Counsel", zh: "律师" }, role: { en: "External Counsel", zh: "外部律师" }, resource: { en: "Trust Deed", zh: "信托契约" }, sensitivity: { en: "Highly Sensitive", zh: "高度敏感" }, time: { en: "1 hr ago", zh: "1 小时前" }, action: { en: "Viewed", zh: "查看" } },
  { user: { en: "Family Office Manager", zh: "家族办公室经理" }, role: { en: "Operator", zh: "运营者" }, resource: { en: "Meeting Brief", zh: "会议简报" }, sensitivity: { en: "Confidential", zh: "机密" }, time: { en: "2 hrs ago", zh: "2 小时前" }, action: { en: "Generated", zh: "生成" } },
];


export const clientFollowUpProfiles: Record<PromptId, ClientFollowUpProfile> = {
  health: {
    id: "health",
    clientSource: { en: "Private banker referral", zh: "私人银行转介" },
    clientType: { en: "Multi-generational UHNW family", zh: "多代超高净值家族" },
    mainAdvisoryNeed: { en: "Family health governance and succession readiness review", zh: "家族健康治理与传承准备度复核" },
    insuranceSignal: { en: "Existing policies mentioned; beneficiary and underwriting context not verified", zh: "提及既有保单；受益人与核保背景尚未确认" },
    familyContext: { en: "First generation principal with next-gen dependents across two jurisdictions", zh: "第一代家族负责人，下一代成员分布于两个司法辖区" },
    priority: { en: "High · internal review today", zh: "高 · 今日内部复核" },
    missingInformation: [
      { en: "Current policy schedule and beneficiary register", zh: "现有保单清单与受益人登记" },
      { en: "Latest health check and physician interpretation", zh: "近期体检报告及医生解读" },
      { en: "Consent boundary for sharing medical context", zh: "医疗信息共享授权边界" },
    ],
    internalRouting: { en: "Relationship Manager to validate context, then principal review before insurance and tax/legal specialists join.", zh: "客户经理先确认背景，再由家办负责人复核后流转保险及税务/法律顾问。" },
    nextAction: { en: "Send a concise information request and prepare a 20-minute internal triage meeting.", zh: "发送精简补充资料请求，并准备 20 分钟内部预判会议。" },
    routingChain: [
      { role: { en: "Relationship Manager", zh: "客户经理" }, status: "Ready for Meeting", note: { en: "Source verified", zh: "来源已确认" } },
      { role: { en: "Family Office Principal", zh: "家办负责人" }, status: "Review Required", note: { en: "Approve circulation", zh: "确认流转范围" } },
      { role: { en: "Insurance Advisor", zh: "保险顾问" }, status: "Queued", note: { en: "No quote generation", zh: "不生成报价" } },
      { role: { en: "Tax Advisor / Legal Advisor", zh: "税务顾问 / 法律顾问" }, status: "Queued", note: { en: "Cross-border context", zh: "跨境背景待看" } },
    ],
  },
  trust: {
    id: "trust",
    clientSource: { en: "Family principal direct inquiry", zh: "家族负责人直接咨询" },
    clientType: { en: "Operating-company founder family", zh: "企业创始人家族" },
    mainAdvisoryNeed: { en: "Trust, beneficiary, and asset ownership coordination", zh: "信托、受益人与资产权属协同" },
    insuranceSignal: { en: "Beneficiary records may be outdated versus trust structure", zh: "保单受益人与信托结构可能不一致" },
    familyContext: { en: "Upcoming liquidity event with adult children in separate tax residencies", zh: "临近流动性事件，成年子女税务居民身份不同" },
    priority: { en: "High · principal review required", zh: "高 · 需负责人复核" },
    missingInformation: [
      { en: "Latest trust deed amendment", zh: "最新信托契约修订版" },
      { en: "Insurance beneficiary register", zh: "保险受益人登记" },
      { en: "Residency calendar for key family members", zh: "主要家族成员居留日历" },
    ],
    internalRouting: { en: "Legal and tax advisors should review structure before the insurance advisor comments on policy alignment.", zh: "法律与税务顾问先复核结构，再由保险顾问就保单匹配提出意见。" },
    nextAction: { en: "Prepare counsel packet and schedule internal review before any client-facing recommendation.", zh: "准备律师资料包，并在任何客户建议前安排内部复核。" },
    routingChain: [
      { role: { en: "Relationship Manager", zh: "客户经理" }, status: "Ready for Meeting", note: { en: "Need confirmed", zh: "需求已确认" } },
      { role: { en: "Family Office Principal", zh: "家办负责人" }, status: "Review Required", note: { en: "Structure sensitivity", zh: "结构敏感" } },
      { role: { en: "Insurance Advisor", zh: "保险顾问" }, status: "Queued", note: { en: "Await legal context", zh: "等待法律背景" } },
      { role: { en: "Tax Advisor / Legal Advisor", zh: "税务顾问 / 法律顾问" }, status: "Review Required", note: { en: "Primary review", zh: "优先复核" } },
    ],
  },
  meeting: {
    id: "meeting",
    clientSource: { en: "Quarterly family council follow-up", zh: "季度家族委员会跟进" },
    clientType: { en: "Established family office client", zh: "既有家办客户" },
    mainAdvisoryNeed: { en: "Consolidated agenda for education, philanthropy, and risk follow-up", zh: "教育、慈善与风险跟进综合议程" },
    insuranceSignal: { en: "Coverage question raised only as coordination signal, not quote request", zh: "保障问题仅作为协同信号提出，并非报价请求" },
    familyContext: { en: "Multiple family branches need a single internal action list", zh: "多个家族分支需要统一内部行动清单" },
    priority: { en: "Medium · meeting pack this week", zh: "中 · 本周会议包" },
    missingInformation: [
      { en: "Confirmed meeting attendees", zh: "确认参会人员" },
      { en: "Updated philanthropy impact metrics", zh: "更新慈善影响指标" },
      { en: "Education application milestone owners", zh: "教育申请里程碑负责人" },
    ],
    internalRouting: { en: "Relationship Manager consolidates agenda; principal decides which specialists attend.", zh: "客户经理整合议程，由家办负责人决定参会专业顾问。" },
    nextAction: { en: "Finalize internal agenda and circulate specialist-only pre-read.", zh: "定稿内部议程，并发送仅供专业顾问预读材料。" },
    routingChain: [
      { role: { en: "Relationship Manager", zh: "客户经理" }, status: "Ready for Meeting", note: { en: "Agenda owner", zh: "议程负责人" } },
      { role: { en: "Family Office Principal", zh: "家办负责人" }, status: "Ready for Meeting", note: { en: "Attendance decision", zh: "参会决策" } },
      { role: { en: "Insurance Advisor", zh: "保险顾问" }, status: "Queued", note: { en: "Only if needed", zh: "必要时加入" } },
      { role: { en: "Tax Advisor / Legal Advisor", zh: "税务顾问 / 法律顾问" }, status: "Queued", note: { en: "Issue-specific", zh: "按议题加入" } },
    ],
  },
  weekly: {
    id: "weekly",
    clientSource: { en: "Internal weekly risk queue", zh: "内部每周风险队列" },
    clientType: { en: "Portfolio of active family office relationships", zh: "活跃家办客户组合" },
    mainAdvisoryNeed: { en: "Prioritize advisor follow-ups across health, tax, legal, and governance", zh: "跨健康、税务、法律与治理的顾问跟进优先级排序" },
    insuranceSignal: { en: "Several cases mention policy records but none request quotation", zh: "多项个案提及保单资料，但均非报价请求" },
    familyContext: { en: "Cross-client operating review for internal coordination", zh: "面向内部协同的跨客户运营复盘" },
    priority: { en: "High · weekly operating review", zh: "高 · 每周运营复核" },
    missingInformation: [
      { en: "Owner for each exception", zh: "每项异常负责人" },
      { en: "Client consent scope", zh: "客户授权范围" },
      { en: "Specialist availability for follow-up", zh: "专业顾问可用时间" },
    ],
    internalRouting: { en: "Principal reviews priority queue, then assigns advisors by sensitivity and meeting readiness.", zh: "家办负责人复核优先队列，再按敏感度与会议准备度分配顾问。" },
    nextAction: { en: "Lock weekly action list and circulate only to assigned advisors.", zh: "锁定每周行动清单，并仅流转至指定顾问。" },
    routingChain: [
      { role: { en: "Relationship Manager", zh: "客户经理" }, status: "Review Required", note: { en: "Owner mapping", zh: "负责人映射" } },
      { role: { en: "Family Office Principal", zh: "家办负责人" }, status: "Ready for Meeting", note: { en: "Queue approved", zh: "队列已确认" } },
      { role: { en: "Insurance Advisor", zh: "保险顾问" }, status: "Queued", note: { en: "Policy context only", zh: "仅保单背景" } },
      { role: { en: "Tax Advisor / Legal Advisor", zh: "税务顾问 / 法律顾问" }, status: "Review Required", note: { en: "Specialist triage", zh: "专业预判" } },
    ],
  },
};
