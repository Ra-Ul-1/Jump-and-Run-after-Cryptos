const game = new Game();

document.getElementById("over").style.visibility = 'hidden';
document.getElementById("end-message").style.visibility = 'hidden';

function preload () {
    game.preload();
}

function setup() {
    let canvas = createCanvas(1152, 648);
    canvas.position(25, 100)
    canvas.parent("canvas");
    game.setup()
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
