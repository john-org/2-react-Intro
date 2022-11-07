// src/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCIhoYmqVW1F12RSevwdL9KFnTMIte4w6c",
  authDomain: "pirates-94dd4.firebaseapp.com",
  databaseURL: "https://pirates-94dd4-default-rtdb.firebaseio.com",
  projectId: "pirates-94dd4",
  storageBucket: "pirates-94dd4.appspot.com",
  messagingSenderId: "272025254320",
  appId: "1:272025254320:web:acc27be6a7b4147f6c7e75"
}

// Initialize Firebase and cloud storage
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
