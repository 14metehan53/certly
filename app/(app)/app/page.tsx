import { DashboardPage } from "@/features/dashboard/dashboard-page";
import { overviewMetrics, verificationRows } from "@/data/dashboard";

export default function Page() {
  return <DashboardPage title="Verification Overview" subtitle="Cross-tenant trust posture, claim outcomes, and session health." cards={overviewMetrics.map((m) => ({ label: m.label, value: m.value, helper: m.delta }))} tableHeaders={["Event ID", "Type", "Status", "Issuer", "Timestamp"]} tableRows={verificationRows} />;
}
