import { Microscope } from 'lucide-react'

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
      <div className="flex items-center gap-2">
        <Microscope className="h-6 w-6 text-teal-600 dark:text-teal-400" />
        <div>
          <h1 className="text-2xl font-bold tracking-tight font-mono">Disease Visualization Dashboard</h1>
          <p className="text-sm text-muted-foreground font-mono">Data updated: 2025-01-17 14:24:11 UTC</p>
        </div>
      </div>
    </div>
  )
}

