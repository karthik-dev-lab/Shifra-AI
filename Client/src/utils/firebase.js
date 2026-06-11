import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "shifraai-95c33.firebaseapp.com",
  projectId: "shifraai-95c33",
  storageBucket: "shifraai-95c33.firebasestorage.app",
  messagingSenderId: "671604841011",
  appId: "1:671604841011:web:5ef60f8eab8f7e6acae146"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export {auth,provider};