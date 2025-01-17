"use client"

import { useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, GeoJSON, useMap, MapContainerProps } from 'react-leaflet'

const indiaGeoJson = {
  type: "FeatureCollection",
  features: []
}

function MapController() {
  const map = useMap()
  
  useEffect(() => {
    map.setView([20.5937, 78.9629], 5)
  }, [map])
  
  return null
}

interface DiseaseMapProps {
  height?: number
  colorScheme?: 'teal' | 'blue' | 'red'
}

export default function DiseaseMap({ height = 700, colorScheme = 'teal' }: DiseaseMapProps) {
  const getColor = (cases: number) => {
    const colorSchemes = {
      teal: [
        '#0f766e', '#0d9488', '#14b8a6', '#2dd4bf',
        '#5eead4', '#99f6e4', '#ccfbf1', '#f0fdfa'
      ],
      blue: [
        '#1e40af', '#1d4ed8', '#3b82f6', '#60a5fa',
        '#93c5fd', '#bfdbfe', '#dbeafe', '#eff6ff'
      ],
      red: [
        '#991b1b', '#dc2626', '#ef4444', '#f87171',
        '#fca5a5', '#fecaca', '#fee2e2', '#fef2f2'
      ]
    }
    const colors = colorSchemes[colorScheme]
    return cases > 1000 ? colors[0] :
           cases > 500  ? colors[1] :
           cases > 200  ? colors[2] :
           cases > 100  ? colors[3] :
           cases > 50   ? colors[4] :
           cases > 20   ? colors[5] :
           cases > 10   ? colors[6] :
                         colors[7];
  }

  const style = (feature: any) => {
    return {
      fillColor: getColor(feature.properties.cases || 0),
      weight: 1,
      opacity: 1,
      color: '#0f172a',
      fillOpacity: 0.7
    };
  }

  return (
    <div className="relative rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm overflow-hidden" style={{ height }}>
      <div className="absolute top-2 left-2 z-[400] bg-white dark:bg-slate-800 p-2 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="text-xs font-mono space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: getColor(1001) }}></div>
            <span>{'> 1000 cases'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: getColor(201) }}></div>
            <span>200-1000 cases</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: getColor(51) }}></div>
            <span>{'< 200 cases'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

