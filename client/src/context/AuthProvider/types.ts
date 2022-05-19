export interface IToken  {
    token?: string,
}

export interface IContext extends IToken {
    authenticate: (email: string, password: string) => Promise<object>,
    logout: () => void
}

export interface IAuthProvider {
    children: JSX.Element
}