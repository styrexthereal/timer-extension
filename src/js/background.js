var intervalId;
var time = 0;
var isRunning = false;
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "updateTimer") {
        time = message.time;
    }
    else if (message.action === "stopTimer") {
        clearInterval(intervalId);
        time = 0;
        isRunning = false;
    }
});
function updateTimer() {
    if (isRunning) {
        clearInterval(intervalId);
        intervalId = setInterval(function () {
            time++;
        }, 1000);
    }
}
updateTimer();
function sendTimerUpdateToPopup() {
    chrome.runtime.sendMessage({ action: "updateTimer", time: time });
}
setInterval(sendTimerUpdateToPopup, 1000);
