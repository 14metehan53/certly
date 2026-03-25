import { MarketingPageTemplate } from "@/features/marketing/marketing-page";

export default function Page() {
  return <MarketingPageTemplate eyebrow="Security" title="Privacy-first trust architecture for enterprise operations" subtitle="Designed for data minimization principles with tenant-aware controls, encryption practices, and audit-ready event records." sections={[
    { title: "Minimal retention model", description: "Focus on claims and policy outcomes rather than broad source data persistence.", bullets: ["Configurable retention windows", "Claim-scoped evidence storage", "Tenant-level purge workflows"] },
    { title: "Operational controls", description: "Support security-conscious teams with structured access and review patterns.", bullets: ["Role-based admin boundaries", "Audit timeline exports", "Policy change history"] },
    { title: "Session and device trust", description: "Monitor anomalies and trigger proportional re-checks.", bullets: ["Device mismatch scoring", "Risk-based step-up checks", "Session aging policies"] },
    { title: "Compliance-aware language", description: "Provide architecture details useful for legal and procurement review.", bullets: ["Region-specific policy mapping", "Vendor due diligence support", "Security questionnaire starter kit"] },
  ]} />;
}
