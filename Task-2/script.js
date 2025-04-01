

document.addEventListener("DOMContentLoaded", function () {
    const textSpace = document.getElementById("text-space");
    const numberButtons = document.querySelectorAll(".numbers");
    const operators = document.querySelectorAll(".plus-btn, .minus-btn, .mul-btn, .div-btn");
    const resultButton = document.querySelector(".res-btn");
    const clearButton = document.querySelector(".clear-btn"); // Select the clear button

    let expression = ""; // Stores the current input expression

    // Handle number button clicks
    numberButtons.forEach(button => {
        button.addEventListener("click", function () {
            expression += this.innerText;
            textSpace.value = expression;
            
        });
    });

    // Handle operator button clicks
    operators.forEach(button => {
        button.addEventListener("click", function () {
            if (expression.length > 0 && !isNaN(expression[expression.length - 1])) { // Prevent multiple operators
                expression += this.innerText;
                textSpace.value = expression;
            }
        });
    });

    // Handle result calculation
    resultButton.addEventListener("click", function () {
        try {
            textSpace.value = eval(expression); // Evaluates the expression
            expression = textSpace.value; // Store the result for further calculations
        } catch (error) {
            textSpace.value = "Error"; // Handle invalid expressions
            expression = "";
        }
    });

    // Handle clear button click
    clearButton.addEventListener("click", function () {
        expression = ""; // Reset the expression
        textSpace.value = ""; // Clear the input field
    });

});

