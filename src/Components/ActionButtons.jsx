import useActions from "../Hooks/ActionHook";

export default function ActionButtons() {
  const {
    handleStartFocusSession,
    handleReset,
    handleShortBreak,
    handleLongBreak,
    isPaused,
    activeButtonId,
  } = useActions();
  return (
    <div className="btn-holder">
      <button
        id="start"
        className={activeButtonId === "start" ? `isPressed` : ``}
        onClick={handleStartFocusSession}
      >
        {isPaused === 0 ? "Start" : isPaused === 1 ? "Pause" : "Resume"}
      </button>
      <button
        id="reset"
        className={activeButtonId === "reset" ? `isPressed` : ``}
        onClick={handleReset}
      >
        Reset
      </button>
      <button
        id="short-break"
        className={activeButtonId === "short-break" ? `isPressed` : ``}
        onClick={handleShortBreak}
      >
        Short Break
      </button>
      <button
        id="long-break"
        className={activeButtonId === "long-break" ? `isPressed` : ``}
        onClick={handleLongBreak}
      >
        Long Break
      </button>
    </div>
  );
}
