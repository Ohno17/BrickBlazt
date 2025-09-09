const gamecanvas = document.getElementById("game-canvas");

const targetSimulationTime = 1000;

var running = false;

var lastTime = 0;
var accumulator = 0;

var map = [];

function initalize() {
    map
}

function loop(currentTime) {
    accumulator += currentTime - lastTime;
    lastTime = currentTime;

    if (accumulator > targetSimulationTime) {
        accumulator = 0;
        simulate();
    }

    requestAnimationFrame(loop);
}

function simulate() {
    // eksedx
    console.log(performance.now());
}

loop(0);
