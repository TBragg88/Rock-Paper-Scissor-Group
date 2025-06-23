window.addEventListener('DOMContentLoaded', function () {
    // Bouncing logic for #enterprise
    const enterprise = document.getElementById("enterprise");
    const chaosImg = document.getElementById("chaos");
    let x_incr = 50; // pixels per second
    let y_incr = 50; // pixels per second
    let angle_incr = 180; // degrees per second

    // Set initial position and style
    enterprise.style.position = "absolute";
    enterprise.style.top = `100px`;
    enterprise.style.left = `100px`;

    let lastTime = performance.now();

    function handle_collision() {
        const enterprise_height = enterprise.offsetHeight;
        const enterprise_width = enterprise.offsetWidth;
        let enterprise_top = parseFloat(enterprise.style.top);
        let enterprise_left = parseFloat(enterprise.style.left);
        const win_height = window.innerHeight;
        const win_width = window.innerWidth;

        if (enterprise_left <= 0) {
            enterprise.style.left = `0px`;
            x_incr = Math.abs(x_incr);
        } else if (enterprise_left + enterprise_width >= win_width) {
            enterprise.style.left = `${win_width - enterprise_width}px`;
            x_incr = -Math.abs(x_incr);
        }

        if (enterprise_top <= 0) {
            enterprise.style.top = `0px`;
            y_incr = Math.abs(y_incr);
        } else if (enterprise_top + enterprise_height >= win_height) {
            enterprise.style.top = `${win_height - enterprise_height}px`;
            y_incr = -Math.abs(y_incr);
        }
    }

    let angle = 0;
    function animate(now) {
        const delta = (now - lastTime) / 500; // seconds since last frame
        lastTime = now;

        // Move
        let top = parseFloat(enterprise.style.top);
        let left = parseFloat(enterprise.style.left);
        top += y_incr * delta;
        left += x_incr * delta;
        enterprise.style.top = `${top}px`;
        enterprise.style.left = `${left}px`;

        handle_collision();

        // Spin
        if (chaosImg) {
            angle += angle_incr * delta;
            chaosImg.style.transform = `rotate(${angle}deg)`;
        }

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});
