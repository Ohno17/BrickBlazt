
const aspect = 2 / 3; // width / height

var brickWidth = 10;
var brickHeight = 10;

window.addEventListener("resize", resizeCanvas);
function resizeCanvas() {
    gamecanvas.height = window.innerHeight * 0.8;
    gamecanvas.width = aspect * gamecanvas.height;

    brickWidth = gamecanvas.width / mapWidth;
    brickHeight = gamecanvas.height / mapHeight;
}

function drawMap() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, mapWidth * brickWidth, mapHeight * brickHeight);

    for (let y = 0; y < mapHeight; y++) {
        for (let x = 0; x < mapWidth; x++) {
            switch (map[y][x]) {
                case 1:
                    ctx.fillStyle = "yellow";
                    ctx.fillRect(x * brickWidth, y * brickHeight, brickWidth, brickHeight);
                    break;
                case 2:
                    ctx.fillStyle = "green";
                    ctx.fillRect(x * brickWidth, y * brickHeight, brickWidth, brickHeight);
                    break;
                case 0:
                default:
                    break;
            }
        }
    }
}

resizeCanvas();
