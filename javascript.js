function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

let num1;
let operator;
let num2;

function operate(operator,num1,num2) {
    switch(operator) {
        case '+': 
            return add(num1,num2);
        case '-': 
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);

    }
}

const container = document.querySelector(".container");
const keypad = document.querySelector(".keypad");
const display = document.querySelector(".display");

const buttons = ["a","b","clear","backspace",7,8,9,"/",4,5,6,"*",1,2,3,"-",".",0,"=","+"];
for (let i of buttons) {
    const btn = document.createElement("button");
    btn.textContent = `${i}`;
    const height = 400/5+"px";
    const width = 400/4+"px";
    btn.style.height = height;
    btn.style.width = width;
    keypad.appendChild(btn);
    btn.setAttribute("id",`${i}`)
    btn.addEventListener("click",populateDisplay);

}
let displayContent;
function populateDisplay(e) {

    
    const buttonPressed = `${e.target.id}`;
    if (Number(buttonPressed) || buttonPressed==0) {
        display.append(buttonPressed);
        displayContent = display.textContent;
    }
    else if (buttonPressed == "clear") {
        display.textContent = '';
        displayContent = '';
    }
    else if (buttonPressed == "backspace") {
        display.lastChild.remove();
        displayContent = display.textContent;
    }
    else if (buttonPressed == "=") {
        num2 = displayContent;
        let result = operate(operator,num1,num2);
        display.textContent = `${result}`;
        displayContent = display.textContent;
        num1 = displayContent;
    }
    else {
        operator = buttonPressed;
        num1 = displayContent;
        display.textContent = '';
    }
    console.log(displayContent)
}
