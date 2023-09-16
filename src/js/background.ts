let isRunning = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "updateTimer") {
        time = message.time;
    } else if (message.action === "stopTimer") {
        clearInterval(intervalId);
        time = 0;
        isRunning = false;
    }
});

function updateTimer() {
    if (isRunning) {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            time++;
        }, 1000);
    }
}

updateTimer();

function sendTimerUpdateToPopup() {
    chrome.runtime.sendMessage({ action: "updateTimer", time });
}

setInterval(sendTimerUpdateToPopup, 1000);