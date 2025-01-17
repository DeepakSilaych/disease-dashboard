import DiseaseMap from '@/components/disease-map'
import { DashboardHeader } from '@/components/dashboard-header'
import { MapControls } from '@/components/map-controls'
import { DataGrid } from '@/components/data-grid'
import { Filters } from '@/components/filters'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-red-50 dark:bg-slate-900">
      <div className="container mx-auto p-4 space-y-4">
        <DashboardHeader />
        <div className="flex gap-4">
          <div className="flex-grow space-y-4">
            <MapControls />
            <DiseaseMap />
            <DataGrid />
          </div>
          <Filters />
        </div>
      </div>
    </div>
  )
}

