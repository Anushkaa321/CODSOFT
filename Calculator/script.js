// script.js

let currentInput = '';
let operation = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    updateResult();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (firstOperand !== null) {
        calculate();
    }
    firstOperand = parseFloat(currentInput);
    operation = op;
    currentInput = '';
}

function calculate() {
    if (firstOperand === null || currentInput === '') return;
    let secondOperand = parseFloat(currentInput);
    let result;
    if (operation === '+') {
        result = firstOperand + secondOperand;
    } else if (operation === '-') {
        result = firstOperand - secondOperand;
    }
    currentInput = result.toString();
    operation = '';
    firstOperand = null;
    updateResult();
}

function clearResult() {
    currentInput = '';
    operation = '';
    firstOperand = null;
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = currentInput;
}
