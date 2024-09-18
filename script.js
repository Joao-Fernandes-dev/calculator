function add(a, b){
    return a + b;
};
function subtract(a, b){
    return (a - b);
};
function multiply(a ,b){
    return a * b;
};
function divide(a, b){
    if (b == 0) return "Division by zero is not Allowed";
    else {
        return a / b;
    };
};

let firstNum;
let secondNum;
let operator;

let maintainingDisplay = true;
const display = document.querySelector('.display');
const digitBtns = document.querySelectorAll('.digit');
digitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(maintainingDisplay) {
            display.textContent = '';
            maintainingDisplay = false;
        }
        display.textContent += btn.textContent;
    });
});

function operate (opr, num1, num2){
    num1 =+ num1;
    num2 =+ num2;
    switch (opr){
        case '+':
            return add(num1, num2);
        case '-':
           return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
            
    }

 }
