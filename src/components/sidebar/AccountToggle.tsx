import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router";

interface UserData {
    id: string;
    email: string;
}

export const AccountToggle = () => {
    const [userData, setUserData] = useState<UserData | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user && user.uid) {
                console.log(user)
                setUserData({
                    id: user.uid,
                    email: user.email || "",
                })
            } else {
                console.log("Ne postoji prijavljeni korisnik")
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    return (
        <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
            <div className="flex p-0.5 rounded transition-colors relative gap-2 w-full items-center">
                <img
                    src="https://api.dicebear.com/9.x/notionists/svg"
                    alt="avatar"
                    className="size-8 rounded shrink-0 bg-[#6b151c] shadow"
                />
                <div className="text-start">
                    <span className="text-sm font-bold block">Admin</span>
                    <span className="text-xs block text-stone-500">{userData ? userData.email : "Nema prijavljenog korisnika"}</span>
                </div>


            </div>
        </div>
    );
};