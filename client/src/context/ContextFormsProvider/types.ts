import React from "react"

export interface IRequest {
    name?: string,
    email?: string,
    client?: string,
    message?: string,
    whatsapp?: string
}

export interface IFormStates{
    isLoading: boolean,
    isRequestDone: boolean,
    arrayOfContacts: Array<IResponse>,
    contacts: Array<IResponse>
}

export interface IFormSetStates extends IFormStates {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>, 
    setIsRequestDone: React.Dispatch<React.SetStateAction<boolean>>,
    setContacts: React.Dispatch<React.SetStateAction<IFormSetStates['arrayOfContacts']>>
}

export interface IResponse {
    idClient: string | 'idClient-0',
    idWhatsapp: string | 'idWhatsapp-0',
    client: IRequest['client'],
    whatsapp: IRequest['whatsapp']
    status: string,
    response?: {
        message: string,
        description: string
    }
}

export interface IRequestProvider {
    children: JSX.Element
}