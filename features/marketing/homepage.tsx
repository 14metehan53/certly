"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Shield, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { productModules } from "@/data/site";
import { Section } from "@/features/shared/section";

export function HomePage() {
  return (
    <>
      <Section eyebrow="Verification infrastructure" title="Verify what matters without hoarding sensitive identity data." description="Certly helps platforms orchestrate age, identity, country, and session trust checks through configurable policies and reusable verification state.">
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg"><Link href="/book-demo">Start enterprise evaluation</Link></Button>
          <Button asChild variant="outline" size="lg"><Link href="/product">Explore product architecture</Link></Button>
        </div>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Policy Decisions", "94ms median"],
            ["Reusable trust states", "184k active sessions"],
            ["Audit events", "12.4M retained records"],
          ].map(([k, v]) => <Card key={k} className="p-5"><p className="text-sm text-slate-500">{k}</p><p className="mt-2 text-2xl font-semibold">{v}</p></Card>)}
        </motion.div>
      </Section>

      <Section title="Trusted by security-conscious product teams">
        <div className="mt-7 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4 lg:grid-cols-6">{["Aster Bank","PlayGrid","Portlane","Northline","CivicRail","CometPay"].map((l)=><Card key={l} className="p-4 text-center font-medium text-slate-500">{l}</Card>)}</div>
      </Section>

      <Section eyebrow="Why Certly" title="Modular verification layer for modern platforms">
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {productModules.map((module) => (
            <Card key={module.title} className="p-6"><p className="text-lg font-semibold">{module.title}</p><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{module.desc}</p><Link href={module.path} className="mt-4 inline-flex items-center text-sm text-blue-600">Learn more <ArrowRight className="ml-1 h-4 w-4" /></Link></Card>
          ))}
        </div>
      </Section>

      <Section title="How it works" description="Bring issuer signals, claims, and session telemetry into one policy-driven workflow.">
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[{icon:Shield,title:"Collect only required claims",text:"Hosted flows and APIs return eligibility claims instead of raw document payloads."},{icon:Workflow,title:"Apply policy logic",text:"Use reusable policy packs by region, product surface, and risk tier."},{icon:Lock,title:"Persist trust state",text:"Store minimal verification outcomes, session age, and audit events for review."}].map(({icon:Icon,title,text})=> <Card key={title} className="p-6"><Icon className="h-5 w-5 text-blue-500"/><p className="mt-3 font-semibold">{title}</p><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{text}</p></Card>)}
        </div>
      </Section>

      <Section title="Frequently asked questions preview" description="Explore complete procurement and technical FAQs before formal review.">
        <Card className="mt-8 p-6"><p className="font-medium">Does Certly retain raw identity documents?</p><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">This prototype demonstrates a minimal-retention model focused on claim outcomes and policy evidence, not raw source documents.</p><Button asChild variant="outline" className="mt-4"><Link href="/faq">Read full FAQ</Link></Button></Card>
      </Section>
    </>
  );
}
