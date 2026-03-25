import { Section } from "@/features/shared/section";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
  return <Section eyebrow="Book Demo" title="Schedule an enterprise verification architecture session" description="Include procurement stakeholders, security reviewers, and technical owners for a complete walkthrough."><Card className="mt-8 p-6"><div className="grid gap-3 md:grid-cols-2"><Input placeholder="Name"/><Input placeholder="Business email"/><Input placeholder="Company size"/><Input placeholder="Target regions"/><Input className="md:col-span-2" placeholder="Which claims do you need to verify? (age, identity, country, sessions)"/></div><Button className="mt-4">Request demo slot</Button><p className="mt-3 text-xs text-slate-500">Confirmation state is simulated in this frontend-only prototype.</p></Card></Section>;
}
