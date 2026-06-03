const navItems = ["Agent Command", "Data Room", "Risk Items", "Professional Review", "Audit Log"];

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-72 overflow-y-auto bg-navy px-6 py-8 text-white shadow-2xl lg:block">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <div className="text-xs uppercase tracking-[0.35em] text-gold">Private Hub</div>
        <div className="mt-4 text-2xl font-semibold">Family Office AI Agent</div>
        <p className="mt-3 text-sm leading-6 text-slate-300">Agentic workflows for organizing records, flagging risks, and preparing advisor-ready materials.</p>
      </div>
      <nav className="mt-8 space-y-2">
        {navItems.map((item, index) => (
          <a key={item} className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition ${index === 0 ? "bg-evergreen text-white shadow-lg" : "text-slate-300 hover:bg-white/10 hover:text-white"}`} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>
            <span>{item}</span>
            {index === 0 && <span className="h-2 w-2 rounded-full bg-gold" />}
          </a>
        ))}
      </nav>
      <div className="mt-8 rounded-3xl border border-gold/30 bg-gold/10 p-4 text-sm text-slate-200">
        <div className="font-semibold text-gold">Boundary Notice</div>
        <p className="mt-2 leading-6">Outputs are supporting material for professional review, not medical, legal, tax, or investment advice.</p>
      </div>
    </aside>
  );
}
