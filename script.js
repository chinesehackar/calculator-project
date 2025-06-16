let firstNum;
let operator = "";
let secondNum;
let result;
let readyClear = false;

const display = document.querySelector(".display");
const interface = document.querySelector(".interface");
interface.addEventListener("click", populateDisplay);
document.addEventListener("keydown", typeDisplay);

function typeDisplay(e) {
    if (display.textContent === "Math Error" || display.textContent === "Operation too large!") {
        clear(); 
    }

    if (["1","2","3","4","5","6","7","8","9","0"].includes(e.key) && display.textContent.length < 12 ) {
        if (readyClear) {
            clear();
            readyClear = false;
        }
        display.textContent += e.key
    }
    if (e.key === "." && display.textContent && !display.textContent.includes(".")) {
        readyClear = false;
        display.textContent += e.key;
    }
    if (["/","*","-","+"].includes(e.key)) {
        if (operator === "") {
            firstNum = parseFloat(display.textContent);
            operator = e.key;
            display.textContent = "";
        }
        readyClear = false;
    }
    if (e.key === "Enter") {
        if (isNaN(parseFloat(display.textContent))) return;

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
                if (display.textContent.length > 12) {
                    display.textContent = "Operation too large!"
                    firstNum = null
                } else {
                    firstNum = parseFloat(display.textContent)
                }
            } else {
                display.textContent = "Math Error";
                firstNum = 0;
            }
            operator = "";
            readyClear = true;
        }
    }
    if (e.key === "Backspace") {
        display.textContent = (display.textContent).substring(0, display.textContent.length - 1)
    }
}

function populateDisplay(e) {
    if (display.textContent === "Math Error" || display.textContent === "Operation too large!") {
        clear(); 
    }

    if (e.target.matches(".digit") && display.textContent.length < 12 ) {
        if (readyClear) {
            clear();
            readyClear = false;
        }
        display.textContent += e.target.textContent
    }
    if (e.target.matches(".decimal") && display.textContent && !display.textContent.includes(".")) {
        readyClear = false;
        display.textContent += e.target.textContent;
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
        if (isNaN(parseFloat(display.textContent))) return;

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
                if (display.textContent.length > 12) {
                    display.textContent = "Operation too large!"
                    firstNum = null
                } else {
                    firstNum = parseFloat(display.textContent)
                }
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
    if (e.target.matches(".del")) {
        display.textContent = (display.textContent).substring(0, display.textContent.length - 1)
    }
}

function clear() {
    firstNum = null;
    secondNum = null;
    operator = "";
    result = null;
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