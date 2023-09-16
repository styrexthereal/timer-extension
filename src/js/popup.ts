let intervalId: number;
let time = 0;

function updateTimerDisplay() {
  const timerDisplay = document.getElementById("timerDisplay");
  if (timerDisplay) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
}

function startTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    time++;
    updateTimerDisplay();

    chrome.runtime.sendMessage({ action: "updateTimer", time });
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  time = 0;

  chrome.runtime.sendMessage({ action: "stopTimer" });
}

document.getElementById("startButton")?.addEventListener("click", () => {
  startTimer();
});
document.getElementById("stopButton")?.addEventListener("click", () => {
  stopTimer();
});

// Initialize
updateTimerDisplay();
