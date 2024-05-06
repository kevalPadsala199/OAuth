// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-14f83.firebaseapp.com",
  projectId: "mern-auth-14f83",
  storageBucket: "mern-auth-14f83.appspot.com",
  messagingSenderId: "388913816893",
  appId: "1:388913816893:web:1a8cf31fffa84d40fd5154"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);