import { auditLogs } from "@/data/familyOfficeAgentMock";

export function AuditLogTable() {
  return (
    <section id="audit-log" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-premium">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Privacy Controls</p>
      <h2 className="mt-2 text-xl font-semibold text-navy">Recent audit log</h2>
      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Accessed Resource</th>
                <th className="px-4 py-3">Sensitivity Level</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {auditLogs.map((log) => (
                <tr key={`${log.user}-${log.resource}`}>
                  <td className="px-4 py-3 font-semibold text-slate-900">{log.user}</td>
                  <td className="px-4 py-3 text-slate-600">{log.role}</td>
                  <td className="px-4 py-3 text-slate-600">{log.resource}</td>
                  <td className="px-4 py-3 text-slate-600">{log.sensitivity}</td>
                  <td className="px-4 py-3 text-slate-600">{log.time}</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-evergreen/10 px-2.5 py-1 text-xs font-semibold text-evergreen">{log.action}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
