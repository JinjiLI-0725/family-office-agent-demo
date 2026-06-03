import type { Domain } from "@/data/familyOfficeAgentMock";

export function DomainOverviewGrid({ domains, activeDomainIds }: { domains: Domain[]; activeDomainIds: string[] }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-premium">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Task Classification</p>
          <h2 className="mt-2 text-xl font-semibold text-navy">Family office domains</h2>
        </div>
        <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">{activeDomainIds.length} domains active</span>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {domains.map((domain) => {
          const active = activeDomainIds.includes(domain.id);
          return (
            <article key={domain.id} className={`rounded-3xl border p-4 transition ${active ? "border-gold bg-gold/10 shadow-md" : "border-slate-200 bg-slate-50/70"}`}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-navy">{domain.name}</h3>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${active ? "bg-gold text-navy" : "bg-white text-slate-600"}`}>{domain.riskCount} risks</span>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Manages</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{domain.manages}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Agent can do</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{domain.agentCanDo}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
