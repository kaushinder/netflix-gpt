// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAe9863l4WuP1VkH1VkW_ZEvLK4F6hYV64",
  authDomain: "netflix-gpt-v2-43773.firebaseapp.com",
  projectId: "netflix-gpt-v2-43773",
  storageBucket: "netflix-gpt-v2-43773.firebasestorage.app",
  messagingSenderId: "149333104508",
  appId: "1:149333104508:web:0ff6a58feb79452e5476f9",
  measurementId: "G-N4RPQVGK7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);