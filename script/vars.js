
const gamecanvas = document.getElementById("game-canvas");
const ctx = gamecanvas.getContext("2d");

const targetSimulationTime = 100;
const mapHeight = 20;
const mapWidth = 10;

var map;

var running = false;

var tick = 0;
var lastTime = 0;
var accumulator = 0;
