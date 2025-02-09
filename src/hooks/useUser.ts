import { useAuth } from "../context/AuthContext.js";
import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import {getDocs, query, where, collection } from "firebase/firestore";

const useUser = () => {
  const [loading, setLoading] = useState(false);
  const authContext = useAuth();
  const currentUser = authContext ? authContext.currentUser : null;
  const [user, setUser] = useState<any>({
    userId: "",
    email: "",
    First_Name:"",

  });
  const db = getFirestore();

  useEffect(() => {
    const fetchUser = async () => {
      if (currentUser) {
        setLoading(true);
        const q = query(
          collection(db, "users"),
          where("userId", "==", currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });

        setLoading(false);
      }
    };

    fetchUser();
  }, [currentUser]);

  return { user, loading };
};

export default useUser;