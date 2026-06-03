import type { AgentResponse } from "@/data/familyOfficeAgentMock";

const priorityClass = {
  high: "border-rose-200 bg-rose-50 text-rose-800",
  medium: "border-amber-200 bg-amber-50 text-amber-800",
  low: "border-emerald-200 bg-emerald-50 text-emerald-800",
};

export function AgentResultPanel({ response }: { response: AgentResponse }) {
  return (
    <section className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-premium">
      <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 via-white to-gold/10 px-5 py-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">Generated Deliverable</p>
            <h2 className="mt-1 text-2xl font-semibold text-navy">{response.title}</h2>
          </div>
          <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">Professional-review draft</span>
        </div>
      </div>
      <div className="p-5">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Executive summary</div>
          <p className="mt-2 text-sm leading-6 text-slate-700">{response.executiveSummary}</p>
        </div>
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {response.sections.map((section) => (
            <div key={section.heading} className={`rounded-2xl border p-4 ${section.priority ? priorityClass[section.priority] : "border-slate-200 bg-white"}`}>
              <h3 className="flex items-center gap-2 text-sm font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {section.heading}
              </h3>
              {section.ordered ? (
                <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-xs leading-5">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ol>
              ) : (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs leading-5">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
        {response.generatedMaterials && (
          <div className="mt-4 rounded-2xl border border-evergreen/15 bg-evergreen/5 p-4">
            <h3 className="text-sm font-semibold text-evergreen">Generated materials</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {response.generatedMaterials.map((material) => <span key={material} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-evergreen ring-1 ring-evergreen/20">{material}</span>)}
            </div>
          </div>
        )}
        <div className="mt-4 rounded-2xl border border-slate-300 bg-slate-50 p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Professional review required</div>
          <p className="mt-2 text-sm font-semibold text-navy">{response.reviewRequired}</p>
        </div>
        {response.note && (
          <div className="mt-4 rounded-2xl border border-gold/30 bg-gold/10 p-4 text-sm leading-6 text-slate-700">
            <span className="font-semibold text-navy">{response.note.label}: </span>{response.note.text}
          </div>
        )}
      </div>
    </section>
  );
}
