import { createContext } from "react";

export interface ContextUserToken {
    token: string | undefined
}

export interface ContextUserSetToken {
    setToken: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<undefined>> 
}

const userContext = createContext<ContextUserToken | undefined | ContextUserSetToken>(undefined);

export { userContext };
