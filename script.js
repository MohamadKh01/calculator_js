let currInput = "";
let prevInput = "";
let operator = "";

const res = document.querySelector("#result");

function add(a, b){
    return parseFloat(a)+parseFloat(b);
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function mod(a, b){
    return a%b;
}

function operate(num1, op, num2){
    if(op == '+')
        return add(num1, num2);
    else if(op == '-')
        return subtract(num1, num2);
    else if(op == '*')
        return multiply(num1, num2)
    else if(op == '/'){
        if(num2 == 0)
            return "error: division by zero";
        else{
            return divide(num1, num2);
        }
    }
    else if(op ==  '%')
        return mod(num1, num2);
    else
        return "error: unknown operator";

}

function appendNumber(num){
    currInput += num;
    res.value = "" + prevInput + operator + currInput;
}

function appendOperator(op){
    if(currInput === ""){
        operator = op;
        res.value = "" + prevInput + operator + currInput;
        return;
    }

    if(prevInput !== "")
        currInput = operate(prevInput, operator, currInput);

    prevInput = currInput;
    currInput = "";
    operator = op;
    res.value = "" + prevInput + operator + currInput;
}

function clearDisplay(){
    currInput = "";
    prevInput = "";
    operator = "";
    res.value = "";
}

function changeSign(){
    currInput = -1 * currInput;
    res.value = "" + prevInput + operator + currInput;
}