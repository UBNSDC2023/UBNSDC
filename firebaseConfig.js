// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3N_eYoPGsfT1msvZYdxewlxRLvAXlE4I",
  authDomain: "ubnsdc-2023.firebaseapp.com",
  projectId: "ubnsdc-2023",
  storageBucket: "ubnsdc-2023.appspot.com",
  messagingSenderId: "9244302888",
  appId: "1:9244302888:web:749d8fb7755542bd06df1d",
  measurementId: "G-QB9Y4HT435"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
