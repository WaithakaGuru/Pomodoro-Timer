import { useTimer } from "../Contexts/TimerContext"

export default function Mode () {
    const {time, mode} = useTimer();
    return (
        <div className="modes">
            <p className="mode">
                {mode}
            </p>
            <p className="time-holder">
                {time|| 0} : 00
            </p>
        </div>
    )
}