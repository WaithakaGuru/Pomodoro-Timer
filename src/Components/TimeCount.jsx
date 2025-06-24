import useTimer from "../Hooks/TimerHook";

export default function TimeCounter () {
    const {time} = useTimer();
    return (
        <div className="modes">
            <p className="time-holder">
                {time|| 0} : 00
            </p>
        </div>
    )
}