# Calculator Project

A functional and interactive calculator built with **HTML**, **CSS**, and **JavaScript**, showcasing modern front-end development practices such as DOM manipulation, event handling, and responsive design.

---

## Overview + Features

This calculator provides users with a simple and intuitive interface to perform various mathematical operations. Key features include:

- **Basic Arithmetic**: Addition, subtraction, multiplication, and division.
- **Special Operations**:
  - Modulus (%): Calculate the remainder of a division.
  - Negation (+/-): Toggle the sign of the current value.
  - Decimal Support: Perform calculations with decimal numbers.
- **User-Friendly Controls**:
  - Clear: Reset the calculation.
  - Backspace: Delete the last entered value.
  - Submit: Get the calculated result.
- **Error Handling**: Displays "Error" for invalid inputs such as division by zero.
- **Responsive Design**: Adjusts seamlessly to various screen sizes for better usability.

---

## How It Works

1. **User Input**: Click buttons to input numbers and operators, or manage the calculation using special functions.
2. **Dynamic Updates**: 
   - Inputs are displayed in the "Expression" field.
   - Results appear in the "Result" field after pressing the `=` button.
3. **Error Prevention**:
   - Prevents multiple decimals in a single number.
   - Avoids starting an expression with an operator.
   - Handles invalid inputs (e.g., dividing by zero) gracefully.

**Core Functions**:
- `addValue(value)`: Appends numbers, operators, or decimals to the expression.
- `updateDisplay(expression, result)`: Dynamically updates the UI.
- `evaluateExpression()`: Safely calculates the result using the `eval()` function with checks for `NaN` and `Infinity`.
- `clear()`, `backspace()`: Manage user input by resetting or deleting characters.

---

## Technologies Used

- **HTML**: For structuring the calculator interface, including buttons and display fields.
- **CSS**: For styling the layout, including differentiation between buttons and responsive design.
- **JavaScript**: For adding functionality:
  - Handling button clicks with event listeners.
  - Managing expressions and calculations.
  - Dynamically updating the UI.

---

Feel free to clone, customize, and enhance this project to explore more advanced features or improve the UI design!