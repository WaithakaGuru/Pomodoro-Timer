import useActions from "../Hooks/ActionHook"

export default function ActionButtons(){
    const {handleStartFocusSession, handleReset, 
        handleShortBreak, handleLongBreak, isPaused} = useActions()
    return(
        <div className="btn-holder">
            <button className="start" onClick={handleStartFocusSession}>
                {isPaused === 0? "Start" : isPaused === 1 ? "Pause" :
                "Resume"}
                </button>
            <button className="reset" onClick={handleReset}>Reset</button>
            <button className="short-break" onClick={handleShortBreak}>Short Break</button>
            <button className="long-break" onClick={handleLongBreak}>Long Break</button>
        </div>
    )
}