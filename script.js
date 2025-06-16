let firstNum;
let operator = "";
let secondNum;
let result;
let readyClear = false;

const display = document.querySelector(".display");
const interface = document.querySelector(".interface");
interface.addEventListener("click", populateDisplay);

function populateDisplay(e) {
    if (e.target.matches(".digit")) {
        if (readyClear) {
            clear();
            readyClear = false;
        }
        display.textContent += e.target.textContent
    }
    if (e.target.matches(".operator")) {
        if (operator === "") {
            firstNum = parseFloat(display.textContent);
            operator = e.target.textContent
            display.textContent = "";
        }
        readyClear = false;
    }
    if (e.target.matches(".equals")) {
        if (!firstNum && !operator) { //no vars at all
            firstNum = parseFloat(display.textContent);
            display.textContent = firstNum
            readyClear = true;
        } else if (firstNum && operator && !display.textContent) { //first num and operator present
            display.textContent = firstNum;
            operator = "";
            readyClear = true;
        } else {
            secondNum = parseFloat(display.textContent);
            operate(firstNum, operator, secondNum);
            if (isFinite(result)) {
                display.textContent = Math.round(result * 1000000) / 1000000;
                firstNum = parseFloat(display.textContent);
            } else {
                display.textContent = "Math Error";
                firstNum = 0;
            }
            operator = "";
            readyClear = true;
        }
    }

    if (e.target.matches(".all-clear")) {
        clear();
    }
}

function clear() {
    firstNum = 0;
    secondNum = 0;
    operator = "";
    display.textContent = "";
}

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