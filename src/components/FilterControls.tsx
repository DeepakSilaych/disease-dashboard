'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'

interface FilterControlsProps {
  diseases: string[]
  timeframes: string[]
  states: string[]
  onFilterChange: (filters: { disease: string; timeframe: string; state: string }) => void
}

export default function FilterControls({ diseases, timeframes, states, onFilterChange }: FilterControlsProps) {
  const [disease, setDisease] = useState(diseases[0])
  const [timeframe, setTimeframe] = useState(timeframes[0])
  const [state, setState] = useState('All India')

  const handleApplyFilters = () => {
    onFilterChange({ disease, timeframe, state })
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Select value={disease} onValueChange={setDisease}>
            <SelectTrigger className="w-full sm:w-[200px]">
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
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-full sm:w-[200px]">
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
          <Select value={state} onValueChange={setState}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All India">All India</SelectItem>
              {states.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={handleApplyFilters} className="w-full sm:w-auto">Apply Filters</Button>
        </div>
      </CardContent>
    </Card>
  )
}

