
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcxh8a9uzm1_Mjw28TFKzPmQI5EDwaoFU",
  authDomain: "tourisim-authentication.firebaseapp.com",
  projectId: "tourisim-authentication",
  storageBucket: "tourisim-authentication.appspot.com",
  messagingSenderId: "187981968194",
  appId: "1:187981968194:web:a381aa072b6f563673cedb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app