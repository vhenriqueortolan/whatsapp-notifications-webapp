import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

export default function ProtectedLayout({children}: {children: JSX.Element}) {
    // const auth = useAuth()
    // const navigate = useNavigate()
    const auth = {token: 123}
    if(!auth.token){
        return <Navigate to={'/login'} />
    }

    return children
}