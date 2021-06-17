class Game {
    constructor() {
        this.backgroundImages;
        this.movingPlayerImages;
        this.obstacleIndex = 0;
        this.villainImage;
    }

    setup() {
        this.background = new Background();
        this.player = new Player();
        this.obstacles = [];
        this.coinsCollected = 0;
        this.villains = [];
        this.villainsCollided = 0;
    }

    preload() {
        this.backgroundImages = [
            // It does not matter at which speed sky moves
            // Best practice is to use relative path: works locally and anywhere else
            { src: loadImage('game_background_3/layers/sky.png'), x: 0, speed: 0},
            { src: loadImage('game_background_3/layers/sun.png'), x: 0, speed: 1},
            { src: loadImage('game_background_3/layers/cloud.png'), x: 0, speed: 1},
            { src: loadImage('game_background_3/layers/land.png'), x: 0, speed: 2},
            { src: loadImage('game_background_3/layers/decor.png'), x: 0, speed: 2.0},
        ];
        this.movingPlayerImages = [
            { src: loadImage('character/character_malePerson_run0.png')},
            { src: loadImage('character/character_malePerson_run1.png')},
            { src: loadImage('character/character_malePerson_run2.png')},
        ];
        this.coinImages = [
            {src: loadImage('coins/bitcoin_logo.png')},
            {src: loadImage('coins/doge_logo.png')},
            {src: loadImage('coins/ethereum_logo.png')},
        ];
        this.villainImage = loadImage('obstacles/angry_yeti copy 2.png');
    }

    draw() {
        clear();
        this.background.draw();
        // this.player.toggle();
        // console.log(this.playerImage);
        this.player.draw();
        // Empty array at this point
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
            if (obstacle.collectCoin(this.player || (obstacle.x + obstacle.width) < 85)) {
                return false;
            } else {
                return true
            }
        })
        // drawing villains
        if(frameCount % 300   === 0) {
            this.villains.push(new Villain (this.villainImage));
            // console logs the villains array
            console.log(this.villains);
        }
        // call draw function for each villain
        this.villains.forEach(function (villain) {
            villain.draw();
        })
        // we use array filter to remove villains that collide with the player from the array
        // next: we add them to the villainsCollided array
        this.villains = this.villains.filter (villain => {
            if (villain.collision(this.player || (villain.x + villain.width) < 250)) {
                return false;
            } else {
                return true
            }
        })
        // end game logic
        if (this.villainsCollided > 0) {
            noLoop()
            // Look up how to draw an image
            // might need to empty the coins array
            document.getElementById("canvas").style.visibility = 'hidden';
            document.getElementById("over").style.visibility = 'visible';
        }
    }
}

// no loop function will stop the draw function
// score: can draw text and give it coordinates
// when player touches villain - I can get the framecount and say this framecount + 5 you can load the other image