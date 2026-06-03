import { approvalItems, type PromptId } from "@/data/familyOfficeAgentMock";

export function HumanApprovalPanel({ selectedPromptId, compact = false }: { selectedPromptId?: PromptId; compact?: boolean }) {
  const visibleItems = selectedPromptId ? approvalItems.filter((item) => item.promptIds.includes(selectedPromptId)) : approvalItems;

  return (
    <section id="professional-review" className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-premium">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Human Approval Required</p>
      <h2 className="mt-1 text-lg font-semibold text-navy">Professional approvals</h2>
      {!compact && (
        <p className="mt-2 text-sm leading-6 text-slate-600">The Agent prepares supporting material, risk flagging, and task context. Specialists review and approve medical, legal, tax, and investment-related conclusions.</p>
      )}
      <div className={`mt-4 grid gap-2.5 ${compact ? "grid-cols-1" : "md:grid-cols-2 xl:grid-cols-5"}`}>
        {visibleItems.map((item) => (
          <article key={item.category} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-900">{item.category}</h3>
              <span className="rounded-full bg-navy px-2 py-0.5 text-[10px] font-semibold text-white">{item.pending}</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-600">{item.status}</p>
            <button className="mt-3 w-full rounded-xl bg-navy px-3 py-2 text-xs font-semibold text-white transition hover:bg-evergreen">Generate Review Brief</button>
          </article>
        ))}
      </div>
    </section>
  );
}
