import React, { ReactNode, useContext, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import ContextFormsProvider from "../../context/ContextFormsProvider";
import Home from "../../pages/Home";

export default function ProtectedLayout() {
    const t = localStorage.getItem('u')
        return (
            <>
                { t ? <ContextFormsProvider><Home /></ContextFormsProvider> : <Navigate to='/login' /> }
            </>
        ) 
}