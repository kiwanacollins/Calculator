let output = document.getElementById('output');
const input = document.getElementById('input');
const clearAll = document.getElementById('ac');
const percentage = document.getElementById('%');
const deleteButton = document.getElementById('with-bin');
const multiplyButton = document.getElementById('*');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const divideButton = document.getElementById('/');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const subtrateButton = document.getElementById('-');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const addButton = document.getElementById('+');
const brackets = document.getElementById('00');
const zero = document.getElementById('0');
const dot = document.getElementById('.');
const equals = document.getElementById('=');

const toBeDisplayed = document.querySelectorAll('.push');
const signs = document.querySelectorAll('.sign');

toBeDisplayed.forEach((element) => {
  element.addEventListener('click', () => {
    let arr = [];
    let outputty = '';
    arr.push(element.textContent);
    outputty += arr.join(' ');
    /*console.log(outputty);*/
    input.textContent += outputty;
  });
  clearAll.addEventListener('click', () => {
    input.textContent = '';
    output.textContent = '';
  });
});

deleteButton.addEventListener('click', () => {
  let arrayedDelete = input.textContent.trim();
  let arrayedDelete2 = arrayedDelete.split('');

  // Check if the last element is an operator
  let lastElement = arrayedDelete2[arrayedDelete2.length - 1];
  if (isOperator(lastElement)) {
    // If it's an operator, remove it and update the output
    arrayedDelete2.pop();
    input.textContent = arrayedDelete2.join('');
  } else {
    // If it's not an operator, remove the last element
    arrayedDelete2.pop();
    input.textContent = arrayedDelete2.join('');
  }
});

// Function to check if a string is an operator
function isOperator(value) {
  return ['+', '-', '*', '/'].includes(value);
}

function add(a, b) {
  return a + b;
}

function subtrate(a, b) {
  return a - b;
}

function divide(a, b) {
  return b !== 0 ? a / b : 'Error: Division by zero';
}

function multiply(a, b) {
  return a * b;
}

let firstNumber = 0;
let operator = null;
let secondNumber = 0;

// Function to handle operator button clicks
function handleOperatorClick(operator) {
  input.textContent += ' ' + operator + ' ';
}

// Function to handle equals button click
function handleEqualsClick() {
  const expression = input.textContent;

  try {
    // Use eval to evaluate the expression
    const result = eval(expression);

    // Update the output with the result
    output.textContent = result;
  } catch (error) {
    // Handle invalid expression
    output.textContent = 'Error';
  }
}

// Event listeners for operator buttons
addButton.addEventListener('click', () => handleOperatorClick('+'));
subtrateButton.addEventListener('click', () => handleOperatorClick('-'));
multiplyButton.addEventListener('click', () => handleOperatorClick('*'));
divideButton.addEventListener('click', () => handleOperatorClick('/'));

// Function to handle percentage button click
function handlePercentageClick() {
  const expression = input.textContent;
  const [num1, operator, num2] = expression.split(' ');

  // Check if the expression includes a second number and an operator
  if (operator && num2) {
    // If yes, calculate the percentage of the second number
    const percentage = parseFloat(num2) / 100;
    const result = evaluate1(parseFloat(num1), percentage, operator);

    // Update the output with the result
    output.textContent = result;
  } else if (num1) {
    // If no second number and operator, calculate the percentage of the first number
    const percentage = parseFloat(num1) / 100;

    // Update the input with the calculated percentage
    input.textContent = percentage;
  }
}

// Event listener for the percentage button
percentage.addEventListener('click', handlePercentageClick);

// Event listener for equals button
equals.addEventListener('click', handleEqualsClick);

// Variable to keep track of the bracket state
let isOpeningBracket = true;

// Function to handle bracket button click
function handleBracketClick() {
  if (isOpeningBracket) {
    input.textContent += '(';
    isOpeningBracket = false;
  } else {
    input.textContent += ')';
    isOpeningBracket = true;
  }
}

// Event listener for the bracket button
brackets.addEventListener('click', handleBracketClick);
