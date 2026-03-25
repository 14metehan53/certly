"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/features/shared/section";

const tiers = [
  { name: "Starter", m: "$499", a: "$399", vol: "Up to 25k verifications/mo", support: "Email" },
  { name: "Growth", m: "$1,490", a: "$1,190", vol: "Up to 180k verifications/mo", support: "Priority" },
  { name: "Scale", m: "$4,900", a: "$3,950", vol: "Up to 1M verifications/mo", support: "Technical TAM" },
  { name: "Enterprise", m: "Custom", a: "Custom", vol: "Multi-region + custom policy packs", support: "Dedicated team" },
];

export default function Page() {
  const [annual, setAnnual] = useState(true);
  return (
    <Section eyebrow="Pricing" title="Plans built for verification maturity" description="Volume-guided packages with policy controls, session trust support, and enterprise procurement readiness.">
      <div className="mt-6 flex gap-2"><Button variant={!annual ? "default" : "outline"} onClick={() => setAnnual(false)}>Monthly</Button><Button variant={annual ? "default" : "outline"} onClick={() => setAnnual(true)}>Annual</Button></div>
      <div className="mt-8 grid gap-4 lg:grid-cols-4">
        {tiers.map((tier) => <Card key={tier.name} className="p-5"><p className="text-lg font-semibold">{tier.name}</p><p className="mt-2 text-3xl font-semibold">{annual ? tier.a : tier.m}</p><p className="mt-2 text-sm text-slate-500">{tier.vol}</p><ul className="mt-4 space-y-2 text-sm"><li>Age + identity + country modules</li><li>Policy engine access</li><li>Audit retention controls</li><li>{tier.support} support</li></ul></Card>)}
      </div>
    </Section>
  );
}
