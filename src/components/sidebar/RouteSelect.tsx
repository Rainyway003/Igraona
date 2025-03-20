import React, { useState } from "react";
import { IconType } from "react-icons";
import {
    FiHome,
    FiUsers,
} from "react-icons/fi";
import { GoTrophy } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

export const RouteSelect = () => {
    return (
        <div className="space-y-1">
            <Route Icon={FiHome} selected={false} title="Dashboard" src="/admin" />
            <Route Icon={GoTrophy} selected={false} title="Turniri" src="/admin/turniri" />
            <Route Icon={FiUsers} selected={false} title="Korisnici" src="/admin/users" />
            <Route Icon={FaPlus} selected={false} title="Novi Turnir" src="/admin/new" />
            <Route Icon={FaSearch} selected={false} title="Korisnički Prikaz" src="/admin/view" />
        </div>
    );
};

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