import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCriNkL_zO6XlnJegk-ZySrNIrTgbOJGbo",
  authDomain: "furniture-f69bb.firebaseapp.com",
  projectId: "furniture-f69bb",
  storageBucket: "furniture-f69bb.appspot.com",
  messagingSenderId: "21392815550",
  appId: "1:21392815550:web:578449e0a1a8ae9abab5ef",
  measurementId: "G-M6TT61ZKB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app