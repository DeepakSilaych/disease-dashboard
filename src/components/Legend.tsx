import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Legend() {
  const legendItems = [
    { color: '#FFEDA0', label: '0-10' },
    { color: '#FED976', label: '10-20' },
    { color: '#FEB24C', label: '20-50' },
    { color: '#FD8D3C', label: '50-100' },
    { color: '#FC4E2A', label: '100-200' },
    { color: '#E31A1C', label: '200-500' },
    { color: '#BD0026', label: '500-1000' },
    { color: '#800026', label: '1000+' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Legend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {legendItems.map(({ color, label }) => (
            <div key={label} className="flex items-center">
              <div
                className="w-6 h-6 mr-2 rounded"
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

