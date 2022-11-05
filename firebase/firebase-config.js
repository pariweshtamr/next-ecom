import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDzbkA-pKGPB6v33bfBG2kQCk6dnI7YcBk",
  authDomain: "next-store-1a2bf.firebaseapp.com",
  projectId: "next-store-1a2bf",
  storageBucket: "next-store-1a2bf.appspot.com",
  messagingSenderId: "603957381875",
  appId: "1:603957381875:web:192a35a15e1e0a0a51c586",
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
