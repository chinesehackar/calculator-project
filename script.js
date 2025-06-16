let firstNum;
let operator
let secondNum;
let result;

function operate(num1, operator, num2) {
    switch(operator) {
        case "+": {
            result = add(num1, num2)
            break;
        };
        case "-": {
            result = subtract(num1, num2)
            break;
        }
        case "*": {
            result = multiply(num1, num2)
            break;
        }
        case "/": {
            result = divide(num1, num2)
            break;
        }
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}