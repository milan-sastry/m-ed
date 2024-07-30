// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getStorage} from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXctMFTLl2XMR20YAD6Rtez8yiI8OIxqw",
  authDomain: "m-ed-e1e12.firebaseapp.com",
  projectId: "m-ed-e1e12",
  storageBucket: "m-ed-e1e12.appspot.com",
  messagingSenderId: "1097577027886",
  appId: "1:1097577027886:web:3c8777371ac3a03471c2bf",
  measurementId: "G-M0G5TV6R97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);