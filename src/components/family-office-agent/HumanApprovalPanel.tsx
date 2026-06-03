import { approvalItems, type Lang, type PromptId } from "@/data/familyOfficeAgentMock";

export function HumanApprovalPanel({ selectedPromptId, lang, copy, embedded = false }: { selectedPromptId?: PromptId; lang: Lang; copy: Record<string, string>; embedded?: boolean }) {
  const visibleItems = selectedPromptId ? approvalItems.filter((item) => item.promptIds.includes(selectedPromptId)) : approvalItems;
  return (
    <section id="professional-review" className={embedded ? "" : "rounded-[2rem] border border-[#d8d1c4] bg-white p-6 shadow-[0_20px_70px_rgba(44,37,29,0.08)]"}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7b45]">{copy.approvals}</p>
      <h2 className="mt-2 text-2xl font-semibold text-[#101b2a]">{copy.professionalReviewRequired}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{copy.approvalSubtitle}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {visibleItems.map((item) => (
          <article key={item.category.en} className="rounded-[1.3rem] border border-[#e5ded1] bg-[#fbf8f1] p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-[#101b2a]">{item.category[lang]}</h3>
              <span className="rounded-full bg-[#101b2a] px-2.5 py-1 text-xs font-semibold text-white">{item.pending}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.status[lang]}</p>
            <button className="mt-4 rounded-full bg-[#101b2a] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#123d35]">{copy.generateBrief}</button>
          </article>
        ))}
      </div>
    </section>
  );
}
