// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVfpReUPccZC2Oecr0uwCPxPOmtU2f9Qs",
    authDomain: "netflix-gpt-c8d00.firebaseapp.com",
    projectId: "netflix-gpt-c8d00",
    storageBucket: "netflix-gpt-c8d00.firebasestorage.app",
    messagingSenderId: "799265352632",
    appId: "1:799265352632:web:69508bd71d80f7d892bd4d",
    measurementId: "G-17254QNX8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();