import { createContext, useState } from "react";

const TimerContext = createContext();
export default TimerContext;

export function TimerProvider ({children }) {
    // functions and values
    const [time, setTime] = useState(25);
    const [mode, setMode] = useState("Start a Focus Session")

    function handleAddTime (e) {
        setTime(e.target.value);
    }

    return <TimerContext.Provider value={{time, handleAddTime, mode}}>
        {children}
    </TimerContext.Provider>
}
