import type { AgentResponse, Lang } from "@/data/familyOfficeAgentMock";

const priorityClass = {
  high: "border-rose-200 bg-rose-50 text-rose-900",
  medium: "border-amber-200 bg-amber-50 text-amber-900",
  low: "border-emerald-200 bg-emerald-50 text-emerald-900",
};

export function AgentResultPanel({ response, lang, copy }: { response: AgentResponse; lang: Lang; copy: Record<string, string> }) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-[#d8d1c4] bg-white shadow-[0_24px_80px_rgba(44,37,29,0.10)]">
      <div className="border-b border-[#e5ded1] bg-gradient-to-r from-white via-[#fbf8f1] to-[#f1e6cf] px-7 py-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7b45]">{copy.generatedDeliverable}</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#101b2a]">{response.title[lang]}</h2>
          </div>
          <span className="rounded-full bg-[#101b2a] px-4 py-2 text-sm font-semibold text-white">{copy.professionalDraft}</span>
        </div>
      </div>
      <div className="space-y-5 p-7">
        <div className="rounded-[1.4rem] border border-[#e5ded1] bg-[#fbf8f1] p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7b45]">{copy.executiveSummary}</div>
          <p className="mt-3 text-base leading-8 text-slate-700">{response.executiveSummary[lang]}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {response.sections.map((section, index) => (
            <div key={`${section.key}-${section.heading.en}-${index}`} className={`rounded-[1.35rem] border p-5 ${section.priority ? priorityClass[section.priority] : "border-[#e5ded1] bg-white"}`}>
              <h3 className="flex items-center gap-2 text-base font-semibold text-[#101b2a]"><span className="h-2 w-2 rounded-full bg-[#b99a5f]" />{section.heading[lang]}</h3>
              {section.ordered ? (
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
                  {section.items[lang].map((item) => <li key={item}>{item}</li>)}
                </ol>
              ) : (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                  {section.items[lang].map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="rounded-[1.4rem] border border-[#d6c6a5] bg-[#f7f0df] p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7b45]">{copy.professionalReviewRequired}</div>
          <p className="mt-2 text-base font-semibold text-[#101b2a]">{response.reviewRequired[lang]}</p>
        </div>
        {response.disclaimer && (
          <div className="rounded-[1.4rem] border border-[#d8d1c4] bg-[#101b2a] p-5 text-white">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6bd82]">{copy.disclaimer}</div>
            <p className="mt-3 text-sm leading-7 text-slate-200">{response.disclaimer[lang]}</p>
          </div>
        )}
      </div>
    </section>
  );
}
