// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDv14scC1D_-5WLpczLF8yV9qIf0Luptk",
    authDomain: "housechef-809d4.firebaseapp.com",
    projectId: "housechef-809d4",
    storageBucket: "housechef-809d4.appspot.com",
    messagingSenderId: "79417243983",
    appId: "1:79417243983:web:3a0c863f240c5cfe5a2d3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;