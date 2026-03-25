import { MarketingPageTemplate } from "@/features/marketing/marketing-page";

export default function Page() {
  return <MarketingPageTemplate eyebrow="Identity Verification" title="Identity assurance for risk-aware product decisions" subtitle="Integrate provider-backed verification outputs while keeping your operational systems focused on claims and assurance levels." sections={[
    { title: "Provider-backed checks", description: "Connect external identity providers with normalized Certly outputs.", bullets: ["Issuer-specific confidence mapping", "Fallback provider routing", "Clear status semantics for product teams"] },
    { title: "Assurance levels", description: "Standardize trust levels for different product surfaces.", bullets: ["Level 1 to Level 4 assurance", "Policy-mapped required level", "Upgrade path for higher-risk actions"] },
    { title: "Risk-aware re-verification", description: "Step-up checks when session behavior deviates.", bullets: ["Device mismatch triggers", "Velocity-based thresholds", "Tenant-defined decision overrides"] },
    { title: "Minimal retention model", description: "Keep verifiable outcomes and audit traces without raw identity hoarding.", bullets: ["Claim-centric storage", "Retention controls by tenant", "Audit-ready event timeline"] },
  ]} />;
}
