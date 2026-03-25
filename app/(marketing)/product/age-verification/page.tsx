import { MarketingPageTemplate } from "@/features/marketing/marketing-page";

export default function Page() {
  return <MarketingPageTemplate eyebrow="Age Verification" title="Threshold-based age eligibility with minimal exposure" subtitle="Return age eligibility claims like age_over_18 or age_over_21 without exposing full birthdate across your stack." sections={[
    { title: "Threshold claims", description: "Support 18+, 21+, and custom jurisdictional requirements.", bullets: ["Boolean and signed claim formats", "Policy-specific TTL windows", "Localized legal copy support"] },
    { title: "No unnecessary birthdate retention", description: "Store claim outcomes, not complete date-of-birth payloads.", bullets: ["Configurable redaction rules", "Masked verification evidence", "Reduced downstream PII surface area"] },
    { title: "Re-verification controls", description: "Re-check users by policy age, risk, or session changes.", bullets: ["Expiration windows per claim", "Step-up on anomaly detection", "High-risk journey enforcement"] },
    { title: "Use cases", description: "Built for age-gated commerce, communities, and regulated experiences.", bullets: ["Alcohol or nicotine eligibility", "Mature content access", "Market-specific digital service onboarding"] },
  ]} />;
}
