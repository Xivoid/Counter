let saveEl = document.getElementById("save-el") //seveEl finds the variable "save-el" from html
let countEl = document.getElementById("count-el") //countEl finds the variable "count-el" from html
let count = 0 //Creates the variable "count" and set it at "0"

function increment() {
    count += 1
    countEl.innerText = count
}
function save() {
    let countStr = count + ", "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}