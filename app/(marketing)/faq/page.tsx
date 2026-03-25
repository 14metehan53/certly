import { Card } from "@/components/ui/card";
import { Section } from "@/features/shared/section";

const faqs = [
  ["What does Certly store?", "This prototype models claim outcomes, policy evaluations, and audit events. It avoids raw identity document retention patterns."],
  ["Is age verification the same as identity verification?", "No. Age verification can return threshold eligibility claims, while identity verification focuses on assurance-backed identity status."],
  ["Does this replace identity wallets or providers?", "No. Certly is positioned as an orchestration and policy layer, not a wallet or direct provider replacement."],
  ["Is this demo frontend-only?", "Yes. This implementation uses typed mock data and simulated states only."],
];

export default function Page() {
  return <Section eyebrow="FAQ" title="Frequently asked questions" description="Answers for technical, product, and procurement stakeholders."><div className="mt-8 space-y-3">{faqs.map(([q,a])=> <Card key={q} className="p-5"><p className="font-semibold">{q}</p><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{a}</p></Card>)}</div></Section>;
}
