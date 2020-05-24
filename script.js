let result = '';
let operatorSelected = "";
let isFirstOperandOnFocus = true;
let firstOperand = '0', secondOperand = '';
const arrayOfOperators = ['plus-or-minus', 'percentage', 'divide', 'multiply', 'minus', 'add', 'delete', 'equals'];
const allOperandButtons = document.querySelectorAll(".operand");
const clearButton = document.querySelector(".clear-display");
clearButton.addEventListener('click', () => {
  result = '';
  firstOperand = '0';
  secondOperand = '';
  isFirstOperandOnFocus = true;
  operatorSelected = '';
  displayOnScreen(firstOperand);
});

allOperandButtons.forEach((operandButton) => {
  operandButton.addEventListener('click', inputOperand);
});

const allOperatorButtons = document.querySelectorAll(".operator");
allOperatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener('click', inputOperator);
});

function inputOperand(e) {
  console.log(e);
  result = '';
  if (isFirstOperandOnFocus == true) {
    if (firstOperand === '0') {
      if (e.target.textContent === '.') {
        firstOperand = firstOperand.concat('.');
      }
      else {
        firstOperand = e.target.textContent;
      }
    }
    else {
      firstOperand = firstOperand.concat(e.target.textContent);
    }
    console.log("firstOperand = " + firstOperand);
    displayOnScreen(firstOperand);
  }
  else {
    if (e.target.textContent === ".") {
      secondOperand = secondOperand.concat(".");
    }
    else {
      secondOperand = secondOperand.concat(e.target.textContent);
    }
    console.log("secondOperand = " + secondOperand);
    displayOnScreen(secondOperand);
  }
}

function inputOperator(e) {
  if (e.target.id === "add") {
    isFirstOperandOnFocus = false;
    if (result != '') {
      firstOperand = result;
    }
    add();
  }
  else if (e.target.id === "subtract") {
    isFirstOperandOnFocus = false;
    if (result != '') {
      firstOperand = result;
    }
    subtract();
  }
  else if (e.target.id === "multiply") {
    isFirstOperandOnFocus = false;
    if (result != '') {
      firstOperand = result;
    }
    multiply();
  }
  else if (e.target.id === "divide") {
    isFirstOperandOnFocus = false;
    if (result != '') {
      firstOperand = result;
    }
    divide();
  }
  else if (e.target.id === "percentage") {
    isFirstOperandOnFocus = false;
    if (result != '') {
      firstOperand = result;
    }
    percentage();
  }
  else if (e.target.id === "plus-or-minus") {
    plusOrMinus();
  }
  else if (e.target.id === "delete") {
    deleteCharacter();
  }
  else if (e.target.id === "equals") {
    equals();
  }
}

function add() {
  if (secondOperand !== '') {
    if (operatorSelected === "add") {
      firstOperand = (parseFloat(firstOperand, 10) + parseFloat(secondOperand, 10)).toString();
      console.log(firstOperand);
      secondOperand = '';
      displayOnScreen(firstOperand);
    }
    else {
      callOperatorFunction(operatorSelected);
      operatorSelected = "add";
    }
  }
  else {
    operatorSelected = "add";
  }
}

function subtract() {
  if (secondOperand !== '') {
    if (operatorSelected === 'subtract') {
      firstOperand = (parseFloat(firstOperand, 10) - parseFloat(secondOperand, 10)).toString();
      console.log(firstOperand);
      secondOperand = '';
      displayOnScreen(firstOperand);
    }
    else {
      callOperatorFunction(operatorSelected);
      operatorSelected = 'subtract';
    }
  }
  else {
    operatorSelected = 'subtract';
  }
}

function multiply() {
  if (secondOperand !== '') {
    if (operatorSelected === "multiply") {
      firstOperand = (parseFloat(firstOperand, 10) * parseFloat(secondOperand, 10)).toString();
      console.log(firstOperand);
      secondOperand = '';
      displayOnScreen(firstOperand);
    }
    else {
      callOperatorFunction(operatorSelected);
      operatorSelected = 'multiply';
    }
  }
  else {
    operatorSelected = 'multiply';
  }
}

function divide() {
  if (secondOperand !== '') {
    if (operatorSelected === "divide") {
      firstOperand = (parseFloat(firstOperand, 10) / parseFloat(secondOperand, 10)).toString();
      console.log(firstOperand);
      secondOperand = '';
      displayOnScreen(firstOperand);
    }
    else {
      callOperatorFunction(operatorSelected);
      operatorSelected = "divide";
    }
  }
  else {
    operatorSelected = "divide";
  }
}

function percentage() {
  if (secondOperand !== '') {
    if (operatorSelected === "percentage") {
      firstOperand = (parseFloat(firstOperand, 10) * parseFloat(secondOperand, 10) / 100).toString();
      console.log(firstOperand);
      secondOperand = '';
      displayOnScreen(firstOperand);
    }
    else {
      callOperatorFunction(operatorSelected);
      operatorSelected = "percentage";
    }
  }
  else {
    operatorSelected = "percentage";
  }
}

function plusOrMinus() {
  if (isFirstOperandOnFocus) {
    let value = parseFloat(firstOperand);
    value = -value;
    firstOperand = value.toString();
    displayOnScreen(firstOperand);
  }
  else {
    value = parseFloat(secondOperator);
    value = -value;
    secondOperand = value.toString();
    displayOnScreen(secondOperand);
  }
}

function deleteCharacter() {
  if (isFirstOperandOnFocus) {
    firstOperand = firstOperand.substr(0, firstOperand.length - 1);
    console.log(firstOperand);
    displayOnScreen(firstOperand);
  }
  else {
    if (secondOperand !== '') {
      secondOperand = secondOperand.substr(0, secondOperand.length);
      displayOnScreen(secondOperand);
    }
  }
}

function equals() {
  if (secondOperand !== '') {
    callOperatorFunction(operatorSelected);
  }
  else {
    displayOnScreen(firstOperand);
  }
  result = firstOperand;
  firstOperand = '0';
  operatorSelected = '';
  isFirstOperandOnFocus = true;
}

function callOperatorFunction(operator) {
  if (operator === "add") {
    add();
  }
  else if (operator === "subtract") {
    subtract();
  }
  else if (operator === "multiply") {
    multiply();
  }
  else if (operator === "divide") {
    divide();
  }
  else if (operator === "percentage") {
    percentage();
  }
  else if (operator === "plus-or-minus") {
    plusOrMinus();
  }
  else if (operator === "delete") {
    deleteCharacter();
  }
}

function displayOnScreen(data) {
  document.querySelector("#display-result-span").textContent = data;
}

// adding keyboard input facility
document.addEventListener('keydown', keyboardInput);

function keyboardInput(e) {
  console.log(e);
  if (e.key === "Escape" || e.key === "c" || e.key === "C") {
    clearButton.dispatchEvent(new Event('click'));
  }
  else if (e.key === "1") {
    console.log(document.querySelector("#one").click());
  }
  else if (e.key === "2") {
    console.log(document.querySelector("#two").click());
  }
  else if (e.key === "3") {
    console.log(document.querySelector("#three").click());
  }
  else if (e.key === "4") {
    console.log(document.querySelector("#four").click());
  }
  else if (e.key === "5") {
    console.log(document.querySelector("#five").click());
  }
  else if (e.key === "6") {
    console.log(document.querySelector("#six").click());
  }
  else if (e.key === "7") {
    console.log(document.querySelector("#seven").click());
  }
  else if (e.key === "8") {
    console.log(document.querySelector("#eight").click());
  }
  else if (e.key === "9") {
    console.log(document.querySelector("#nine").click());
  }
  else if (e.key === "0") {
    console.log(document.querySelector("#zero").click());
  }
  else if (e.key === ".") {
    console.log(document.querySelector("#dot").click());
  }
  else if (e.key === "+") {
    console.log(document.querySelector("#add").click());
  }
  else if (e.key === "-") {
    console.log(document.querySelector("#subtract").click());
  }
  else if (e.key === "*") {
    console.log(document.querySelector("#multiply").click());
  }
  else if (e.key === "/") {
    console.log(document.querySelector("#divide").click());
  }
  else if (e.key === "%") {
    console.log(document.querySelector("#percentage").click());
  }
  else if (e.key === "=" || e.key === "Enter") {
    console.log(document.querySelector("#equals").click());
  }
}