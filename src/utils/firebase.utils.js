// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUekQAsSAEXMu3vkL6na5ekiauk_XLfGo",
  authDomain: "lama-store-593a5.firebaseapp.com",
  projectId: "lama-store-593a5",
  storageBucket: "lama-store-593a5.appspot.com",
  messagingSenderId: "190768019034",
  appId: "1:190768019034:web:10166a273eb4345f020a63",
  measurementId: "G-ZQ83NXW0S7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(app);
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = await doc(db, "users", userAuth.user.uid);
  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot.exists());
};
