'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import FilterControls from '@/components/FilterControls'
import Legend from '@/components/Legend'
import Statistics from '@/components/Statistics'
import MapComparison from '@/components/MapComparison'
import { getGeoJsonData, getDiseaseData, getDiseases, getTimeframes, getStates } from '@/lib/data'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface GeoJsonData {
  type: string;
  features: {
    type: string;
    properties: { name: string; };
    geometry: { type: string; coordinates: number[][][]; };
  }[];
}

const EnhancedMap = dynamic(() => import('@/components/EnhancedMap'), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
})

export default function DiseaseDashboard() {
  const [geoJsonData, setGeoJsonData] = useState<GeoJsonData | null>(null)
  const [diseasesData, setDiseasesData] = useState<Record<string, Record<string, number>>>({})
  const [currentDisease, setCurrentDisease] = useState('')
  const [currentTimeframe, setCurrentTimeframe] = useState('')
  const [currentState, setCurrentState] = useState('All India')
  const [states, setStates] = useState<string[]>([])

  useEffect(() => {
    async function fetchInitialData() {
      const geoData = await getGeoJsonData()
      setGeoJsonData(geoData)

      const diseases = getDiseases()
      const timeframes = getTimeframes()
      setCurrentDisease(diseases[0])
      setCurrentTimeframe(timeframes[0])

      const statesList = getStates()
      setStates(statesList)

      const initialDiseasesData: Record<string, Record<string, number>> = {}
      for (const disease of diseases) {
        initialDiseasesData[disease] = await getDiseaseData(disease, timeframes[0])
      }
      setDiseasesData(initialDiseasesData)
    }

    fetchInitialData()
  }, [])

  const handleFilterChange = async ({ disease, timeframe, state }: { disease: string; timeframe: string; state: string }) => {
    const newData = await getDiseaseData(disease, timeframe)
    setDiseasesData({ ...diseasesData, [disease]: newData })
    setCurrentDisease(disease)
    setCurrentTimeframe(timeframe)
    setCurrentState(state)
  }

  const handleStateClick = (stateName: string) => {
    setCurrentState(stateName)
  }

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold">Disease Visualization Dashboard - India</h1>
      <FilterControls
        diseases={getDiseases()}
        timeframes={getTimeframes()}
        states={states}
        onFilterChange={handleFilterChange}
      />
      <Tabs defaultValue="single-map">
        <TabsList>
          <TabsTrigger value="single-map">Single Map View</TabsTrigger>
          <TabsTrigger value="comparison">Map Comparison</TabsTrigger>
        </TabsList>
        <TabsContent value="single-map">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="h-[600px]">
                {geoJsonData && (
                  <EnhancedMap
                    geoJsonData={geoJsonData}
                    diseaseData={diseasesData[currentDisease] || {}}
                    onStateClick={handleStateClick}
                  />
                )}
              </div>
            </div>
            <div className="space-y-4">
              <Legend />
              <Statistics
                diseaseData={diseasesData[currentDisease] || {}}
                disease={currentDisease}
                timeframe={currentTimeframe}
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="comparison">
          <MapComparison
            geoJsonData={geoJsonData}
            diseasesData={diseasesData}
            diseases={getDiseases()}
            timeframes={getTimeframes()}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
