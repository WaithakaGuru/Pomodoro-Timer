import { createContext, useEffect, useState } from "react";

const ActionContext = createContext();
export default ActionContext;

export function ActionCtxProvider({children}){
    // states and functions
    const [mode, setMode] = useState("")

    const [isPaused, setIsPaused] = useState(0);
    
    /**
     * PAUSE MODES 
     * 0 - Start - the count down not yet started, new Focus session e.g on page refresh
     * 1 - Pause - countdown is running and button displays 'pause' 
     *      for user to pause if need be
     * 2 - resume - user has paused the count down and
     *      btn displays 'resume' for user to resume the timer count down 
     */

    const [reset, setReset] = useState(false);
    const [shortBreak, setShortBreak] = useState(false);
    const [longBreak, setLongBreak] = useState(false);

    useEffect(()=>{
        
    }, []);

    function handleStartFocusSession() {
        setMode("In Focus Mode");
        if(isPaused === 0){
            setIsPaused(1)
        }else if(isPaused === 1) {
            setMode("Focus session on Hold");
            setIsPaused(2);
        }else{
            setIsPaused(1)
        }

    }

    function handleReset() {
        setIsPaused(0);
        set
    }
        
    function handleShortBreak() {

    }

    function handleLongBreak() {

    }


    return <ActionContext.Provider value={
        {mode, handleStartFocusSession, handleReset,
            handleShortBreak, handleLongBreak, isPaused}
        }>
        {children}
    </ActionContext.Provider>
}