import useActions from "../Hooks/ActionHook";

export default function SetTime () {
    const {time, handleAddTime} = useActions();
    return(
        <div className="set-time">
            <label htmlFor="timeInput">Set Time (in minutes) </label>
            <input type="number" id="timeInput" 
            placeholder="time in minutes"
            className="time-input" value={time.mins} 
            onChange={handleAddTime}
            />
        </div>
    )
}