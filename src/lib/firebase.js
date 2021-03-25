import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { seedDatabase } from "../seed";

const FirebaseConfig = {
  apiKey: "AIzaSyCcpLQ2RqE2rOBFqY4Wc9Vt_NmB5Ggo1AA",
  authDomain: "ahoy-a50cc.firebaseapp.com",
  projectId: "ahoy-a50cc",
  storageBucket: "ahoy-a50cc.appspot.com",
  messagingSenderId: "518869972346",
  appId: "1:518869972346:web:267ae1ee931427dcbf52c3",
  measurementId: "G-2R65GHPF7C",
};

const firebase = Firebase.initializeApp(FirebaseConfig);
const { FieldValue } = Firebase.firestore;

seedDatabase(firebase);

console.log("firebase", firebase);

export { firebase, FieldValue };
