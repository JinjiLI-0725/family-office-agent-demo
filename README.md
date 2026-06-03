# Family Office AI Agent Demo

A standalone front-end demo for a **Family Office Agent Command Center**. The demo is designed to feel like an executable agent workflow: a family office manager selects or enters a task, runs the Agent, and sees classification, private data-room retrieval, missing-information checks, risk flagging, generated professional-review materials, approvals, and audit activity.

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

## Interaction model

The page is intentionally not a static dashboard. The first screen centers on a three-column command workflow:

- Scenario selector with four sample family office tasks
- Agent task runner with a visible Run Agent button and execution trace
- Context panel showing retrieved mock records, missing information, and required professional approvals

Clicking a different sample task updates the active domains, agent run trace, generated deliverable, data-room context, missing-information queue, and approval requirements.

## Important data and advice notice

All data in this repository is **mock demo data only**. The project does not use real family data, real health data, real asset data, real legal documents, API keys, or private documents.

The demo output is supporting material for document organization, communication preparation, risk flagging, and professional review. It is **not medical, legal, tax, or investment advice** and does not replace physicians, genetic counselors, lawyers, tax advisors, investment advisors, or other professional reviewers.

## How to run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
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
