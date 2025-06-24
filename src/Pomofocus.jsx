import ActionButtons from './Components/ActionButtons'
import Mode from './Components/Mode'
import SetTime from './Components/SetTime'
import { ActionCtxProvider } from './Contexts/ActionsContext'
import { TimerProvider, useTimer } from './Contexts/TimerContext'
import './pomofocus.css'

function Pomofocus () {
    //   useTimer();
    return (
        <>
            <TimerProvider>
                <Mode/>
                <SetTime/>
            </TimerProvider>
            <ActionCtxProvider><ActionButtons/></ActionCtxProvider>
        </>
    )
}

export default Pomofocus