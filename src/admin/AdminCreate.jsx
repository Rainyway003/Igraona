import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect } from "react"
import { useState } from "react";
import { redirect, useNavigate } from "react-router";
import { auth, db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

function AdminCreate() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigate('/admin');
            } else {
                console.log("nece")
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleCreate = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser;
            if (user) {
                const userId = user.uid
                await addDoc(collection(db, "admins"), {
                    id: userId,
                    email: user.email,
                })
                localStorage.setItem("token", user.accessToken);
                navigate('/admin');
            }
            return { user }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="bg-[#161616] flex h-screen justify-center items-center">
            <form className="bg-[#131111] h-8/12 w-4/12 flex flex-col justify-center items-center shadow-2xl border-b-slate-900 rounded-xl gap-2" onSubmit={handleCreate}>
                <h1 className="font-bold text-blue-100 text-3xl mb-6 mt-8">ADMIN CREATE</h1>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="bg-blue-100 placeholder-slate-400 border-b-blue-400 border-1 rounded-sm h-7 text-[#131111]" required />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Šifra" className="bg-blue-100 placeholder-slate-400 border-b-blue-400 border-1 rounded-sm h-7 text-[#131111]" required />
                <button className="font-bold bg-[#631218]  mt-4 mb-8 rounded-xl p-4 hover:bg-[#491419] cursor-pointer text-white">NAPRAVI ADMINA</button>
            </form>
        </div>
    )
}

export default AdminCreate