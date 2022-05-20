import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";
import Loading from "../../components/Loading";
import { useAuth } from "../../context/AuthProvider/useAuth";
import useFormContext from "../../context/ContextFormsProvider/useFormContext";

export default function Login(): JSX.Element{
    const contextForms = useFormContext()
    const contextAuth = useAuth()
    const navigate = useNavigate()
    

    return (
        <>
        {contextForms.isLoading === true ? <div className="absolute z-10 h-screen w-screen"><Loading /></div> : null}
        <div className={contextForms.isLoading || contextForms.isRequestDone === true ? 'opacity-25 pointer-events-none h-screen w-screen grid grid-flow-row content-center' : "h-screen w-screen grid grid-flow-row content-center bg-[#e9ecef]"}>
            <div className="flex flex-col items-center">
                <h1 className="text-orange font-[700] text-6xl mx-auto mb-6">LOGIN</h1>
                <LoginForm />
                <p className="mx-auto mt-6 mb-36 flex flex-col items-center gap-1">
                    <a href="https://app.g3.imb.br/auth/forgot" className="flex items-center gap-1">
                        <img className="w-[2rem] inline" src="https://app.g3.imb.br/assets/img/esquecisenha-v1.svg" />
                        <span className="text-[18px] sm:text-base text-center">Esqueci minha senha</span>
                    </a>
                    <a href="https://app.g3.imb.br/support/politicadeprivacidade" className="flex items-center gap-1">
                        <img className="w-[2rem] inline" src="https://app.g3.imb.br/assets/img/politicadeprivacidade-v1.svg" />
                        <span className="text-[18px] sm:text-base text-center">Política de Privacidade</span>
                    </a>
                    <a href="https://app.g3.imb.br/support/contact" className="flex items-center gap-1">
                        <img className="w-[2rem] inline" src="https://app.g3.imb.br/assets/img/reportarproblema-v1.svg" />
                        <span className="text-[18px] sm:text-base text-center">Relatar problema</span>
                    </a>
                </p>
            </div>
            <div className="fixed bottom-0 right-0 w-screen">
                <img src="https://app.g3.imb.br/public/media/logo_rodape.png" className="max-w-[100px] sm:max-w-[150px] mx-auto my-3"></img>
            </div>
        </div>
        </>
        
    )
}