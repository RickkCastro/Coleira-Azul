import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClMrWKolBbYgoFjtFBcj_ItfGT91ZcRGg",
  authDomain: "coleira-azul.firebaseapp.com",
  projectId: "coleira-azul",
  storageBucket: "coleira-azul.appspot.com",
  messagingSenderId: "930791432572",
  appId: "1:930791432572:web:bb491e4ab4eeeb3758c4f9",
  measurementId: "G-BX2K628RXW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
