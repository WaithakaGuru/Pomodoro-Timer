import useActions from "../Hooks/ActionHook";
import useTimer from "../Hooks/TimerHook";

export default function Mode () {
    const {mode} = useActions();
    const {time} = useTimer()
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