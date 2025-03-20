import React from "react"
import AdminButton from "../components/buttons/AdminButton"
import { useNavigate } from "react-router"

const TournamentsView = ({ tournament }) => {
    const navigate = useNavigate()

    console.log(tournament.id)

    const handleClick = () => {
        navigate(`/t/${tournament.id}`, { state: { tournament } })
    }

    return (
        <div className="bg-[#8D151F] w-9/12 h-96 rounded-xl flex flex-col items-center justify-center gap-4">
            <h1 className="text-5xl">{tournament.tournamentName}</h1>
            <p className="text-2xl">Traje od: {tournament.lastsFrom}</p>
            <p className="text-2xl">Traje do: {tournament.lastsUntil}</p>
            <AdminButton text="Prijava" className="!w-72" onClick={handleClick} />
        </div>
    )
}

export default TournamentsView