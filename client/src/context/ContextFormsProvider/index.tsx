import React, { createContext, useEffect, useState } from "react";
import { IFormSetStates, IRequestProvider, IResponse } from "./types";

export const ContextForms = createContext<IFormSetStates>({} as IFormSetStates)

export default function ContextFormsProvider({children}: IRequestProvider){
    const [isLoading, setIsLoading] = useState(Boolean)
    const [isRequestDone, setIsRequestDone] = useState(Boolean)
    const arrayOfContacts = [{} as IResponse]

    const [contacts, setContacts] = useState([] as IFormSetStates['arrayOfContacts'])

    useEffect(() => {
        setIsLoading(false)
        setIsRequestDone(false)
    }, [])

    return (
        <ContextForms.Provider value={{isLoading, setIsLoading, isRequestDone, setIsRequestDone, arrayOfContacts, contacts, setContacts}}>
            {children}
        </ContextForms.Provider>
    )

    
}