const displayTimer = document.getElementById("displayTimer");
let [hour, mins, secs] = [0, 0, 0];
let timer = null;
function stopWatch() {
    secs++;
    if (secs === 60) {
        secs = 0;
        mins++;
        if (mins === 60) {
            mins = 0;
            hour++;
        }
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = mins < 10 ? "0" + mins : mins;
    let s = secs < 10 ? "0" + secs : secs;

    displayTimer.innerHTML = h + ":" + m + ":" + s;
}

function start() {
    if (timer !== null) {
        clearInterval(timer);
    }
   timer = setInterval(stopWatch, 1000);
    // console.log("Start button clicked");
}

function pause() {
    clearInterval(timer);
    // console.log("Pause button clicked");
}

function reset() {
    clearInterval(timer);
    const verify = confirm("Are you sure to RESET the timer ?");
    if (verify) {
        [hour, mins, secs] = [0, 0, 0];
        displayTimer.innerHTML = "00" + ":" + "00" + ":" + "00";
        // console.log("Reset button clicked");
    }
}