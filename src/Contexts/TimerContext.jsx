import { createContext, useContext, useState } from "react";

const TimerContext = createContext();
export default TimerContext;

export function TimerProvider ({children }) {
    // functions and values
    const [time, setTime] = useState(25);

    function handleAddTime (e) {
        setTime(e.target.value);
    }

    return <TimerContext.Provider value={{time, handleAddTime}}>
        {children}
    </TimerContext.Provider>

}

export function useTimer() {
    const timerCtx = useContext(TimerContext)
    if(!timerCtx) throw new Error("TimerContext must be used within the TimerProvider");
    return timerCtx;
}