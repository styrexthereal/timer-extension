let intervalId;
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
  }, 1000);
}

document.getElementById("startButton")?.addEventListener("click", () => {
  startTimer();
});

// Initialize
updateTimerDisplay();
