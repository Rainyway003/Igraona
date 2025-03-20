import React, { useState, useEffect } from "react"
import { Form, redirect, useLoaderData, useNavigate } from "react-router"
import { getTournamentsForScreen } from "../firebase/firebaseDatabase"
import { auth } from "../firebase/firebase"
import { Sidebar } from "../components/sidebar/Sidebar"

export const AdminLoaderDashBoard = async () => {
    const tournaments = await getTournamentsForScreen()
    return { tournaments }
}

function Admin({ tournament }) {
    const navigate = useNavigate()
    const { tournaments = [] } = useLoaderData() || {};


    const countPlayers = (teams) => {
        let totalPlayers = 0;

        for (let teamId in teams) {
            if (teams[teamId].players) {
                totalPlayers += teams[teamId].players.length;
            }
        }

        return totalPlayers;
    };

    let totalPlayers = 0;

    tournaments.forEach((tournament) => {
        totalPlayers += countPlayers(tournament.teams || []);
    });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("Ima usera")
            } else {
                console.log("nece")
                navigate("/admin/create")
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    return (
        <div className="grid gap-4 grid-cols-[285px,_1fr] bg-[#161616] h-screen">
            <Sidebar />
            <div className="p-4 m-5 mt-8 h-[93.5%] w-[95%] bg-[#1f1f1f] text-center justify-center">
                <h1 className="text-3xl mb-10 text-white font-semibold">Admin Dashboard</h1>
                <div className="grid grid-cols-1 gap-6">
                    <div className="bg-[#2d2d2d] p-6 rounded-lg shadow-md text-white">
                        <h2 className="text-lg font-medium mb-2">Ukupno Turnira</h2>
                        <p className="text-3xl font-bold">{tournaments.length}</p>
                    </div>
                    <div className="bg-[#2d2d2d] p-6 rounded-lg shadow-md text-white">
                        <h2 className="text-lg font-medium mb-2">Ukupno Igrača</h2>
                        <p className="text-3xl font-bold">{totalPlayers}</p>
                    </div>
                    <div className="bg-[#2d2d2d] p-6 rounded-lg shadow-md text-white">
                        <h2 className="text-lg font-medium mb-2">Ukupno ljudi u Igraoni</h2>
                        <p className="text-3xl font-bold">2500+</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Admin