/* jshint esversion: 6 */
window.addEventListener('DOMContentLoaded', function () {
    // Get references to the moving div and the spinning image inside it
    const enterprise = document.getElementById("enterprise");
    const chaosImg = document.getElementById("chaos");

    // Set initial movement speeds (pixels per second) and spin speed (degrees per second)
    let x_incr = 50;      // Horizontal speed
    let y_incr = 50;      // Vertical speed
    let angle_incr = 180; // How fast the image spins

    // Set the initial position and absolute positioning for the moving div
    enterprise.style.position = "absolute";
    enterprise.style.top = `100px`;
    enterprise.style.left = `100px`;

    // Store the time of the previous animation frame for smooth movement
    let lastTime = performance.now();

    /**
     * Check for collisions with the browser window edges.
     * If the div hits an edge, reverse the direction on that axis
     * and reposition it so it doesn't go off-screen.
     */
    function handle_collision() {
        const enterprise_height = enterprise.offsetHeight;
        const enterprise_width = enterprise.offsetWidth;
        let enterprise_top = parseFloat(enterprise.style.top);
        let enterprise_left = parseFloat(enterprise.style.left);
        const win_height = window.innerHeight;
        const win_width = window.innerWidth;

        // Left or right edge collision
        if (enterprise_left <= 0) {
            enterprise.style.left = `0px`;
            x_incr = Math.abs(x_incr); // Move right
        } else if (enterprise_left + enterprise_width >= win_width) {
            enterprise.style.left = `${win_width - enterprise_width}px`;
            x_incr = -Math.abs(x_incr); // Move left
        }

        // Top or bottom edge collision
        if (enterprise_top <= 0) {
            enterprise.style.top = `0px`;
            y_incr = Math.abs(y_incr); // Move down
        } else if (enterprise_top + enterprise_height >= win_height) {
            enterprise.style.top = `${win_height - enterprise_height}px`;
            y_incr = -Math.abs(y_incr); // Move up
        }
    }

    // Store the current rotation angle of the image
    let angle = 0;

    /**
     * The main animation loop:
     * - Calculates time since last frame for smooth, frame-rate-independent movement
     * - Updates the position of the div based on speed and time elapsed
     * - Checks for window edge collisions and reverses direction if needed
     * - Rotates the image inside the div
     * - Requests the next animation frame
     */
    function animate(now) {
        // Calculate time difference (in seconds) since last frame
        const delta = (now - lastTime) / 500;
        lastTime = now;

        // Update position based on speed and time elapsed
        let top = parseFloat(enterprise.style.top);
        let left = parseFloat(enterprise.style.left);
        top += y_incr * delta;
        left += x_incr * delta;
        enterprise.style.top = `${top}px`;
        enterprise.style.left = `${left}px`;

        // Check for collisions and adjust direction if needed
        handle_collision();

        // Rotate the image by updating its CSS transform
        if (chaosImg) {
            angle += angle_incr * delta;
            chaosImg.style.transform = `rotate(${angle}deg)`;
        }

        // Continue the animation loop
        requestAnimationFrame(animate);
    }

    // Start the animation loop
    requestAnimationFrame(animate);
});
