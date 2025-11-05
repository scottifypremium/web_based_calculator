// Get the display element from the HTML
const display = document.getElementById('display');

// This function adds a character (number or operator) to the display
function appendCharacter(char) {
    // If the current display is '0', replace it with the new character
    // Otherwise, add the new character to the end
    if (display.innerText === '0') {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}
// ... existing code from Step 4 ...

// This function clears the display and resets it to '0'
function clearDisplay() {
    display.innerText = '0';
}

// This function removes the last character from the display
function deleteLast() {
    // Get the current text, and slice off the last character
    display.innerText = display.innerText.slice(0, -1);
    // If the display becomes empty, set it back to '0'
    if (display.innerText === '') {
        display.innerText = '0';
    }
}
// ... existing code from Step 5 ...

// This function calculates the result of the expression in the display
function calculateResult() {
    try {
        // 'eval()' is a powerful JavaScript function that evaluates a string of code.
        // Here, it calculates the mathematical expression from the display's text.
        // String() ensures the result is converted back to a string to be displayed.
        display.innerText = String(eval(display.innerText));
    } catch (error) {
        // If the user enters an invalid expression (e.g., "5++2"),
        // 'eval()' will throw an error. We catch it here.
        display.innerText = 'Error';
    }
}
