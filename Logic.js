console.log('Hello');
let btn = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let toggle = false;

// Function to shuffle the numbers array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];  // Array to shuffle

reset.addEventListener("click", () => {
    if (!toggle) {
        // Shuffle the array and assign the shuffled numbers to buttons
        let shuffledNumbers = shuffleArray([...numbers1]);

        // Set text content for each button
        btn.forEach((button, index) => {
            button.textContent = shuffledNumbers[index];
        });

        // Apply styles to all buttons
        btn.forEach(button => {
            button.style.background = "#003049";
            button.style.color = "#FDF0D5";
            button.style.fontFamily = "'Playfair Display', cursive";
            button.style.fontSize = "50px";
            button.style.visibility = "visible";
        });

        alert("Memorize the numbers now!!");
        toggle = true;
    } 
    else {
        // Hide the text but keep buttons visible
        btn.forEach(button => {
            button.style.background = "#FDF0D5";
            button.style.color = "transparent"; // Hide text by making it transparent
        });

        let clickedCount = 0;  // Track how many buttons have been clicked
        let clickedValues = [];  // Store the values of the clicked buttons in order

        // Add click event listener to each button
        btn.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Reveal the button's text when clicked
                button.style.background = "#003049";
                button.style.color = "#FDF0D5";
                button.style.fontFamily = "'Playfair Display', cursive";
                button.style.fontSize = "50px";
                button.style.visibility = "visible";

                clickedCount++;  // Increment the count of clicked buttons
                clickedValues.push(parseInt(button.textContent));  // Store the button's value

                // Only show the result once **all** buttons have been clicked
                if (clickedCount === btn.length) {
                    // Now that all buttons have been clicked, check for consecutive numbers
                    let result = 0;
                    for (let i = 0; i < clickedValues.length - 1; i++) {
                        if (clickedValues[i] + 1 === clickedValues[i + 1]) {
                            result++;  // Increment result for each consecutive number pair
                        }
                    }
                    
                    // Show the result
                    alert("Game Over! Your score is " + result + " consecutive numbers.");
                    toggle = false;  // Reset the toggle for next round
                }
            }, { once: true }); // Ensure each button can only be clicked once
        });
    }
});