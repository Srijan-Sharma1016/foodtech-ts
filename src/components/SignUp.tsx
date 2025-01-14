import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { useAuth } from "../context/AuthContext"
import useSignup from "@/hooks/useSignup"
import { useNavigate } from "react-router-dom"
export default function SignUp() {
  const [userType, setUserType] = useState("buyer")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState<number>()
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordC, setPasswordC] = useState("")
  const [idProof, setIdProof] = useState()
  const { currentUser } = useAuth();
  const { SignupUser } = useSignup();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const suc = await SignupUser(
        firstName,
        lastName,
        password,
        passwordC,
        email,
        phone,
        address,
        idProof
       
      );
      if (suc) {
        navigate("/");
        console.log("User created successfully");
      }
    } catch (error) {
      console.log("Failed to create user", error);
    }
  };
  useEffect(() => {
  if (currentUser) {
    navigate("/");
  }
  }, [currentUser, navigate]);

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <form className="space-y-4">
        <RadioGroup defaultValue="buyer" onValueChange={setUserType}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="buyer" id="buyer" />
            <Label htmlFor="buyer">Buyer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="seller" id="seller" />
            <Label htmlFor="seller">Seller</Label>
          </div>
        </RadioGroup>
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" required value={firstName}onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" required value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" required value = {phone} onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" required value = {address} onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required value = {email} onChange={(e)=>setEmail(e.target.value)}/>
        </div> <div className="space-y-2">
          <Label htmlFor="password">Password </Label>
          <Input id="password" type="password" required value = {password} onChange={(e)=>setPassword(e.target.value)}/>
        </div> <div className="space-y-2">
          <Label htmlFor="passwordC">Confirm Password </Label>
          <Input id="passwordC" type="password" required value = {passwordC} onChange={(e)=>setPasswordC(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="idProof">Valid ID Proof Number</Label>
          <Input id="idProof" type="number" required value = {idProof} onChange={(e)=>setIdProof(e.target.value)}/>
        </div>
        <Button type="submit" className="w-full" onClick={handleSubmit}>
          Sign Up as {userType === "buyer" ? "Buyer" : "Seller"}
        </Button>
      </form>
    </div>
  )
}

