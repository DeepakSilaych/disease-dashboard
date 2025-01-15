import dynamic from 'next/dynamic'

// Create a separate client component file for the dashboard content
const DashboardContent = dynamic(() => import('./components/DashboardContent'), {
  ssr: false
})

// Keep the page component as a server component
export default function DiseaseDashboard() {
  return <DashboardContent />
}

