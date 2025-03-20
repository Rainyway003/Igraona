import React from "react";
import { useNavigate } from "react-router";

export const Teams = ({ tournament, onClick }) => {
    const teams = tournament.teams ? Object.values(tournament.teams) : [];

    console.log("Tournament:", tournament);
    console.log("Teams:", teams);

    return (
        <div className="grid  gap-6 w-full">
            {teams.map((team, index) => (
                <div key={index} className="bg-[#2b2a2a] rounded-xl p-4 w-[230%]">
                    <h2 className="text-3xl text-[#8D151F] text-center">Tim : {team.name}</h2>
                    <p className="text-center text-red-300">Kontakt : {team.number}</p>
                    <ul className="text-sm text-slate-200">
                        {team.players.map((player, i) => (
                            <li key={i} className="m-2">
                                <a href={player} target="_blank" rel="noopener noreferrer">
                                    {player}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};