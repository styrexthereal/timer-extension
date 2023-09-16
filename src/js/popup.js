var _a, _b;
var intervalId;
var time = 0;
function updateTimerDisplay() {
    var timerDisplay = document.getElementById("timerDisplay");
    if (timerDisplay) {
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
        timerDisplay.textContent = "".concat(minutes.toString().padStart(2, "0"), ":").concat(seconds
            .toString()
            .padStart(2, "0"));
    }
}
function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(function () {
        time++;
        updateTimerDisplay();
        chrome.runtime.sendMessage({ action: "updateTimer", time: time });
    }, 1000);
}
function stopTimer() {
    clearInterval(intervalId);
    time = 0;
    chrome.runtime.sendMessage({ action: "stopTimer" });
}
(_a = document.getElementById("startButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    startTimer();
});
(_b = document.getElementById("stopButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    stopTimer();
});
// Initialize
updateTimerDisplay();
