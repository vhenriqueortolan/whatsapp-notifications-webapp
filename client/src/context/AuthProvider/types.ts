export interface IUserData{
    name?: string,
    email?: string
}

export interface IToken extends IUserData {
    token: string | number | boolean | null | undefined,
}

export interface IContext extends IToken {
    authenticate: (email: string, password: string, setToken: IContext['setToken']) => Promise<void>,
    logout: () => void,
    setName: (e: string) => void,
    setEmail: (e: string) => void,
    getUserData: (setName: IContext['setName'], setEmail: IContext['setEmail']) => Promise<void>,
    setToken: (t: object) => void 
}

export interface IAuthProvider {
    children: JSX.Element
}