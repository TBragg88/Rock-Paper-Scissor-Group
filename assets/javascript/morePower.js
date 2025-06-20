const enterprise = document.getElementById("enterprise");
let x_incr = 1;
let y_incr = 1;

function init() {
    enterprise.style.position = "absolute";
    enterprise.style.top = `${x_incr}px`;
    enterprise.style.left = `${y_incr}px`;

    // animate the enterprise
    requestAnimationFrame(animate);
}

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
        // reverse x_incr
        x_incr = -x_incr;
    }

    if (
        enterprise_top <= 0 ||
        enterprise_top + enterprise_height >= win_height
    ) {
        // reverse y_incr
        y_incr = -y_incr;
    }
}

function animate() {
    handle_collision();
    enterprise.style.top = `${enterprise.offsetTop + y_incr}px`;
    enterprise.style.left = `${enterprise.offsetLeft + x_incr}px`;

    requestAnimationFrame(animate);
}

init();
