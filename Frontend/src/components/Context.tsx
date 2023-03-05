import { createContext } from "react";

export interface ContextUserToken {
    token: string
}

export interface ContextUserSetToken {
    setToken: React.Dispatch<React.SetStateAction<string>>
}

const userContext = createContext<ContextUserToken | undefined | ContextUserSetToken>(undefined);

export { userContext };
