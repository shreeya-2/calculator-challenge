//reqs: Accept a minimum of 2 inputs, perform an operation and return the output.

// console.log number inputs by user



//INPUT symbols/operators
  //function
  //OUTPUT first number + operator?

//INPUT =
  //OUTPUT total

//INPUT +
  //function is sum of input no 1 and input no 2 
    //callback function: on click of = display total
    //OUTPUT total  

//INPUT -
  //function is input no 1 - input no 2 
    //callback function: on click of = display total
    //OUTPUT total  

//INPUT x
  //function is input no 1 * input no 2 
    //callback function: on click of = display total
    //OUTPUT total   
    
//INPUT &divide
  //function is (input no 1 *100) / input no 2 
    //callback function: on click of = display total
    //OUTPUT total     
//

// global variables     
const numberButtons = document.querySelectorAll (".calc__button");
const operationButtons = document.querySelectorAll (".calc__button--operator");
const clearButton = document.querySelector (".calc__button--clear")
const equalsButton = document.querySelector (".calc__button--equals");
const previousDisplay = document.querySelector (".previous-display");
const currentDisplay = document.querySelector (".current-display");

//functions


//INPUT numbers
  //function
  //OUTPUT numbers in display on click

const onButtonClick = (event) => {
  console.log (event.target.value);
  currentDisplay.innerHTML += (event.target.value);
}
  
numberButtons.forEach ((button) => {
  button.addEventListener("click",onButtonClick)
})

