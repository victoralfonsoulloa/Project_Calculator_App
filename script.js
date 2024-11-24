// Access DOM elements of the calculator
const inputBox = document.getElementById('input');
const expressionDiv = document.getElementById('expression');
const resultDiv = document.getElementById('result');

// Define expression and result variable
let expression = ' ';
let result = ' ';

// Define event handler for button clicks
function buttonClick(event) {
  //Get values from clicked button
  const target = event.target;
  const action = target.dataset.action;
  const value = target.dataset.value;
  //console.log(target, action, value)

  // Switch case to control the calculator
  switch (action) {
    case 'number':
      addValue(value);
      break;
    case 'clear':
      clear();
      break;
    case 'backspace':
      backspace();
      break;
    // Add the result to the expression as a starting point if expression is empty
    case 'addition':
    case 'subtraction':
    case 'multiplication':
    case 'division':
      if (expression == '' && result !== '') {
        startFromResult(value);
      } else if (expression !== ' ' && !isLastCharOperator()) {
        addValue(value);
      }
      break;
    case 'submit':
      submit();
      break;
    case 'negate':
      negate();
      break;
    case 'mod':
      percentage();
      break;
  }

  // Update display
  updateDisplay(expression, result);
}

inputBox.addEventListener('click', buttonClick);

function addValue(value) {
  // Add value to the expression
  expression += value;
  //console.log(expression)
}

function updateDisplay(expression, result) {
  expressionDiv.textContent = expression;
  resultDiv.textContent = result;
}

function clear() {
  expression = ' ';
  result = ' ';
}

function backspace() {
  expression = expression.slice(0, -1);
}

function isLastCharOperator() {
  return isNaN(parseInt(expression.slice(-1)));
}

function startFromResult(value) {
  expression += result + value;
}

function submit() {
  result = evaluateExpression();
  expression = '';
}

function evaluateExpression() {
  const evalResult = eval(expression);
  //check if evalResult is NaN or infinite. If it is retunr a space
  return isNaN(evalResult) || !isFinite(evalResult)
    ? 'Error'
    : evalResult < 1
    ? parseFloat(evalResult.toFixed(10))
    : parseFloat(evalResult.toFixed(2));
}

function negate() {
  //Negate the result if expression is empty and result is present
  if (expression === '' && result !== '') {
    result = -result;
    //Toggle the sign of the expression if the expression is not already negative and it's not empty
  } else if (!expression.startsWith('-') && expression !== '') {
    expression = '-' + expression;
    //remove the negative sign from the expression if it's already negative.
  } else if (expression.startsWith('-')) {
    expression = expression.slice(1);
  }
}

function percentage() {
  //Evaluate the expression, else it will take the percentage of only the first number
  if (expression !== '') {
    result = evaluateExpression()
    expression = '';
    if (!isNaN(result) && isFinite(result)) {
      result /= 100;
    } else {
      result = '';
    }
  } else if (result !== '') {
    //If expression is empty but result exists, divide by 100
    result = parseFloat(result) / 100;
  }
}