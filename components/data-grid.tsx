import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function DataGrid() {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-mono">Region</TableHead>
            <TableHead className="font-mono text-right">Cases</TableHead>
            <TableHead className="font-mono text-right">R₀</TableHead>
            <TableHead className="font-mono text-right">Growth Rate</TableHead>
            <TableHead className="font-mono text-right">p-value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-mono">Northern Zone</TableCell>
            <TableCell className="font-mono text-right">1.23 × 10³</TableCell>
            <TableCell className="font-mono text-right">1.2</TableCell>
            <TableCell className="font-mono text-right">+4.2%</TableCell>
            <TableCell className="font-mono text-right">0.001</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-mono">Central Zone</TableCell>
            <TableCell className="font-mono text-right">8.45 × 10²</TableCell>
            <TableCell className="font-mono text-right">1.1</TableCell>
            <TableCell className="font-mono text-right">+2.8%</TableCell>
            <TableCell className="font-mono text-right">0.003</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-mono">Southern Zone</TableCell>
            <TableCell className="font-mono text-right">6.72 × 10²</TableCell>
            <TableCell className="font-mono text-right">0.9</TableCell>
            <TableCell className="font-mono text-right">-1.5%</TableCell>
            <TableCell className="font-mono text-right">0.042</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

