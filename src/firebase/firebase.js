import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBwvsD2vwKq5BJL68OrQA81Q6o_aF6p_4A",
    authDomain: "vjezba-d7419.firebaseapp.com",
    projectId: "vjezba-d7419",
    storageBucket: "vjezba-d7419.firebasestorage.app",
    messagingSenderId: "766781171948",
    appId: "1:766781171948:web:40ab4acf7e9c6df5119dc9",
    measurementId: "G-EGV4B20B3K"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)

export default app