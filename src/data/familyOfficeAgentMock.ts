export type PromptId = "health" | "trust" | "meeting" | "weekly";
export type StepStatus = "Completed" | "In Review" | "Needs Human Approval";

export type Domain = {
  id: string;
  name: string;
  manages: string;
  agentCanDo: string;
  riskCount: number;
};

export type Prompt = {
  id: PromptId;
  label: string;
  command: string;
  activeDomainIds: string[];
};

export type AgentRunStep = {
  name: string;
  status: StepStatus;
  detail: string;
};

export type AgentResponse = {
  title: string;
  sections: Array<{
    heading: string;
    items: string[];
    ordered?: boolean;
    priority?: "high" | "medium" | "low";
  }>;
  note?: {
    label: string;
    text: string;
  };
  generatedMaterials?: string[];
};

export type DataRoomSource = {
  name: string;
  count: string;
  sensitivity: "Standard" | "Confidential" | "Sensitive" | "Highly Sensitive";
  lastUpdated: string;
  access: string;
  promptIds: PromptId[];
};

export const domains: Domain[] = [
  {
    id: "health",
    name: "Health & Genetic Risk",
    manages: "Health checks, family history, genetic risk reports, and physician notes.",
    agentCanDo: "Organize records, identify missing reports, and prepare briefs for medical review.",
    riskCount: 3,
  },
  {
    id: "wealth",
    name: "Wealth & Assets",
    manages: "Insurance policies, properties, holdings, operating companies, and asset files.",
    agentCanDo: "Flag document gaps, compare review windows, and prepare asset context packs.",
    riskCount: 4,
  },
  {
    id: "legal",
    name: "Legal & Succession",
    manages: "Trust deeds, wills, succession plans, resolutions, and counsel correspondence.",
    agentCanDo: "Create review checklists and route issues to legal counsel for professional review.",
    riskCount: 2,
  },
  {
    id: "tax",
    name: "Tax & Residency",
    manages: "Residency calendars, passport data, tax folders, and cross-border reminders.",
    agentCanDo: "Surface missing records and prepare supporting materials for tax advisor review.",
    riskCount: 1,
  },
  {
    id: "education",
    name: "Education & Next Generation Development",
    manages: "School applications, mentorship goals, development plans, and milestone tracking.",
    agentCanDo: "Track missing materials and summarize next-generation planning actions.",
    riskCount: 3,
  },
  {
    id: "governance",
    name: "Family Governance",
    manages: "Meeting minutes, family council decisions, charters, and task ownership.",
    agentCanDo: "Generate meeting briefs, decision lists, and post-meeting task trackers.",
    riskCount: 2,
  },
  {
    id: "privacy",
    name: "Privacy & Security",
    manages: "Access policies, audit logs, data sensitivity, and approval boundaries.",
    agentCanDo: "Show access trails, enforce role context, and mark human approval requirements.",
    riskCount: 1,
  },
  {
    id: "philanthropy",
    name: "Philanthropy & Impact",
    manages: "Foundation projects, grants, annual reports, budgets, and impact metrics.",
    agentCanDo: "Summarize project status and flag missing impact reporting data.",
    riskCount: 1,
  },
];

export const prompts: Prompt[] = [
  {
    id: "health",
    label: "Review family health and genetic risk",
    command: "Review family health and genetic risk across recent records and prepare supporting materials for physician review.",
    activeDomainIds: ["health", "privacy"],
  },
  {
    id: "trust",
    label: "Check asset and trust documents",
    command: "Check asset and trust documents for upcoming review windows, outdated beneficiary records, and missing governance files.",
    activeDomainIds: ["wealth", "legal", "tax", "privacy"],
  },
  {
    id: "meeting",
    label: "Prepare next week’s family meeting brief",
    command: "Prepare next week’s family meeting brief with risk items, agenda, generated materials, and task ownership.",
    activeDomainIds: ["health", "legal", "education", "governance", "philanthropy"],
  },
  {
    id: "weekly",
    label: "Summarize this week’s family office risk items",
    command: "Summarize this week’s family office risk items and group next steps for professional review.",
    activeDomainIds: ["health", "legal", "tax", "education", "philanthropy", "privacy"],
  },
];

export const agentRuns: Record<PromptId, AgentRunStep[]> = {
  health: [
    { name: "Classify task type", status: "Completed", detail: "Detected health, genetic risk, and privacy-sensitive review request." },
    { name: "Retrieve relevant records", status: "Completed", detail: "Pulled recent health checks, family medical history, genetic testing reports, and physician notes." },
    { name: "Check missing information", status: "Completed", detail: "Compared annual review coverage and interpretation status for mock records." },
    { name: "Generate risk summary", status: "In Review", detail: "Prepared risk flags without drawing medical conclusions." },
    { name: "Produce action recommendations", status: "In Review", detail: "Drafted reminders and communication materials for medical professionals." },
    { name: "Mark professional review requirements", status: "Needs Human Approval", detail: "Physician or genetic counselor review is required before conclusions are used." },
  ],
  trust: [
    { name: "Classify task type", status: "Completed", detail: "Detected asset, trust, legal, tax, and governance document review." },
    { name: "Retrieve relevant records", status: "Completed", detail: "Pulled trust documents, insurance files, shareholding records, and property documents." },
    { name: "Check missing information", status: "Completed", detail: "Matched beneficiary metadata, review windows, and required board resolutions." },
    { name: "Generate risk summary", status: "Completed", detail: "Flagged document maintenance risks for review." },
    { name: "Produce action recommendations", status: "In Review", detail: "Prepared counsel checklist and family office manager task list." },
    { name: "Mark professional review requirements", status: "Needs Human Approval", detail: "Legal, tax, and investment professionals must review related conclusions." },
  ],
  meeting: [
    { name: "Classify task type", status: "Completed", detail: "Detected governance meeting preparation across multiple family office domains." },
    { name: "Retrieve relevant records", status: "Completed", detail: "Pulled current risk tasks, governance minutes, education plans, and philanthropy project status." },
    { name: "Check missing information", status: "Completed", detail: "Validated agenda inputs and missing education application materials." },
    { name: "Generate risk summary", status: "Completed", detail: "Grouped weekly risks for discussion, not final decisions." },
    { name: "Produce action recommendations", status: "Completed", detail: "Generated brief, decision list, and post-meeting tracker." },
    { name: "Mark professional review requirements", status: "Needs Human Approval", detail: "Family principal and relevant advisors approve materials before circulation." },
  ],
  weekly: [
    { name: "Classify task type", status: "Completed", detail: "Detected weekly cross-domain risk summary request." },
    { name: "Retrieve relevant records", status: "Completed", detail: "Pulled risk tasks from health, legal, tax, education, philanthropy, and audit contexts." },
    { name: "Check missing information", status: "Completed", detail: "Checked passport, visa, application, and reporting gaps." },
    { name: "Generate risk summary", status: "Completed", detail: "Prioritized issues into high, medium, and low review bands." },
    { name: "Produce action recommendations", status: "In Review", detail: "Drafted a professional confirmation schedule for this week." },
    { name: "Mark professional review requirements", status: "Needs Human Approval", detail: "Specialist advisors must confirm medical, legal, tax, and investment implications." },
  ],
};

export const agentResponses: Record<PromptId, AgentResponse> = {
  health: {
    title: "Family Health & Genetic Risk Review",
    sections: [
      { heading: "Retrieved records", items: ["18 health check reports from the last three years", "6 family medical history records", "3 genetic testing reports", "4 private physician notes"] },
      { heading: "Findings", items: ["Second-generation family member A is missing a health check report from the last 12 months", "Repeated cardiovascular risk indicators appear in family history records", "One genetic testing report does not include physician interpretation"] },
      { heading: "Recommended actions", items: ["Arrange physician review of the family health summary", "Create annual screening reminders for relevant members", "Generate a communication brief for a genetic counselor"] },
    ],
    note: { label: "Compliance note", text: "This output is for information organization and communication preparation only. It does not constitute medical diagnosis. All medical conclusions must be reviewed by a physician or genetic counselor." },
  },
  trust: {
    title: "Asset & Trust Document Review",
    sections: [
      { heading: "Retrieved records", items: ["5 trust documents", "11 insurance documents", "8 company shareholding records", "6 property documents"] },
      { heading: "Findings", items: ["One trust document enters its review window within 90 days", "Two insurance beneficiary records are outdated", "One company shareholding file is missing the latest board resolution"] },
      { heading: "Recommended actions", items: ["Prepare a review checklist for legal counsel", "Ask the family office manager to update beneficiary information", "Collect missing corporate governance documents"] },
    ],
    note: { label: "Disclaimer", text: "This output is for document organization and risk flagging only. It does not constitute legal, tax, or investment advice." },
  },
  meeting: {
    title: "Family Meeting Brief Preparation",
    sections: [
      { heading: "Key risk items this week", items: ["2 health review items", "1 trust document review item", "3 missing education application materials", "Philanthropy annual impact report requires update"] },
      { heading: "Meeting agenda", ordered: true, items: ["Family health and risk updates", "Asset and trust document review", "Next-generation education planning", "Philanthropy budget and impact reporting", "Post-meeting task assignment"] },
    ],
    generatedMaterials: ["Family Meeting Brief", "Decision Items List", "Post-Meeting Task Tracker"],
  },
  weekly: {
    title: "Weekly Family Office Risk Summary",
    sections: [
      { heading: "High priority", priority: "high", items: ["Genetic risk report requires physician review", "Trust document enters review window"] },
      { heading: "Medium priority", priority: "medium", items: ["Passport and visa records need updating", "Education application materials are incomplete"] },
      { heading: "Low priority", priority: "low", items: ["Philanthropy impact report needs additional data"] },
      { heading: "Suggested next steps", items: ["Schedule separate confirmations with physician, legal counsel, and the family office principal this week"] },
    ],
  },
};

export const dataRooms: DataRoomSource[] = [
  { name: "Family Members", count: "12 people", sensitivity: "Confidential", lastUpdated: "Updated today", access: "Family Principal + Family Office Manager", promptIds: ["health", "meeting", "weekly"] },
  { name: "Health Records", count: "18 files", sensitivity: "Highly Sensitive", lastUpdated: "Updated 2 days ago", access: "Medical Advisor + Family Principal", promptIds: ["health", "meeting", "weekly"] },
  { name: "Asset Documents", count: "30 files", sensitivity: "Highly Sensitive", lastUpdated: "Updated 4 days ago", access: "Family Principal + Investment Advisor", promptIds: ["trust", "meeting"] },
  { name: "Legal Documents", count: "14 files", sensitivity: "Highly Sensitive", lastUpdated: "Updated 1 week ago", access: "Legal Counsel + Family Principal", promptIds: ["trust", "meeting", "weekly"] },
  { name: "Tax & Residency", count: "21 records", sensitivity: "Sensitive", lastUpdated: "Updated 3 days ago", access: "Tax Advisor + Family Office Manager", promptIds: ["trust", "weekly"] },
  { name: "Education Plans", count: "9 plans", sensitivity: "Confidential", lastUpdated: "Updated yesterday", access: "Family Office Manager + Education Lead", promptIds: ["meeting", "weekly"] },
  { name: "Governance Minutes", count: "16 minutes", sensitivity: "Confidential", lastUpdated: "Updated 5 days ago", access: "Family Council + Family Office Manager", promptIds: ["meeting", "weekly"] },
  { name: "Philanthropy Projects", count: "7 projects", sensitivity: "Standard", lastUpdated: "Updated 6 days ago", access: "Foundation Lead + Family Principal", promptIds: ["meeting", "weekly"] },
];

export const familyMembers = [
  { label: "First generation", count: 2 },
  { label: "Second generation", count: 5 },
  { label: "Next generation", count: 5 },
];

export const riskTasks = [
  { label: "Medical review", count: 2, tone: "high" },
  { label: "Document review", count: 3, tone: "medium" },
  { label: "Governance follow-up", count: 4, tone: "low" },
];

export const approvalItems = [
  { category: "Physician / Genetic Counselor Review", pending: 2, status: "Specialist review required" },
  { category: "Legal Counsel Review", pending: 3, status: "Counsel brief ready" },
  { category: "Tax Advisor Review", pending: 1, status: "Residency context pending" },
  { category: "Investment Advisor Review", pending: 1, status: "Supporting material only" },
];

export const auditLogs = [
  { user: "Family Principal", role: "Owner", resource: "Health Summary", sensitivity: "Highly Sensitive", time: "10 min ago", action: "Viewed" },
  { user: "Medical Advisor", role: "Professional Reviewer", resource: "Genetic Report", sensitivity: "Highly Sensitive", time: "35 min ago", action: "Viewed" },
  { user: "Legal Counsel", role: "External Counsel", resource: "Trust Deed", sensitivity: "Highly Sensitive", time: "1 hr ago", action: "Viewed" },
  { user: "Family Office Manager", role: "Operator", resource: "Meeting Brief", sensitivity: "Confidential", time: "2 hrs ago", action: "Generated" },
];
