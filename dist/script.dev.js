"use strict";

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
var numberButtons = document.querySelectorAll(".calc__button--number");
var operationButtons = document.querySelectorAll(".calc__button--operator");
var clearButton = document.querySelector(".calc__button--clear");
var deleteButton = document.querySelector(".calc__button--delete");
var equalsButton = document.querySelector(".calc__button--equals");
var previousDisplay = document.querySelector(".previous-display");
var currentDisplay = document.querySelector(".current-display");
var numberOne;
var chosenOperation;
var numberTwo;
var finalTotal; //functions

var onButtonClick = function onButtonClick(event) {
  currentDisplay.innerHTML += event.target.value;
  numberOne = event.target.value;
  console.log(numberOne);
};

numberButtons.forEach(function (button) {
  button.addEventListener("click", onButtonClick);
});

var onOperationClick = function onOperationClick(event) {
  numberOne = currentDisplay.innerHTML;
  chosenOperation = event.target.value;
  currentDisplay.innerHTML = "";
  previousDisplay.innerHTML = numberOne + chosenOperation;
  numberTwo = numberOne;
  numberOne = "";
};

operationButtons.forEach(function (button) {
  button.addEventListener("click", onOperationClick);
});

var onClearClick = function onClearClick(event) {
  currentDisplay.innerHTML = "";
  previousDisplay.innerHTML = "";
};

clearButton.addEventListener("click", onClearClick);

var onDeleteClick = function onDeleteClick() {
  currentDisplay.innerHTML = currentDisplay.innerHTML.slice(0, -1);
};

deleteButton.addEventListener("click", onDeleteClick);

var onEqualsClick = function onEqualsClick(event) {
  if (typeof numberOne === "string" || typeof numberTwo === "string") {
    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);
  }

  console.log(chosenOperation);

  switch (chosenOperation) {
    case '×':
      finalTotal = numberOne * numberTwo;
      console.log("fired");
      break;

    case '÷':
      finalTotal = numberTwo / numberOne;
      break;

    case '+':
      finalTotal = numberOne + numberTwo;
      break;

    case '-':
      finalTotal = numberTwo - numberOne;
      break;
  }

  currentDisplay.innerHTML = finalTotal;
};

equalsButton.addEventListener("click", onEqualsClick);