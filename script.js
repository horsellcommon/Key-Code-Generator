const conLog = document.addEventListener("keypress", () => {
    console.log(event.key, event.code, event.which)
})


let blankText = document.getElementById("whichKey");
let leftText = document.getElementById("whatKey");
let rightText = document.getElementById("keyCode");

document.addEventListener("keypress", () => {
  blankText.textContent = event.which;
  leftText.textContent = event.key;
  rightText.textContent = event.code;
});