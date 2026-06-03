import { auditLogs, type Lang } from "@/data/familyOfficeAgentMock";

export function AuditLogTable({ lang, copy }: { lang: Lang; copy: Record<string, string> }) {
  return (
    <section id="audit-log" className="rounded-[2rem] border border-[#d8d1c4] bg-white p-6 shadow-[0_20px_70px_rgba(44,37,29,0.08)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a7b45]">{copy.auditLog}</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#101b2a]">{copy.auditSubtitle}</h2>
        </div>
        <span className="rounded-full bg-[#f7f0df] px-3 py-1.5 text-xs font-semibold text-[#7b6238]">{copy.safetyTitle}</span>
      </div>
      <div className="mt-5 overflow-hidden rounded-[1.3rem] border border-[#e5ded1]">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-[#e5ded1] text-left text-sm">
            <thead className="bg-[#fbf8f1] text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">{copy.user}</th>
                <th className="px-4 py-3">{copy.role}</th>
                <th className="px-4 py-3">{copy.resource}</th>
                <th className="px-4 py-3">{copy.sensitivity}</th>
                <th className="px-4 py-3">{copy.time}</th>
                <th className="px-4 py-3">{copy.action}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eee7da] bg-white">
              {auditLogs.map((log) => (
                <tr key={`${log.user.en}-${log.resource.en}`}>
                  <td className="px-4 py-3 font-semibold text-[#101b2a]">{log.user[lang]}</td>
                  <td className="px-4 py-3 text-slate-600">{log.role[lang]}</td>
                  <td className="px-4 py-3 text-slate-600">{log.resource[lang]}</td>
                  <td className="px-4 py-3 text-slate-600">{log.sensitivity[lang]}</td>
                  <td className="px-4 py-3 text-slate-600">{log.time[lang]}</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-[#123d35]/10 px-2.5 py-1 text-xs font-semibold text-[#123d35]">{log.action[lang]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
