import { DashboardPage } from "@/features/dashboard/dashboard-page";

export default function Page() {
  return <DashboardPage
    title="settings"
    subtitle="Operational workspace for settings in the Certly console."
    cards={[
      { label: "Active items", value: "128", helper: "+8.2% vs last week" },
      { label: "Pass rate", value: "97.2%", helper: "Within target range" },
      { label: "Needs review", value: "19", helper: "Queue monitored" },
      { label: "Policy version", value: "v3.14", helper: "Latest published" },
    ]}
    tableHeaders={["Record", "Category", "Status", "Owner", "Last Updated"]}
    tableRows={[
      ["SETTINGS-001", "Primary", "Healthy", "Trust Ops", "2026-03-25 15:00 UTC"],
      ["SETTINGS-002", "Secondary", "Review", "Platform Risk", "2026-03-25 14:48 UTC"],
      ["SETTINGS-003", "Primary", "Healthy", "Security", "2026-03-25 14:31 UTC"],
    ]}
  />;
}
