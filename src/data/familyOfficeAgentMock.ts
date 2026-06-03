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
  key: "retrieved" | "findings" | "actions" | "agenda" | "materials" | "priority" | "nextSteps" | "clientProfile" | "protectionGap" | "existingPolicy" | "suggestedStructure" | "advisorReview";
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

export const uiCopy = {
  en: {
    product: "Family Office Insurance Agent",
    tagline: "Family Office Insurance Agent Command Center",
    thesis: "This is not a document dashboard. This is an executable Family Office Insurance Agent that supports insurance planning workflows.",
    headerSubtitle: "Classify insurance needs, retrieve mock policy context, flag risks, and generate advisor-ready materials.",
    executiveDemo: "Executive Demo",
    mockData: "Mock Data",
    noBackend: "No Backend Connected",
    pendingReviews: "Pending Insurance Review Items: 9",
    commandCenter: "Agent Command Center",
    mainValue: "This Agent can execute an insurance planning task and generate a professional brief.",
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
    scenarioSelector: "Insurance Workflows",
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
    physicianReview: "Insurance Advisor Review",
    legalReview: "Legal Review",
    taxReview: "Tax Review",
    investmentReview: "Investment Review",
    familyPrincipalReview: "Principal Review",
    premiumThesis: "This is a premium insurance workflow Agent, not a dashboard.",
    scenarioSubtitle: "Select an insurance planning task for the Agent to run.",
    domain: "Domain",
    riskCount: "Risk count",
    review: "Review",
    agentTaskRunner: "Agent Task Runner",
    selectedTask: "Selected task",
    runAgent: "Run Agent",
    runReady: "Agent ready",
    safetyTitle: "Safety boundary",
    safetyText: "Mock data only · Insurance planning support only · Advisor review required",
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
    intakeTitle: "Insurance Intake",
    intakeSubtitle: "Mock quote-agent inputs used to shape the brief.",
    clientType: "Client Type",
    insuranceObjective: "Insurance Objective",
    productType: "Product Type",
    jurisdiction: "Jurisdiction",
    familyMembersCovered: "Family Members Covered",
    existingPolicyStatus: "Existing Policy Status",
    annualPremiumBudget: "Annual Premium Budget",
    riskFlags: "Risk Flags",
    high: "High",
    medium: "Medium",
    low: "Low",
  },
  zh: {
    product: "家族办公室保险 Agent",
    tagline: "家族办公室保险 Agent 指挥中心",
    thesis: "这不是一个静态资料库，而是一个可以执行保险规划流程的家族办公室保险 Agent。",
    headerSubtitle: "识别保险需求、检索模拟保单上下文、提示风险，并生成顾问复核材料。",
    executiveDemo: "高管演示",
    mockData: "模拟数据",
    noBackend: "未连接后端",
    pendingReviews: "待复核保险事项：9",
    commandCenter: "Agent 指挥中心",
    mainValue: "这个 Agent 可以执行保险规划任务，并生成专业复核材料。",
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
    scenarioSelector: "保险工作流",
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
    physicianReview: "保险顾问复核",
    legalReview: "律师复核",
    taxReview: "税务师复核",
    investmentReview: "投资顾问复核",
    familyPrincipalReview: "负责人复核",
    premiumThesis: "这不是一个后台看板，而是一个真正可以执行保险规划任务的 Agent 工作台。",
    scenarioSubtitle: "选择一个保险规划任务，由 Agent 执行。",
    domain: "领域",
    riskCount: "风险事项",
    review: "复核",
    agentTaskRunner: "Agent 任务运行器",
    selectedTask: "已选择任务",
    runAgent: "运行 Agent",
    runReady: "Agent 就绪",
    safetyTitle: "安全边界",
    safetyText: "仅使用模拟数据 · 仅用于保险规划辅助 · 需要顾问复核",
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
    intakeTitle: "保险需求录入",
    intakeSubtitle: "模拟 Quote Agent 输入，用于影响简报方向。",
    clientType: "客户类型",
    insuranceObjective: "保险目标",
    productType: "产品类型",
    jurisdiction: "地区",
    familyMembersCovered: "保障成员",
    existingPolicyStatus: "现有保单状态",
    annualPremiumBudget: "年度保费预算",
    riskFlags: "风险标签",
    high: "高",
    medium: "中",
    low: "低",
  },
} as const;

export const domains: Domain[] = [
  { id: "health", name: { en: "Medical Underwriting", zh: "医学核保" }, manages: { en: "Mock health disclosures, underwriting questions, and risk flags.", zh: "模拟健康告知、核保问题和风险标签。" }, agentCanDo: { en: "Prepare insurance advisor and underwriting review notes.", zh: "准备保险顾问和核保复核说明。" }, riskCount: 3 },
  { id: "wealth", name: { en: "Insurance Portfolio", zh: "保险组合" }, manages: { en: "Policies, premium budgets, coverage layers, claims, and renewal files.", zh: "保单、保费预算、保障层级、理赔和续保文件。" }, agentCanDo: { en: "Flag protection gaps and prepare policy context packs.", zh: "提示保障缺口，并准备保单上下文材料。" }, riskCount: 4 },
  { id: "legal", name: { en: "Beneficiary & Ownership", zh: "受益人与持有人" }, manages: { en: "Beneficiary records, ownership notes, trusts, and counsel review points.", zh: "受益人记录、持有人说明、信托和律师复核要点。" }, agentCanDo: { en: "Create beneficiary and ownership review checklists.", zh: "生成受益人和持有人复核清单。" }, riskCount: 2 },
  { id: "tax", name: { en: "Jurisdiction & Tax Review", zh: "地区与税务复核" }, manages: { en: "Jurisdiction selections, residency context, tax folders, and cross-border reminders.", zh: "地区选择、居留背景、税务文件夹和跨境提醒。" }, agentCanDo: { en: "Prepare advisor review materials for jurisdiction and tax considerations.", zh: "准备地区和税务事项的顾问复核材料。" }, riskCount: 1 },
  { id: "education", name: { en: "Next-generation Coverage", zh: "下一代保障" }, manages: { en: "Dependent coverage needs, education-linked liquidity goals, and milestones.", zh: "受抚养人保障需求、教育相关流动性目标和里程碑。" }, agentCanDo: { en: "Summarize next-generation coverage needs.", zh: "总结下一代保障需求。" }, riskCount: 3 },
  { id: "governance", name: { en: "Advisor Governance", zh: "顾问治理" }, manages: { en: "Advisor decisions, proposal approvals, review notes, and task ownership.", zh: "顾问决策、方案审批、复核备注和任务归属。" }, agentCanDo: { en: "Generate proposal briefs and task trackers.", zh: "生成方案简报和任务追踪表。" }, riskCount: 2 },
  { id: "privacy", name: { en: "Privacy & Consent", zh: "隐私与授权" }, manages: { en: "Access policies, consent boundaries, audit logs, and data sensitivity.", zh: "访问策略、授权边界、审计日志和数据敏感级别。" }, agentCanDo: { en: "Show access trails and mark advisor review requirements.", zh: "展示访问轨迹并标记顾问复核要求。" }, riskCount: 1 },
  { id: "philanthropy", name: { en: "Legacy Objectives", zh: "传承目标" }, manages: { en: "Legacy, liquidity, and charitable planning objectives for insurance support.", zh: "保险支持下的传承、流动性和慈善规划目标。" }, agentCanDo: { en: "Flag objectives that need advisor validation.", zh: "提示需顾问验证的目标。" }, riskCount: 1 },
];

export const prompts: Prompt[] = [
  { id: "health", label: { en: "Family Protection Gap Analysis", zh: "家族保障缺口分析" }, domain: { en: "Protection Planning", zh: "保障规划" }, description: { en: "Review mock family profile inputs and existing coverage to identify protection gaps for advisor review.", zh: "复核模拟家族画像与现有保障，识别需顾问复核的保障缺口。" }, review: { en: "Insurance Advisor / Medical Underwriting", zh: "保险顾问 / 医学核保" }, runSummary: { en: "The Agent scanned mock profile, family-member, budget, and policy-status inputs, then drafted protection-gap observations for advisor review.", zh: "Agent 已扫描模拟客户画像、成员、预算和保单状态输入，并起草保障缺口观察供顾问复核。" }, riskCount: 3, command: { en: "Analyze family protection gaps using mock intake selections, family coverage needs, and current policy status.", zh: "根据模拟需求录入、家庭保障成员与现有保单状态分析家族保障缺口。" }, activeDomainIds: ["health", "wealth", "privacy"] },
  { id: "trust", label: { en: "Policy & Beneficiary Review", zh: "保单与受益人复核" }, domain: { en: "Policy Governance", zh: "保单治理" }, description: { en: "Check mock policy schedules, beneficiary records, ownership notes, and renewal windows for review issues.", zh: "检查模拟保单清单、受益人记录、持有人说明和续保窗口中的复核事项。" }, review: { en: "Insurance Advisor / Legal / Tax", zh: "保险顾问 / 律师 / 税务顾问" }, runSummary: { en: "The Agent scanned mock policy and beneficiary records, found outdated ownership notes, and prepared an advisor checklist.", zh: "Agent 已扫描模拟保单与受益人记录，发现持有人说明过期，并生成顾问复核清单。" }, riskCount: 4, command: { en: "Review existing policies, ownership, beneficiaries, premium commitments, and renewal checkpoints.", zh: "复核现有保单、持有人、受益人、保费承诺和续保检查点。" }, activeDomainIds: ["wealth", "legal", "tax", "privacy"] },
  { id: "meeting", label: { en: "HNW Insurance Proposal Brief", zh: "高净值客户保险方案简报" }, domain: { en: "HNW Proposal", zh: "高净值方案" }, description: { en: "Prepare a mock high-net-worth insurance proposal brief with structure options and advisor review points.", zh: "准备模拟高净值客户保险方案简报，包含配置结构和顾问复核要点。" }, review: { en: "Insurance Advisor + Principal", zh: "保险顾问 + 家族负责人" }, runSummary: { en: "The Agent organized mock intake choices into a proposal narrative, suggested structure, and review-routing plan.", zh: "Agent 将模拟需求选择整理为方案叙述、建议配置结构和复核流转计划。" }, riskCount: 6, command: { en: "Generate a high-net-worth insurance proposal brief from the mock intake and selected scenario.", zh: "根据模拟需求录入和所选场景生成高净值客户保险方案简报。" }, activeDomainIds: ["wealth", "legal", "tax", "governance", "privacy"] },
  { id: "weekly", label: { en: "Claims / Renewal / Risk Follow-up", zh: "理赔、续保与风险事项追踪" }, domain: { en: "Service Follow-up", zh: "服务跟进" }, description: { en: "Summarize mock claims, renewal, underwriting, and risk follow-up items for advisor action.", zh: "总结模拟理赔、续保、核保和风险跟进事项，供顾问行动。" }, review: { en: "Service Team / Multi-advisor Review", zh: "服务团队 / 多顾问复核" }, runSummary: { en: "The Agent prioritized mock claims, renewal, and risk follow-up items and drafted a next-action queue.", zh: "Agent 已按优先级整理模拟理赔、续保和风险跟进事项，并起草下一步行动队列。" }, riskCount: 5, command: { en: "Track open claims, renewal deadlines, underwriting questions, and risk follow-up items for advisor review.", zh: "追踪未关闭理赔、续保期限、核保问题和风险跟进事项，供顾问复核。" }, activeDomainIds: ["health", "wealth", "legal", "tax", "privacy"] },
];

export const agentRuns: Record<PromptId, AgentRunStep[]> = {
  health: [
    { name: { en: "Classify request", zh: "识别任务类型" }, status: "Completed", detail: { en: "Detected family protection gap analysis from mock insurance intake selections.", zh: "识别为基于模拟保险需求录入的家族保障缺口分析。" }, metadata: { en: "Insurance workflow", zh: "保险工作流" } },
    { name: { en: "Retrieve mock policy context", zh: "检索模拟保单上下文" }, status: "Completed", detail: { en: "Retrieved mock family profile, coverage members, budget range, and policy-status records.", zh: "已检索模拟客户画像、保障成员、预算范围和保单状态记录。" }, metadata: { en: "Mock records scanned", zh: "已扫描模拟资料" } },
    { name: { en: "Check missing inputs", zh: "检查缺失输入" }, status: "Completed", detail: { en: "Compared stated objectives against current mock coverage layers and family members covered.", zh: "比对保险目标、现有模拟保障层级和保障成员。" }, metadata: { en: "Intake matched", zh: "需求已匹配" } },
    { name: { en: "Generate insurance risk summary", zh: "生成保险风险摘要" }, status: "Completed", detail: { en: "Grouped protection gaps by life, medical, critical illness, and cross-border considerations.", zh: "按人寿、医疗、重疾和跨境因素归纳保障缺口。" }, metadata: { en: "Risk flags grouped", zh: "风险标签已归纳" } },
    { name: { en: "Prepare advisor-ready brief", zh: "准备顾问复核材料" }, status: "In Review", detail: { en: "Drafted the advisor-review protection gap brief with next actions.", zh: "已起草顾问复核版保障缺口简报和下一步行动。" }, metadata: { en: "Brief draft generated", zh: "简报草稿已生成" } },
    { name: { en: "Require advisor approval", zh: "等待顾问确认" }, status: "Needs Human Approval", detail: { en: "Insurance advisor and underwriting specialist must review before client use.", zh: "客户使用前必须由保险顾问和核保专家复核。" }, metadata: { en: "Advisor review required", zh: "需要顾问复核" } },
  ],
  trust: [
    { name: { en: "Classify request", zh: "识别任务类型" }, status: "Completed", detail: { en: "Detected policy and beneficiary review requirements from mock existing-policy status.", zh: "识别为基于模拟现有保单状态的保单与受益人复核。" }, metadata: { en: "Insurance workflow", zh: "保险工作流" } },
    { name: { en: "Retrieve mock policy context", zh: "检索模拟保单上下文" }, status: "Completed", detail: { en: "Retrieved mock policy schedules, beneficiary notes, ownership records, and renewal windows.", zh: "已检索模拟保单清单、受益人说明、持有人记录和续保窗口。" }, metadata: { en: "Mock records scanned", zh: "已扫描模拟资料" } },
    { name: { en: "Check missing inputs", zh: "检查缺失输入" }, status: "Completed", detail: { en: "Matched beneficiary metadata, premium commitments, and advisor-review checkpoints.", zh: "核对受益人信息、保费承诺和顾问复核检查点。" }, metadata: { en: "Intake matched", zh: "需求已匹配" } },
    { name: { en: "Generate insurance risk summary", zh: "生成保险风险摘要" }, status: "Completed", detail: { en: "Flagged policy-maintenance risks without giving legal, tax, or investment advice.", zh: "提示保单维护风险，不提供法律、税务或投资建议。" }, metadata: { en: "Risk flags grouped", zh: "风险标签已归纳" } },
    { name: { en: "Prepare advisor-ready brief", zh: "准备顾问复核材料" }, status: "In Review", detail: { en: "Prepared policy and beneficiary checklist for insurance, legal, and tax advisors.", zh: "已准备保险、法律和税务顾问复核的保单与受益人清单。" }, metadata: { en: "Brief draft generated", zh: "简报草稿已生成" } },
    { name: { en: "Require advisor approval", zh: "等待顾问确认" }, status: "Needs Human Approval", detail: { en: "Insurance, legal, and tax advisors must confirm ownership and beneficiary implications.", zh: "持有人和受益人影响必须由保险、法律和税务顾问确认。" }, metadata: { en: "Advisor review required", zh: "需要顾问复核" } },
  ],
  meeting: [
    { name: { en: "Classify request", zh: "识别任务类型" }, status: "Completed", detail: { en: "Detected high-net-worth insurance proposal brief workflow.", zh: "识别为高净值客户保险方案简报流程。" }, metadata: { en: "Insurance workflow", zh: "保险工作流" } },
    { name: { en: "Retrieve mock policy context", zh: "检索模拟保单上下文" }, status: "Completed", detail: { en: "Pulled mock intake choices, protection objectives, jurisdiction, and risk flags.", zh: "已调取模拟需求选择、保障目标、地区和风险标签。" }, metadata: { en: "Mock records scanned", zh: "已扫描模拟资料" } },
    { name: { en: "Check missing inputs", zh: "检查缺失输入" }, status: "Completed", detail: { en: "Validated proposal inputs and identified missing policy-schedule assumptions.", zh: "校验方案输入，并识别缺失的保单清单假设。" }, metadata: { en: "Intake matched", zh: "需求已匹配" } },
    { name: { en: "Generate insurance risk summary", zh: "生成保险风险摘要" }, status: "Completed", detail: { en: "Grouped proposal content into client profile, gap analysis, structure, and review items.", zh: "将方案内容归纳为客户画像、缺口分析、配置结构和复核事项。" }, metadata: { en: "Risk flags grouped", zh: "风险标签已归纳" } },
    { name: { en: "Prepare advisor-ready brief", zh: "准备顾问复核材料" }, status: "In Review", detail: { en: "Generated the HNW insurance proposal brief and advisor routing notes.", zh: "已生成高净值客户保险方案简报和顾问流转备注。" }, metadata: { en: "Brief draft generated", zh: "简报草稿已生成" } },
    { name: { en: "Require advisor approval", zh: "等待顾问确认" }, status: "Needs Human Approval", detail: { en: "Family principal and insurance advisor approve materials before circulation.", zh: "材料分发前需要家族负责人和保险顾问确认。" }, metadata: { en: "Advisor review required", zh: "需要顾问复核" } },
  ],
  weekly: [
    { name: { en: "Classify request", zh: "识别任务类型" }, status: "Completed", detail: { en: "Detected claims, renewal, and risk follow-up tracking workflow.", zh: "识别为理赔、续保和风险事项追踪流程。" }, metadata: { en: "Insurance workflow", zh: "保险工作流" } },
    { name: { en: "Retrieve mock policy context", zh: "检索模拟保单上下文" }, status: "Completed", detail: { en: "Pulled mock claims notes, renewal dates, underwriting questions, and policy tasks.", zh: "已调取模拟理赔备注、续保日期、核保问题和保单任务。" }, metadata: { en: "Mock records scanned", zh: "已扫描模拟资料" } },
    { name: { en: "Check missing inputs", zh: "检查缺失输入" }, status: "Completed", detail: { en: "Checked open service items, missing documents, and advisor ownership.", zh: "检查未关闭服务事项、缺失文件和顾问负责人。" }, metadata: { en: "Intake matched", zh: "需求已匹配" } },
    { name: { en: "Generate insurance risk summary", zh: "生成保险风险摘要" }, status: "Completed", detail: { en: "Prioritized follow-up items into high, medium, and low service bands.", zh: "按高、中、低服务优先级整理跟进事项。" }, metadata: { en: "Risk flags grouped", zh: "风险标签已归纳" } },
    { name: { en: "Prepare advisor-ready brief", zh: "准备顾问复核材料" }, status: "In Review", detail: { en: "Drafted a claims, renewal, and risk follow-up action queue.", zh: "已起草理赔、续保和风险跟进行动队列。" }, metadata: { en: "Brief draft generated", zh: "简报草稿已生成" } },
    { name: { en: "Require advisor approval", zh: "等待顾问确认" }, status: "Needs Human Approval", detail: { en: "Service team and relevant advisors must confirm next actions.", zh: "服务团队和相关顾问必须确认下一步行动。" }, metadata: { en: "Advisor review required", zh: "需要顾问复核" } },
  ]
};

export const agentResponses: Record<PromptId, AgentResponse> = {
  health: {
    title: { en: "Family Protection Gap Analysis", zh: "家族保障缺口分析" },
    briefId: "#FOI-2026-001",
    preparedFor: { en: "Family Principal / Insurance Advisor", zh: "家族负责人 / 保险顾问" },
    preparedBy: { en: "Family Office Insurance Agent", zh: "家族办公室保险 Agent" },
    memoReview: { en: "Insurance Advisor / Medical Underwriting", zh: "保险顾问 / 医学核保" },
    memoStatus: { en: "Draft for Advisor Review", zh: "顾问复核草稿" },
    executiveSummary: { en: "The Agent converted the mock intake into a protection-gap brief and highlighted coverage, budget, jurisdiction, and risk-flag areas for advisor review.", zh: "Agent 将模拟需求录入转化为保障缺口简报，并提示保障、预算、地区和风险标签事项供顾问复核。" },
    reviewRequired: { en: "Insurance advisor review required before client use", zh: "客户使用前需要保险顾问复核" },
    disclaimer: { en: "This output is for insurance planning support and advisor review only. It does not constitute legal, tax, medical, or investment advice.", zh: "以下内容仅用于保险规划辅助和顾问复核，不构成法律、税务、医疗或投资建议。" },
    sections: [
      { key: "clientProfile", heading: { en: "Client Profile Summary", zh: "客户画像摘要" }, items: { en: ["HNW family office client selected from mock intake", "Primary objective balances liquidity, family protection, and succession continuity", "Coverage request includes principal, spouse, and next generation"], zh: ["模拟需求录入显示为高净值家族办公室客户", "主要目标兼顾流动性、家族保障和传承连续性", "保障成员包括负责人、配偶和下一代"] } },
      { key: "protectionGap", heading: { en: "Protection Gap Analysis", zh: "保障缺口分析" }, items: { en: ["Life protection appears under-sized versus stated succession liquidity need", "Critical illness and medical riders require advisor validation", "Cross-border jurisdiction selection may create documentation requirements"], zh: ["人寿保障额度相对传承流动性需求可能不足", "重疾和医疗附加保障需要顾问验证", "跨境地区选择可能产生额外文件要求"] } },
      { key: "existingPolicy", heading: { en: "Existing Policy Review", zh: "现有保单复核" }, items: { en: ["Existing policy status is marked as partial and requires schedule confirmation", "Beneficiary notes should be refreshed before proposal circulation", "Premium budget should be reconciled with current annual commitments"], zh: ["现有保单状态标记为部分配置，需要确认保单清单", "方案分发前应更新受益人说明", "年度保费预算应与当前保费承诺核对"] } },
      { key: "suggestedStructure", heading: { en: "Suggested Insurance Structure", zh: "建议保险配置结构" }, items: { en: ["Consider layered life, critical illness, and medical coverage using mock assumptions only", "Separate protection, liquidity, and legacy objectives in the proposal", "Keep ownership and beneficiary structure subject to legal and tax review"], zh: ["仅基于模拟假设考虑分层配置人寿、重疾和医疗保障", "在方案中区分保障、流动性和传承目标", "持有人和受益人结构需以法律和税务复核为准"] } },
      { key: "advisorReview", heading: { en: "Required Advisor Review", zh: "所需顾问复核" }, items: { en: ["Insurance advisor to validate needs analysis and product suitability", "Legal and tax advisors to review ownership, beneficiary, and jurisdiction implications", "Medical or underwriting specialist to review disclosed risk flags"], zh: ["保险顾问复核需求分析和产品适配性", "律师和税务顾问复核持有人、受益人及地区影响", "医学或核保专家复核已披露风险标签"] } },
      { key: "nextSteps", heading: { en: "Next Actions", zh: "下一步行动" }, items: { en: ["Confirm missing policy schedules and beneficiary records", "Collect advisor comments before client presentation", "Run the mock Agent again after intake selections are adjusted"], zh: ["确认缺失的保单清单和受益人记录", "客户展示前收集顾问意见", "调整需求选择后再次运行模拟 Agent"] } },
    ],
  },
  trust: {
    title: { en: "Policy & Beneficiary Review", zh: "保单与受益人复核" },
    briefId: "#FOI-2026-002",
    preparedFor: { en: "Family Principal / Insurance Advisor", zh: "家族负责人 / 保险顾问" },
    preparedBy: { en: "Family Office Insurance Agent", zh: "家族办公室保险 Agent" },
    memoReview: { en: "Insurance Advisor / Legal / Tax", zh: "保险顾问 / 律师 / 税务顾问" },
    memoStatus: { en: "Draft for Advisor Review", zh: "顾问复核草稿" },
    executiveSummary: { en: "The Agent reviewed mock existing-policy status, ownership notes, and beneficiary records to prepare a policy-governance checklist for professional review.", zh: "Agent 复核模拟现有保单状态、持有人说明和受益人记录，并准备保单治理复核清单。" },
    reviewRequired: { en: "Insurance advisor review required before client use", zh: "客户使用前需要保险顾问复核" },
    disclaimer: { en: "This output is for insurance planning support and advisor review only. It does not constitute legal, tax, medical, or investment advice.", zh: "以下内容仅用于保险规划辅助和顾问复核，不构成法律、税务、医疗或投资建议。" },
    sections: [
      { key: "clientProfile", heading: { en: "Client Profile Summary", zh: "客户画像摘要" }, items: { en: ["HNW family office client selected from mock intake", "Primary objective balances liquidity, family protection, and succession continuity", "Coverage request includes principal, spouse, and next generation"], zh: ["模拟需求录入显示为高净值家族办公室客户", "主要目标兼顾流动性、家族保障和传承连续性", "保障成员包括负责人、配偶和下一代"] } },
      { key: "protectionGap", heading: { en: "Protection Gap Analysis", zh: "保障缺口分析" }, items: { en: ["Life protection appears under-sized versus stated succession liquidity need", "Critical illness and medical riders require advisor validation", "Cross-border jurisdiction selection may create documentation requirements"], zh: ["人寿保障额度相对传承流动性需求可能不足", "重疾和医疗附加保障需要顾问验证", "跨境地区选择可能产生额外文件要求"] } },
      { key: "existingPolicy", heading: { en: "Existing Policy Review", zh: "现有保单复核" }, items: { en: ["Existing policy status is marked as partial and requires schedule confirmation", "Beneficiary notes should be refreshed before proposal circulation", "Premium budget should be reconciled with current annual commitments"], zh: ["现有保单状态标记为部分配置，需要确认保单清单", "方案分发前应更新受益人说明", "年度保费预算应与当前保费承诺核对"] } },
      { key: "suggestedStructure", heading: { en: "Suggested Insurance Structure", zh: "建议保险配置结构" }, items: { en: ["Consider layered life, critical illness, and medical coverage using mock assumptions only", "Separate protection, liquidity, and legacy objectives in the proposal", "Keep ownership and beneficiary structure subject to legal and tax review"], zh: ["仅基于模拟假设考虑分层配置人寿、重疾和医疗保障", "在方案中区分保障、流动性和传承目标", "持有人和受益人结构需以法律和税务复核为准"] } },
      { key: "advisorReview", heading: { en: "Required Advisor Review", zh: "所需顾问复核" }, items: { en: ["Insurance advisor to validate needs analysis and product suitability", "Legal and tax advisors to review ownership, beneficiary, and jurisdiction implications", "Medical or underwriting specialist to review disclosed risk flags"], zh: ["保险顾问复核需求分析和产品适配性", "律师和税务顾问复核持有人、受益人及地区影响", "医学或核保专家复核已披露风险标签"] } },
      { key: "nextSteps", heading: { en: "Next Actions", zh: "下一步行动" }, items: { en: ["Confirm missing policy schedules and beneficiary records", "Collect advisor comments before client presentation", "Run the mock Agent again after intake selections are adjusted"], zh: ["确认缺失的保单清单和受益人记录", "客户展示前收集顾问意见", "调整需求选择后再次运行模拟 Agent"] } },
    ],
  },
  meeting: {
    title: { en: "HNW Insurance Proposal Brief", zh: "高净值客户保险方案简报" },
    briefId: "#FOI-2026-003",
    preparedFor: { en: "Family Principal / Insurance Advisor", zh: "家族负责人 / 保险顾问" },
    preparedBy: { en: "Family Office Insurance Agent", zh: "家族办公室保险 Agent" },
    memoReview: { en: "Insurance Advisor / Family Principal", zh: "保险顾问 / 家族负责人" },
    memoStatus: { en: "Draft for Advisor Review", zh: "顾问复核草稿" },
    executiveSummary: { en: "The Agent assembled a high-net-worth insurance proposal brief using mock intake selections, scenario context, and advisor-review boundaries.", zh: "Agent 使用模拟需求选择、场景上下文和顾问复核边界，生成高净值客户保险方案简报。" },
    reviewRequired: { en: "Insurance advisor review required before client use", zh: "客户使用前需要保险顾问复核" },
    disclaimer: { en: "This output is for insurance planning support and advisor review only. It does not constitute legal, tax, medical, or investment advice.", zh: "以下内容仅用于保险规划辅助和顾问复核，不构成法律、税务、医疗或投资建议。" },
    sections: [
      { key: "clientProfile", heading: { en: "Client Profile Summary", zh: "客户画像摘要" }, items: { en: ["HNW family office client selected from mock intake", "Primary objective balances liquidity, family protection, and succession continuity", "Coverage request includes principal, spouse, and next generation"], zh: ["模拟需求录入显示为高净值家族办公室客户", "主要目标兼顾流动性、家族保障和传承连续性", "保障成员包括负责人、配偶和下一代"] } },
      { key: "protectionGap", heading: { en: "Protection Gap Analysis", zh: "保障缺口分析" }, items: { en: ["Life protection appears under-sized versus stated succession liquidity need", "Critical illness and medical riders require advisor validation", "Cross-border jurisdiction selection may create documentation requirements"], zh: ["人寿保障额度相对传承流动性需求可能不足", "重疾和医疗附加保障需要顾问验证", "跨境地区选择可能产生额外文件要求"] } },
      { key: "existingPolicy", heading: { en: "Existing Policy Review", zh: "现有保单复核" }, items: { en: ["Existing policy status is marked as partial and requires schedule confirmation", "Beneficiary notes should be refreshed before proposal circulation", "Premium budget should be reconciled with current annual commitments"], zh: ["现有保单状态标记为部分配置，需要确认保单清单", "方案分发前应更新受益人说明", "年度保费预算应与当前保费承诺核对"] } },
      { key: "suggestedStructure", heading: { en: "Suggested Insurance Structure", zh: "建议保险配置结构" }, items: { en: ["Consider layered life, critical illness, and medical coverage using mock assumptions only", "Separate protection, liquidity, and legacy objectives in the proposal", "Keep ownership and beneficiary structure subject to legal and tax review"], zh: ["仅基于模拟假设考虑分层配置人寿、重疾和医疗保障", "在方案中区分保障、流动性和传承目标", "持有人和受益人结构需以法律和税务复核为准"] } },
      { key: "advisorReview", heading: { en: "Required Advisor Review", zh: "所需顾问复核" }, items: { en: ["Insurance advisor to validate needs analysis and product suitability", "Legal and tax advisors to review ownership, beneficiary, and jurisdiction implications", "Medical or underwriting specialist to review disclosed risk flags"], zh: ["保险顾问复核需求分析和产品适配性", "律师和税务顾问复核持有人、受益人及地区影响", "医学或核保专家复核已披露风险标签"] } },
      { key: "nextSteps", heading: { en: "Next Actions", zh: "下一步行动" }, items: { en: ["Confirm missing policy schedules and beneficiary records", "Collect advisor comments before client presentation", "Run the mock Agent again after intake selections are adjusted"], zh: ["确认缺失的保单清单和受益人记录", "客户展示前收集顾问意见", "调整需求选择后再次运行模拟 Agent"] } },
    ],
  },
  weekly: {
    title: { en: "Claims / Renewal / Risk Follow-up", zh: "理赔、续保与风险事项追踪" },
    briefId: "#FOI-2026-004",
    preparedFor: { en: "Family Principal / Insurance Advisor", zh: "家族负责人 / 保险顾问" },
    preparedBy: { en: "Family Office Insurance Agent", zh: "家族办公室保险 Agent" },
    memoReview: { en: "Service Team / Multi-advisor Review", zh: "服务团队 / 多顾问复核" },
    memoStatus: { en: "Draft for Advisor Review", zh: "顾问复核草稿" },
    executiveSummary: { en: "The Agent summarized mock claims, renewal, and risk follow-up items into a service queue with required advisor review.", zh: "Agent 将模拟理赔、续保和风险跟进事项汇总为服务队列，并标记所需顾问复核。" },
    reviewRequired: { en: "Insurance advisor review required before client use", zh: "客户使用前需要保险顾问复核" },
    disclaimer: { en: "This output is for insurance planning support and advisor review only. It does not constitute legal, tax, medical, or investment advice.", zh: "以下内容仅用于保险规划辅助和顾问复核，不构成法律、税务、医疗或投资建议。" },
    sections: [
      { key: "clientProfile", heading: { en: "Client Profile Summary", zh: "客户画像摘要" }, items: { en: ["HNW family office client selected from mock intake", "Primary objective balances liquidity, family protection, and succession continuity", "Coverage request includes principal, spouse, and next generation"], zh: ["模拟需求录入显示为高净值家族办公室客户", "主要目标兼顾流动性、家族保障和传承连续性", "保障成员包括负责人、配偶和下一代"] } },
      { key: "protectionGap", heading: { en: "Protection Gap Analysis", zh: "保障缺口分析" }, items: { en: ["Life protection appears under-sized versus stated succession liquidity need", "Critical illness and medical riders require advisor validation", "Cross-border jurisdiction selection may create documentation requirements"], zh: ["人寿保障额度相对传承流动性需求可能不足", "重疾和医疗附加保障需要顾问验证", "跨境地区选择可能产生额外文件要求"] } },
      { key: "existingPolicy", heading: { en: "Existing Policy Review", zh: "现有保单复核" }, items: { en: ["Existing policy status is marked as partial and requires schedule confirmation", "Beneficiary notes should be refreshed before proposal circulation", "Premium budget should be reconciled with current annual commitments"], zh: ["现有保单状态标记为部分配置，需要确认保单清单", "方案分发前应更新受益人说明", "年度保费预算应与当前保费承诺核对"] } },
      { key: "suggestedStructure", heading: { en: "Suggested Insurance Structure", zh: "建议保险配置结构" }, items: { en: ["Consider layered life, critical illness, and medical coverage using mock assumptions only", "Separate protection, liquidity, and legacy objectives in the proposal", "Keep ownership and beneficiary structure subject to legal and tax review"], zh: ["仅基于模拟假设考虑分层配置人寿、重疾和医疗保障", "在方案中区分保障、流动性和传承目标", "持有人和受益人结构需以法律和税务复核为准"] } },
      { key: "advisorReview", heading: { en: "Required Advisor Review", zh: "所需顾问复核" }, items: { en: ["Insurance advisor to validate needs analysis and product suitability", "Legal and tax advisors to review ownership, beneficiary, and jurisdiction implications", "Medical or underwriting specialist to review disclosed risk flags"], zh: ["保险顾问复核需求分析和产品适配性", "律师和税务顾问复核持有人、受益人及地区影响", "医学或核保专家复核已披露风险标签"] } },
      { key: "nextSteps", heading: { en: "Next Actions", zh: "下一步行动" }, items: { en: ["Confirm missing policy schedules and beneficiary records", "Collect advisor comments before client presentation", "Run the mock Agent again after intake selections are adjusted"], zh: ["确认缺失的保单清单和受益人记录", "客户展示前收集顾问意见", "调整需求选择后再次运行模拟 Agent"] } },
    ],
  }
};

export const dataRooms: DataRoomSource[] = [
  { name: { en: "Family Members", zh: "家族成员" }, count: { en: "12 people", zh: "12 人" }, sensitivity: { en: "Confidential", zh: "机密" }, lastUpdated: { en: "Updated today", zh: "今日更新" }, access: { en: "Family Principal + Family Office Manager", zh: "家族负责人 + 家族办公室经理" }, promptIds: ["health", "meeting", "weekly"] },
  { name: { en: "Health Records", zh: "健康记录" }, count: { en: "18 files", zh: "18 份文件" }, sensitivity: { en: "Highly Sensitive", zh: "高度敏感" }, lastUpdated: { en: "Updated 2 days ago", zh: "2 天前更新" }, access: { en: "Insurance Advisor + Family Principal", zh: "保险顾问 + 家族负责人" }, promptIds: ["health", "meeting", "weekly"] },
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
    { item: { en: "Latest insurance needs questionnaire missing for second-generation member A", zh: "第二代成员 A 缺少最新保险需求问卷" }, priority: "High", owner: { en: "Family Office Manager", zh: "家族办公室经理" } },
    { item: { en: "Health disclosure requires underwriting advisor review", zh: "健康告知需要核保顾问复核" }, priority: "High", owner: { en: "Insurance Advisor", zh: "保险顾问" } },
    { item: { en: "Annual premium payment preference not confirmed", zh: "年度保费缴付偏好尚未确认" }, priority: "Medium", owner: { en: "Family Principal", zh: "家族负责人" } },
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
    { item: { en: "Medical disclosure requires underwriting review", zh: "健康告知需核保复核" }, priority: "High", owner: { en: "Insurance Advisor", zh: "保险顾问" } },
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
  { user: { en: "Insurance Advisor", zh: "保险顾问" }, role: { en: "Professional Reviewer", zh: "专业复核人" }, resource: { en: "Genetic Report", zh: "基因报告" }, sensitivity: { en: "Highly Sensitive", zh: "高度敏感" }, time: { en: "35 min ago", zh: "35 分钟前" }, action: { en: "Viewed", zh: "查看" } },
  { user: { en: "Legal Counsel", zh: "律师" }, role: { en: "External Counsel", zh: "外部律师" }, resource: { en: "Trust Deed", zh: "信托契约" }, sensitivity: { en: "Highly Sensitive", zh: "高度敏感" }, time: { en: "1 hr ago", zh: "1 小时前" }, action: { en: "Viewed", zh: "查看" } },
  { user: { en: "Family Office Manager", zh: "家族办公室经理" }, role: { en: "Operator", zh: "运营者" }, resource: { en: "Meeting Brief", zh: "会议简报" }, sensitivity: { en: "Confidential", zh: "机密" }, time: { en: "2 hrs ago", zh: "2 小时前" }, action: { en: "Generated", zh: "生成" } },
];
