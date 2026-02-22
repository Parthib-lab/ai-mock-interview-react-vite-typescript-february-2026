import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-white">
      
      <Link to="/" className="text-xl font-bold">
        AI Mock Interview
      </Link>

      <div className="flex gap-4 items-center">
        <SignedOut>
          <Link to="/sign-in" className="hover:text-blue-500">
            Sign In
          </Link>
          <Link to="/sign-up" className="hover:text-blue-500">
            Sign Up
          </Link>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

    </div>
  )
}

export default Navbar