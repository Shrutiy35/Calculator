   let currentDisplay=''; 
function clearDisplay(){
    currentDisplay='';
    document.querySelector('#display').value=currentDisplay;
}

function appendtoDisplay(value){
const operators = ['+', '-', '*', '/','%'];
if (operators.includes(value) && currentDisplay) {
    // If the last character is an operator, replace it
    if (operators.includes(currentDisplay[currentDisplay.length - 1])) {
        currentDisplay = currentDisplay.slice(0, -1) + value; // Replace last operator
    } else {
        currentDisplay += value; // Append new operator
    }
} else {
    currentDisplay += value; // Append number or operator if last was a number
}
document.querySelector('#display').value=currentDisplay;
}
function Delete(){
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);

}
function result(){
  let rst=eval(currentDisplay);
  currentDisplay=rst;
  document.querySelector('#display').value=currentDisplay;

}