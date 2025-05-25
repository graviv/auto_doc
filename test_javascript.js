// File: myJsUtils.js

/**
 * Calculates the area of a rectangle.
 * Purpose: To perform a basic geometric calculation.
 *
 * @param {number} width The width of the rectangle.
 * @param {number} height The height of the rectangle.
 * @returns {number} The area of the rectangle, or NaN if inputs are not numbers.
 */
function calculateRectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
    console.warn("Both width and height must be numbers.");
    return NaN; // Not a Number
  }
  return width * height;
}

/**
 * Creates a simple log message with a timestamp.
 * Purpose: To demonstrate basic string interpolation and Date object usage.
 *
 * @param {string} message The message to log.
 * @returns {string} The formatted log message.
 */
function createLogMessage(message) {
  const now = new Date();
  // Example of using a standard library (Date object)
  const timestamp = now.toLocaleTimeString(); // e.g., "1:30:45 PM"
  return `[${timestamp}] LOG: ${message}`;
}

// --- Demonstrate the functions ---

// Demonstrate calculateRectangleArea function
const area1 = calculateRectangleArea(5, 10);
console.log("Area of rectangle (5x10):", area1); // Output: 50

const area2 = calculateRectangleArea(7, 3);
console.log("Area of rectangle (7x3):", area2);   // Output: 21

const invalidArea = calculateRectangleArea("test", 5); // Warning will be logged
console.log("Invalid area calculation:", invalidArea); // Output: NaN

// Demonstrate createLogMessage function
const log1 = createLogMessage("User logged in.");
console.log(log1); // Output: [HH:MM:SS AM/PM] LOG: User logged in.

const log2 = createLogMessage("Data processing complete.");
console.log(log2); // Output: [HH:MM:SS AM/PM] LOG: Data processing complete.

// To run this file, you can save it as myJsUtils.js and execute it using Node.js:
// node myJsUtils.js
// Or, you could include it in an HTML file and run it in a browser.
