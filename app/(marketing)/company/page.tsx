import { MarketingPageTemplate } from "@/features/marketing/marketing-page";

export default function Page() {
  return <MarketingPageTemplate eyebrow="Company" title="Building trust infrastructure for modern platforms" subtitle="Certly is a fictional company concept focused on privacy-first verification orchestration and operational maturity." sections={[
    { title: "Mission", description: "Help teams verify trust claims without raw-data sprawl.", bullets: ["Data minimization by design", "Configurable policy decisions", "Audit-ready operational workflows"] },
    { title: "Principles", description: "Security-conscious defaults and enterprise-grade controls.", bullets: ["Clear claim semantics", "Role-aware operations", "Transparent policy governance"] },
    { title: "Leadership", description: "Placeholder executive profiles for investor-ready storytelling.", bullets: ["CEO — Trust platform strategy", "CTO — Verification infrastructure", "COO — Enterprise operations"] },
    { title: "Careers + press", description: "Show growth and market narrative depth.", bullets: ["Careers teaser section", "Press kit starter", "Milestone timeline"] },
  ]} />;
}
