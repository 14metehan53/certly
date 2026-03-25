import { MarketingPageTemplate } from "@/features/marketing/marketing-page";

export default function Page() {
  return <MarketingPageTemplate eyebrow="Solution: Communities" title="Communities trust operations with configurable verification policies" subtitle="Deploy policy-driven claims verification tuned for communities risk patterns, user journeys, and regional requirements." sections={[
    { title: "Industry risks", description: "Address sector-specific abuse vectors and eligibility constraints.", bullets: ["Account misuse reduction", "Region and age controls", "Operational incident traceability"] },
    { title: "How Certly solves it", description: "Combine claims, session telemetry, and policy logic into one decision workflow.", bullets: ["Modular verification orchestration", "Reusable trust sessions", "Risk-aware step-up rules"] },
    { title: "Feature highlights", description: "Give trust teams and developers shared controls.", bullets: ["Issuer abstraction layer", "Audit event exports", "Tenant-aware governance"] },
    { title: "Common objections", description: "Support procurement and legal review with careful architecture framing.", bullets: ["Designed for data minimization", "Structured for strong operational controls", "Flexible for regional rule sets"] },
  ]} />;
}
