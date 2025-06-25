import { createContext, useEffect, useState } from "react";
import {calculateTimeRemaining, fullSessionTime} from "../utils/utils";

const ActionContext = createContext();
export default ActionContext;

export function ActionCtxProvider({children}){
    // states and functions
    const [mode, setMode] = useState("")
    const [time, setTime] = useState({mins: 25, secs: 0});
    const [isPaused, setIsPaused] = useState(0);
    const [activeButtonId, setActiveButtonId] = useState(null);
    const [reset, setReset] = useState(false);
    const [shortBreak, setShortBreak] = useState(false);
    const [longBreak, setLongBreak] = useState(false);
    const [inputIsReadOnly, setInputIsReadOnly] = useState(false);
    
    useEffect(()=>{
        setMode("Start a Focus Session");
    }, []);
    
    function addActiveButton(e){
        setActiveButtonId(e.target.id);
    }

    function handleAddTime (e) {
        setTime({mins:e.target.value, secs: 0});
    }
   
    function handleStartFocusSession(e) {
        addActiveButton(e);
        /**
         * PAUSE MODES 
         * 0 - Start - the count down not yet started, new Focus session e.g on page refresh
         * 1 - Pause - countdown is running and button displays 'pause' 
         *      for user to pause if need be
         * 2 - resume - user has paused the count down and
         *      btn displays 'resume' for user to resume the timer count down 
        */
       
       if(isPaused === 0){
           setIsPaused(1)
        }else if(isPaused === 1) {
            setMode("Focus session on Hold");
            setIsPaused(2);
        }else{
            setIsPaused(1)
        }
        
        // THE COUNT DOWN LOGIC
        const minutes = time.mins
        const totalSessionTime = fullSessionTime(minutes);
        // let focusSessionInterval;
        if(time.mins > 0 || time.secs > 0){
            setInputIsReadOnly(true);
            setInterval(()=>setTime(calculateTimeRemaining(totalSessionTime)), 999)
        }
        // clearInterval(focusSessionInterval)
    }
    
    function handleReset(e) {
        addActiveButton(e);
        setMode("In Focus Mode");
        setIsPaused(0);
        
    }
        
    function handleShortBreak(e) {
        addActiveButton(e);
    }

    function handleLongBreak(e) {
        addActiveButton(e);
    }

    return <ActionContext.Provider value={
        {mode, time, isPaused, activeButtonId, inputIsReadOnly, handleStartFocusSession, handleReset,
            handleShortBreak, handleLongBreak, handleAddTime}
        }>
        {children}
    </ActionContext.Provider>
}