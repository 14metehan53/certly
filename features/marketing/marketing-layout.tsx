import type { ReactNode } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { mainNav } from "@/data/site";
import { Button } from "@/components/ui/button";

export function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="border-b border-border bg-slate-950 px-4 py-2 text-center text-xs text-slate-100">New: region-specific policy templates are now available in preview.</div>
      <header className="sticky top-0 z-20 border-b border-border/80 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-semibold"><ShieldCheck className="h-5 w-5 text-blue-600" />Certly</Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {mainNav.map((item) => <Link key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100">{item.label}</Link>)}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm"><Link href="/signin">Sign in</Link></Button>
            <Button asChild size="sm"><Link href="/book-demo">Book demo</Link></Button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-16 border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div><p className="font-semibold">Certly</p><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Verification infrastructure designed with privacy and data minimization principles in mind.</p></div>
          {[
            ["Product", ["/product","/developers","/security"]],
            ["Solutions", ["/solutions/platforms","/solutions/marketplaces","/solutions/fintech"]],
            ["Company", ["/about","/company","/contact"]],
          ].map(([label, links]) => (
            <div key={label as string}><p className="text-sm font-semibold">{label as string}</p><ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">{(links as string[]).map((href)=><li key={href}><Link href={href}>{href.replace("/", "")}</Link></li>)}</ul></div>
          ))}
        </div>
      </footer>
    </div>
  );
}
