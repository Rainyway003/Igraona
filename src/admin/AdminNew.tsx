import React, { useState } from "react"
import { Form, useNavigate } from "react-router";
import FormInput from "../components/forms/FormInput";
import AdminButton from "../components/buttons/AdminButton";
import { makeTournament } from "../firebase/firebaseDatabase";
import { Sidebar } from "../components/sidebar/Sidebar";

function AdminNew() {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (formEvent) => {
        formEvent.preventDefault()
        try {
            setError(null)
            setLoading(true)
            const formData = new FormData(formEvent.currentTarget)
            const tournamentName = formData.get('tournamentName')
            const lastsFrom = formData.get('lastsFrom')
            const lastsUntil = formData.get('lastsUntil')
            await makeTournament(tournamentName, lastsFrom, lastsUntil)
            navigate('/admin/turniri')
        }
        catch (err) {
            console.error(err)
            setError(err.message);
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className="grid gap-4 grid-cols-[285px,_1fr] bg-[#161616] overflow-hidden h-screen">
            <Sidebar></Sidebar>
            <div className=" bg-[#161616] flex flex-col items-center justify-center gap-8">
                <div className="text-center mb-4 w-[60%] h-[60%] bg-[#1f1f1f] p-10 rounded-2xl">
                    <h1 className="text-5xl mb-4 text-[#8D151F]">Napravi Turnir</h1>
                    <Form method="post" onSubmit={handleSubmit} className="flex flex-col gap-4 items-center pb-10">
                        <FormInput placeholder="Ime turnira" name="tournamentName" />
                        <FormInput type="date" name="lastsFrom" />
                        <FormInput type="date" name="lastsUntil" />
                        <AdminButton text="Napravi" type="submit" className="mt-4" />
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default AdminNew