import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth } from "../context/AuthContext"
export default function Navbar() {
  const authContext = useAuth();
  const currentUser = authContext ? authContext.currentUser : null;
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
          <img className="h-12 w-12 rounded-full" src="https://picsum.photos/200" alt="" />
          </Link>
          <div className="space-x-4">
            {!currentUser && (<><Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
              <Button variant="ghost" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>  <Button variant="ghost" asChild>
                <Link to="/about">About Us</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/learn-more">Learn More</Link>
              </Button></>)}
            {currentUser && (<><Button variant="ghost" asChild>
              <Link to="/profile">Profile</Link>
            </Button><Button variant="ghost" >
                {currentUser.displayName}
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/logout">Logout</Link>
              </Button><Button asChild className="w-max">
          <Link to="/suggestions">Suggestion</Link>
        </Button><Button asChild className="w-max">
          <Link to="/order-details">Order Details</Link>
        </Button></>)}

          </div>
        </div>
      </div>
    </nav>
  )
}

