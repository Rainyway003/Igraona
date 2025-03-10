import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDuYMd4WN2UhAMnIryb12kPBt73vXg49CE",
    authDomain: "turnirturnira4igraonaigraona.firebaseapp.com",
    projectId: "turnirturnira4igraonaigraona",
    storageBucket: "turnirturnira4igraonaigraona.firebasestorage.app",
    messagingSenderId: "123691287955",
    appId: "1:123691287955:web:5ea79a559c04113ae29466",
    measurementId: "G-K7X57Q6MQD"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };