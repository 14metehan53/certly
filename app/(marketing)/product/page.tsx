import { MarketingPageTemplate } from "@/features/marketing/marketing-page";

export default function ProductPage() {
  return (
    <MarketingPageTemplate
      eyebrow="Product Overview"
      title="Architecture for policy-driven verification orchestration"
      subtitle="Compose age, identity, country, and session trust modules into reusable verification policies that scale across surfaces and regions."
      sections={[
        { title: "Verification modules", description: "Independent modules expose claims with issuer metadata and assurance context.", bullets: ["Age threshold claims (18+, 21+, custom)", "Identity assurance states with risk tiering", "Country/residency eligibility with regional rules"] },
        { title: "Policy engine", description: "Route checks by tenant, product line, risk posture, or geo-policy.", bullets: ["Conditional claim requirements", "Step-up triggers on device risk", "Versioned policy packs and rollout controls"] },
        { title: "Hosted flows + API", description: "Choose hosted verification UX or orchestrate through your own product interface.", bullets: ["Frontend-safe SDK patterns", "Webhook event model", "Session trust token preview"] },
        { title: "Audit and governance", description: "Maintain reviewable evidence for decisions without raw-data accumulation.", bullets: ["Structured audit events", "Tenant-aware retention windows", "Exportable policy decision ledger"] },
      ]}
    />
  );
}
