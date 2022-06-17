let currentOperand = "";
let secondOperand = "";
let operator = "";
let decimalCounter = 0; 
const buttons = document.querySelectorAll(".button")
const buttonsOP = document.querySelectorAll(".buttonOP");
const buttonEquals = document.getElementById("#equals");
const screen = document.getElementById("#screen"); 
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equalsButton = document.getElementById("equals");
let currentOperandText = document.getElementById("currentOperand");
let secondOperandText = document.getElementById("secondOperand");
const  decimalButton = document.getElementById("decimal");



function evaluate (string, a, b){ 
    console.log(currentOperand);
    console.log(secondOperand);
    
    
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
a = parseFloat(a);
b = parseFloat(b);
   return a + b ;
}

function subtract (a, b)
{
    a = parseFloat(a);
b = parseFloat(b);
   return a - b ;
}

function multiply (a, b)
{
    a = parseFloat(a);
b = parseFloat(b);
   return a * b ;
}
function divide (a, b)
{
a = parseFloat(a);
b = parseFloat(b);
 if (a === 0 || b === 0)
 {
    
 return   currentOperandText.innerText = "ERROR CANNOT DIVIDE BY 0";
    
 }
    
 else{

   return a / b ;
 }
}




function  clear () {
    secondOperand =  "";
    currentOperand = "";
    secondOperandText.innerText = `${secondOperand}`;
    currentOperandText.innerText = `${currentOperand}`;
    decimalCounter = 0;  
    }


















console.log(currentOperand.includes("."));
decimalButton.addEventListener('click', function (e) {

if (currentOperand.includes(".") != true) {
currentOperand += "."
currentOperandText.innerText = `${currentOperand}`;
    }

else if (currentOperand.includes(".") === true)
{
currentOperand = currentOperand.slice(0,-1);
currentOperandText.innerText = `${currentOperand}`;
}
});






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
       
    
        if (secondOperand !== "")
        {
            
            secondOperand = evaluate(operator, secondOperand, currentOperand);
            currentOperand = "";
            currentOperandText.innerText = `${currentOperand}`;
            secondOperandText.innerText = `${secondOperand}`;
            operator = buttonsOP[i].innerText; 
        } 
    
    
    else if (currentOperand !== "") 
        {
            secondOperand = currentOperand; 
            currentOperand = "";
            secondOperandText.innerText = `${secondOperand}`;
            decimalCounter=0;
            operator = buttonsOP[i].innerText; 
        }
 
    
    
    });
    
    };



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
currentOperand = evaluate(operator, secondOperand, currentOperand);
secondOperand = "";
currentOperandText.innerText = `${currentOperand}`;
secondOperandText.innerText = `${secondOperand}`;
});











