console.error("you are connected");

// this is fetching the buttons
const btn_1 = document.getElementById("btn-1")
console.log(btn_1)

const btn_2 = document.getElementById("btn-2")
console.log(btn_2)

const btn_3 = document.getElementById("btn-3")
console.log(btn_1)

// this is fetching the number on the screen
let number = document.querySelector("#num-main").innerText
console.log(number)

// this are the EventHandlers for the clicks
btn_1.addEventListener("click", function() {
  document.querySelector("#num-main").innerText = number ++;
})

btn_2.addEventListener("click", function() {
  document.querySelector("#num-main").innerText = number --;
})

btn_3.addEventListener("click", function() {
  document.querySelector("#num-main").innerText = 0;
})


