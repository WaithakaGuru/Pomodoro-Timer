import useActions from "../Hooks/ActionHook";

export default function TimeCounter () {
    const {time} = useActions ();
    return (
        <div className="modes">
            <p className="time-holder">
                {time|| 0} : 00
            </p>
        </div>
    )
}