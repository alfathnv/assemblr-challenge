// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATo8ICWdffBVFzpWqF2mql48Z5nWnQYPw",
  authDomain: "assemblr-challenge.firebaseapp.com",
  projectId: "assemblr-challenge",
  storageBucket: "assemblr-challenge.appspot.com",
  messagingSenderId: "560676152579",
  appId: "1:560676152579:web:803120747247a601bd3536",
  measurementId: "G-5LNRKQ7VQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
