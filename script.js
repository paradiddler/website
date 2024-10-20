const nazmi = document.getElementById('nazmi-text');
let posX = 50; // Start position X
let posY = 50; // Start position Y
let velocityX = 2; // Speed for X direction
let velocityY = 2; // Speed for Y direction
const colors = ['#f3c300', '#00ab9f', '#2e6db4']; // Yellow, Green, Blue
let colorIndex = 0;
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

// Update screen dimensions when the window resizes
function updateScreenSize() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
}

// Change the text color on bounce
function changeColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    nazmi.style.color = colors[colorIndex];
}

// Move the "Nazmi" text and make it bounce off the edges
function moveNazmi() {
    posX += velocityX;
    posY += velocityY;

    // Check for horizontal bounce
    if (posX + nazmi.offsetWidth >= screenWidth || posX <= 0) {
        velocityX = -velocityX; // Reverse direction
        changeColor(); // Change color
    }

    // Check for vertical bounce
    if (posY + nazmi.offsetHeight >= screenHeight || posY <= 0) {
        velocityY = -velocityY; // Reverse direction
        changeColor(); // Change color
    }

    // Apply the new position
    nazmi.style.transform = `translate(${posX}px, ${posY}px)`;
}

// Start the animation
function startAnimation() {
    setInterval(moveNazmi, 10); // Move every 10 milliseconds
}

// Update screen size when resized
window.addEventListener('resize', updateScreenSize);

// Start the animation
startAnimation();

