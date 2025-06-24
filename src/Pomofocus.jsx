import ActionButtons from './Components/ActionButtons'
import Mode from './Components/Mode'
import SetTime from './Components/SetTime'
import { ActionCtxProvider } from './Contexts/ActionsContext'
import { TimerProvider} from './Contexts/TimerContext'
import './pomofocus.css'

function Pomofocus () {
    return (
        <>
            <header>
                <img src="./PomoFocusIcon.png" alt="logo" />Pomo<span>Focus</span> Timer
            </header>
            <TimerProvider>
                <ActionCtxProvider> 
                    <Mode/>
                </ActionCtxProvider>
                    <SetTime/>
            </TimerProvider>
            <ActionCtxProvider>
                <ActionButtons/>
            </ActionCtxProvider>
        </>
    )
}

export default Pomofocus