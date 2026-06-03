import type { AgentResponse, Lang } from "@/data/familyOfficeAgentMock";

const priorityClass = {
  high: "border-rose-100 bg-rose-50/70",
  medium: "border-amber-100 bg-amber-50/70",
  low: "border-emerald-100 bg-emerald-50/70",
};

export function AgentResultPanel({ response, lang, copy, reviewChips }: { response: AgentResponse; lang: Lang; copy: Record<string, string>; reviewChips: string[] }) {
  return (
    <section className="rounded-[1.75rem] border border-[#e0d8ca] bg-white p-5 shadow-[0_18px_50px_rgba(40,35,28,0.08)]">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#eee8dc] pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a7b45]">{copy.outputReview}</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#182230]">{copy.generatedBrief}</h2>
          <p className="mt-1 text-sm text-[#667085]">{response.title[lang]}</p>
        </div>
        <span className="rounded-full bg-[#f1f4f7] px-3 py-1.5 text-xs font-semibold text-[#536071]">{copy.professionalDraft}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {reviewChips.map((chip) => (
          <span key={chip} className="rounded-full border border-[#d8bd80] bg-[#fff8e8] px-3 py-1 text-xs font-semibold text-[#7a5f2e]">{chip}</span>
        ))}
      </div>

      <div className="mt-4 rounded-2xl bg-[#fbfaf6] p-4">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7b45]">{copy.executiveSummary}</div>
        <p className="mt-2 text-sm leading-6 text-[#3f4a5a]">{response.executiveSummary[lang]}</p>
      </div>

      <div className="mt-4 space-y-3">
        {response.sections.map((section, index) => (
          <div key={`${section.key}-${section.heading.en}-${index}`} className={`rounded-2xl border p-4 ${section.priority ? priorityClass[section.priority] : "border-[#eee8dc] bg-white"}`}>
            <h3 className="text-sm font-semibold text-[#182230]">{section.heading[lang]}</h3>
            {section.ordered ? (
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-6 text-[#536071]">
                {section.items[lang].map((item) => <li key={item}>{item}</li>)}
              </ol>
            ) : (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-[#536071]">
                {section.items[lang].map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-[#d8bd80] bg-[#fff8e8] p-4">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7b45]">{copy.professionalReviewRequired}</div>
        <p className="mt-2 text-sm font-semibold leading-6 text-[#182230]">{response.reviewRequired[lang]}</p>
      </div>
      {response.disclaimer && (
        <div className="mt-4 rounded-2xl border border-[#e0d8ca] bg-[#f8fafc] p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7b45]">{copy.disclaimer}</div>
          <p className="mt-2 text-sm leading-6 text-[#536071]">{response.disclaimer[lang]}</p>
        </div>
      )}
    </section>
  );
}
