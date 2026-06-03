import type { Domain, Lang } from "@/data/familyOfficeAgentMock";

export function DomainOverviewGrid({ domains, activeDomainIds, lang, copy }: { domains: Domain[]; activeDomainIds: string[]; lang: Lang; copy: Record<string, string> }) {
  return (
    <section className="rounded-[2rem] border border-[#d8d1c4] bg-[#fbf8f1] p-6 shadow-[0_20px_70px_rgba(44,37,29,0.08)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7b45]">{copy.activeDomains}</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#101b2a]">{copy.contextApproval}</h2>
        </div>
        <span className="rounded-full bg-[#101b2a] px-4 py-2 text-sm font-semibold text-white">{activeDomainIds.length}</span>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {domains.map((domain) => {
          const active = activeDomainIds.includes(domain.id);
          return (
            <article key={domain.id} className={`rounded-[1.3rem] border p-4 transition ${active ? "border-[#b99a5f] bg-white shadow-md" : "border-[#e5ded1] bg-white/55 opacity-65"}`}>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-[#101b2a]">{domain.name[lang]}</h3>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${active ? "bg-[#d6bd82] text-[#101b2a]" : "bg-[#f3efe6] text-slate-500"}`}>{domain.riskCount}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{active ? domain.agentCanDo[lang] : domain.manages[lang]}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
