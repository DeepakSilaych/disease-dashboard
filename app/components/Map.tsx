'use client'

import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

interface MapProps {
  geoJsonData: any
  diseaseData: Record<string, number>
}

export default function Map({ geoJsonData, diseaseData }: MapProps) {
  const [map, setMap] = useState<L.Map | null>(null)

  useEffect(() => {
    if (map) {
      map.fitBounds([[8, 68], [36, 97]])
    }
  }, [map])

  const getColor = (value: number) => {
    return value > 1000
      ? '#800026'
      : value > 500
      ? '#BD0026'
      : value > 200
      ? '#E31A1C'
      : value > 100
      ? '#FC4E2A'
      : value > 50
      ? '#FD8D3C'
      : value > 20
      ? '#FEB24C'
      : value > 10
      ? '#FED976'
      : '#FFEDA0'
  }

  const style = (feature: any) => {
    const value = diseaseData[feature.properties.name] || 0
    return {
      fillColor: getColor(value),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    }
  }

  return (
    <MapContainer
      center={[22, 82]}
      zoom={4}
      style={{ height: '100%', width: '100%', minHeight: '500px' }}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoJsonData && (
        <GeoJSON 
          data={geoJsonData} 
          style={style}
          onEachFeature={(feature, layer) => {
            const name = feature.properties.name;
            const cases = diseaseData[name] || 0;
            layer.bindTooltip(`${name}: ${cases} cases`, { permanent: false, direction: 'center' });
          }}
        />
      )}
    </MapContainer>
  )
}

