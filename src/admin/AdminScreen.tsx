import React from "react"
import { redirect, useNavigate } from "react-router"

export const adminLoader = async () => {
    const admin = localStorage.getItem("admin")
    if (!admin) {
        throw redirect('/admin/login')
    }
}

function AdminScreen() {

    const navigate = useNavigate()

    const clear = () => {
        localStorage.clear()
        navigate('/admin/login')
    }

    return (
        <div className="bg-slate-200">
            <button onClick={clear}>BATN</button>
        </div>
    )
}

export default AdminScreen