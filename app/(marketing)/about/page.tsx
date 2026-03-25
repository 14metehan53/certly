import { Section } from "@/features/shared/section";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <Section eyebrow="About" title="Why data minimization matters in verification" description="Modern products need high-confidence trust decisions without proliferating sensitive identity data across every service.">
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["2019", "Concept established around claim-first trust models."],
            ["2023", "Expanded architecture into modular verification orchestration."],
            ["2026", "Frontend prototype built for enterprise stakeholder review."],
          ].map(([year, text]) => <Card key={year} className="p-5"><p className="text-sm font-semibold text-blue-600">{year}</p><p className="mt-2 text-sm">{text}</p></Card>)}
        </div>
      </Section>
    </>
  );
}
