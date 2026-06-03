import { auditLogs } from "@/data/familyOfficeAgentMock";

export function AuditLogTable() {
  return (
    <section id="audit-log" className="rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-premium">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">Privacy Controls</p>
          <h2 className="mt-1 text-lg font-semibold text-navy">Recent audit log</h2>
        </div>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-700">Role-based access</span>
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
            <thead className="bg-slate-50 uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-3 py-2.5">User</th>
                <th className="px-3 py-2.5">Role</th>
                <th className="px-3 py-2.5">Resource</th>
                <th className="px-3 py-2.5">Sensitivity</th>
                <th className="px-3 py-2.5">Time</th>
                <th className="px-3 py-2.5">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {auditLogs.map((log) => (
                <tr key={`${log.user}-${log.resource}`}>
                  <td className="px-3 py-2.5 font-semibold text-slate-900">{log.user}</td>
                  <td className="px-3 py-2.5 text-slate-600">{log.role}</td>
                  <td className="px-3 py-2.5 text-slate-600">{log.resource}</td>
                  <td className="px-3 py-2.5 text-slate-600">{log.sensitivity}</td>
                  <td className="px-3 py-2.5 text-slate-600">{log.time}</td>
                  <td className="px-3 py-2.5"><span className="rounded-full bg-evergreen/10 px-2 py-0.5 text-[10px] font-semibold text-evergreen">{log.action}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
