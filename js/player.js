class Player {
    constructor() {
        this.velocity = 0;
        this.gravity = 0.2;
        this.width = 144;
        this.height = 192;
        this.x = 0;
        this.y = height - 10 - this.height;
        // height is the height of the canvas
        this.imageIndex = 0
    }
    toggle() {
        if(frameCount % 9 === 0) {
            // modulo is going to be 0, 1, 2 - 0, 1, 2 etc
            this.imageIndex = (this.imageIndex + 1) % 3 
        }     
    };

    draw() {
        console.log("drawing player")
        this.toggle();
        image(game.movingPlayerImages[this.imageIndex].src, this.x, this.y, this.width, this.height);
        
    }
}

// // pictures of the player moving
// let movingPlayer = [ ".../character/character_malePerson_run0.png", ".../character/character_malePerson_run1.png", ".../character/character_malePerson_run2.png" ];


