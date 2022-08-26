// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa6PkNhwexldd3oh7qGpdoz1TXlrGDKHM",
  authDomain: "befit-6634b.firebaseapp.com",
  projectId: "befit-6634b",
  storageBucket: "befit-6634b.appspot.com",
  messagingSenderId: "374999036062",
  appId: "1:374999036062:web:69b7829e7c62bb8b1c8b8f",
  measurementId: "G-XPLQ6DX5C3"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)
