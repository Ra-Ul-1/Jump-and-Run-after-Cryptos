class Player {
    constructor() {
        this.velocity = 0;
        this.gravity = 0.2;
        this.width = 144;
        this.height = 192;
        this.x = 0;
        this.y = height - 10 - this.height;
        // height is the height of the canvas
    }
    toggle() {
        for (let i = 0; i < game.movingPlayerImages.length; i++) {
            if (i > game.movingPlayerImages.length - 1) { 
                i = 0
            }
            else if (frameCount % 60 === 0) {
                console.log("framecount 60")
                game.playerImage = game.movingPlayerImages[i]
            // Framecount p5
            } 
        }
    };

    draw() {
        console.log("drawing player")
        this.toggle();
        image(game.playerImage.src, this.x, this.y, this.width, this.height);
        
    }
}

// // pictures of the player moving
// let movingPlayer = [ ".../character/character_malePerson_run0.png", ".../character/character_malePerson_run1.png", ".../character/character_malePerson_run2.png" ];


