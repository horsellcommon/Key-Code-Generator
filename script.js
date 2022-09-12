const conLog = document.addEventListener("keypress", () => {
    console.log(event.key, event.code, event.which)
})


let blankText = document.getElementById("whichKey")
const textOverwrite = document.addEventListener("keypress", () => {
    loggedKey = event.which
    blankText.textContent = loggedKey 
})

let leftText = document.getElementById("whatKey")
const keyDisplay = document.addEventListener("keypress", () => {
    loggedLetter = event.key
    leftText.textContent = loggedLetter
})

let rightText = document.getElementById("keyCode")
const codeDisplay = document.addEventListener("keypress", () => {
    loggedCode = event.code
    rightText.textContent = loggedCode
})