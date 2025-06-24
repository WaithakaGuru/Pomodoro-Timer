import { createContext, useState } from "react";

const ActionContext = createContext();
export default ActionContext;

export function ActionCtxProvider({children}){
    // states and functions
    const [mode, setMode] = useState("Start a Focus Session")


    return <ActionContext.Provider value={{mode}}>
        {children}
    </ActionContext.Provider>
}