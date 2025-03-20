import React from "react"
import { Sidebar } from "../components/sidebar/Sidebar"
import { Turnir } from "../components/turniri/Turnir";
import { getTournamentsForScreen } from "../firebase/firebaseDatabase";
import { useLoaderData, useNavigate } from "react-router";

export const tournamentsAdminScreenLoader2 = async () => {
    const tournaments = await getTournamentsForScreen()
    return { tournaments }
}

function AdminTurniri({ tournament }) {
    const { tournaments } = useLoaderData()

    const navigate = useNavigate()

    const handleClick = (tournament) => {
        navigate(`/t/${tournament.id}`, { state: { tournament } })
    }


    return (
        <div className="grid gap-4 grid-cols-[285px,_1fr] bg-[#161616] h-screen">
            <Sidebar></Sidebar>
            <div className="p-4 m-5 mt-8 h-[93.5%] w-[95%] bg-[#1f1f1f] text-center justify-center">
                <h1 className="text-4xl mt-2">Turniri</h1>
                <div className="p-4 mt-4 border-[#616161] border-y-2 h-[90%] bg-[#1f1f1f] ">
                    <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] pb-24">
                        {tournaments.map((tournament) => (
                            <Turnir key={tournament.id} tournament={tournament} onClick={() => handleClick(tournament)} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminTurniri