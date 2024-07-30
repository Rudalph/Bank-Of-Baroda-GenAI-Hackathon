import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDgRWbj0_8Rk7O0Z-tcrHjvMw2qq3yrhyw",
  authDomain: "bob-hackathon-79610.firebaseapp.com",
  projectId: "bob-hackathon-79610",
  storageBucket: "bob-hackathon-79610.appspot.com",
  messagingSenderId: "181483124488",
  appId: "1:181483124488:web:a9e30fc6cda1088e50debd",
  measurementId: "G-017SYTFXPZ"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
