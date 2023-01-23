window.onload = function () {
  let mins = 0
  let secs = 0
  let tens = 0
  let appendMinutes = document.querySelector(".minutes")
  let appendSeconds = document.querySelector(".seconds")
  let appendTens = document.querySelector(".tens")

  let startBtn = document.querySelector(".start")
  let stopBtn = document.querySelector(".stop")
  let resetBtn = document.querySelector(".reset")

  let interval

  const startTimer = () => {
    tens++
    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens
    }
    if (tens > 9) {
      appendTens.innerHTML = tens
    }
    if (tens > 99) {
      secs++
      appendSeconds.innerHTML = "0" + secs
      tens = 0
      appendTens.innerHTML = "0" + 0
    }

    if (secs > 9) {
      appendSeconds.innerHTML = secs
    }
    if (secs > 59) {
      mins++
      appendMinutes.innerHTML = "0" + mins
      secs = 0
      appendSeconds.innerHTML = "0" + 0
    }
  }

  startBtn.onclick = () => {
    console.log("clicked")
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
  }

  stopBtn.onclick = () => {
    clearInterval(interval)
  }

  resetBtn.onclick = () => {
    clearInterval(interval)
    tens = "00"
    mins = "00"
    secs = "00"
    appendTens.innerHTML = tens
    appendSeconds.innerHTML = secs
    appendMinutes.innerHTML = mins
  }
}
