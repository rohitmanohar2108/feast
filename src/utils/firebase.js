// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8TsS000Sl-Ilf2DusYCnC1RI4xFQbmIw",
  authDomain: "feast-fed8d.firebaseapp.com",
  projectId: "feast-fed8d",
  storageBucket: "feast-fed8d.appspot.com",
  messagingSenderId: "40539786363",
  appId: "1:40539786363:web:9e27b96db6c28558b0e6de",
  measurementId: "G-HY28BNW70V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // You can access user details here
    console.log(user);
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

export { signInWithGoogle };