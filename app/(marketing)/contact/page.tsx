import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Section } from "@/features/shared/section";

export default function Page() {
  return <Section eyebrow="Contact" title="Talk with Certly sales and solution engineering" description="Share your verification stack goals and we will map a policy design walkthrough."><Card className="mt-8 grid gap-4 p-6 lg:grid-cols-2"><Input placeholder="Work email"/><Input placeholder="Company"/><Input placeholder="Role"/><Input placeholder="Current verification provider(s)"/><Input className="lg:col-span-2" placeholder="Tell us about your trust & safety or compliance requirements"/><Button className="lg:col-span-2">Submit request</Button></Card></Section>;
}
