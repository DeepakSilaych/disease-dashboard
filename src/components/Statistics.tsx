import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface StatisticsProps {
  diseaseData: Record<string, number>
  disease: string
  timeframe: string
}

export default function Statistics({ diseaseData, disease, timeframe }: StatisticsProps) {
  const totalCases = Object.values(diseaseData).reduce((sum, cases) => sum + cases, 0)
  const averageCases = Math.round(totalCases / Object.keys(diseaseData).length)
  const maxCases = Math.max(...Object.values(diseaseData))
  const minCases = Math.min(...Object.values(diseaseData))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{totalCases.toLocaleString()}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Average Cases per State</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{averageCases.toLocaleString()}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Highest Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{maxCases.toLocaleString()}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Lowest Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{minCases.toLocaleString()}</p>
        </CardContent>
      </Card>
    </div>
  )
}

