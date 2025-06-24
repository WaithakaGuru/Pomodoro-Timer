import { useContext } from "react";
import TimerContext from "../Contexts/TimerContext";

export function useTimer() {
    const timerCtx = useContext(TimerContext);
    if(!timerCtx) throw new Error("TimerContext must be used within the TimerProvider");
    return timerCtx;
}