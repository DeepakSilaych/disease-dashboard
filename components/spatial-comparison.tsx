"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import DiseaseMap from "./disease-map"

export function SpatialComparison() {
  const [mapCount, setMapCount] = useState(2)
  const [colorScheme, setColorScheme] = useState("teal")

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="map-count" className="font-mono text-sm">Number of Maps</Label>
          <Slider
            id="map-count"
            min={2}
            max={4}
            step={1}
            value={[mapCount]}
            onValueChange={(value) => setMapCount(value[0])}
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="color-scheme" className="font-mono text-sm">Color Scheme</Label>
          <Select value={colorScheme} onValueChange={setColorScheme}>
            <SelectTrigger id="color-scheme" className="w-full mt-2 font-mono">
              <SelectValue placeholder="Select color scheme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="teal">Teal</SelectItem>
              <SelectItem value="blue">Blue</SelectItem>
              <SelectItem value="red">Red</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className={`grid gap-4 ${mapCount > 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {Array.from({ length: mapCount }).map((_, index) => (
          <div key={index} className="space-y-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-full font-mono">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="north">Northern Zone</SelectItem>
                <SelectItem value="central">Central Zone</SelectItem>
                <SelectItem value="south">Southern Zone</SelectItem>
              </SelectContent>
            </Select>
            <DiseaseMap height={300} colorScheme={colorScheme as "teal" | "blue" | "red"} />
          </div>
        ))}
      </div>
    </div>
  )
}

