import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBhRFXf0xWxlzJoySea1VGwDqT85Xvph_Y",
  authDomain: "reading-matters.firebaseapp.com",
  projectId: "reading-matters",
  storageBucket: "reading-matters.appspot.com",
  messagingSenderId: "573182687023",
  appId: "1:573182687023:web:31cfc8212fede7207d53da",
  measurementId: "G-SEBT2L9ND0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, auth, analytics,db }; 