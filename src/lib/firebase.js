import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


  const firebaseConfig = {
    apiKey: "AIzaSyCKDIgRNtK-CsG38jrBjF7b-2B4gsmOKSI",
    authDomain: "chat-app-eff7e.firebaseapp.com",
    projectId: "chat-app-eff7e",
    storageBucket: "chat-app-eff7e.appspot.com",
    messagingSenderId: "768036085164",
    appId: "1:768036085164:web:5a4c906b083977aecb2e09"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
