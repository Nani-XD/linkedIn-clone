import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Password } from "@mui/icons-material";

const firebaseConfig = {
  apiKey: "AIzaSyA2byeM7hdz2HBR5FCLNJJoQ2VJBOupN3U",
  authDomain: "linkedin-clone-adf90.firebaseapp.com",
  projectId: "linkedin-clone-adf90",
  storageBucket: "linkedin-clone-adf90.appspot.com",
  messagingSenderId: "433621585930",
  appId: "1:433621585930:web:8f41978ddfa202be2e4ff3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
