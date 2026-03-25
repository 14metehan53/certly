import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/features/shared/section";

export type ContentSection = {
  title: string;
  description: string;
  bullets: string[];
};

export function MarketingPageTemplate({
  eyebrow,
  title,
  subtitle,
  sections,
  ctaHref = "/book-demo",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  sections: ContentSection[];
  ctaHref?: string;
}) {
  return (
    <>
      <Section eyebrow={eyebrow} title={title} description={subtitle}>
        <div className="mt-7 flex gap-3"><Button asChild><Link href={ctaHref}>Book a tailored demo</Link></Button><Button asChild variant="outline"><Link href="/developers">Review docs preview</Link></Button></div>
      </Section>
      <Section title="Operational depth for trust-sensitive products">
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {sections.map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2"><ArrowRight className="mt-0.5 h-4 w-4 text-blue-600" />{bullet}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
      <Section title="Ready for enterprise evaluation" description="Bring your trust & safety, security, product, and procurement teams into one technical walkthrough.">
        <Card className="mt-8 flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-lg font-semibold">See how Certly fits your policy architecture.</p><p className="text-sm text-slate-600 dark:text-slate-300">Frontend prototype only — no production identities or sensitive data is processed.</p></div>
          <Button asChild><Link href="/contact">Contact sales</Link></Button>
        </Card>
      </Section>
    </>
  );
}
