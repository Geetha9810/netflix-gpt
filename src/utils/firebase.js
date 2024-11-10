// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjPbTIiXNdNnCpc1jjlC62uemUM9HSVG8",
  authDomain: "netflixgpt-3c2cd.firebaseapp.com",
  projectId: "netflixgpt-3c2cd",
  storageBucket: "netflixgpt-3c2cd.firebasestorage.app",
  messagingSenderId: "500432286823",
  appId: "1:500432286823:web:fe5d1c3e617c18d2bb90c2",
  measurementId: "G-J09Y6RE2ZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
