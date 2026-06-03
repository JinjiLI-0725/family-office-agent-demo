# Family Office AI Agent Demo

A standalone bilingual front-end demo for a premium **Family Office Agent Command Center**. The demo uses a light, application-like workflow screen rather than a long landing page: a family office manager selects a scenario, runs the Agent, reviews the execution trace, and reads a generated professional-review brief.

## Demo purpose

This project is designed for boss/client presentations. It demonstrates how a family office could use an AI-assisted workflow layer to organize and summarize private family office information across:

- Family members
- Health records and genetic risk information
- Asset documents
- Legal and succession documents
- Tax and residency information
- Education and next-generation development plans
- Family governance records
- Privacy controls and audit logs
- Philanthropy and impact projects

## Bilingual support

The demo includes a local language toggle in the top bar:

- English (`EN`)
- Simplified Chinese (`中文`)

The main UI copy, sample scenarios, Agent run trace, generated deliverables, data-room context, missing-information queue, approval requirements, audit log, and safety disclaimers switch language with local component state only. No backend or i18n service is required.

## Interaction model

The page is intentionally not a static dashboard. The main screen is organized as a Quote-Agent-style workspace with a Scenario Library, Agent Workspace, Output & Review panel, and compact secondary tabs for Data Room Context, Missing Information, and Audit Log. The workflow is structured as:

1. Select an executive family office scenario.
2. Review the selected Agent task.
3. Click **Run Agent** / **运行 Agent**.
4. Read the full-width Agent execution trace.
5. Review the generated executive brief and professional-review requirements.
6. Inspect retrieved mock data-room context, missing information, approval routing, and audit logs from the tabbed secondary panel.

Clicking a different scenario updates the active domains, agent run trace, generated deliverable, data-room context, missing-information queue, and approval requirements.

## Important data and advice notice

All data in this repository is **mock demo data only**. The project does not use real family data, real health data, real asset data, real legal documents, API keys, or private documents.

The demo output is supporting material for document organization, communication preparation, risk flagging, and professional review. It is **not medical, legal, tax, or investment advice** and does not replace physicians, genetic counselors, lawyers, tax advisors, investment advisors, or other professional reviewers.

中文说明：本项目仅使用模拟数据，未连接真实后端。生成内容仅作为资料整理、沟通准备、风险提示和专业复核辅助材料，不构成医疗、法律、税务或投资建议。

## How to run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

## Demo route

Open the demo at:

```text
http://localhost:3000/family-office-agent
```

The root route redirects to `/family-office-agent`.

## Future backend API candidates

A production version could connect the front-end workflow to APIs such as:

```text
POST /api/family-office-agent/run
GET /api/family-office-agent/runs/:id
GET /api/family-office-agent/data-room
GET /api/family-office-agent/family-members
POST /api/family-office-agent/documents/upload
GET /api/family-office-agent/audit-logs
POST /api/family-office-agent/approvals/:id/request-review
```
