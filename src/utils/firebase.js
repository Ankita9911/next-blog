// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.FIREBASE",
  authDomain: "mindwellness-5259c.firebaseapp.com",
  projectId: "mindwellness-5259c",
  storageBucket: "mindwellness-5259c.firebasestorage.app",
  messagingSenderId: "250697142657",
  appId: "1:250697142657:web:5f78fea104654286729880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }; // Ensure this is being exported