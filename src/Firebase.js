// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhTndpWNBMlFS0Eq9ElOr9vqQZGItg1iA",
  authDomain: "city-hospital-bd94d.firebaseapp.com",
  projectId: "city-hospital-bd94d",
  storageBucket: "city-hospital-bd94d.appspot.com",
  messagingSenderId: "961661935759",
  appId: "1:961661935759:web:18b002639eb8abbd4190fa",
  measurementId: "G-HYLJ6D89SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);
export default storage;

export const db = getFirestore(app);