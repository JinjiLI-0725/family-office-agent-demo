import type { AgentResponse } from "@/data/familyOfficeAgentMock";

const priorityClass = {
  high: "border-rose-200 bg-rose-50 text-rose-800",
  medium: "border-amber-200 bg-amber-50 text-amber-800",
  low: "border-emerald-200 bg-emerald-50 text-emerald-800",
};

export function AgentResultPanel({ response }: { response: AgentResponse }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-premium">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Agent Output</p>
      <h2 className="mt-2 text-2xl font-semibold text-navy">{response.title}</h2>
      <div className="mt-5 space-y-4">
        {response.sections.map((section) => (
          <div key={section.heading} className={`rounded-3xl border p-4 ${section.priority ? priorityClass[section.priority] : "border-slate-200 bg-slate-50"}`}>
            <h3 className="font-semibold">{section.heading}</h3>
            {section.ordered ? (
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6">
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ol>
            ) : (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
      {response.generatedMaterials && (
        <div className="mt-4 rounded-3xl border border-evergreen/15 bg-evergreen/5 p-4">
          <h3 className="font-semibold text-evergreen">Generated materials</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {response.generatedMaterials.map((material) => <span key={material} className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-evergreen ring-1 ring-evergreen/20">{material}</span>)}
          </div>
        </div>
      )}
      {response.note && (
        <div className="mt-4 rounded-3xl border border-gold/30 bg-gold/10 p-4 text-sm leading-6 text-slate-700">
          <span className="font-semibold text-navy">{response.note.label}: </span>{response.note.text}
        </div>
      )}
    </section>
  );
}
