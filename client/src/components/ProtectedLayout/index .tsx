import React, { useContext, useEffect } from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";
import useFormContext from "../../context/ContextFormsProvider/useFormContext";
import { Api } from "../../services/api";
import { AxiosPromise, AxiosResponse } from "axios";
import { IFormSetStates } from "../../context/ContextFormsProvider/types";
import { IContext } from "../../context/AuthProvider/types";

export default function ProtectedLayout({children}: {children: JSX.Element}) {
    const navigate = useNavigate()
    const contextForms = useFormContext()
    const contextAuth = useAuth()
    const setIsLoading = contextForms.setIsLoading
    const token = localStorage.getItem('u')

    useEffect(()=>{
        () => setIsLoading(true)
        if(!token){
            navigate('/login')
        }
    }, [])
    
    return (
        children
    )
}