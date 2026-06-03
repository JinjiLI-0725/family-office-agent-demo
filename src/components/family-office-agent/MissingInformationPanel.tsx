import type { MissingInformationItem } from "@/data/familyOfficeAgentMock";

const priorityClass: Record<MissingInformationItem["priority"], string> = {
  High: "bg-rose-50 text-rose-700 ring-rose-200",
  Medium: "bg-amber-50 text-amber-700 ring-amber-200",
  Low: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

export function MissingInformationPanel({ items }: { items: MissingInformationItem[] }) {
  return (
    <section className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-premium">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Missing Information</p>
      <h2 className="mt-1 text-lg font-semibold text-navy">Agent exceptions found</h2>
      <div className="mt-4 space-y-2.5">
        {items.map((item) => (
          <article key={item.item} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-medium leading-5 text-slate-800">{item.item}</p>
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${priorityClass[item.priority]}`}>{item.priority}</span>
            </div>
            <p className="mt-2 text-xs text-slate-500">Owner: <span className="font-semibold text-slate-700">{item.owner}</span></p>
          </article>
        ))}
      </div>
    </section>
  );
}
