const navItems = [
  { label: "Run", href: "#agent-command" },
  { label: "Data", href: "#data-room" },
  { label: "Approve", href: "#professional-review" },
  { label: "Audit", href: "#audit-log" },
];

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-20 border-r border-white/10 bg-[#07111d] px-3 py-4 text-white shadow-2xl lg:block">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-lg font-semibold text-gold">FO</div>
      <nav className="mt-6 space-y-3">
        {navItems.map((item, index) => (
          <a key={item.label} className={`flex h-12 w-12 items-center justify-center rounded-2xl text-[10px] font-semibold transition ${index === 0 ? "bg-evergreen text-white shadow-lg" : "bg-white/[0.04] text-slate-400 hover:bg-white/10 hover:text-white"}`} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="absolute bottom-4 left-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-[10px] font-bold uppercase text-gold">Mock</div>
    </aside>
  );
}
