import type { ReactNode } from "react";
import type { AgentResponse, Lang } from "@/data/familyOfficeAgentMock";

export function AgentResultPanel({ response, lang, copy, reviewChips }: { response: AgentResponse; lang: Lang; copy: Record<string, string>; reviewChips: string[] }) {
  return (
    <section className="rounded-[1.75rem] border border-[#e0d8ca] bg-[#fffdf8] p-5 shadow-[0_18px_50px_rgba(40,35,28,0.08)]">
      <div className="border-b border-[#e7dfd2] pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a7b45]">{copy.outputReview}</p>
        <h2 className="mt-2 text-2xl font-semibold text-[#182230]">{copy.generatedBrief} {response.briefId}</h2>
        <p className="mt-1 text-sm text-[#667085]">{response.title[lang]}</p>
      </div>

      <div className="mt-4 rounded-2xl border border-[#e7dfd2] bg-white p-4">
        <div className="grid gap-3 text-sm sm:grid-cols-2">
          <div><span className="text-[#8a6f3d]">{copy.preparedFor}:</span> <span className="font-medium text-[#182230]">{response.preparedFor[lang]}</span></div>
          <div><span className="text-[#8a6f3d]">{copy.preparedBy}:</span> <span className="font-medium text-[#182230]">{response.preparedBy[lang]}</span></div>
          <div><span className="text-[#8a6f3d]">{copy.review}:</span> <span className="font-medium text-[#182230]">{response.memoReview[lang]}</span></div>
          <div><span className="text-[#8a6f3d]">{copy.memoStatus}:</span> <span className="font-medium text-[#182230]">{response.memoStatus[lang]}</span></div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {reviewChips.map((chip) => (
          <span key={chip} className="rounded-full border border-[#d8bd80] bg-[#fff8e8] px-3 py-1 text-xs font-semibold text-[#7a5f2e]">{chip}</span>
        ))}
      </div>

      <div className="mt-5 space-y-4 rounded-2xl border border-[#e7dfd2] bg-white px-5 py-4">
        <MemoSection title={copy.executiveSummary}>
          <p className="text-sm leading-6 text-[#3f4a5a]">{response.executiveSummary[lang]}</p>
        </MemoSection>
        {response.sections.map((section, index) => (
          <MemoSection key={`${section.key}-${section.heading.en}-${index}`} title={section.heading[lang]}>
            {section.ordered ? (
              <ol className="list-decimal space-y-1.5 pl-5 text-sm leading-6 text-[#536071]">
                {section.items[lang].map((item) => <li key={item}>{item}</li>)}
              </ol>
            ) : (
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-[#536071]">
                {section.items[lang].map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </MemoSection>
        ))}
        <MemoSection title={copy.professionalReviewRequired}>
          <p className="text-sm font-semibold leading-6 text-[#182230]">{response.reviewRequired[lang]}</p>
        </MemoSection>
        {response.disclaimer && (
          <MemoSection title={copy.disclaimer}>
            <p className="text-sm leading-6 text-[#536071]">{response.disclaimer[lang]}</p>
          </MemoSection>
        )}
      </div>
    </section>
  );
}

function MemoSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-b border-[#eee8dc] pb-4 last:border-b-0 last:pb-0">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#8a6f3d]">{title}</h3>
      {children}
    </section>
  );
}
