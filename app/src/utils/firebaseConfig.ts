// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbX9P_h7TkKDw4qQRKad3i7lL6H6S1fpw",
  authDomain: "tick-tick-90dfe.firebaseapp.com",
  projectId: "tick-tick-90dfe",
  storageBucket: "tick-tick-90dfe.firebasestorage.app",
  messagingSenderId: "718858689973",
  appId: "1:718858689973:web:299253cc89d54de39e8dfc",
  measurementId: "G-P8JK2WPYQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);