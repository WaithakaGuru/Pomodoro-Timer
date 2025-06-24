import { createContext } from "react";

const ActionContext = createContext();
export default ActionContext;

export function ActionCtxProvider({children}){
    // states and functions
    

    return <ActionContext.Provider value={{}}>
        {children}
    </ActionContext.Provider>
}