# Family Office Client Intake Agent Demo

A standalone bilingual front-end demo for a **Family Office Client Intake Agent** / **家族办公室客户引进 Agent**. The demo uses a light, application-like workflow screen rather than a long landing page: a relationship manager or business development user selects a referral scenario, runs the Agent, reviews the execution trace, and reads a generated internal Client Intake Card.

## Demo purpose

This project is designed for boss/client presentations. It demonstrates how a family office with an insurance business line could use an AI-assisted internal intake workflow to capture prospective family client context, identify advisory needs, and generate a referral card for coordinated advisor follow-up across:

- Client source and relationship context
- Client type and family background
- Family office setup and governance needs
- Wealth succession, trust, and estate coordination
- Cross-border identity, tax, and residency context
- Education and philanthropy planning
- Insurance-related needs such as policy review, beneficiary arrangement, and renewal follow-up
- Internal routing, missing information, advisor review, and audit logs

## Bilingual support

The demo includes a local language toggle in the top bar:

- English (`EN`)
- Simplified Chinese (`中文`)

The main UI copy, sample scenarios, Agent run trace, generated deliverables, data-room context, missing-information queue, approval requirements, audit log, and safety disclaimers switch language with local component state only. No backend or i18n service is required.

## Interaction model

The page is intentionally not a static dashboard. The main screen remains organized as a compact workspace with a Scenario Library, Intake Workspace, Output & Advisor Review panel, and compact secondary tabs for Intake Fields, Missing Information, Internal Routing, and Audit Log. This is not an insurance quotation system: it does not generate prices, premiums, or product recommendations. The Run Agent button uses mock local state to show a short execution sequence before returning to completed state. The workflow is structured as:

1. Select a family office client intake or referral scenario.
2. Review the selected intake task.
3. Click **Generate Card** / **生成卡片**.
4. Read the full-width Agent execution trace.
5. Review the generated Client Intake Card / 内部转介卡 and advisor-review requirements.
6. Open supporting details only when needed from the tabbed secondary panel: intake fields, missing information, internal routing, and audit logs.

Clicking a different scenario updates the active advisory areas, agent run trace, generated deliverable, intake-field context, missing-information queue, and routing requirements.

## Important data and advice notice

All data in this repository is **mock demo data only**. The project does not use real family data, real health data, real asset data, real legal documents, API keys, or private documents.

The demo output is supporting material for internal client intake, advisory needs organization, relationship-manager follow-up, and advisor coordination. It is **not an insurance quotation**, does not generate insurance pricing, premiums, or formal product proposals, and is **not legal, tax, medical, or investment advice**. It does not replace insurer quotation systems or professional reviewers.

中文说明：本项目仅使用模拟数据，未连接真实后端。生成内容仅用于内部客户引进、需求整理、客户经理跟进和顾问协作，不构成保险报价、法律、税务、医疗或投资建议，也不替代保险公司报价系统或专业顾问复核。

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
