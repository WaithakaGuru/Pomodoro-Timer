import useActions from "../Hooks/ActionHook";

export default function TimeCounter() {
  const { time } = useActions();
  return (
    <div className="modes">
      <p className="time-holder">
        {time.mins || 0} : {time.secs > 9 ? time.secs : `0${time.secs}` || `00`}
      </p>
    </div>
  );
}
