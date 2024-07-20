// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-auth-8d692.firebaseapp.com",
    projectId: "mern-auth-8d692",
    storageBucket: "mern-auth-8d692.appspot.com",
    messagingSenderId: "135188268741",
    appId: "1:135188268741:web:c82dfa0d6852f6070452ac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);