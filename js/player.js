class Player {
    constructor() {
        this.velocity = 0;
        this.gravity = 0.2;
        this.width = 144;
        this.height = 192;
        this.x = 10;
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
        // Get index number
        this.toggle();
        // Apply index number to movingPlayerImages array
        image(game.movingPlayerImages[this.imageIndex].src, this.x, this.y, this.width, this.height);
        // pushing the player down
        this.velocity += this.gravity;
        this.y += this.velocity;
        // making sure the player stays on the screen
        if (this.y >= height - this.height - 30) {
            //  we reset y to its starting position
            this.y = height - this.height - 30;
            // small lag here, as it sticks to the top as long as y < 0
        } if (this.y <= 0) {
            this.y = 0
        }
    }
        
        jump() {
            // console.log('jumping');
            this.velocity = - 10;
        }
}

// // pictures of the player moving
// let movingPlayer = [ ".../character/character_malePerson_run0.png", ".../character/character_malePerson_run1.png", ".../character/character_malePerson_run2.png" ];


