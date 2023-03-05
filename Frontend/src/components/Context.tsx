import { createContext } from "react";
import { ContextUserSetToken, ContextUserToken } from "./Models";

const userContext = createContext<ContextUserToken | undefined | ContextUserSetToken>(undefined);

export { userContext };
