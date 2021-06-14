class Game {
    constructor() {
        this.backgroundImages;
        this.playerImage;
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
            { src: loadImage('../game_background_3/layers/sun.png'), x: 0, speed: 1.2},
            { src: loadImage('../game_background_3/layers/sea.png'), x: 0, speed: 1.2},
            { src: loadImage('../game_background_3/layers/cloud.png'), x: 0, speed: 0.5},
            { src: loadImage('../game_background_3/layers/land.png'), x: 0, speed: 2},
            { src: loadImage('../game_background_3/layers/decor.png'), x: 0, speed: 2.0},
        ];
        this.movingPlayerImages = [
            { src: loadImage('../character/character_malePerson_run0.png')},
            { src: loadImage('../character/character_malePerson_run1.png')},
            { src: loadImage('../character/character_malePerson_run2.png')},
        ];
        // How to have this.playerImage = to 3 images that follow each
        // player image and coin image to be added
    }

    draw() {
        clear();
        this.background.draw();
        // this.player.toggle();
        console.log(this.playerImage);
        this.player.draw();
    }
}