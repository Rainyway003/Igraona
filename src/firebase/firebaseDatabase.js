import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from './firebase.js';

const db = getFirestore(app);

export const signUpTeam = async (TeamName, number, Player1, Player2, Player3, Player4, Player5, Player6) => {
    const docRef = await addDoc(collection(db, "teams"), {
        TeamName: TeamName,
        Number: number,
        Player1: Player1,
        Player2: Player2,
        Player3: Player3,
        Player4: Player4,
        Player5: Player5,
        Player6: Player6,
    });

    return docRef
}