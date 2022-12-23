const button = document.getElementById("button")
const container = document.getElementById("toasts")

const messages = [
  "Notification 1",
  "Notification 2",
  "Notification 3",
  "Notification 4",
]

const types = ["info", "success", "error"]

button.addEventListener("click", () => createNotification())

function createNotification(message = null, type = null) {
  const notif = document.createElement("div")
  notif.classList.add("toast")
  notif.classList.add(type ? type : getRandomType())

  notif.innerText = message ? message : getRandomMessage()

  container.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}
