
function initalize() {
    map = new Array(mapHeight).fill(null).map(() => new Array(mapWidth).fill(0));
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
    var newmap = new Array(mapHeight).fill(null).map(() => new Array(mapWidth).fill(0));

    if (tick % 3 == 0) {
        newmap[0][tick % 10] = 1;
    }

    for (let y = 1; y < mapHeight; y++) {
        for (let x = 0; x < mapWidth; x++) {
            if (map[y][x] != 1) {
                if (map[y - 1][x] == 1) {
                    newmap[y - 1][x] = 0;
                    newmap[y][x] = 1;
                }
            }

            if (map[y][x] == 1) {
                newmap[y][x] = 1;
            }
        }
    }

    var isComplete = true;
    for (let x = 0; x < mapWidth; x++) {
        if (newmap[mapHeight - 1][x] == 0) isComplete = false;
    }
    if (isComplete) newmap[mapHeight - 1] = new Array(mapWidth).fill(2);

    map = newmap;

    drawMap();
    tick++;
}

initalize();
loop(0);
