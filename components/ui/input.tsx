import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("h-11 w-full rounded-xl border border-border bg-background/80 px-3 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-blue-500", className)} {...props} />;
}
