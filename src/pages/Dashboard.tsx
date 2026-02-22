import { UserButton } from "@clerk/clerk-react"

function Dashboard() {
  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}

export default Dashboard