export interface ContextUserToken {
    token: string | undefined
}

export interface ContextUserSetToken {
    setToken: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<undefined>> 
}

export type typeSignIn = {
    email: string
    password: string
    image: string
    btc?: string
}
