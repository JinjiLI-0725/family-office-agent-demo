import { approvalItems } from "@/data/familyOfficeAgentMock";

export function HumanApprovalPanel() {
  return (
    <section id="professional-review" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-premium">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Human Approval Required</p>
      <h2 className="mt-2 text-xl font-semibold text-navy">Professional review boundaries</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">The Agent prepares supporting material, risk flagging, and task context. Specialists review and approve medical, legal, tax, and investment-related conclusions.</p>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {approvalItems.map((item) => (
          <article key={item.category} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="text-3xl font-semibold text-navy">{item.pending}</div>
            <h3 className="mt-2 font-semibold text-slate-900">{item.category}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.status}</p>
            <button className="mt-4 w-full rounded-2xl bg-navy px-3 py-2 text-sm font-semibold text-white transition hover:bg-evergreen">Generate Review Brief</button>
          </article>
        ))}
      </div>
    </section>
  );
}
