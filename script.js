let currentOperand = "";
let secondOperand = "";
let operator = "";
const buttons = document.querySelectorAll(".button")
const buttonsOP = document.querySelectorAll(".buttonOP");
const buttonEquals = document.getElementById("#equals");
const screen = document.getElementById("#screen"); 
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalsButton = document.getElementById("equals");
let currentOperandText = document.getElementById("currentOperand");
let secondOperandText = document.getElementById("secondOperand");



// adds the buttons content to the current operator. 
for (let i = 0; i < buttons.length; i++) {
buttons[i].addEventListener('click', function(e)
{
currentOperand += buttons[i].textContent;
currentOperandText.innerText = `${currentOperand}`;
});

};


// sets current operand to secondary when pressing a operator button. 
for (let i = 0; i < buttonsOP.length; i++) {
    buttonsOP[i].addEventListener('click', function(e)
    {
       
     if (currentOperand != undefined) 
        {
            secondOperand = currentOperand; 
            currentOperand = "";
            secondOperandText.innerText = `${secondOperand}`;
        }

    


        operator = buttonsOP[i].innerText; 
    console.log(operator);
   
    });
    
    };



function  clear () {
secondOperand =  "";
currentOperand = "";
secondOperandText.innerText = `${secondOperand}`;
currentOperandText.innerText = `${currentOperand}`;
   
}
clearButton.addEventListener('click', function(e)
{
clear();
   
});

// deletes current operand. 
deleteButton.addEventListener('click', function(e)
{

currentOperand = "";
currentOperandText.innerText = `${currentOperand}`;
   
});







equalsButton.addEventListener('click', function (e)
{
console.log(operator);
currentOperand = evaluate(operator, secondOperand, currentOperand);
console.log(currentOperand);
secondaryOperand = "";
currentOperandText.innerText = `${currentOperand}`;
secondOperandText.innerText = `${secondaryOperand}`;
});










// functions 








function evaluate (string, a, b){ 
    if (string == "+")
{ 
return add(a, b);

}
else if (string == "-")
{
    return subtract(a,b);
}

else if (string == "×")
{
    return multiply(a,b);
}

else if (string == "÷")
{
    return  divide(a,b);
}
}






function add (a, b)
{
a = parseInt(a);
b = parseInt(b);
   return a + b ;
}

function subtract (a, b)
{
    a = parseInt(a);
b = parseInt(b);
   return a - b ;
}

function multiply (a, b)
{
    a = parseInt(a);
b = parseInt(b);
   return a * b ;
}
function divide (a, b)
{
    a = parseInt(a);
b = parseInt(b);
   return a / b ;
}