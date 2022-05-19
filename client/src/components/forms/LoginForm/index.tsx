import React, { useState } from "react";
import { useAuth } from "../../../context/AuthProvider/useAuth";

export default function LoginForm(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const authContext = useAuth()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const auth = await authContext.authenticate(email, password)
        console.log(auth)
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 items-center w-[80%] max-w-xl bg-orange py-6 mx-auto rounded-md shadow-lg'>
            <label htmlFor="email" hidden></label>
            <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-[90%] h-12 border-2 text-xl rounded-md mt-6 p-3 shadow-lg'/>
            <label htmlFor="password" hidden></label>
            <input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-[90%] h-12 border-2 text-xl rounded-md p-3 shadow-lg' />
            <button type="submit" className="w-[90%] mt-6 shadow-lg bg-blue rounded-md transition duration-300 hover:bg-gray-900 "><p className="text-2xl font-[700] text-white py-3">Entrar</p></button>
        </form>
    )
}