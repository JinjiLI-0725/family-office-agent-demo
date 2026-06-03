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
  key: "profile" | "needs" | "signals" | "missing" | "routing" | "followUp" | "compliance" | "nextSteps";
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

const internalDisclaimer: Localized = {
  en: "This output is for internal client intake and advisor coordination only. It does not constitute insurance quotation, legal, tax, medical, or investment advice.",
  zh: "以下内容仅用于内部客户引进、需求整理和顾问协作，不构成保险报价、法律、税务、医疗或投资建议。",
};

export const uiCopy = {
  en: {
    product: "Family Office AI Agent",
    tagline: "Family Office AI Agent",
    thesis: "Capture a prospective family client profile, identify advisory needs, and generate an internal referral card for family office and insurance advisors.",
    headerSubtitle: "Internal intake workflow for relationship managers and business development staff; insurance is one service line, not a quotation flow.",
    executiveDemo: "Internal Demo",
    mockData: "Mock Data",
    noBackend: "No Backend Connected",
    pendingReviews: "Referral Items: 9",
    commandCenter: "Client Intake / Referral Workspace",
    mainValue: "Capture client context, identify advisory needs, and prepare an internal Client Intake Card for advisor review.",
    scenarioTitle: "Scenario title",
    riskQueueCount: "Needs",
    reviewRequiredStatus: "Advisor Review",
    agentRunning: "Agent running...",
    runCompletedShort: "Intake card ready",
    executionStatus: "Workflow status",
    classifyingRequest: "Classifying intake context...",
    scanningRecords: "Reviewing mock client profile...",
    checkingMissing: "Checking missing information...",
    briefGenerated: "Client Intake Card generated.",
    preparedFor: "Prepared for",
    preparedBy: "Prepared by",
    memoStatus: "Status",
    draftForReview: "Draft for Advisor Review",
    scenarioSelector: "Referral Workflows",
    scenarioLibrary: "Scenario Library",
    agentWorkspace: "Intake Workspace",
    outputReview: "Output & Advisor Review",
    generatedBrief: "Client Intake Card",
    mockDataOnly: "Mock Data Only",
    noBackendConnected: "No Backend Connected",
    runSummary: "Intake reasoning summary",
    dataRoomTab: "Intake Fields",
    missingTab: "Missing Information",
    auditTab: "Audit Log",
    approvalTab: "Internal Routing",
    viewFullBrief: "View full card",
    insuranceAdvisorReview: "Insurance Advisor Review",
    legalReview: "Legal Advisor Review",
    taxReview: "Tax Advisor Review",
    investmentReview: "Private Banker Review",
    familyPrincipalReview: "Family Office Principal Review",
    premiumThesis: "This is an internal family office client intake workflow, not an insurance quotation system.",
    scenarioSubtitle: "Select a client intake or referral scenario for the Agent to prepare.",
    domain: "Advisory area",
    riskCount: "Need count",
    review: "Review",
    agentTaskRunner: "Intake Card Runner",
    selectedTask: "Selected intake task",
    runAgent: "Generate Card",
    runReady: "Agent ready",
    safetyTitle: "Safety boundary",
    safetyText: "Mock data only · Internal referral support only · Advisor review required · No insurance pricing",
    workflowTitle: "Intake Run Trace",
    workflowSubtitle: "Live-style execution trace for the selected intake task",
    runCompleted: "Client intake analysis completed",
    generatedDeliverable: "Generated Deliverable",
    professionalDraft: "Internal referral card draft",
    executiveSummary: "Client Profile Summary",
    professionalReviewRequired: "Advisor Review Required",
    disclaimer: "Compliance / Disclaimer",
    contextApproval: "Context & Internal Routing Stack",
    dataRoom: "Intake Field Context",
    retrievedRecords: "Mock intake options",
    sources: "fields",
    access: "Options",
    missingInfo: "Missing Information",
    exceptionsFound: "Missing or unconfirmed intake items",
    owner: "Owner",
    approvals: "Required Review Team",
    approvalSubtitle: "Internal routing for family office and insurance-related advisory follow-up.",
    generateBrief: "Prepare Routing Note",
    activeDomains: "Advisory Areas",
    riskQueue: "Service Opportunity Queue",
    familyCoverage: "Family client profile",
    auditLog: "Audit Log",
    auditSubtitle: "Compact role-based internal referral trail",
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
    high: "High",
    medium: "Medium",
    low: "Low",
  },
  zh: {
    product: "家族办公室 AI Agent",
    tagline: "家族办公室 AI Agent",
    thesis: "整理潜在家族客户画像，识别顾问服务需求，并生成供家族办公室与保险顾问内部跟进的客户跟进卡。",
    headerSubtitle: "供 RM 与业务拓展团队使用的内部客户引进工作流；保险是重要服务线之一，但不是保险报价流程。",
    executiveDemo: "内部演示",
    mockData: "模拟数据",
    noBackend: "未连接后端",
    pendingReviews: "转介事项：9",
    commandCenter: "客户引进 / 内部转介工作台",
    mainValue: "整理客户背景、识别顾问服务需求，并生成供顾问复核的内部客户跟进卡。",
    scenarioTitle: "场景名称",
    riskQueueCount: "需求",
    reviewRequiredStatus: "顾问复核",
    agentRunning: "Agent 运行中...",
    runCompletedShort: "客户跟进卡已生成",
    executionStatus: "工作流状态",
    classifyingRequest: "正在识别客户引进背景...",
    scanningRecords: "正在整理模拟客户画像...",
    checkingMissing: "正在检查缺失资料...",
    briefGenerated: "客户跟进卡已生成。",
    preparedFor: "对象",
    preparedBy: "生成方",
    memoStatus: "状态",
    draftForReview: "顾问复核草稿",
    scenarioSelector: "客户转介工作流",
    scenarioLibrary: "场景库",
    agentWorkspace: "客户引进工作台",
    outputReview: "输出与顾问复核",
    generatedBrief: "客户跟进卡",
    mockDataOnly: "仅使用模拟数据",
    noBackendConnected: "未连接真实后端",
    runSummary: "客户引进推理摘要",
    dataRoomTab: "引进字段",
    missingTab: "缺失资料",
    auditTab: "审计记录",
    approvalTab: "内部流转",
    viewFullBrief: "查看完整卡片",
    insuranceAdvisorReview: "保险顾问复核",
    legalReview: "法律顾问复核",
    taxReview: "税务顾问复核",
    investmentReview: "私人银行 RM 复核",
    familyPrincipalReview: "家族办公室负责人复核",
    premiumThesis: "这是家族办公室内部客户引进工作流，不是保险报价系统。",
    scenarioSubtitle: "选择客户引进或内部转介场景，由 Agent 生成客户跟进卡。",
    domain: "顾问领域",
    riskCount: "需求数量",
    review: "复核",
    agentTaskRunner: "客户跟进卡运行器",
    selectedTask: "已选引进任务",
    runAgent: "生成跟进卡",
    runReady: "Agent 就绪",
    safetyTitle: "安全边界",
    safetyText: "仅使用模拟数据 · 仅用于内部转介支持 · 需要顾问复核 · 不生成保险价格",
    workflowTitle: "客户引进执行轨迹",
    workflowSubtitle: "所选引进任务的模拟执行轨迹",
    runCompleted: "客户引进分析已完成",
    generatedDeliverable: "生成交付物",
    professionalDraft: "内部转介卡草稿",
    executiveSummary: "客户画像摘要",
    professionalReviewRequired: "需要顾问复核",
    disclaimer: "合规说明 / 免责声明",
    contextApproval: "上下文与内部流转",
    dataRoom: "引进字段上下文",
    retrievedRecords: "模拟引进选项",
    sources: "字段",
    access: "可选项",
    missingInfo: "缺失资料",
    exceptionsFound: "缺失或尚未确认事项",
    owner: "负责人",
    approvals: "所需复核团队",
    approvalSubtitle: "供家族办公室与保险相关顾问跟进的内部流转安排。",
    generateBrief: "生成流转备注",
    activeDomains: "顾问服务领域",
    riskQueue: "服务机会队列",
    familyCoverage: "家族客户画像",
    auditLog: "审计记录",
    auditSubtitle: "简要的内部转介访问记录",
    user: "用户",
    role: "角色",
    resource: "资源",
    sensitivity: "敏感度",
    time: "时间",
    action: "操作",
    standard: "标准",
    confidential: "机密",
    sensitive: "敏感",
    highlySensitive: "高度敏感",
    high: "高",
    medium: "中",
    low: "低",
  },
};

export const domains: Domain[] = [
  { id: "source", name: { en: "Client Source", zh: "客户来源" }, manages: { en: "Referral channel, relationship owner, and origination context.", zh: "转介渠道、关系负责人和来源背景。" }, agentCanDo: { en: "Summarize referral source and relationship context for advisor review.", zh: "整理客户来源与关系背景，供顾问复核。" }, riskCount: 5 },
  { id: "profile", name: { en: "Client Profile", zh: "客户画像" }, manages: { en: "Client type, family context, generation, and business-owner signals.", zh: "客户类型、家族背景、代际信息和企业主信号。" }, agentCanDo: { en: "Prepare a concise prospective family client profile.", zh: "生成简洁的潜在家族客户画像。" }, riskCount: 5 },
  { id: "advisory", name: { en: "Advisory Needs", zh: "顾问服务需求" }, manages: { en: "Family office setup, succession, trust, tax, education, and philanthropy needs.", zh: "家办设立、传承、信托、税务、教育和慈善等需求。" }, agentCanDo: { en: "Classify service opportunities and missing advisory context.", zh: "识别服务机会和缺失的顾问上下文。" }, riskCount: 7 },
  { id: "insurance", name: { en: "Insurance-related Need", zh: "保险相关需求" }, manages: { en: "Policy review, beneficiary arrangement, protection gaps, funding discussion, claims, or renewals.", zh: "保单复核、受益人安排、保障缺口、保费安排讨论、理赔或续保。" }, agentCanDo: { en: "Flag insurance-related signals for advisor review without producing prices or product recommendations.", zh: "提示保险相关信号，供顾问复核，不生成价格或产品建议。" }, riskCount: 7 },
  { id: "routing", name: { en: "Internal Routing", zh: "内部流转" }, manages: { en: "Follow-up priority and required review team.", zh: "跟进优先级与所需复核团队。" }, agentCanDo: { en: "Recommend internal routing across family office, insurance, legal, tax, and private banking advisors.", zh: "建议在家办、保险、法律、税务和私人银行顾问之间流转。" }, riskCount: 5 },
];

export const prompts: Prompt[] = [
  {
    id: "health",
    label: { en: "New Family Client Intake", zh: "新家族客户引进" },
    domain: { en: "Client Intake", zh: "客户引进" },
    command: { en: "Capture source, client type, family context, main advisory need, follow-up priority, and required review team for a new prospective family client.", zh: "整理新潜在家族客户的客户来源、客户类型、家族背景、主要顾问需求、跟进优先级和所需复核团队。" },
    description: { en: "Prepare an internal Client Intake Card for first advisor triage.", zh: "生成内部客户跟进卡，供顾问初步分流。" },
    review: { en: "Family Office Principal + Insurance Advisor", zh: "家族办公室负责人 + 保险顾问" },
    runSummary: { en: "The Agent organized a private banker referral into a Client Intake Card, identified succession and insurance-related needs, and routed the case for advisor review.", zh: "Agent 将私人银行转介整理为客户跟进卡，识别传承与保险相关需求，并建议顾问复核流转。" },
    riskCount: 6,
    activeDomainIds: ["source", "profile", "advisory", "insurance", "routing"],
  },
  {
    id: "trust",
    label: { en: "Insurance-related Need Review", zh: "保险相关需求复核" },
    domain: { en: "Insurance-related Need", zh: "保险相关需求" },
    command: { en: "Review signals for existing policy review, beneficiary arrangement, protection needs, premium funding discussion, and claims or renewal follow-up; prepare routing only, not pricing.", zh: "复核现有保单、受益人安排、保障需求、保费安排讨论、理赔或续保跟进等信号；仅生成内部流转建议，不生成报价。" },
    description: { en: "Identify what the insurance advisor should verify before any external insurer workflow.", zh: "识别进入任何外部保险公司流程前，保险顾问需要复核的事项。" },
    review: { en: "Insurance Advisor + Family Office Principal", zh: "保险顾问 + 家族办公室负责人" },
    runSummary: { en: "The Agent flagged incomplete policy context, beneficiary questions, and protection topics that need advisor confirmation before any insurer-side process.", zh: "Agent 提示保单资料不完整、受益人安排待确认，以及需要顾问确认的保障议题。" },
    riskCount: 5,
    activeDomainIds: ["profile", "insurance", "routing"],
  },
  {
    id: "meeting",
    label: { en: "Succession & Trust Coordination", zh: "传承与信托协作" },
    domain: { en: "Succession / Trust", zh: "传承 / 信托" },
    command: { en: "Coordinate wealth succession, trust and estate context, cross-border identity considerations, and insurance-related beneficiary signals into an internal referral card.", zh: "将财富传承、信托与遗产背景、跨境身份考虑，以及保险相关受益人信号整理为内部转介卡。" },
    description: { en: "Prepare a coordination card for family office, legal, tax, and insurance advisors.", zh: "为家办、法律、税务和保险顾问准备协作卡片。" },
    review: { en: "Legal Advisor + Tax Advisor + Insurance Advisor", zh: "法律顾问 + 税务顾问 + 保险顾问" },
    runSummary: { en: "The Agent connected succession and trust coordination needs with beneficiary and cross-border signals, then suggested internal routing across specialist advisors.", zh: "Agent 将传承与信托协作需求、受益人和跨境信号关联，并建议跨专业顾问内部流转。" },
    riskCount: 7,
    activeDomainIds: ["profile", "advisory", "insurance", "routing"],
  },
  {
    id: "weekly",
    label: { en: "Weekly Referral Follow-up", zh: "本周客户转介跟进" },
    domain: { en: "Referral Follow-up", zh: "客户转介跟进" },
    command: { en: "Consolidate this week’s referral cards, open missing information, follow-up priority, and required review teams for internal routing.", zh: "汇总本周客户跟进卡、缺失资料、跟进优先级和所需复核团队，供内部流转。" },
    description: { en: "Summarize service opportunities and next actions across active referral cases.", zh: "汇总当前转介案例的服务机会和后续行动。" },
    review: { en: "Family Office Principal + Relationship Managers", zh: "家族办公室负责人 + RM 团队" },
    runSummary: { en: "The Agent grouped weekly referral cards by follow-up priority, missing information, and advisor routing requirements.", zh: "Agent 按跟进优先级、缺失资料和顾问流转要求汇总本周客户转介卡。" },
    riskCount: 9,
    activeDomainIds: ["source", "profile", "advisory", "insurance", "routing"],
  },
];

export const agentRuns: Record<PromptId, AgentRunStep[]> = {
  health: [
    { name: { en: "Capture client source", zh: "整理客户来源" }, status: "Completed", detail: { en: "Classified the origin as a private banker referral with a warm relationship path.", zh: "识别为私人银行渠道转介，且关系路径明确。" }, metadata: { en: "Client Source: Private banker referral", zh: "客户来源：私人银行转介" } },
    { name: { en: "Build client profile", zh: "生成客户画像" }, status: "Completed", detail: { en: "Tagged the prospective client as an entrepreneur and business-owner family with cross-border context.", zh: "标记为企业主家庭，且存在跨境背景。" }, metadata: { en: "Client Type: Entrepreneur", zh: "客户类型：企业主" } },
    { name: { en: "Identify advisory needs", zh: "识别顾问需求" }, status: "In Review", detail: { en: "Detected wealth succession, insurance planning, and cross-border identity topics for advisor confirmation.", zh: "识别财富传承、保险规划和跨境身份议题，需顾问确认。" }, metadata: { en: "Main Advisory Need: Wealth succession", zh: "主要顾问需求：财富传承" } },
    { name: { en: "Prepare referral card", zh: "生成客户跟进卡" }, status: "Needs Human Approval", detail: { en: "Generated internal routing for family office principal, insurance advisor, and tax advisor review.", zh: "生成内部流转建议，交由家办负责人、保险顾问和税务顾问复核。" }, metadata: { en: "Follow-up Priority: High", zh: "跟进优先级：高" } },
  ],
  trust: [
    { name: { en: "Review insurance-related signal", zh: "复核保险相关信号" }, status: "Completed", detail: { en: "Captured an existing policy review request and beneficiary-arrangement question.", zh: "记录现有保单复核需求和受益人安排问题。" }, metadata: { en: "Insurance-related Need: Existing policy review", zh: "保险相关需求：现有保单复核" } },
    { name: { en: "Check missing policy context", zh: "检查保单背景缺口" }, status: "Completed", detail: { en: "Noted that policy list, beneficiary records, and renewal dates are incomplete.", zh: "提示保单清单、受益人记录和续保日期不完整。" }, metadata: { en: "Missing: policy schedule", zh: "缺失：保单清单" } },
    { name: { en: "Separate routing from pricing", zh: "区分流转与报价" }, status: "In Review", detail: { en: "Kept the output as advisor review guidance and excluded prices, premiums, and product recommendations.", zh: "输出仅保留顾问复核提示，不包含价格、保费或产品建议。" }, metadata: { en: "Boundary: No insurance pricing", zh: "边界：不生成保险价格" } },
    { name: { en: "Route to advisor review", zh: "流转至顾问复核" }, status: "Needs Human Approval", detail: { en: "Recommended insurance advisor review, with family office principal oversight.", zh: "建议保险顾问复核，并由家族办公室负责人把关。" }, metadata: { en: "Review Team: Insurance Advisor", zh: "复核团队：保险顾问" } },
  ],
  meeting: [
    { name: { en: "Map succession context", zh: "梳理传承背景" }, status: "Completed", detail: { en: "Tagged trust and estate coordination as the primary advisory need.", zh: "将信托与遗产协调标记为主要顾问需求。" }, metadata: { en: "Main Need: Trust and estate coordination", zh: "主要需求：信托与遗产协调" } },
    { name: { en: "Connect cross-border factors", zh: "关联跨境因素" }, status: "Completed", detail: { en: "Captured cross-border family and asset-location considerations for tax and legal review.", zh: "整理跨境家庭和资产所在地因素，供税务与法律顾问复核。" }, metadata: { en: "Family Context: Cross-border family", zh: "家族背景：跨境家庭" } },
    { name: { en: "Flag beneficiary signals", zh: "提示受益人信号" }, status: "In Review", detail: { en: "Noted beneficiary-arrangement questions that may affect succession coordination.", zh: "提示可能影响传承协作的受益人安排问题。" }, metadata: { en: "Insurance-related Need: Beneficiary arrangement", zh: "保险相关需求：受益人安排" } },
    { name: { en: "Prepare coordination routing", zh: "生成协作流转" }, status: "Needs Human Approval", detail: { en: "Routed the card to legal, tax, insurance, and family office advisor review.", zh: "建议流转至法律、税务、保险和家办顾问复核。" }, metadata: { en: "Priority: High", zh: "优先级：高" } },
  ],
  weekly: [
    { name: { en: "Consolidate referral cards", zh: "汇总客户转介卡" }, status: "Completed", detail: { en: "Grouped active mock referrals by client source, advisory need, and review team.", zh: "按客户来源、顾问需求和复核团队汇总当前模拟转介。" }, metadata: { en: "Referral Cards: 9", zh: "客户转介卡：9" } },
    { name: { en: "Prioritize follow-up", zh: "排序跟进优先级" }, status: "Completed", detail: { en: "Separated high, medium, and low follow-up items for internal routing.", zh: "按高、中、低跟进优先级分类。" }, metadata: { en: "High Priority: 3", zh: "高优先级：3" } },
    { name: { en: "Check missing information", zh: "检查缺失资料" }, status: "In Review", detail: { en: "Highlighted open information requests before advisor outreach.", zh: "提示顾问对接前仍需补充的资料。" }, metadata: { en: "Open Items: 4", zh: "待补充事项：4" } },
    { name: { en: "Prepare weekly routing", zh: "生成本周流转建议" }, status: "Needs Human Approval", detail: { en: "Recommended weekly ownership across family office principal, relationship managers, and specialist advisors.", zh: "建议由家办负责人、RM 和专业顾问分工跟进。" }, metadata: { en: "Owner: Family Office Principal", zh: "负责人：家族办公室负责人" } },
  ],
};

export const agentResponses: Record<PromptId, AgentResponse> = {
  health: {
    title: { en: "Internal referral card for a new prospective family client", zh: "新潜在家族客户内部引进卡" },
    briefId: "#CIC-001",
    preparedFor: { en: "Family Office Principal and Advisory Team", zh: "家族办公室负责人及顾问团队" },
    preparedBy: { en: "Family Office AI Agent", zh: "家族办公室 AI Agent" },
    memoReview: { en: "Family office, insurance, and tax advisor review", zh: "家办、保险与税务顾问复核" },
    memoStatus: { en: "Internal draft referral card", zh: "内部客户跟进卡草稿" },
    executiveSummary: { en: "The prospective client is an entrepreneur family referred by a private banker. The available context suggests family protection, wealth succession, and cross-border identity considerations. The case should be reviewed by the family office principal, insurance advisor, and tax advisor before external follow-up.", zh: "该潜在客户为企业主家庭，由私人银行渠道转介，涉及家族保障、财富传承和跨境身份安排。当前资料显示客户可能需要家族办公室负责人、保险顾问及税务顾问共同复核。" },
    reviewRequired: { en: "Family office principal should confirm priority first, then route insurance-related and tax/cross-border topics to specialist advisors.", zh: "建议先由家族办公室负责人判断客户优先级，再将保险相关及税务/跨境议题分派给专业顾问。" },
    disclaimer: internalDisclaimer,
    sections: [
      { key: "profile", heading: { en: "Client Profile Summary", zh: "客户画像摘要" }, items: { en: ["Entrepreneur family referred by a private banker", "Business-owner family context with cross-border considerations", "Potential need for coordinated family office and insurance advisor follow-up"], zh: ["企业主家庭，由私人银行渠道转介", "涉及企业主家庭背景和跨境因素", "可能需要家族办公室与保险顾问共同跟进"] } },
      { key: "needs", heading: { en: "Identified Advisory Needs", zh: "已识别顾问需求" }, ordered: true, items: { en: ["Review existing policies and beneficiary arrangements", "Confirm family succession and trust-structure context", "Assess whether cross-border identity and asset location affect advisor allocation"], zh: ["需要梳理现有保单及受益人安排", "家族传承及信托结构需要进一步确认", "跨境身份和资产所在地可能影响后续顾问配置"] } },
      { key: "signals", heading: { en: "Insurance-related Signals", zh: "保险相关信号" }, ordered: true, items: { en: ["Client appears to have existing insurance arrangements, but the policy list is incomplete", "Beneficiary arrangement needs advisor review", "Medical, critical illness, or key person protection needs are not confirmed yet"], zh: ["客户已有部分保险配置，但保单清单不完整", "受益人安排需要复核", "是否需要医疗、重疾或关键人物保障仍需顾问确认"] } },
      { key: "missing", heading: { en: "Missing Information", zh: "缺失资料" }, items: { en: ["Full policy schedule", "Trust or estate structure summary", "Jurisdictions for family members and key assets"], zh: ["完整保单清单", "信托或遗产结构摘要", "家族成员及主要资产所在地"] } },
      { key: "routing", heading: { en: "Recommended Internal Routing", zh: "建议内部流转" }, ordered: true, items: { en: ["Family office principal to confirm follow-up priority", "Insurance advisor to review existing policies and protection gaps", "If trust, tax, or cross-border identity is involved, assign legal and tax advisors"], zh: ["先由家族办公室负责人判断客户优先级", "转交保险顾问复核现有保单和保障缺口", "如涉及信托、税务或跨境身份，再分派给法律/税务顾问"] } },
      { key: "followUp", heading: { en: "Follow-up Actions", zh: "后续跟进行动" }, items: { en: ["Request client consent for advisor review", "Collect missing policy and family-structure materials", "Schedule internal triage before any external insurer or legal process"], zh: ["确认客户授权顾问复核", "补充保单及家族结构资料", "在进入任何外部保险公司或法律流程前完成内部初审"] } },
      { key: "compliance", heading: { en: "Compliance / Disclaimer", zh: "合规说明 / 免责声明" }, items: { en: [internalDisclaimer.en], zh: [internalDisclaimer.zh] } },
    ],
  },
  trust: {
    title: { en: "Internal insurance-related need review card", zh: "保险相关需求内部复核卡" },
    briefId: "#CIC-002",
    preparedFor: { en: "Insurance Advisor and Family Office Principal", zh: "保险顾问及家族办公室负责人" },
    preparedBy: { en: "Family Office AI Agent", zh: "家族办公室 AI Agent" },
    memoReview: { en: "Advisor review before external follow-up", zh: "外部跟进前顾问复核" },
    memoStatus: { en: "Internal routing draft", zh: "内部流转草稿" },
    executiveSummary: { en: "The referral indicates an insurance-related need, primarily existing policy review and beneficiary arrangement. The current mock file is incomplete and should be treated as an internal advisor review card only, without prices, premiums, or product recommendations.", zh: "该转介显示存在保险相关需求，重点为现有保单复核及受益人安排。当前模拟资料不完整，应仅作为内部顾问复核卡使用，不包含价格、保费或产品建议。" },
    reviewRequired: { en: "Insurance advisor review is required, with family office principal oversight on priority and client relationship context.", zh: "需要保险顾问复核，并由家族办公室负责人确认优先级和客户关系背景。" },
    disclaimer: internalDisclaimer,
    sections: [
      { key: "profile", heading: { en: "Client Profile Summary", zh: "客户画像摘要" }, items: { en: ["Existing client referral with an unconfirmed insurance-related need", "Family context suggests beneficiary and renewal questions", "No external insurer workflow has been initiated"], zh: ["现有客户转介绍，保险相关需求尚待确认", "家族背景显示可能涉及受益人及续保问题", "尚未进入外部保险公司流程"] } },
      { key: "needs", heading: { en: "Identified Advisory Needs", zh: "已识别顾问需求" }, ordered: true, items: { en: ["Review existing policy schedule", "Confirm beneficiary arrangement", "Clarify whether claims or renewal follow-up is needed"], zh: ["复核现有保单清单", "确认受益人安排", "确认是否涉及理赔或续保跟进"] } },
      { key: "signals", heading: { en: "Insurance-related Signals", zh: "保险相关信号" }, ordered: true, items: { en: ["Policy list and ownership details are incomplete", "Premium funding may require discussion but no recommendation is generated", "Protection needs are not confirmed yet"], zh: ["保单清单及持有人信息不完整", "可能需要讨论保费安排，但不生成建议", "保障需求尚未确认"] } },
      { key: "missing", heading: { en: "Missing Information", zh: "缺失资料" }, items: { en: ["Policy list", "Beneficiary record", "Renewal or claims timeline"], zh: ["保单清单", "受益人记录", "续保或理赔时间线"] } },
      { key: "routing", heading: { en: "Recommended Internal Routing", zh: "建议内部流转" }, ordered: true, items: { en: ["Insurance advisor to review policy documents", "Family office principal to confirm relationship sensitivity", "Legal advisor only if beneficiary or estate questions require escalation"], zh: ["由保险顾问复核保单文件", "由家族办公室负责人确认客户关系敏感度", "如受益人或遗产问题需要升级，再交法律顾问"] } },
      { key: "followUp", heading: { en: "Follow-up Actions", zh: "后续跟进行动" }, items: { en: ["Request missing policy documents", "Prepare client questions for advisor call", "Avoid pricing or product language in the intake stage"], zh: ["索取缺失保单文件", "准备顾问沟通问题清单", "客户引进阶段避免价格或产品建议表述"] } },
      { key: "compliance", heading: { en: "Compliance / Disclaimer", zh: "合规说明 / 免责声明" }, items: { en: [internalDisclaimer.en], zh: [internalDisclaimer.zh] } },
    ],
  },
  meeting: {
    title: { en: "Succession and trust coordination referral card", zh: "传承与信托协作内部转介卡" },
    briefId: "#CIC-003",
    preparedFor: { en: "Family Office, Legal, Tax, and Insurance Advisors", zh: "家办、法律、税务及保险顾问" },
    preparedBy: { en: "Family Office AI Agent", zh: "家族办公室 AI Agent" },
    memoReview: { en: "Cross-advisor coordination review", zh: "跨顾问协作复核" },
    memoStatus: { en: "Internal coordination draft", zh: "内部协作草稿" },
    executiveSummary: { en: "The client context suggests wealth succession, trust and estate coordination, and cross-border identity questions. Insurance-related signals are limited to beneficiary arrangement and should be reviewed as part of broader family office coordination.", zh: "客户背景显示可能涉及财富传承、信托与遗产协调及跨境身份问题。保险相关信号主要集中在受益人安排，应纳入更广泛的家族办公室协作中复核。" },
    reviewRequired: { en: "Legal and tax advisors should review structure questions before insurance-related beneficiary follow-up is finalized.", zh: "建议法律及税务顾问先复核结构性问题，再确认保险相关受益人跟进事项。" },
    disclaimer: internalDisclaimer,
    sections: [
      { key: "profile", heading: { en: "Client Profile Summary", zh: "客户画像摘要" }, items: { en: ["Family principal and second-generation members may both be involved", "Trust or estate structure appears relevant", "Cross-border identity considerations may affect routing"], zh: ["家族负责人及第二代成员可能共同参与", "可能涉及信托或遗产结构", "跨境身份因素可能影响顾问流转"] } },
      { key: "needs", heading: { en: "Identified Advisory Needs", zh: "已识别顾问需求" }, ordered: true, items: { en: ["Wealth succession review", "Trust and estate coordination", "Cross-border identity and tax context confirmation"], zh: ["财富传承复核", "信托与遗产协调", "跨境身份及税务背景确认"] } },
      { key: "signals", heading: { en: "Insurance-related Signals", zh: "保险相关信号" }, ordered: true, items: { en: ["Beneficiary arrangement may need to align with succession plan", "Existing policy ownership details are not fully captured", "Insurance advisor review should follow legal/tax context confirmation"], zh: ["受益人安排可能需要与传承方案保持一致", "现有保单持有人信息尚未完整记录", "保险顾问复核应在法律/税务背景确认后进行"] } },
      { key: "missing", heading: { en: "Missing Information", zh: "缺失资料" }, items: { en: ["Trust deed or structure summary", "Family member residency profile", "Beneficiary and policy ownership records"], zh: ["信托契约或结构摘要", "家族成员居留身份画像", "受益人及保单持有人记录"] } },
      { key: "routing", heading: { en: "Recommended Internal Routing", zh: "建议内部流转" }, ordered: true, items: { en: ["Family office principal to define engagement scope", "Legal and tax advisors to review trust, estate, and cross-border issues", "Insurance advisor to review beneficiary alignment after structure context is clarified"], zh: ["由家族办公室负责人确认服务范围", "法律及税务顾问复核信托、遗产和跨境问题", "结构背景明确后，由保险顾问复核受益人安排"] } },
      { key: "followUp", heading: { en: "Follow-up Actions", zh: "后续跟进行动" }, items: { en: ["Collect structure documents", "Schedule advisor coordination call", "Prepare client question list on family governance and succession goals"], zh: ["收集结构文件", "安排顾问协作会议", "准备关于家族治理和传承目标的客户问题清单"] } },
      { key: "compliance", heading: { en: "Compliance / Disclaimer", zh: "合规说明 / 免责声明" }, items: { en: [internalDisclaimer.en], zh: [internalDisclaimer.zh] } },
    ],
  },
  weekly: {
    title: { en: "Weekly internal referral follow-up card", zh: "本周内部客户转介跟进卡" },
    briefId: "#CIC-004",
    preparedFor: { en: "Family Office Principal and Relationship Managers", zh: "家族办公室负责人及 RM 团队" },
    preparedBy: { en: "Family Office AI Agent", zh: "家族办公室 AI Agent" },
    memoReview: { en: "Weekly internal routing review", zh: "本周内部流转复核" },
    memoStatus: { en: "Weekly follow-up draft", zh: "本周跟进草稿" },
    executiveSummary: { en: "This week’s mock referral queue includes new family client intake, insurance-related need review, succession and trust coordination, and open missing-information follow-up. The highest-priority items require principal triage before specialist advisors contact clients.", zh: "本周模拟转介队列包括新家族客户引进、保险相关需求复核、传承与信托协作，以及缺失资料跟进。高优先级事项需先由负责人分流，再由专业顾问联系客户。" },
    reviewRequired: { en: "Family office principal and relationship managers should confirm owners, priority, and client-contact sequence.", zh: "家族办公室负责人及 RM 团队需确认负责人、优先级和客户联系顺序。" },
    disclaimer: internalDisclaimer,
    sections: [
      { key: "profile", heading: { en: "Client Profile Summary", zh: "客户画像摘要" }, items: { en: ["Nine mock referral items are active this week", "Sources include private banker, insurance advisor, business partner, and family office network", "Client types include entrepreneur, family principal, second generation, and shareholder contacts"], zh: ["本周共有 9 个模拟转介事项", "来源包括私人银行、保险顾问、商业合作伙伴和家族办公室网络", "客户类型包括企业主、家族负责人、第二代成员和股东联系人"] } },
      { key: "needs", heading: { en: "Identified Advisory Needs", zh: "已识别顾问需求" }, ordered: true, items: { en: ["Family office setup and wealth succession", "Insurance planning and policy review", "Trust, tax, education, and philanthropy follow-up"], zh: ["家族办公室设立与财富传承", "保险规划及保单复核", "信托、税务、教育和慈善后续跟进"] } },
      { key: "signals", heading: { en: "Insurance-related Signals", zh: "保险相关信号" }, ordered: true, items: { en: ["Three referrals mention existing policy review", "Two referrals require beneficiary-arrangement confirmation", "One referral has claims or renewal follow-up pending"], zh: ["3 个转介提及现有保单复核", "2 个转介需要确认受益人安排", "1 个转介存在理赔或续保跟进事项"] } },
      { key: "missing", heading: { en: "Missing Information", zh: "缺失资料" }, items: { en: ["Client consent for advisor review", "Family context details for second-generation contacts", "Required review team not confirmed for two cards"], zh: ["客户授权顾问复核尚未确认", "第二代成员相关家族背景不完整", "两张卡片尚未确认所需复核团队"] } },
      { key: "routing", heading: { en: "Recommended Internal Routing", zh: "建议内部流转" }, ordered: true, items: { en: ["High-priority cards to family office principal first", "Insurance-related cards to insurance advisor after consent and missing documents are confirmed", "Trust, tax, and cross-border matters to legal and tax advisors"], zh: ["高优先级卡片先交家族办公室负责人", "保险相关卡片在确认授权及资料后交保险顾问", "信托、税务和跨境事项交法律及税务顾问"] } },
      { key: "followUp", heading: { en: "Follow-up Actions", zh: "后续跟进行动" }, items: { en: ["Assign owners for every referral card", "Confirm client-contact sequence", "Close missing-information requests before external advisor outreach"], zh: ["为每张转介卡指定负责人", "确认客户联系顺序", "在外部顾问跟进前补齐缺失资料"] } },
      { key: "compliance", heading: { en: "Compliance / Disclaimer", zh: "合规说明 / 免责声明" }, items: { en: [internalDisclaimer.en], zh: [internalDisclaimer.zh] } },
    ],
  },
};

export const dataRooms: DataRoomSource[] = [
  { name: { en: "Client Source", zh: "客户来源" }, count: { en: "5 options", zh: "5 个选项" }, sensitivity: { en: "Confidential", zh: "机密" }, lastUpdated: { en: "Mock intake field", zh: "模拟引进字段" }, access: { en: "Existing client referral · Private banker referral · Insurance advisor referral · Family office network · Business partner", zh: "现有客户转介绍 · 私人银行转介 · 保险顾问转介 · 家族办公室网络 · 商业合作伙伴" }, promptIds: ["health", "weekly"] },
  { name: { en: "Client Type", zh: "客户类型" }, count: { en: "5 options", zh: "5 个选项" }, sensitivity: { en: "Confidential", zh: "机密" }, lastUpdated: { en: "Mock intake field", zh: "模拟引进字段" }, access: { en: "Family principal · Second generation · Entrepreneur · Family trust contact · Corporate shareholder", zh: "家族负责人 · 第二代成员 · 企业主 · 家族信托联系人 · 公司股东" }, promptIds: ["health", "meeting", "weekly"] },
  { name: { en: "Main Advisory Need", zh: "主要顾问需求" }, count: { en: "7 options", zh: "7 个选项" }, sensitivity: { en: "Sensitive", zh: "敏感" }, lastUpdated: { en: "Mock intake field", zh: "模拟引进字段" }, access: { en: "Family office setup · Insurance planning · Wealth succession · Trust and estate coordination · Cross-border identity · Education planning · Philanthropy planning", zh: "家族办公室设立 · 保险规划 · 财富传承 · 信托与遗产协调 · 跨境身份 · 教育规划 · 慈善规划" }, promptIds: ["health", "meeting", "weekly"] },
  { name: { en: "Insurance-related Need", zh: "保险相关需求" }, count: { en: "7 options", zh: "7 个选项" }, sensitivity: { en: "Sensitive", zh: "敏感" }, lastUpdated: { en: "Mock intake field", zh: "模拟引进字段" }, access: { en: "Existing policy review · Beneficiary arrangement · Medical or critical illness protection · Key person protection · Premium funding discussion · Claims or renewal follow-up · Not confirmed yet", zh: "现有保单复核 · 受益人安排 · 医疗或重疾保障 · 关键人物保障 · 保费安排讨论 · 理赔或续保跟进 · 尚未确认" }, promptIds: ["health", "trust", "meeting", "weekly"] },
  { name: { en: "Family Context", zh: "家族背景" }, count: { en: "5 options", zh: "5 个选项" }, sensitivity: { en: "Highly Sensitive", zh: "高度敏感" }, lastUpdated: { en: "Mock intake field", zh: "模拟引进字段" }, access: { en: "Cross-border family · Business owner family · Multiple generations involved · Trust or estate structure involved · Education planning needed", zh: "跨境家庭 · 企业主家庭 · 涉及多代成员 · 涉及信托或遗产结构 · 需要教育规划" }, promptIds: ["health", "meeting", "weekly"] },
  { name: { en: "Follow-up Priority", zh: "跟进优先级" }, count: { en: "3 options", zh: "3 个选项" }, sensitivity: { en: "Standard", zh: "标准" }, lastUpdated: { en: "Mock intake field", zh: "模拟引进字段" }, access: { en: "High · Medium · Low", zh: "高 · 中 · 低" }, promptIds: ["health", "trust", "meeting", "weekly"] },
  { name: { en: "Required Review Team", zh: "所需复核团队" }, count: { en: "5 options", zh: "5 个选项" }, sensitivity: { en: "Confidential", zh: "机密" }, lastUpdated: { en: "Mock intake field", zh: "模拟引进字段" }, access: { en: "Family office principal · Insurance advisor · Legal advisor · Tax advisor · Private banker", zh: "家族办公室负责人 · 保险顾问 · 法律顾问 · 税务顾问 · 私人银行 RM" }, promptIds: ["health", "trust", "meeting", "weekly"] },
];

export const familyMembers = [
  { label: { en: "Family principal", zh: "家族负责人" }, count: 2 },
  { label: { en: "Second generation", zh: "第二代成员" }, count: 5 },
  { label: { en: "Advisor contacts", zh: "顾问联系人" }, count: 5 },
];

export const riskTasks = [
  { label: { en: "High priority follow-up", zh: "高优先级跟进" }, count: 3, tone: "high" },
  { label: { en: "Missing information", zh: "缺失资料" }, count: 4, tone: "medium" },
  { label: { en: "Advisor review", zh: "顾问复核" }, count: 5, tone: "low" },
];

export const missingInformation: Record<PromptId, MissingInformationItem[]> = {
  health: [
    { item: { en: "Client consent for internal advisor review not confirmed", zh: "客户授权内部顾问复核尚未确认" }, priority: "High", owner: { en: "Relationship Manager", zh: "RM" } },
    { item: { en: "Policy schedule and beneficiary records incomplete", zh: "保单清单及受益人记录不完整" }, priority: "High", owner: { en: "Insurance Advisor", zh: "保险顾问" } },
    { item: { en: "Cross-border identity and asset-location details pending", zh: "跨境身份及资产所在地资料待补充" }, priority: "Medium", owner: { en: "Tax Advisor", zh: "税务顾问" } },
  ],
  trust: [
    { item: { en: "Existing policy list missing", zh: "现有保单清单缺失" }, priority: "High", owner: { en: "Insurance Advisor", zh: "保险顾问" } },
    { item: { en: "Beneficiary arrangement not confirmed", zh: "受益人安排尚未确认" }, priority: "High", owner: { en: "Insurance Advisor", zh: "保险顾问" } },
    { item: { en: "Claims or renewal follow-up status not confirmed", zh: "理赔或续保跟进状态尚未确认" }, priority: "Medium", owner: { en: "Relationship Manager", zh: "RM" } },
  ],
  meeting: [
    { item: { en: "Trust or estate structure summary missing", zh: "信托或遗产结构摘要缺失" }, priority: "High", owner: { en: "Legal Advisor", zh: "法律顾问" } },
    { item: { en: "Family member residency profile incomplete", zh: "家族成员居留身份画像不完整" }, priority: "Medium", owner: { en: "Tax Advisor", zh: "税务顾问" } },
    { item: { en: "Beneficiary records need alignment review", zh: "受益人记录需进行一致性复核" }, priority: "Medium", owner: { en: "Insurance Advisor", zh: "保险顾问" } },
  ],
  weekly: [
    { item: { en: "Owner not assigned for two referral cards", zh: "两张客户转介卡尚未指定负责人" }, priority: "High", owner: { en: "Family Office Principal", zh: "家族办公室负责人" } },
    { item: { en: "Client source missing on one business partner referral", zh: "一个商业合作伙伴转介缺少客户来源说明" }, priority: "Medium", owner: { en: "Relationship Manager", zh: "RM" } },
    { item: { en: "Review team not confirmed for two cards", zh: "两张卡片尚未确认复核团队" }, priority: "Medium", owner: { en: "Family Office Coordinator", zh: "家办协调人" } },
    { item: { en: "Follow-up priority still low-confidence for one second-generation contact", zh: "一位第二代成员联系人的跟进优先级仍待确认" }, priority: "Low", owner: { en: "Relationship Manager", zh: "RM" } },
  ],
};

export const approvalItems: ApprovalItem[] = [
  { category: { en: "Family Office Principal", zh: "家族办公室负责人" }, pending: 3, status: { en: "Priority and relationship context review", zh: "优先级及客户关系背景复核" }, promptIds: ["health", "trust", "meeting", "weekly"] },
  { category: { en: "Insurance Advisor", zh: "保险顾问" }, pending: 3, status: { en: "Insurance-related need and policy context review", zh: "保险相关需求及保单背景复核" }, promptIds: ["health", "trust", "meeting", "weekly"] },
  { category: { en: "Legal Advisor", zh: "法律顾问" }, pending: 2, status: { en: "Trust, estate, and beneficiary alignment review", zh: "信托、遗产及受益人一致性复核" }, promptIds: ["meeting", "weekly"] },
  { category: { en: "Tax Advisor", zh: "税务顾问" }, pending: 2, status: { en: "Cross-border identity and residency context review", zh: "跨境身份及居留背景复核" }, promptIds: ["health", "meeting", "weekly"] },
  { category: { en: "Private Banker", zh: "私人银行 RM" }, pending: 1, status: { en: "Referral source and client-contact sequence confirmation", zh: "转介来源及客户联系顺序确认" }, promptIds: ["health", "weekly"] },
];

export const auditLogs: AuditLog[] = [
  { user: { en: "Relationship Manager", zh: "RM" }, role: { en: "Intake Owner", zh: "引进负责人" }, resource: { en: "Client Intake Card", zh: "客户跟进卡" }, sensitivity: { en: "Confidential", zh: "机密" }, time: { en: "10 min ago", zh: "10 分钟前" }, action: { en: "Generated", zh: "生成" } },
  { user: { en: "Family Office Principal", zh: "家族办公室负责人" }, role: { en: "Reviewer", zh: "复核人" }, resource: { en: "Referral Card", zh: "内部转介卡" }, sensitivity: { en: "Confidential", zh: "机密" }, time: { en: "35 min ago", zh: "35 分钟前" }, action: { en: "Viewed", zh: "查看" } },
  { user: { en: "Insurance Advisor", zh: "保险顾问" }, role: { en: "Advisor Reviewer", zh: "顾问复核人" }, resource: { en: "Insurance-related Need", zh: "保险相关需求" }, sensitivity: { en: "Sensitive", zh: "敏感" }, time: { en: "1 hr ago", zh: "1 小时前" }, action: { en: "Reviewed", zh: "复核" } },
  { user: { en: "Tax Advisor", zh: "税务顾问" }, role: { en: "Advisor Reviewer", zh: "顾问复核人" }, resource: { en: "Cross-border Context", zh: "跨境背景" }, sensitivity: { en: "Sensitive", zh: "敏感" }, time: { en: "2 hrs ago", zh: "2 小时前" }, action: { en: "Flagged follow-up", zh: "标记跟进" } },
];
