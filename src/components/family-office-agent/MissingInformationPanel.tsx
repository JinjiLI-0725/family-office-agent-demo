import type { Lang, MissingInformationItem, Priority } from "@/data/familyOfficeAgentMock";

const priorityClass: Record<Priority, string> = {
  High: "bg-rose-50 text-rose-700 ring-rose-200",
  Medium: "bg-amber-50 text-amber-700 ring-amber-200",
  Low: "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

export function MissingInformationPanel({ items, lang, copy }: { items: MissingInformationItem[]; lang: Lang; copy: Record<string, string> }) {
  const priorityLabel: Record<Priority, string> = { High: copy.high, Medium: copy.medium, Low: copy.low };
  return (
    <section className="rounded-[2rem] border border-[#d8d1c4] bg-white p-6 shadow-[0_20px_70px_rgba(44,37,29,0.08)]">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7b45]">{copy.missingInfo}</p>
      <h2 className="mt-2 text-2xl font-semibold text-[#101b2a]">{copy.exceptionsFound}</h2>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <article key={item.item.en} className="rounded-[1.3rem] border border-[#e5ded1] bg-[#fbf8f1] p-4">
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-medium leading-6 text-slate-800">{item.item[lang]}</p>
              <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${priorityClass[item.priority]}`}>{priorityLabel[item.priority]}</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">{copy.owner}: <span className="font-semibold text-slate-900">{item.owner[lang]}</span></p>
          </article>
        ))}
      </div>
    </section>
  );
}
