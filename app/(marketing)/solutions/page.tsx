import { MarketingPageTemplate } from "@/features/marketing/marketing-page";

export default function Page() {
  return <MarketingPageTemplate eyebrow="Solutions" title="Verification infrastructure by industry workflow" subtitle="Certly supports platform operators, trust teams, and risk leaders with policy-driven verification mapped to industry-specific threats." sections={[
    { title: "Platforms", description: "Onboard users and enforce region-aware trust controls.", bullets: ["Eligibility gating", "Session-aware escalation", "Reusable trust state"] },
    { title: "Marketplaces", description: "Verify participants with minimal data retention.", bullets: ["Buyer/seller policy packs", "Risk-tiered re-checks", "Audit-grade activity logs"] },
    { title: "Communities, gaming, fintech", description: "Moderate access and reduce abuse at scale.", bullets: ["Age and identity assurance", "Device trust scoring", "Operational review tooling"] },
    { title: "Enterprise rollout", description: "Deploy verification controls across tenants and environments.", bullets: ["Sandbox + production modes", "Policy promotion workflow", "Procurement-ready security framing"] },
  ]} />;
}
