export interface IUserData{
    name?: string,
    email?: string
}

export interface IToken extends IUserData {
    token: {token: string},
    
}

export interface IContext extends IToken {
    authenticate: (email: string, password: string) => Promise<void>,
    setName: (e: string) => void,
    setEmail: (e: string) => void,
    setToken: (t: object) => void 
    setIsLogged: (e: boolean) => void,
    isLogged: boolean
}

export interface IAuthProvider {
    children: JSX.Element
}