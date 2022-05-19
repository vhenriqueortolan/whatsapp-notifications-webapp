import React, {createContext, useEffect, useState} from "react";
import { IAuthProvider, IContext, IToken } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({children}: IAuthProvider) => {
    const [user, setUser] = useState< IToken | null>()

    useEffect(() => {
        const user = getUserLocalStorage()

        if (user) {
            setUser(user)
        }
        setUser(null)
    }, [])

    async function authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password)
        const user = {token: response}

        setUser(user)
        setUserLocalStorage(user)

        return user
    }

    function logout() {
        setUser(null)
        setUserLocalStorage(null)
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}