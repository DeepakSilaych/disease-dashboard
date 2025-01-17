"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "T-6", cases: 400, ci_lower: 380, ci_upper: 420 },
  { date: "T-5", cases: 300, ci_lower: 285, ci_upper: 315 },
  { date: "T-4", cases: 500, ci_lower: 475, ci_upper: 525 },
  { date: "T-3", cases: 280, ci_lower: 266, ci_upper: 294 },
  { date: "T-2", cases: 590, ci_lower: 560, ci_upper: 620 },
  { date: "T-1", cases: 320, ci_lower: 304, ci_upper: 336 }
]

export function TrendChart() {
  return (
    <ChartContainer
      config={{
        cases: {
          label: "Cases",
          color: "hsl(var(--chart-1))"
        }
      }}
      className="h-[200px]"
    >
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          style={{ fontSize: '10px', fontFamily: 'monospace' }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          style={{ fontSize: '10px', fontFamily: 'monospace' }}
        />
        <ChartTooltip 
          content={
            <ChartTooltipContent 
              className="font-mono"
              style={{ fontSize: '10px' }}
            />
          }
        />
        <Line
          type="monotone"
          dataKey="cases"
          strokeWidth={2}
          dot={{ strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, strokeWidth: 2 }}
        />
      </LineChart>
    </ChartContainer>
  )
}

