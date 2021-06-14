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

function keyPressed() {
    // if you press on spacebar, jump
    if (keyCode === 32) {
        game.player.jump();
    }
}

