import { useTimer } from "../Contexts/TimerContext"

export default function SetTime () {
    const {time, handleAddTime} = useTimer();
    return(
        <div className="set-time">
            <label htmlFor="timeInput">Set Time (in minutes) </label>
            <input type="number" id="timeInput" 
            className="time-input" value={time} 
            onChange={handleAddTime}
            />
        </div>
    )
}