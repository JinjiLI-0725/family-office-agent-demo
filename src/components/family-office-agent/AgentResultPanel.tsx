import type { ClientFollowUpProfile, Lang, RoutingStatus } from "@/data/familyOfficeAgentMock";

const statusStyle: Record<RoutingStatus, string> = {
  Queued: "border-[#dbe3ec] bg-[#f8fafc] text-[#536579]",
  "Review Required": "border-[#e5c46f] bg-[#fff8e6] text-[#8a6419]",
  "Ready for Meeting": "border-[#b7dfcf] bg-[#eefaf5] text-[#1f6b5a]",
};

const statusCopyKey: Record<RoutingStatus, string> = {
  Queued: "queued",
  "Review Required": "reviewRequired",
  "Ready for Meeting": "readyForMeeting",
};

export function AgentResultPanel({ profile, lang, copy }: { profile: ClientFollowUpProfile; lang: Lang; copy: Record<string, string> }) {
  return (
    <section className="rounded-[1.75rem] border border-[#dbe2ea] bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.07)]">
      <div className="border-b border-[#e8edf3] pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#64748b]">{copy.advisorRouting}</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#0f2337]">{copy.recommendedInternalRouting}</h2>
        <p className="mt-2 text-sm leading-6 text-[#64748b]">{profile.internalRouting[lang]}</p>
      </div>

      <div className="mt-5 space-y-0">
        {profile.routingChain.map((route, index) => (
          <div key={route.role.en} className="relative grid grid-cols-[28px_minmax(0,1fr)] gap-3 pb-5 last:pb-0">
            {index < profile.routingChain.length - 1 && <div className="absolute left-[13px] top-8 h-[calc(100%-1.5rem)] w-px bg-[#d9e1ea]" />}
            <div className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-[#cfd8e3] bg-white text-[11px] font-bold text-[#1d3550] shadow-sm">{index + 1}</div>
            <div className="rounded-2xl border border-[#e2e8f0] bg-[#fbfcfe] p-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-[#132338]">{route.role[lang]}</h3>
                <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${statusStyle[route.status]}`}>{copy[statusCopyKey[route.status]]}</span>
              </div>
              <p className="mt-2 text-xs font-medium leading-5 text-[#64748b]">{route.note[lang]}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-[#d6bf83] bg-[#fffaf0] p-4">
        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9a7b45]">{copy.disclaimer}</div>
        <p className="mt-2 text-xs leading-5 text-[#52606f]">This is for internal client intake and advisor coordination only. It is not insurance quotation, legal, tax, medical, or investment advice.</p>
        <p className="mt-2 text-xs leading-5 text-[#52606f]">仅用于内部客户接待与顾问协同；不构成保险报价、法律、税务、医疗或投资建议。</p>
      </div>
    </section>
  );
}
