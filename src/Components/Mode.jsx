import { useTimer } from "../Contexts/TimerContext"

export default function Mode () {
    const {time} = useTimer();
    return (
        <div className="modes">
            <p className="mode">
                Working 
            </p>
            <p className="time-holder">
                {time} : 00
            </p>
        </div>
    )
}