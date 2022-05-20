import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IContext } from "../../../context/AuthProvider/types";
import { useAuth } from "../../../context/AuthProvider/useAuth";
import { IFormSetStates } from "../../../context/ContextFormsProvider/types";
import useFormContext from "../../../context/ContextFormsProvider/useFormContext";

export default function LoginForm(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const contextAuth = useAuth()
    const contextForms = useFormContext()
    const navigate = useNavigate()
    const setIsLoading = contextForms.setIsLoading
    const getUserData = contextAuth.getUserData

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>, setIsLoading: ((e) => !e), getUserData: IContext['getUserData']){
        e.preventDefault()
        setIsLoading(current => !current)
        const auth = await contextAuth.authenticate(email, password, contextAuth.setToken)
        const token = localStorage.getItem('u')
        if(token){
            await getUserData(contextAuth.setName, contextAuth.setEmail)
            navigate('/')
        }
    }

    return (
        <form onSubmit={e => handleSubmit(e, setIsLoading, getUserData)} className='flex flex-col gap-3 items-center w-[80%] max-w-xl bg-orange py-6 mx-auto rounded-md shadow-lg'>
            <label htmlFor="email" hidden></label>
            <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-[90%] h-12 border-2 text-xl rounded-md mt-6 p-3 shadow-lg'/>
            <label htmlFor="password" hidden></label>
            <input type="password" placeholder="Senha" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-[90%] h-12 border-2 text-xl rounded-md p-3 shadow-lg' />
            <button type="submit" className="w-[90%] mt-6 shadow-lg bg-blue rounded-md transition duration-300 hover:bg-gray-900 "><p className="text-2xl font-[700] text-white py-3">Entrar</p></button>
        </form>
    )
}