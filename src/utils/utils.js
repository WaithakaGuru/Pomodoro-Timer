
export function fullSessionTime (sessionTimeInMins) {
    return  new Date().getTime() + sessionTimeInMins * 1000 * 60;
}

export function calculateTimeRemaining(fullTime) {
    const currentTime = new Date().getTime();
    let timeRemaining = fullTime - currentTime;
    
    let remainingMinutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / (1000))
    return {mins: remainingMinutes, secs: secondsRemaining};
}

 /**
  * - A Demo function to show case how the countdown works: - 
  * 
     function timeCountDown ( timeAmount ) {
        //total time value from now till the focus session ends
        let endOfSession = new Date().getTime() + timeAmount * 60 * 1000;
        let remainingTime  = {}
        // reduce time remaining with each count down (1s);
        setInterval(() =>{
            remainingTime = calculateTimeRemaining(endOfSession);
            console.log(remainingTime);
        }, 970) 
    }
    console.log(timeCountDown(10) )
*/