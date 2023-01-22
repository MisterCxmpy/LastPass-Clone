const { ipcRenderer } = require("electron");
const ipc = ipcRenderer

minimizeBtn.addEventListener("click", () => {
    ipc.send("minimizeApp")
})

maximizeBtn.addEventListener("click", () => {
    ipc.send("maximizeApp")
})

closeBtn.addEventListener("click", () => {
    ipc.send("closeApp")
})