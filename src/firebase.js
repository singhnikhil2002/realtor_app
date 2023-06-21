// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfMu8O8kxoomfNvwynClp_xEm77ssK9L8",
  authDomain: "realtor-clone-react-101d8.firebaseapp.com",
  projectId: "realtor-clone-react-101d8",
  storageBucket: "realtor-clone-react-101d8.appspot.com",
  messagingSenderId: "883476949835",
  appId: "1:883476949835:web:b5e8a39f2ef4f1847c96ce"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

