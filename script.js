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
    let s;
    if(op == '+')
        s = add(num1, num2);
    else if(op == '-')
        s = subtract(num1, num2);
    else if(op == '*')
        s = multiply(num1, num2)
    else if(op == '/'){
        if(num2 == 0)
            return "error: division by zero";
        else{
            s = divide(num1, num2);
        }
    }
    else if(op ==  '%')
        s = mod(num1, num2);
    else
        return "error: unknown operator";

    s = Math.round(s * 1000) / 1000;
    return s;
}

function appendNumber(num){
    if(prevInput !== "" && operator === ""){
        prevInput = "";
    }
    
    if(num === '.' && currInput ===""){
        currInput += "0";
    }
    
    currInput += num;
    res.value = "" + prevInput + operator + currInput;
}

function appendOperator(op){

    if(operator === ""){
        operator = op;
    }

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
    if(currInput === ""){
        prevInput = -1 * prevInput;
    }
    else {
        currInput = -1 * currInput;
    }

    res.value = "" + prevInput + operator + currInput;
}

function calculate(){
    if(currInput === ""){
        res.value = "" + prevInput;
        operator = "";
        return;
    }

    if(operator === ""){
        return;
    }

    if(prevInput !== ""){
        currInput = operate(prevInput, operator, currInput);
    }

    prevInput = currInput;
    currInput = "";
    operator = ""
    res.value = "" + prevInput;
}