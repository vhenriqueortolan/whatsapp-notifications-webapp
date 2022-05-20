import React, {createContext, useEffect, useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Api } from "../../services/api";
import { IAuthProvider, IContext, IToken, IUserData } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({children}: IAuthProvider) => {
    const [name, setName] = useState<IUserData['name']>('')
    const [email, setEmail] = useState('')
    const [token, setToken] = useState(Object)
    const [isLogged, setIsLogged] = useState(false)

    async function authenticate(email: string, password: string) {
        try {
            const response = await LoginRequest(email, password)
            const t = {token: response.token}
            setEmail(response.email)
            setName(response.name)
            setToken(t)
            setUserLocalStorage(t)
        } catch (err) {
            console.log(err)
        }
    }

    
    return (
        <AuthContext.Provider value={{token, authenticate, setEmail, setName, name, email, setToken, isLogged, setIsLogged}}>
            {children}
        </AuthContext.Provider>
    )
}