window.addEventListener('DOMContentLoaded', function () {
    // Bouncing logic for #enterprise
    const enterprise = document.getElementById("enterprise");
    const chaosImg = document.getElementById("chaos");
    let x_incr = 1;
    let y_incr = 1;

    // Set initial position and style
    enterprise.style.position = "absolute";
    enterprise.style.top = `100px`;
    enterprise.style.left = `100px`;

    function handle_collision() {
        const enterprise_height = enterprise.offsetHeight;
        const enterprise_width = enterprise.offsetWidth;
        const enterprise_top = enterprise.offsetTop;
        const enterprise_left = enterprise.offsetLeft;
        const win_height = window.innerHeight;
        const win_width = window.innerWidth;

        if (
            enterprise_left <= 0 ||
            enterprise_left + enterprise_width >= win_width
        ) {
            x_incr = -x_incr;
        }

        if (
            enterprise_top <= 0 ||
            enterprise_top + enterprise_height >= win_height
        ) {
            y_incr = -y_incr;
        }
    }

    // Spinning logic for #chaos
    let angle = 0;
    function spin() {
        if (chaosImg) {
            chaosImg.style.transform = `rotate(${angle}deg)`;
            angle += 4; // degrees per frame
        }
    }

    function animate() {
        handle_collision();
        enterprise.style.top = `${enterprise.offsetTop + y_incr}px`;
        enterprise.style.left = `${enterprise.offsetLeft + x_incr}px`;
        spin();
        requestAnimationFrame(animate);
    }

    animate();
});
