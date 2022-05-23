import { Api } from "../../services/api"
import { IToken } from "./types"

export function setUserLocalStorage (token: IToken | null) {
    localStorage.clear()
    localStorage.setItem('u', JSON.stringify(token))
}

export function getUserLocalStorage () {
    const t = localStorage.getItem('u')
    if (t === null || undefined) {
        return undefined
    }else {
        return JSON.parse(t)
    }
}

export async function LoginRequest(email: string, password: string){
    try {
        const request = await Api.post('login',{email, password})
        return request.data

    } catch (error) {
        return error
    }
}