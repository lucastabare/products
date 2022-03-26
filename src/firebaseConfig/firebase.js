import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9D6Q2Vzg_b7TDZ2lLcI9vwW5lvLkus1Q",
  authDomain: "productos-906bf.firebaseapp.com",
  projectId: "productos-906bf",
  storageBucket: "productos-906bf.appspot.com",
  messagingSenderId: "27124440286",
  appId: "1:27124440286:web:cfc888ce10bbb5cdcd364f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
