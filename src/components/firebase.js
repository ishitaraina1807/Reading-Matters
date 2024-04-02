import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc,getDocs,query,where} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail, signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhqktEnFTcMjdW-z0ajmu_6-ZISkSxbs8",
  authDomain: "medcare-72186.firebaseapp.com",
  projectId: "medcare-72186",
  storageBucket: "medcare-72186.appspot.com",
  messagingSenderId: "256242165465",
  appId: "1:252642165465:web:20f03a154ac35cc568ff10",
  measurementId: "G-G69NSKS137"
};
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase and Firebase Authentication
const db = getFirestore(app)
const auth = getAuth(app)
export {auth,db,signInWithGoogle,logInWithEmailAndPassword,registerWithEmailAndPassword,sendPasswordReset,logout}
