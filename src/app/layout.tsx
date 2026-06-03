import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Family Office AI Agent",
  description: "A private data hub and intelligent risk management agent demo for high-net-worth families.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
