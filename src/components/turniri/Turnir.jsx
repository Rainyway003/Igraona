import React from "react"
import tournament from '../../assets/turnir.jpg'
import { useNavigate } from "react-router";

export const Turnir = ({ tournament, onClick }) => {
    const nazivTurnira = tournament.tournamentName || "Nepoznat Turnir";
    const lastsFrom = tournament.lastsFrom || "Nepoznato...";
    const lastsUntil = tournament.lastsUntil || "Nepoznato...";

    return (
        <button className="rounded-xl w-72 h-48 hover:filter hover:blur-[0.8px] p-4 hover:text-slate-300 transition-all"
            style={{
                backgroundImage: `url(${tournament})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                transition: 'filter 0.2s ease',
            }} onClick={onClick}>
            <h1 className="text-2xl">{nazivTurnira}</h1>
            <p className="text-sm text-slate-500">{lastsFrom}</p>
            <p className="text-sm text-slate-500 mb-4">{lastsUntil}</p>
        </button>
    );
};
