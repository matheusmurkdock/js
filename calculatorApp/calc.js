let digits = document.querySelector("#digits")
console.log(digits.textContent)

const arrDigits = []

// this are numpad buttons
const zero = document.querySelector(".zero")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const dot = document.querySelector(".dot")

const trip = function(t){
  arrDigits.push(t); 
  let convert = arrDigits.toString();
  let rem = arrDigits.join("");
  digits.textContent = rem;
  console.log(arrDigits);

}
zero.addEventListener("click", function(){
  trip(0);
})

one.addEventListener("click", function(){
  trip(1);
})

two.addEventListener("click", function(){
  trip(2);
})

three.addEventListener("click", function(){
  trip(3);
})

four.addEventListener("click", function(){
  trip(4);
})

five.addEventListener("click", function(){
  trip(5);
})

six.addEventListener("click", function(){
  trip(6);
})

seven.addEventListener("click", function(){
  trip(7);
})

eight.addEventListener("click", function(){
  trip(8);
})

nine.addEventListener("click", function(){
  trip(9);
})

dot.addEventListener("click", function(){
  trip(".")
})

// this are operation buttons
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const multiply = document.querySelector(".multiply")
const divide = document.querySelector(".divide")
const equal = document.querySelector(".equal")
const allclear = document.querySelector(".clear")

const paradise = function(m) {
  arrDigits.push(m);
  let convert = arrDigits.toString();
  let rem = arrDigits.join("");
  digits.textContent = rem;
  console.log(arrDigits);
}

plus.addEventListener("click", function(){
  paradise("+");
})
minus.addEventListener("click", function(){
  paradise("-");
})
multiply.addEventListener("click", function(){
  paradise("*");
})
divide.addEventListener("click", function(){
  paradise("/");
})

const removeArr = function() {
  let len = arrDigits.length;
  for (i = 0; i < len; i++) {
    arrDigits.pop();
  }
}

const edge = function(param){
  let len = arrDigits.length;
  for (i=0; i < len; i++) {
    if (arrDigits[0] === "Infinity") {
      arrDigits.pop();
    } else {
      arrDigits.push(param);
    }
  }
}

equal.addEventListener("click",function(){
  let convert = arrDigits.toString();
  let rem = arrDigits.join("");
  let finalResult = eval(rem);
  digits.textContent = finalResult;
  let lastResult = finalResult;
  removeArr();
  edge(lastResult);
})

allclear.addEventListener("click", function(){
  let convert = arrDigits.toString();
  let rem = arrDigits.join("");
  let finalResult = eval(0);
  digits.textContent =  finalResult;
  removeArr();
})

$(document).keydown(function(e){
  switch (e.keyCode) {
    case 48:
      trip(0);
      break;
    case 49:
      console.log("1 was pressed");
      trip(1);
      break;
    case 50:
      trip(2);
      break;
    case 51:
      trip(3);
      break;
    case 52:
      trip(4);
      break;
    case 53:
      trip(5);
      break;
    case 54:
      trip(6);
      break;
    case 55:
      trip(7);
      break;
    case 56:
      trip(8);
      break;
    case 57:
      trip(9);
      break;
    case 107:
      paradise("+");
      break;
    case 109:
      paradise("-");
      break;
    case 106:
      paradise("*");
      break;
    case 111:
      paradise("/");
      break;
    default:
      break;
  }
})
