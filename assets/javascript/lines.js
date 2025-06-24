/* jshint esversion: 6 */
// This script requires the DOM to be fully loaded before it will work correctly.
// All logic is wrapped in a DOMContentLoaded event listener to ensure that
// the buttons and SVG container exist before event listeners are attached.

document.addEventListener("DOMContentLoaded", function () {
    // winMap defines which buttons "beat" which other buttons in the game.
    // Each key is a button's id, and its value is an array of ids that it can defeat.
    const winMap = {
        scissors: ["paper", "lizard"],
        paper: ["rock", "spock"],
        rock: ["scissors", "lizard"],
        lizard: ["spock", "paper"],
        spock: ["scissors", "rock"]
    };

    // List of all button ids used in the game.
    const buttonIds = ["scissors", "spock", "rock", "lizard", "paper"];

    // Get references to the SVG element (for drawing lines) and the button area container.
    const svg = document.getElementById("lines-svg");
    const buttonArea = document.getElementById("button-area");

    /**
     * Calculates the center coordinates of a button relative to the button area container.
     * This is necessary so that lines drawn in the SVG overlay match up with the button positions.
     * @param {HTMLElement} btn - The button element to find the center of.
     * @returns {Object} An object with x and y properties for the center coordinates.
     */
    function getButtonCenter(btn) {
        const rect = btn.getBoundingClientRect(); // Button's position and size in the viewport
        const parentRect = buttonArea.getBoundingClientRect(); // Container's position in the viewport
        return {
            // Calculate center by subtracting container's top/left from button's center
            x: rect.left + rect.width / 2 - parentRect.left,
            y: rect.top + rect.height / 2 - parentRect.top
        };
    }

    /**
     * Draws SVG lines from the hovered button to each button it can beat.
     * - Clears any existing lines.
     * - Finds the center of the hovered button.
     * - For each button it can beat, finds its center and draws a red line between them.
     * @param {string} fromId - The id of the hovered button.
     */
    function drawLines(fromId) {
        svg.innerHTML = ""; // Remove any previously drawn lines
        const fromBtn = document.getElementById(fromId);
        if (!fromBtn) return; // Safety check
        const fromCenter = getButtonCenter(fromBtn); // Center of hovered button

        // Loop through each button this one can beat
        winMap[fromId].forEach(toId => {
            const toBtn = document.getElementById(toId);
            if (!toBtn) return; // Skip if button not found
            const toCenter = getButtonCenter(toBtn); // Center of target button

            // Create a new SVG line element
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", fromCenter.x);
            line.setAttribute("y1", fromCenter.y);
            line.setAttribute("x2", toCenter.x);
            line.setAttribute("y2", toCenter.y);
            line.setAttribute("stroke", "red"); // Line color
            line.setAttribute("stroke-width", "3"); // Line thickness

            // Add the line to the SVG overlay
            svg.appendChild(line);
        });
    }

    /**
     * Clears all lines from the SVG overlay.
     * Called when the mouse leaves any button.
     */
    function clearLines() {
        svg.innerHTML = "";
    }

    // Attach event listeners to each button:
    // - On mouse enter: draw lines from this button to the buttons it can beat.
    // - On mouse leave: clear all lines.
    buttonIds.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener("mouseenter", () => drawLines(id));
            btn.addEventListener("mouseleave", clearLines);
        }
    });
});