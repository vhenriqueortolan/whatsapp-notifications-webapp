import React, { createContext, useState } from "react";
import { IFormSetStates, IRequestProvider, IResponse } from "./types";

export const ContextForms = createContext<IFormSetStates>({} as IFormSetStates)

export default function ContextFormsProvider({children}: IRequestProvider){
    const [isLoading, setIsLoading] = useState<boolean | undefined>(false)
    const [isRequestDone, setIsRequestDone] = useState<boolean>(false)
    const arrayOfContacts = [{} as IResponse]

    const [contacts, setContacts] = useState([] as IFormSetStates['arrayOfContacts'])

    return (
        <ContextForms.Provider value={{isLoading, setIsLoading, isRequestDone, setIsRequestDone, arrayOfContacts, contacts, setContacts}}>
            {children}
        </ContextForms.Provider>
    )

    
}