import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBL7rdNTJtHcvgzzdo-ZkLoOXU3aw5Y9yw",
  authDomain: "uplianceaiassignment.firebaseapp.com",
  projectId: "uplianceaiassignment",
  storageBucket: "uplianceaiassignment.firebasestorage.app",
  messagingSenderId: "877465669903",
  appId: "1:877465669903:web:a16156031728c0d2746e7a",
  measurementId: "G-3G1VPYFEKZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signOut }; 
