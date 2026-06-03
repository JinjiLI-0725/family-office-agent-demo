import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-mist text-slate-900">
      <Sidebar />
      <main className="lg:pl-72">
        <div className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
