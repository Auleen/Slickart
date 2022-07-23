import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCryZ1EKpYi0LYKI4BUOev1jjEYaYcrCEE",
  authDomain: "demojson-29779.firebaseapp.com",
  projectId: "demojson-29779",
  storageBucket: "demojson-29779.appspot.com",
  messagingSenderId: "610232131280",
  appId: "1:610232131280:web:9157db7a30effd2ed008d5",
  measurementId: "G-V8RJSWGVJH",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
