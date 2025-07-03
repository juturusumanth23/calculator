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

const buttons = [7,8,9,"/",4,5,6,"*",1,2,3,"-",".",0,"=","+"];
for (let i of buttons) {
    const btn = document.createElement("button");
    btn.textContent = `${i}`;
    const height = 400/4+"px";
    const width = 400/4+"px";
    btn.style.height = height;
    btn.style.width = width;
    keypad.appendChild(btn);
}
