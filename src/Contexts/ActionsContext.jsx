import { createContext, useEffect, useState, useRef } from "react";
import { calculateTimeRemaining, fullSessionTime } from "../utils/utils";
import togglePauseModes from "../utils/modeMapper";

const ActionContext = createContext();
export default ActionContext;

export function ActionCtxProvider({ children }) {
  // states and functions
  const [mode, setMode] = useState("");
  const [time, setTime] = useState({ mins: 25, secs: 0 });
  const [isPaused, setIsPaused] = useState(0);
  const [activeButtonId, setActiveButtonId] = useState(null);
  const [reset, setReset] = useState(false);
  const [shortBreak, setShortBreak] = useState(false);
  const [longBreak, setLongBreak] = useState(false);
  const [inputIsReadOnly, setInputIsReadOnly] = useState(false);
  const actionIntervalRef = useRef(null);

  useEffect(() => {
    setMode("Start a Focus Session");
  }, []);

  function handleAddTime(e) {
    setTime({ mins: e.target.value, secs: 0 });
  }

  function handleStartFocusSession(e) {
    /**
     * PAUSE MODES
     * 0 - Start - the count down not yet started, new Focus session e.g on page refresh
     * 1 - Pause - countdown is running and button displays 'pause'
     *      for user to pause if need be
     * 2 - resume - user has paused the count down and
     *      btn displays 'resume' for user to resume the timer count down
     * 3 - short break - session is on hold since user is taking a short break
     * 4 - long break - session is on hold since user is taking a long break
     */

    setActiveButtonId(e.target.id);

    if (isPaused === 0) {
      // when user start a focus session
      setIsPaused(1);
      setMode(togglePauseModes(1));
    } else if (isPaused === 1) {
      // when user pauses a focus session
      setIsPaused(2);
      setMode(togglePauseModes(2));
    } else {
      // when user resumes a focus session
      setIsPaused(1);
      setMode(togglePauseModes(1));
    }

    // THE COUNT DOWN LOGIC
    const minutes = time.mins;
    const totalSessionTime = fullSessionTime(minutes);
    if (time.mins > 0 || time.secs > 0) {
      setInputIsReadOnly(true);
      if (!actionIntervalRef.current) {
        actionIntervalRef.current = setInterval(() => {
          setTime(() => {
            if (time.mins === 0 && time.secs === 0) {
              clearInterval(actionIntervalRef.current);
              actionIntervalRef.current = null;
              setIsPaused(0);
              setMode(togglePauseModes(0));
            } else return calculateTimeRemaining(totalSessionTime);
          });
        }, 999);
      }
    }
  }

  function handleReset(e) {
    setActiveButtonId(e.target.id);
    setIsPaused(0);
    setMode(togglePauseModes(isPaused));
  }

  function handleShortBreak(e) {
    setActiveButtonId(e.target.id);
  }

  function handleLongBreak(e) {
    setActiveButtonId(e.target.id);
  }

  return (
    <ActionContext.Provider
      value={{
        mode,
        time,
        isPaused,
        activeButtonId,
        inputIsReadOnly,
        handleStartFocusSession,
        handleReset,
        handleShortBreak,
        handleLongBreak,
        handleAddTime,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
}