import { useLoaderData } from "react-router"
import { getTournamentsForScreen } from "../firebase/firebaseDatabase"
import React from "react"
import TournamentsView from "../tournaments/TournamentsView"

export const AdminLoader = async () => {
    const tournaments = await getTournamentsForScreen()
    return { tournaments }
}

const AdminTournaments = () => {
    const { tournaments } = useLoaderData()
    console.log(tournaments)

    return (<div className="w-screen h-screen flex flex-col items-center gap-8 mt-20 mb-20">
        <h1 className="text-6xl mt-8">Turniri</h1>
        {tournaments.map(tournament => <TournamentsView key={tournament.id} tournament={tournament} />)}
    </div>)
}

export default AdminTournaments