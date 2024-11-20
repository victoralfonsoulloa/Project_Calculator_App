// Access DOM elements of the calculator
const inputBox = document.getElementById('input');
const expressionDiv = document.getElementById('expression');
const resultDiv = document.getElementById('result');

//Define expression and result variable
let expression = ' ';
let result = ' ';

//Define event handler for button clicks
function buttonClick(event) {
    //Get values from clicked button
    const target = event.target;
    const action = target.dataset.action;
    const value = target.dataset.value;
    //console.log(target, action, value)
  
    //Switch case to control the calculator
    switch (action) {
      case 'number':
        console.log('test');
        break;
      case 'number':
        console.log('test');
        break;
    }
  }
  
  inputBox.addEventListener('click', buttonClick);
  