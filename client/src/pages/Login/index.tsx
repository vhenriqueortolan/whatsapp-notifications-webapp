import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {config} from '../../../config/config';
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
            </div>
            <div className="fixed bottom-0 right-0 w-screen">
                <img src={`../../src/assets/${config.assets.logo}`} className="max-w-[100px] sm:max-w-[150px] mx-auto my-3"></img>
            </div>
        </div>
        </>
        
    )
}