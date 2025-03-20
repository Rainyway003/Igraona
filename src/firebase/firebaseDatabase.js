
import { addDoc, collection, getDocs, query, updateDoc, where, doc } from "firebase/firestore";
import { db } from "./firebase.js";

export const signUpTeam = async (tournamentId, name, number, player1, player2, player3, player4, player5, player6) => {
    const tournamentsRef = collection(db, "tournaments");
    const tournamentDocRef = doc(tournamentsRef, tournamentId);

    const players = [player1, player2, player3, player4, player5];
    if (player6.length > 0) {
        players.push(player6);
    }


    if (hasDuplicates(players)) {
        throw new Error(`Igrači se ponavljaju.`);
    }


    const teamsRef = collection(tournamentDocRef, "teams");
    for (const player of players) {
        const existing = await getDocs(query(teamsRef, where("players", "array-contains", player)));
        if (!existing.empty) {
            throw new Error(`Igrač ${player} je već registriran.`);
        }
    }


    const teamData = {
        name,
        number,
        player1,
        player5,
        player6,
        players,
    };

    await updateDoc(tournamentDocRef, {
        [`teams.${name}`]: teamData,
    });
}

const hasDuplicates = (array) => {
    return (new Set(array)).size !== array.length;
}

export const makeTournament = async (tournamentName, lastsFrom, lastsUntil) => {
    try {
        const tournamentsRef = collection(db, "tournaments");
        const docRef = await addDoc(tournamentsRef, {
            tournamentName,
            lastsFrom,
            lastsUntil,
            teams: {},
        });
        return docRef.id;
    } catch (err) {
        console.log(err);
    }
}


export const getTournamentsForScreen = async () => {
    const tournamentsRef = collection(db, "tournaments")
    const tournamentsSnapshot = await getDocs(tournamentsRef);
    const tournaments = tournamentsSnapshot.docs.map(snapshot => ({
        ...snapshot.data(),
        id: snapshot.id,
    }))
    return tournaments
}