import React, {createContext, useEffect, useState} from "react";
import { Api } from "../../services/api";
import { IAuthProvider, IContext, IToken, IUserData } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({children}: IAuthProvider) => {
    const [name, setName] = useState<IUserData['name']>()
    const [email, setEmail] = useState(String)
    const [token, setToken] = useState(Object)

    async function authenticate(email: string, password: string, setToken: (e: object) => void) {
        try {
            const response = await LoginRequest(email, password)
            const t = {token: response.token}
            setToken(t)
            console.log()
            setUserLocalStorage(t)
        } catch (err) {
            console.log(err)
        }
    }

    async function getUserData(){
        const response = await Api.post('/auth', {"action": "getData"},)
        console.log(response)
        setName(response.data.name)
        setEmail(response.data.email)
    }

    function logout() {
        setUserLocalStorage(null)
    }

    return (
        <AuthContext.Provider value={{token, authenticate, logout, setEmail, setName, name, email, getUserData, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}