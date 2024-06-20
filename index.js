// Calculator 
function add(num1, num2) {
  return num1+num2;
}

function substract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2) {
  return num1+num2;
}

function divide(num1, num2){
    return num1/num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

calculator(1, 2, add);

//-----> High Order Functions - are fun that can  take  other function as its input.