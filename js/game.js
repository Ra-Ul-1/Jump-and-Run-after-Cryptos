class Game {
    constructor() {
        this.backgroundImages;
        this.movingPlayerImages;
        this.obstacleIndex = 0;
    }

    setup() {
        this.background = new Background();
        this.player = new Player();
        this.obstacles = [];
    }

    preload() {
        this.backgroundImages = [
            // It does not matter at which speed sky moves
            { src: loadImage('../game_background_3/layers/sky.png'), x: 0, speed: 0},
            { src: loadImage('../game_background_3/layers/sun.png'), x: 0, speed: 1},
            { src: loadImage('../game_background_3/layers/sea.png'), x: 0, speed: 1},
            { src: loadImage('../game_background_3/layers/cloud.png'), x: 0, speed: 1},
            { src: loadImage('../game_background_3/layers/land.png'), x: 0, speed: 2},
            { src: loadImage('../game_background_3/layers/decor.png'), x: 0, speed: 2.0},
        ];
        this.movingPlayerImages = [
            { src: loadImage('../character/character_malePerson_run0.png')},
            { src: loadImage('../character/character_malePerson_run1.png')},
            { src: loadImage('../character/character_malePerson_run2.png')},
        ];
        this.coinImages = [
            {src: loadImage('../coins/bitcoin_logo.png')},
            {src: loadImage('../coins/doge_logo.png')},
            {src: loadImage('../coins/ethereum_logo.png')},
        ];
        this.coinImage = loadImage('../coins/bitcoin_logo.png')
        // How to have this.playerImage = to 3 images that follow each
        // player image and coin image to be added
    }

    draw() {
        clear();
        this.background.draw();
        // this.player.toggle();
        // console.log(this.playerImage);
        this.player.draw();
        console.log(this.obstacles)
        // let randomImage = this.coinImages[Math.floor(Math.random()) * 3]
        if(frameCount % 200 === 0) {
            this.obstacleIndex = Math.floor(Math.random() * 3 ); 
            console.log("coin is drawing")
            // don't forget .src!!
            this.obstacles.push(new Obstacle(this.coinImages[this.obstacleIndex].src));
            // console.log(this.obstacles);
        }
        // iterate over the obstacles array and call their draw function for every obstacle
        this.obstacles.forEach(function (obstacle) {
            // console.log(this.obstacles)
            obstacle.draw();
        })
        // we use array filter to remove coins that collide with the player from the array
        this.obstacles = this.obstacles.filter(obstacle => {
            if (obstacle.collision(this.player || (obstacle.x + obstacle.width) < 85)) {
                return false;
            } else {
                return true
            }
        })
    }
}