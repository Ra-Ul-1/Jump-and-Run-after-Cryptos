const game = new Game();

function preload () {
    game.preload();
}

function setup() {
    createCanvas(1440, 810);
    game.setup();
}

function draw() {
    game.draw();
}

