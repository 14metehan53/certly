import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function DashboardPage({
  title,
  subtitle,
  cards,
  tableHeaders,
  tableRows,
}: {
  title: string;
  subtitle: string;
  cards: { label: string; value: string; helper: string }[];
  tableHeaders: string[];
  tableRows: string[][];
}) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="text-slate-600 dark:text-slate-300">{subtitle}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((item) => (
          <Card key={item.label} className="p-5">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
            <Badge className="mt-3">{item.helper}</Badge>
          </Card>
        ))}
      </div>
      <Card className="overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/60">
            <tr>{tableHeaders.map((head) => <th key={head} className="px-4 py-3 font-medium">{head}</th>)}</tr>
          </thead>
          <tbody>
            {tableRows.map((row, idx) => (
              <tr key={idx} className="border-t border-border">
                {row.map((cell, i) => <td key={`${idx}-${i}`} className="px-4 py-3">{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
