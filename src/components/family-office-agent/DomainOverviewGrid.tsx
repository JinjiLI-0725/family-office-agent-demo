import type { Domain } from "@/data/familyOfficeAgentMock";

export function DomainOverviewGrid({ domains, activeDomainIds }: { domains: Domain[]; activeDomainIds: string[] }) {
  return (
    <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-premium">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Task Classification</p>
          <h2 className="mt-1 text-lg font-semibold text-navy">Activated domains</h2>
        </div>
        <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">{activeDomainIds.length} active</span>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {domains.map((domain) => {
          const active = activeDomainIds.includes(domain.id);
          return (
            <article key={domain.id} className={`rounded-2xl border p-3 transition ${active ? "border-gold bg-gold/10 shadow-md" : "border-slate-200 bg-slate-50/70 opacity-75"}`}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-navy">{domain.name}</h3>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${active ? "bg-gold text-navy" : "bg-white text-slate-600"}`}>{domain.riskCount}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-600">{active ? domain.agentCanDo : domain.manages}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
