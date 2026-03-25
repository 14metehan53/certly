import { Card } from "@/components/ui/card";
import { Section } from "@/features/shared/section";

export default function Page() {
  return <Section eyebrow="Docs Preview" title="Documentation experience preview" description="A mock docs surface with quickstart, API references, endpoint examples, and webhook schemas."><div className="mt-8 grid gap-4 lg:grid-cols-[260px_1fr]"><Card className="p-4"><p className="font-semibold">Sidebar</p><ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300"><li>Quickstart</li><li>Verification Sessions API</li><li>Policies API</li><li>Webhook Events</li><li>Auth Model</li></ul></Card><div className="space-y-4"><Card className="p-5"><p className="font-semibold">Search</p><div className="mt-2 rounded-xl border border-border p-3 text-sm text-slate-500">Search endpoints, events, and policy examples...</div></Card><Card className="p-5"><p className="mb-2 font-semibold">Endpoint preview</p><pre className="overflow-x-auto rounded-xl bg-slate-950 p-4 text-xs text-slate-200">{`POST /v1/policies/evaluate\n{ "policy_key": "checkout_v3", "session_id": "vs_294" }`}</pre></Card></div></div></Section>;
}
