let firstNumber;
let secondNumber;
let tempNumber = "";
let operator = "";


const screen = document.getElementById("screen")
const screenHistory = document.getElementById("screenHistory");
const buttonClear = document.getElementById("clear");
const buttonEqual = document.getElementById("equals");
const buttonAdd = document.getElementById("addOperator");
const buttonSubtract = document.getElementById("subtractOperator");
const buttonMultiply = document.getElementById("multiplyOperator");
const buttonDivide = document.getElementById("divideOperator");
const buttonDecimal = document.getElementById("decimalPoint");
const buttons = [];

buttonEqual.addEventListener("click", () => {
    equalClick();
    let finalNumber = operate();
    firstNumber = undefined;
    tempNumber = `${finalNumber}`;
    screen.textContent = finalNumber;
})
buttonAdd.addEventListener("click", () => {
    operatorClick();
    operator = "+";
})
buttonSubtract.addEventListener("click", () => {
    operatorClick();
    operator = "-";
})
buttonMultiply.addEventListener("click", () => {
    operatorClick();
    operator = "*";
})
buttonDivide.addEventListener("click", () => {
    operatorClick();
    operator = "/";
})
buttonClear.addEventListener("click", () => {
    clearClick();
})
buttonDecimal.addEventListener("click", () => {
    tempNumber = tempNumber + `.`;
    screen.textContent = tempNumber;
})


for (let i=0; i <= 9; i++) {
    const buttonNumber = `${i}`;
    const buttonElement = document.getElementById(buttonNumber);
    buttons.push(buttonElement);
}
for (let i=0; i <= 9; i++) {
    const buttonElem = buttons[i]
    buttonElem.addEventListener("click", () => {
        tempNumber = tempNumber + `${i}`;
        screen.textContent = tempNumber;
    });
}

const clearClick = () => {
    firstNumber = undefined;
    secondNumber = undefined;
    tempNumber = "";
    screen.textContent = firstNumber;
}

const operatorClick = () => {
    if (firstNumber != undefined) {
        secondNumber = Number.parseFloat(tempNumber);
        firstNumber = operate();
        screen.textContent = firstNumber;
    } else {
        firstNumber = Number.parseFloat(tempNumber);
    }
    tempNumber = "";
}
const equalClick = () => {
    secondNumber = Number.parseFloat(tempNumber);
    tempNumber = "";
}

const operate = () => {
    if (operator === "+") {
        return add();
    } else if (operator === "-") {
        return subtract();
    } else if (operator === "*") {
        return multiply();
    } else if (operator === "/") {
        return divide();
    }
}

const add = () => {
    return firstNumber + secondNumber;
}
const subtract = () => {
    return firstNumber - secondNumber;
}
const multiply = () => {
    return firstNumber * secondNumber;
}
const divide = () => {
    if (secondNumber === 0) {
        return "Error: Division by zero";
    }
    return firstNumber / secondNumber;
}