// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB8Qn-pEZdZA9KFaBW1Gs5TTrysxxRwcO0",
  authDomain: "codishwise.firebaseapp.com",
  projectId: "codishwise",
  storageBucket: "codishwise.firebasestorage.app",
  messagingSenderId: "591265916881",
  appId: "1:591265916881:web:aa8718668a11a41e3c22f0",
  measurementId: "G-EMC718CQCN",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
