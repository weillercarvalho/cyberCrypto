export interface ContextUserToken {
    token: string | undefined
}

export interface ContextUserSetToken {
    setToken: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<undefined>> 
}

export type typeSignUp = {
    email: string
    password: string
    image: string
    btc?: string
}

export type typeSignIn = Pick<typeSignUp, 'email' | 'password'>

export interface TitleProps {
    children?: React.ReactNode;
  }