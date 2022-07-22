// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJG04sY4JKqRwgVS4sEl9ekMCWl-x6Drg",
  authDomain: "covid19-vac-finder.firebaseapp.com",
  projectId: "covid19-vac-finder",
  storageBucket: "covid19-vac-finder.appspot.com",
  messagingSenderId: "48658581630",
  appId: "1:48658581630:web:7db1e3f2a858eedbf3702f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}

export function signOut(): void {
  auth.signOut();
}

export const storage = getStorage(app);
