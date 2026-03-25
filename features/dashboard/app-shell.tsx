"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Building2, Search, ShieldCheck } from "lucide-react";
import { appNav } from "@/data/site";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-slate-100/70 dark:bg-slate-950">
      <div className="mx-auto flex max-w-[1600px]">
        <aside className="sticky top-0 hidden h-screen w-72 border-r border-border bg-card p-5 lg:block">
          <Link href="/app" className="mb-8 flex items-center gap-2 text-lg font-semibold"><ShieldCheck className="h-5 w-5 text-blue-600" />Certly Console</Link>
          <div className="mb-5 rounded-xl border border-border p-3 text-sm">
            <p className="font-medium">Organization</p>
            <p className="text-slate-600 dark:text-slate-300">Northstar Commerce US</p>
          </div>
          <nav className="space-y-1">
            {appNav.map((href) => (
              <Link key={href} href={href} className={cn("block rounded-lg px-3 py-2 text-sm", pathname === href ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900" : "hover:bg-muted")}>{href.replace("/app/", "").replace("/app", "overview")}</Link>
            ))}
          </nav>
        </aside>
        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
            <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
              <div className="relative w-full max-w-md"><Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-500" /><Input className="pl-9" placeholder="Search verifications, sessions, policies" /></div>
              <button className="rounded-lg border border-border p-2"><Bell className="h-4 w-4" /></button>
              <button className="rounded-lg border border-border p-2"><Building2 className="h-4 w-4" /></button>
            </div>
          </header>
          <main className="p-4 sm:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
