import ActionButtons from './Components/ActionButtons'
import Mode from './Components/Mode'
import SetTime from './Components/SetTime'
import { TimerProvider, useTimer } from './Contexts/TimerContext'
import './pomofocus.css'

function Pomofocus () {
    //   useTimer();
    return (
        <TimerProvider>
            <Mode/>
            <SetTime/>
            <ActionButtons/>
        </TimerProvider>
    )
}

export default Pomofocus