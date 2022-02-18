//reqs: Accept a minimum of 2 inputs, perform an operation and return the output.

//save complete number into a global variable once operand is pressed
  //INPUT operand --> register 
    //store 
    //OUTPUT in prev display section
     //callback function to variable

//INPUT numbers
  //function
  //console.log number inputs by user
  //OUTPUT numbers in display on click

//INPUT symbols/operators
  //function
  //OUTPUT first number + operator?

//INPUT =
  //clear display
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
const numberButtons = document.querySelectorAll (".calc__button--number");
const operationButtons = document.querySelectorAll (".calc__button--operator");
const clearButton = document.querySelector (".calc__button--clear");
const deleteButton = document.querySelector (".calc__button--delete");
const equalsButton = document.querySelector (".calc__button--equals");
const previousDisplay = document.querySelector (".previous-display");
const currentDisplay = document.querySelector (".current-display");

let numberOne; 
let chosenOperation;
let numberTwo;
let finalTotal;

//functions

const onButtonClick = (event) => {
  currentDisplay.innerHTML += (event.target.value);
  numberOne = (event.target.value);
  console.log(numberOne);
}
  
numberButtons.forEach ((button) => {
  button.addEventListener("click",onButtonClick)
})


const onOperationClick = (event) => {
  numberOne = currentDisplay.innerHTML;
  chosenOperation =(event.target.value);
  currentDisplay.innerHTML = "";
  previousDisplay.innerHTML = numberOne + chosenOperation;
  numberTwo = numberOne;
  numberOne = "";
};
      
operationButtons.forEach ((button) => {
  button.addEventListener("click",onOperationClick)
});


const onClearClick = (event) => {
  currentDisplay.innerHTML = "";
  previousDisplay.innerHTML = "";
};
  
clearButton.addEventListener("click",onClearClick);


const onDeleteClick = () => {
  currentDisplay.innerHTML= currentDisplay.innerHTML.slice(0, -1);
};

deleteButton.addEventListener("click",onDeleteClick);


const onEqualsClick = (event) => {
  if (typeof numberOne === "string" || typeof numberTwo ==="string") {
    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);
  }
  console.log(chosenOperation);

  switch (chosenOperation) {
    case '×':
      finalTotal= (numberOne*numberTwo);
      break;
    case '÷':
      finalTotal= (numberTwo/numberOne);
      break;  
    case '+':
      finalTotal= (numberOne + numberTwo);
      break; 
    case '-':
      finalTotal= (numberTwo-numberOne);
      break;     
    case '%':
      finalTotal= ((numberOne/100)*numberTwo).fixedTo(2);
      break;  
  } 
  currentDisplay.innerHTML = finalTotal; 
};

equalsButton.addEventListener("click",onEqualsClick);