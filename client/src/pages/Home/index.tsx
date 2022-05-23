import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResultFormAlert from "../../components/Alerts/ResultFormAlert";
import DefaultForm from "../../components/forms/NotificationsForm/DefaultForm";
import DocumentForm from "../../components/forms/NotificationsForm/DocumentForm";
import ReturnForm from "../../components/forms/NotificationsForm/ReturnForm";
import Loading from "../../components/Loading";
import { useAuth } from "../../context/AuthProvider/useAuth";
import useFormContext from "../../context/ContextFormsProvider/useFormContext";
import { Api } from "../../services/api";
import { handleOpeningDetails } from "./utils";
import {config} from '../../../config/config';

export default function Home(): JSX.Element {
    const contextAuth = useAuth()
    const contextForms = useFormContext()
    const navigate = useNavigate()

    async function getUserData(){
        contextForms.setIsLoading(true)
        const t = localStorage.getItem('u')
        if(t) {
            const token = JSON.parse(t)
            Api.defaults.headers.post['Authorization'] = token.token
            const response = await Api.post('/auth', {'action': 'getUserData'})
            console.log(response)
            contextAuth.setName(response.data.name)
            contextAuth.setEmail(response.data.email)
        }    
    }

    useLayoutEffect(()=>{
        getUserData()
        contextForms.setIsLoading(false)
    }, [])

    handleOpeningDetails()

    return (
        <>   
        <input type="button" value="LOGOUT" onClick={() => {localStorage.clear(); navigate('/login')}} />
        {contextForms.isLoading === true ? <div className="absolute z-10 h-full w-full"><Loading /></div> : null}
        {contextForms.isRequestDone === true ? <div className="absolute z-10 h-full w-full"><ResultFormAlert/></div> : null}
        <div className={contextForms.isLoading || contextForms.isRequestDone === true ? 'opacity-25 pointer-events-none ' : "h-full w-full flex flex-col justify-center"}>
            <header className="my-6 border-separate">
                <h1 className="text-center text-4xl mb-3">Olá, <span className="font-[700]">{contextAuth.name}</span>!</h1>
                <p className="text-center text-2xl">Escolha o modelo de mensagem que você quer usar:</p>
            </header>
            <div className="grid grid-flow-row content-center sm:h-fit w-screen gap-1 ">
                <details className="w-[90%] sm:w-[60%] mx-auto" open>
                    <summary className="block relative cursor-pointer bg-blue text-white p-3 rounded-md">
                        INICIAR CONVERSA
                    </summary>
                    <div className="bg-slate-400 w-[98%] mx-auto rounded-b-md shadow-sm">
                        <DefaultForm/>
                    </div>
                </details>
                <details className="w-[90%] sm:w-[60%] mx-auto">
                    <summary className="block relative cursor-pointer bg-blue text-white p-3 rounded-md">
                        RETORNAR CONVERSA
                    </summary>
                    <div className="bg-slate-400 w-[98%] mx-auto rounded-b-md shadow-sm">
                        <ReturnForm/>
                    </div>
                </details>
                <details className="w-[90%] sm:w-[60%] mx-auto">
                    <summary className="block relative cursor-pointer bg-blue text-white p-3 rounded-md">
                        ENVIAR ARQUIVO
                    </summary>
                    <div className="bg-slate-400 w-[98%] mx-auto rounded-b-md shadow-sm">
                        <DocumentForm/>
                    </div>
                </details>
            </div>
            <div className="flex items-end my-6">
                <img src={`../../src/assets/${config.assets.logo}`} className="max-w-[100px] sm:max-w-[150px] mx-auto"></img>
            </div>
        </div>
        </>
    )
}