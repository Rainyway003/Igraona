import React, { useEffect } from "react"
import { useState } from "react";
import { useNavigate } from "react-router";

interface IUserModel {
    username: string;
    password: string;
}

function AdminLogin() {
    const [data, setData] = useState<IUserModel>({
        username: "",
        password: "",
    })

    const navigate = useNavigate()

    useEffect(() => {
        const user = localStorage.getItem("admin")
        if (user) {
            console.log("Već prijavljen!")
            navigate("/admin")
        }
    }, [])

    const admin = {
        username: "maca",
        password: "123456"
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            if (data.username === admin.username && data.password === admin.password) {
                localStorage.setItem("admin", JSON.stringify({ username: data.username }))
                navigate("/admin")
                alert("Uspješno ste prijavljeni!");
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="bg-[#161616] flex h-screen justify-center items-center">
            <form className="bg-[#131111] h-8/12 w-4/12 flex flex-col justify-center items-center shadow-2xl border-b-slate-900 rounded-xl gap-2" onSubmit={handleSubmit}>
                <h1 className="font-bold text-blue-100 text-3xl mb-6 mt-8">ADMIN LOGIN</h1>
                <input type="text" name="username" value={data.username} onChange={handleInputChange} placeholder="Ime" className="bg-blue-100 placeholder-slate-400 border-b-blue-400 border-1 rounded-sm h-7 text-[#131111]" required />
                <input type="password" name="password" value={data.password} onChange={handleInputChange} placeholder="Šifra" className="bg-blue-100 placeholder-slate-400 border-b-blue-400 border-1 rounded-sm h-7 text-[#131111]" required />
                <button className="font-bold bg-[#631218]  mt-4 mb-8 rounded-xl p-4 hover:bg-[#491419] cursor-pointer text-white">PRIJAVI SE</button>
            </form>
        </div>
    )
}

export default AdminLogin