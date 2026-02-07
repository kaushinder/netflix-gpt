import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAe9863l4WuP1VkH1VkW_ZEvLK4F6hYV64",
  authDomain: "netflix-gpt-v2-43773.firebaseapp.com",
  projectId: "netflix-gpt-v2-43773",
  storageBucket: "netflix-gpt-v2-43773.firebasestorage.app",
  messagingSenderId: "149333104508",
  appId: "1:149333104508:web:0ff6a58feb79452e5476f9",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();