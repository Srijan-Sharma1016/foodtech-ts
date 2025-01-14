import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import useSignin from "@/hooks/useSignin"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
export default function LogIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {SigninUser,loading}=useSignin();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const suc = await SigninUser(email, password);
      if (suc) {
        console.log("Logged in successfully");
      }
    } catch (error) {
      console.log("Failed to login", error);
    }
  };
  useEffect(() => {
  if (currentUser) {
    navigate("/");
  }
  }, [currentUser, navigate]);

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Log In</h1>
      <form className="space-y-4">


        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div> <div className="space-y-2">
          <Label htmlFor="password">Password </Label>
          <Input id="password" type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
    
        <Button type="submit" className="w-full" onClick={handleSubmit}>
          Sign In
        </Button>
      </form>
    </div>
  )
}

