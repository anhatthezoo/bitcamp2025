import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCqw93dtoSVlC13i0QJt3eg1nmQqDNSe_o",
    authDomain: "bitcamp-2025-c0a5b.firebaseapp.com",
    projectId: "bitcamp-2025-c0a5b",
    storageBucket: "bitcamp-2025-c0a5b.firebasestorage.app",
    messagingSenderId: "829181917700",
    appId: "1:829181917700:web:aaa8ae468aa79a39b35351",
    measurementId: "G-W3RF4LCBL3",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app)

console.log("Firebase loaded");
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
