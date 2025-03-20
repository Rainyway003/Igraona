import React, { useState } from "react"
import { Sidebar } from "../components/sidebar/Sidebar"
import { Turnir } from "../components/turniri/Turnir";
import { getTournamentsForScreen } from "../firebase/firebaseDatabase";
import { useLoaderData, useNavigate } from "react-router";
import { Teams } from "../components/turniri/Teams";
import { FaHome } from "react-icons/fa";

export const tournamentsAdminScreenLoader = async () => {
    const tournaments = await getTournamentsForScreen()
    return { tournaments }
}

function AdminUser() {
    const [selectedTournament, setSelectedTournament] = useState(null)

    const { tournaments } = useLoaderData()

    const handleClick = (tournament) => {
        setSelectedTournament(tournament)
    }

    const goHome = () => {
        setSelectedTournament(null)
    }


    return (
        <div className="grid gap-4 grid-cols-[285px,_1fr] bg-[#161616] h-screen">
            <Sidebar></Sidebar>
            <div className="p-4 m-5 mt-8 h-[93.5%] w-[95%] bg-[#1f1f1f] text-center justify-center">
                <h1 className="text-4xl mt-2 pl-40 flex justify-center items-center space-x-2 ">
                    <span>Korisnici Turnira - Izaberi Turnir</span>
                    <button className="ml-auto flex pl-24 ">
                        <FaHome className="text-3xl hover:bg-[#5a5959] p-1 cursor-pointer w-10 h-10 bg-[#3d3d3d] rounded-full" onClick={goHome} />
                    </button>
                </h1>

                <div className="p-4 mt-4 border-[#616161] border-y-2 h-[90%] bg-[#1f1f1f] ">
                    <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] pb-24">
                        {selectedTournament
                            ? <div className="flex justify-center items-center w-full h-full flex-wrap gap-6">
                                <Teams tournament={selectedTournament} onClick={handleClick} />
                            </div>


                            : tournaments.map((tournament) => (
                                <Turnir key={tournament.id} tournament={tournament} onClick={handleClick.bind(null, tournament)} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AdminUser