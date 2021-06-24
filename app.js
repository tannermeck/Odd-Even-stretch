// import functions
import { isEven } from './is-even.js'
import { isOdd } from './is-even.js'
// reference needed DOM elements
const inputBox = document.getElementById("input-box")
const button = document.getElementById("button")
const result = document.getElementById("result")

// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)

button.addEventListener('click', () => {
  if (isEven(inputBox.value)) {
  result.textContent = "EVEN"
  }
  console.log(inputBox)
  if
  (isOdd(inputBox.value)){
  result.textContent = "ODD"
}})

