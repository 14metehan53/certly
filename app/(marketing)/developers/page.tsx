import { Card } from "@/components/ui/card";
import { Section } from "@/features/shared/section";

export default function Page() {
  return (
    <>
      <Section eyebrow="Developers" title="API-first verification infrastructure" description="Integrate claim-based trust decisions with typed APIs, event streams, and hosted flows.">
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {["Node SDK","React SDK","Webhook Toolkit"].map((sdk)=> <Card key={sdk} className="p-5"><p className="font-semibold">{sdk}</p><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Mock package for frontend demonstration and integration planning.</p></Card>)}
        </div>
      </Section>
      <Section title="Integration steps" description="Create a verification session, evaluate policy result, and react to webhook updates.">
        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          <Card className="p-5"><p className="mb-2 text-sm font-medium">Create verification session</p><pre className="overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs text-slate-200">{`POST /v1/verification-sessions\n{\n  "tenant_id": "tn_northline",\n  "policy_key": "marketplace_checkout",\n  "claims": ["age_over_18", "country_verified"]\n}`}</pre></Card>
          <Card className="p-5"><p className="mb-2 text-sm font-medium">Fetch verification result</p><pre className="overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs text-slate-200">{`GET /v1/verification-sessions/{id}\n{\n  "status": "approved",\n  "policy_result": "pass",\n  "claims": { "age_over_18": true }\n}`}</pre></Card>
          <Card className="p-5 lg:col-span-2"><p className="mb-2 text-sm font-medium">Webhook event</p><pre className="overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs text-slate-200">{`event: verification.session.updated\ndata: {\n  "session_id": "vs_18472",\n  "status": "step_up_required",\n  "reason": "new_device_detected"\n}`}</pre></Card>
        </div>
      </Section>
    </>
  );
}
