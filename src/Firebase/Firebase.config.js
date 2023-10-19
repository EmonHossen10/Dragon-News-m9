// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOypb_87ILZ3rh7aqh01bGOg4lFmY7VQk",
  authDomain: "react-dragon-news-c04d0.firebaseapp.com",
  projectId: "react-dragon-news-c04d0",
  storageBucket: "react-dragon-news-c04d0.appspot.com",
  messagingSenderId: "1077253498195",
  appId: "1:1077253498195:web:e06ef0fceaa5ab757dada6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
