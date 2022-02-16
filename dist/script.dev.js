"use strict";

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
var numberButtons = document.querySelectorAll(".calc__button");
var operationButtons = document.querySelectorAll(".calc__button--operator");
var clearButton = document.querySelector(".calc__button--clear");
var equalsButton = document.querySelector(".calc__button--equals");
var previousDisplay = document.querySelector(".previous-display");
var currentDisplay = document.querySelector(".current-display"); //functions
//INPUT numbers
//function
//OUTPUT numbers in display on click

var onButtonClick = function onButtonClick(event) {
  console.log(event.target.value);
  currentDisplay.innerHTML += event.target.value;
};

numberButtons.forEach(function (button) {
  button.addEventListener("click", onButtonClick);
});