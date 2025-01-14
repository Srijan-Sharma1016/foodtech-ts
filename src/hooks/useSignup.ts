import toast from "react-hot-toast";
import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection,addDoc } from "firebase/firestore";
const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const SignupUser = async (
    First_Name: string,
    Last_Name: string,
    password: string,
    confirmPassword: string,
    email: string,
    Phone: number,
    Address: string,
    validID :number,
  ) => {
    if (
      !First_Name ||
      !Last_Name ||
      !Phone ||
      !Address ||
      !email ||
      !password ||
      !confirmPassword ||
      !validID

    ) {
      toast.error("Please fill in all fields");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      let fullName = First_Name + " " + Last_Name;
      await updateProfile(user, {
        displayName: fullName,
      });
      const userRef = await addDoc(collection(db, "users"), {
        userId: user.uid,
        email,
        First_Name,
        Last_Name,
        Phone,
        Address,
        validID,
      
        createdAt: new Date().toISOString(),
      });
      console.log("Document written with ID: ", userRef.id);

      toast.success("User created successfully");

      return true;
    } catch (error) {
      toast.error("Failed to create user", (error as any).message);
      return false;
    } finally {
      setLoading(false);
    }
  };
  return { SignupUser, loading };
};

export default useSignup;