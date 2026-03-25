import { MarketingPageTemplate } from "@/features/marketing/marketing-page";

export default function Page() {
  return <MarketingPageTemplate eyebrow="Session Trust" title="Device-aware trusted sessions with step-up verification" subtitle="Maintain reusable trust state over time, then intelligently trigger re-checks when risk markers change." sections={[
    { title: "Trusted sessions", description: "Issue trust state tied to device and verification history.", bullets: ["Session trust tokens", "Time-bounded trust scores", "Configurable idle expiry"] },
    { title: "New device detection", description: "Flag suspicious session context changes.", bullets: ["Device fingerprint comparison", "Geo-pattern anomaly markers", "Known-good session baselines"] },
    { title: "Session aging", description: "Automatically degrade trust based on policy-defined windows.", bullets: ["24h/7d/30d templates", "Claim-level aging policies", "Segmented risk posture"] },
    { title: "Risk-based re-check logic", description: "Use policy controls to trigger right-size verification.", bullets: ["Silent checks for low risk", "Step-up for medium risk", "Block + manual review for high risk"] },
  ]} />;
}
