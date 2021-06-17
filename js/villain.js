class Villain {
    constructor(image) {
        this.image = image;
        this.width = 282;
        this.x = width;
        this.y = (Math.random() * height) / 1.5;
        this.height = 324;
    }
    collision(playerInfo) {
        console.log('collision with villain', playerInfo);
        // get the middle of the villain
        const villainX = this.x + this.width / 2;
        const villainY = this.y + this.height / 2;
        // get the middle of the player
        const playerX = playerInfo.x + playerInfo.width / 2;
        const playerY = playerInfo.y + playerInfo.height / 2;
        // measure the distance between obstacle and player using the dist() function
        // also include the width of both player and villain (+- (160  + 200) /2)
        if (dist(villainX, villainY, playerX, playerY) > 150) {
            return false;
        } else {
            game.villainsCollided++;
            console.log(game.villainsCollided)
            return true
        }
    }
    
    draw() {
        this.x -= 5;
        console.log("drawing villain")
        image(this.image, this.x, this.y, this.width, this.height);
    }
}