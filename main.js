
// Function to update the display
function updateDisplay(value) {
  const display = document.getElementById('display');
  display.textContent = value;
}

// Function to append a value to the current display
function appendValue(value) {
  const display = document.getElementById('display');
  if (display.textContent === '0') {
    display.textContent = value; // Replace '0' with the new value
  } else {
    display.textContent += value; // Append the new value
  }
}

// Function to clear the display
function clearDisplay() {
  updateDisplay('0'); // Reset the display to '0'
}

// Function to calculate the result
function calculateResult() {
  const display = document.getElementById('display');
  try {
    // Use eval to calculate the result (ensure user input is valid)
    const result = eval(display.textContent);
    updateDisplay(result);
  } catch (error) {
    updateDisplay('Error'); // Handle invalid expressions
  }
}
