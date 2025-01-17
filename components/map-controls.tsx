"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, ZoomIn, ZoomOut, RotateCcw, SplitSquareVertical } from 'lucide-react'
import { ComparisonDialog } from "./comparison-dialog"
import { useState } from "react"

export function MapControls() {
  const [comparisonOpen, setComparisonOpen] = useState(false)

  return (
    <Card className="p-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 font-mono"
          onClick={() => setComparisonOpen(true)}
        >
          <SplitSquareVertical className="h-4 w-4" />
          Comparison View
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2 font-mono">
            <ZoomIn className="h-4 w-4" />
            Zoom +
          </Button>
          <Button variant="outline" size="sm" className="gap-2 font-mono">
            <ZoomOut className="h-4 w-4" />
            Zoom -
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <ComparisonDialog open={comparisonOpen} onOpenChange={setComparisonOpen} />
    </Card>
  )
}

