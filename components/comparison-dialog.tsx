"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TemporalComparison } from "./temporal-comparison"
import { SpatialComparison } from "./spatial-comparison"

interface ComparisonDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ComparisonDialog({ open, onOpenChange }: ComparisonDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] w-[1000px]">
        <DialogHeader>
          <DialogTitle className="font-mono text-lg">Comparison View</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="temporal" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="temporal" className="font-mono">Temporal</TabsTrigger>
            <TabsTrigger value="spatial" className="font-mono">Spatial</TabsTrigger>
          </TabsList>
          <TabsContent value="temporal">
            <TemporalComparison />
          </TabsContent>
          <TabsContent value="spatial">
            <SpatialComparison />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

