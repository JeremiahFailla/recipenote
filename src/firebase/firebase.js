import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  updateEmail,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBevKTjghRVGbq8K9k1by3LKbZ8bFrFWGc",
  authDomain: "recipenote-4b1b7.firebaseapp.com",
  projectId: "recipenote-4b1b7",
  storageBucket: "recipenote-4b1b7.appspot.com",
  messagingSenderId: "1064465934174",
  appId: "1:1064465934174:web:cf2327ee6cd7a00f2cd1cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function updateDisplayName(name) {
  return updateProfile(auth.currentUser, { displayName: name });
}

export function getUser() {
  return auth.currentUser;
}

export function updateUserEmail(email) {
  return updateEmail(auth.currentUser, email);
}

// updateEmail(auth.currentUser, "user@example.com")

const changeUserState = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return user;
    }
    return undefined;
  });
};
