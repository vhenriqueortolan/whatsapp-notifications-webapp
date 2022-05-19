import { Api } from "../../services/api"
import { IToken } from "./types"

export function setUserLocalStorage (user: IToken | null) {
    localStorage.setItem('u', JSON.stringify(user))
}

export function getUserLocalStorage () {
    const u = localStorage.getItem('u')

    if (!u) {
        return null
    }

    const user = JSON.parse(u)

    return user ?? null
}

export async function LoginRequest(email: string, password: string){
    try {
        const request = await Api.post('login',{email, password})
        console.log(request)
        return JSON.parse(request.data)

    } catch (error) {
        return error
    }
}