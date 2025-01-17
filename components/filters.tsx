import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter, Download } from 'lucide-react'

export function Filters() {
  return (
    <Card className="w-80 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
      <CardHeader>
        <CardTitle className="text-lg font-mono">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="disease" className="text-sm font-mono">Pathogen</Label>
          <Select defaultValue="covid-19">
            <SelectTrigger id="disease" className="w-full bg-slate-50 dark:bg-slate-800 font-mono">
              <SelectValue placeholder="Select pathogen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="covid-19">SARS-CoV-2</SelectItem>
              <SelectItem value="dengue">Dengue virus</SelectItem>
              <SelectItem value="malaria">P. falciparum</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="time-period" className="text-sm font-mono">Time Period</Label>
          <Select defaultValue="7d">
            <SelectTrigger id="time-period" className="w-full bg-slate-50 dark:bg-slate-800 font-mono">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">T-7 days</SelectItem>
              <SelectItem value="30d">T-30 days</SelectItem>
              <SelectItem value="90d">T-90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="region" className="text-sm font-mono">Region</Label>
          <Select defaultValue="all">
            <SelectTrigger id="region" className="w-full bg-slate-50 dark:bg-slate-800 font-mono">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="north">Northern Zone</SelectItem>
              <SelectItem value="central">Central Zone</SelectItem>
              <SelectItem value="south">Southern Zone</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="color-scheme" className="text-sm font-mono">Color Scheme</Label>
          <Select defaultValue="teal">
            <SelectTrigger id="color-scheme" className="w-full bg-slate-50 dark:bg-slate-800 font-mono">
              <SelectValue placeholder="Select color scheme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="teal">Teal</SelectItem>
              <SelectItem value="blue">Blue</SelectItem>
              <SelectItem value="red">Red</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="data-classes" className="text-sm font-mono">Number of Data Classes</Label>
          <Slider
            id="data-classes"
            min={3}
            max={9}
            step={1}
            defaultValue={[5]}
            className="w-full"
          />
        </div>

        <Button className="w-full gap-2 bg-teal-600 hover:bg-teal-700 font-mono">
          <Filter className="h-4 w-4" />
          Apply Filters
        </Button>

        <Button variant="outline" className="w-full gap-2 font-mono">
          <Download className="h-4 w-4" />
          Export Data
        </Button>
      </CardContent>
    </Card>
  )
}

