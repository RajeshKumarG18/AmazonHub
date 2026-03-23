import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCayqeYs6Q27B6nAMjts1pLbbHlMspSipY",
  authDomain: "hu-50d8d.firebaseapp.com",
  projectId: "hu-50d8d",
  storageBucket: "hu-50d8d.firebasestorage.app",
  messagingSenderId: "333504046487",
  appId: "1:333504046487:web:df022d0c255ca5b13610d2",
  measurementId: "G-4X59Q0M2LV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const analytics = getAnalytics(app);

export default app;