'use client'

import { useState } from 'react'
import EnhancedMap from './EnhancedMap'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface MapComparisonProps {
  geoJsonData: any
  diseasesData: Record<string, Record<string, number>>
  diseases: string[]
  timeframes: string[]
}

export default function MapComparison({ geoJsonData, diseasesData, diseases, timeframes }: MapComparisonProps) {
  const [maps, setMaps] = useState([
    { disease: diseases[0], timeframe: timeframes[0] },
    { disease: diseases[1], timeframe: timeframes[0] },
  ])

  const addMap = () => {
    if (maps.length < 4) {
      setMaps([...maps, { disease: diseases[0], timeframe: timeframes[0] }])
    }
  }

  const removeMap = (index: number) => {
    setMaps(maps.filter((_, i) => i !== index))
  }

  const updateMap = (index: number, field: 'disease' | 'timeframe', value: string) => {
    const newMaps = [...maps]
    newMaps[index][field] = value
    setMaps(newMaps)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Map Comparison</h2>
        <Button onClick={addMap} disabled={maps.length >= 4}>Add Map</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {maps.map((map, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {map.disease} - {map.timeframe}
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={() => removeMap(index)}>Remove</Button>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex space-x-2">
                <Select value={map.disease} onValueChange={(value) => updateMap(index, 'disease', value)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select disease" />
                  </SelectTrigger>
                  <SelectContent>
                    {diseases.map((d) => (
                      <SelectItem key={d} value={d}>
                        {d}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={map.timeframe} onValueChange={(value) => updateMap(index, 'timeframe', value)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeframes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="h-[300px]">
                <EnhancedMap
                  geoJsonData={geoJsonData}
                  diseaseData={diseasesData[map.disease]}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

