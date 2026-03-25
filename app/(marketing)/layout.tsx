import type { ReactNode } from "react";
import { MarketingLayout } from "@/features/marketing/marketing-layout";

export default function MarketingGroupLayout({ children }: { children: ReactNode }) {
  return <MarketingLayout>{children}</MarketingLayout>;
}
