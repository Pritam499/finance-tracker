// auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import { auth, db } from "./firebase"; // Import Firebase Auth and Firestore

export const signUp = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Create a user document in Firestore
    await createDoc(user, name);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const googleAuth = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    await createDoc(user); // Check if user exists in Firestore, otherwise create new document
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createDoc = async (user, name = "") => {
  const userRef = doc(db, "users", user.uid);
  const userData = await getDoc(userRef);

  if (!userData.exists()) {
    try {
      await setDoc(userRef, {
        displayName: name || user.displayName || user.email,
        email: user.email,
        photoURL: user.photoURL || "",
        createdAt: new Date(),
      });
    } catch (error) {
      throw new Error("Error creating user document: " + error.message);
    }
  }
};
