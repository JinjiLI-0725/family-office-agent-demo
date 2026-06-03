import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#eef1f4] text-slate-900">
      <Sidebar />
      <main className="lg:pl-20">
        <div className="mx-auto max-w-[1680px] px-3 py-3 sm:px-4 lg:px-5">{children}</div>
      </main>
    </div>
  );
}
