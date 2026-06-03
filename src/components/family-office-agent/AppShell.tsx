import { ReactNode } from "react";

export function AppShell({ children }: { children: ReactNode }) {
  return <main className="min-h-screen bg-[#f3efe6] text-[#17202b]">{children}</main>;
}
