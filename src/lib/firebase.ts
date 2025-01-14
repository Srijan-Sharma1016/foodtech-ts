import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBXu6R2A0qML7FUp3it8IXrw98gHcWLofA",
  authDomain: "smart-food-distribution-c2dfa.firebaseapp.com",
  projectId: "smart-food-distribution-c2dfa",
  storageBucket: "smart-food-distribution-c2dfa.firebasestorage.app",
  messagingSenderId: "915810483650",
  appId: "1:915810483650:web:175208bd058b593679aa5b",
  measurementId: "G-6F9Q6032F5"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };