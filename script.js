// Track the current counter state
let count = 0;

// Select the HTML elements using their unique IDs
const counterDisplay = document.getElementById('counter-value');
const increaseButton = document.getElementById('increase-btn');
const decreaseButton = document.getElementById('decrease-btn');
const addTwoButton = document.getElementById('addTwo-btn');
const chngeButton = document.getElementById('save-btn');
const nameDisplay = document.getElementById('name-value');

// Function to update the number shown on the screen
function updateDisplay() {
    counterDisplay.textContent = count;
}

// Event listener to increase the count when clicked
increaseButton.addEventListener('click', () => {
    count++;
    updateDisplay();
});

// Event listener to decrease the count when clicked
decreaseButton.addEventListener('click', () => {
    count--;
    updateDisplay();
});

addTwoButton.addEventListener('click', ()=>{
    count+=2;
    updateDisplay();
});


chngeButton.addEventListener('click', () => {
    nameDisplay.textContent = "Hellow World";
});