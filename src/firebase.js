
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhMuSYqi66gd-aw7aaWijnlBGQgnadS8Y",
  authDomain: "langox.firebaseapp.com",
  databaseURL: "https://langox-default-rtdb.firebaseio.com",
  projectId: "langox",
  storageBucket: "langox.appspot.com",
  messagingSenderId: "487267607352",
  appId: "1:487267607352:web:daab05b02e6827896117cd",
  measurementId: "G-XDTHJQTND8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, doc, setDoc };