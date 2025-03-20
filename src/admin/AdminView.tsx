import React, { useState } from "react"
import { Sidebar } from "../components/sidebar/Sidebar"
import { useLoaderData, useNavigate } from "react-router";
import { IconType } from "react-icons";
import {
    FiHome,
    FiUsers,
} from "react-icons/fi";
import { GoTrophy } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { Outlet } from "react-router";


function AdminView() {


    return (
        <div className="grid gap-4 grid-cols-[285px,_1fr] bg-[#161616] h-screen overflow-x-hidden ">
            <Sidebar></Sidebar>
            <div className="space-y-1 p-4 m-5 mt-8 h-[93.5%] w-[95%] bg-[#1f1f1f] text-center justify-center">
                <h1 className="text-3xl mb-10">Izaberi Prikaz</h1>
                <Route Icon={FiHome} selected={false} title="Landing Stranica" src="/admin/view/landing" />
                <Route Icon={GoTrophy} selected={false} title="Turniri" src="/admin/view/turniri" />
            </div>
            <Outlet />

        </div >
    )
}

const Route = ({
    selected,
    Icon,
    title,
    src,
}: {
    selected: boolean;
    Icon: IconType;
    title: string;
    src: string;
}) => {


    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(src)
    }

    const isSelected = window.location.pathname === src

    return (
        <button
            className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${isSelected
                ? "bg-white text-stone-950 shadow"
                : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
                }`} onClick={handleNavigate}
        >
            <Icon className={isSelected ? "text-[#6b151c]" : ""} />
            <span>{title}</span>
        </button>
    );
};

export default AdminView