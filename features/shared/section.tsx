import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8", className)}>
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-300">{eyebrow}</p>}
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">{description}</p>}
      {children}
    </section>
  );
}
