// Initialize time variables
let mins = 0;
let seconds = 0;
let tens = 0;

// Get HTML elements to display time
let getMins = document.querySelector('.mins');
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');

// Get button elements
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');

// Variable to hold the timer
let interval;

// Start button
btnStart.addEventListener('click', () => {
    clearInterval(interval); // Clear any existing timer
    interval = setInterval(startTimer, 10); // Start new timer
});

// Stop button
btnStop.addEventListener('click', () => {
    clearInterval(interval); // Stop the timer
});

// Reset button
btnReset.addEventListener('click', () => {
    clearInterval(interval); // Stop the timer
    mins = 0;
    seconds = 0;
    tens = 0;
    updateDisplay();
});

// Function to update the stopwatch
function startTimer() {
    tens++;

    if (tens > 99) {
        tens = 0;
        seconds++;
    }

    if (seconds > 59) {
        seconds = 0;
        mins++;
    }

    updateDisplay();
}

// Function to update the HTML display
function updateDisplay() {
    getMins.textContent = mins < 10 ? '0' + mins : mins;
    getSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    getTens.textContent = tens < 10 ? '0' + tens : tens;
}
