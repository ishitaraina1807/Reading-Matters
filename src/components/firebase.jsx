import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: " AIzaSyD-4", // Replace with your own API key
  authDomain: " medcare-72185.firebaseapp.com", // Replace with your own Auth domain
  projectId: "medcare-72185", // Replace with your own project ID
  storageBucket: "medcare-72185.appspot.com", // Replace with your own storage bucket
  messagingSenderId: "252642172466",  // Replace with your own messaging sender ID
  appId: "1:252642172465:web:1a4c1b", // Replace with your own app ID
  measurementId: "G-4" // Replace with your own measurement ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, auth, db }; 