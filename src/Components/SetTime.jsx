export default function SetTime () {
    return(
        <div className="set-time">
            <label htmlFor="timeInput">Set Time (in minutes) </label>
            <input type="number" id="timeInput" className="time-input" value={25} />
        </div>
    )
}