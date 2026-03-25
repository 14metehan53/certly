import { MarketingPageTemplate } from "@/features/marketing/marketing-page";

export default function Page() {
  return <MarketingPageTemplate eyebrow="Country Verification" title="Region-aware eligibility without exact GPS storage" subtitle="Determine product eligibility by country or residency policy while minimizing location data exposure across teams and services." sections={[
    { title: "Country and residency claims", description: "Evaluate eligibility against region and jurisdiction policy maps.", bullets: ["Country allow/deny policy packs", "Residency declaration + issuer checks", "Grace windows for moving users"] },
    { title: "No exact GPS requirement", description: "Use coarse country signals for policy enforcement.", bullets: ["IP + issuer claim blending", "Confidence-scored results", "Escalation path for unclear signals"] },
    { title: "Policy examples", description: "Create differentiated experiences by region.", bullets: ["Enable product only in supported markets", "Block restricted financial features", "Apply market-specific age thresholds"] },
    { title: "Operational governance", description: "Track why region-based decisions were made.", bullets: ["Audit event explanation", "Policy version traceability", "Tenant-specific override workflows"] },
  ]} />;
}
