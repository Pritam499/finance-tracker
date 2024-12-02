import React, { createContext, useState, useContext, useEffect } from "react";
import { auth, provider, db } from "../firebase"; // Assuming these are correctly set up in the firebase.js file
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Set up Firebase Auth state observer to detect user login status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Sign up logic using email and password
  const signUp = async (email, password, name) => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Create a user document in Firestore
      await createDoc(user, name);

      setLoading(false);
      return user;
    } catch (error) {
      setLoading(false);
      throw new Error(error.message);
    }
  };

  // Sign in logic using email and password
  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setLoading(false);
      return user;
    } catch (error) {
      setLoading(false);
      throw new Error(error.message);
    }
  };

  // Google Authentication logic
  const googleAuth = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user exists in Firestore, otherwise create new document
      await createDoc(user);

      setLoading(false);
      return user;
    } catch (error) {
      setLoading(false);
      throw new Error(error.message);
    }
  };

  // Function to create a new user document in Firestore
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

  // Log out function
  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    googleAuth,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
