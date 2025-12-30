// setup questions
const que1 = {
  que: "Javascript is a ... ",
  opt: [
    "A Static Language",
    "A Dynamic Language",
    "A Structured Query",
    "A Procedural oriented Language",
  ],
  ans:"A Dynamic Language",
}
const que2 = {
  que: "Which one of the following is not server-side scripting language ?",
  opt: [
    "PHP",
    "Pearl",
    "Python",
    "Javascript",
  ],
  ans:"Javascript",
}
const que3 = {
  que: "Who developed Javascript ?",
  opt: [
    "Brendan Eich",
    "Bjame Stroustrup",
    "Dennis M. Ritchie",
    "Brian W. Kernighan",
  ],
  ans:"Brendan Eich",
}

const arrQue = [
  que1,
  que2,
  que3,
]

// get the elements to modify
let question = document.querySelector(".question")
console.log(question.textContent)

const next = document.querySelector(".btn-nxt")
console.log(next.textContent)

var opts = document.getElementsByClassName("opt")
console.log(opts)

// function for next button
var i = 0;

const repeater = function() {
  setTimeout(() => {
      let currObj = arrQue[i]
     let currQue = currObj["que"]
    question.textContent = currQue
    for (t=0; t < opts.length; t++) {
      opts[0].textContent = currObj.opt[0]
      opts[1].textContent = currObj.opt[1]
      opts[2].textContent = currObj.opt[2]
      opts[3].textContent = currObj.opt[3]
    }
    if ( i < arrQue.length) {
      repeater()
    }
  }
    
  }, 8000);
}
