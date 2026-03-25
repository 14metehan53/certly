import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl gap-6 px-4 py-12 lg:grid-cols-2">
      <Card className="p-8"><h1 className="text-2xl font-semibold">Sign in to Certly Console</h1><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Use passkey, SSO, or email-based access in this frontend prototype.</p><div className="mt-6 space-y-3"><Input placeholder="Work email"/><Button className="w-full">Continue with passkey</Button><Button variant="outline" className="w-full">Continue with Google SSO</Button><Button variant="outline" className="w-full">Continue with Okta SSO</Button></div><p className="mt-4 text-xs text-slate-500">By continuing, you agree to terms and acceptable use language for this mock environment.</p></Card>
      <Card className="p-8"><p className="text-sm font-semibold text-blue-500">Trusted verification control plane</p><h2 className="mt-2 text-2xl font-semibold">Policy-driven trust decisions for security-conscious teams.</h2><ul className="mt-4 space-y-2 text-sm"><li>• Claim-based verification outcomes</li><li>• Session-aware step-up controls</li><li>• Audit-ready policy events</li></ul></Card>
    </div>
  );
}
