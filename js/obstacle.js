class Obstacle{
    constructor(image) {
        this.image = image;
        // Have it appear on RHS
        this.x = width;
        // Have it appear at random height
        // Not sure why we originally had / 2.5
        this.y = (Math.random() * height) / 1.5;
        this.width = 100;
        this.height = 100;
    }
    
    collectCoin(playerInfo) {
        console.log('coin collected', playerInfo);
        // get the middle of the obstacle
        const obstacleX = this.x + this.width / 2;
        const obstacleY = this.y + this.height / 2;
        // get the middle of the player
        const playerX = playerInfo.x + playerInfo.width / 2;
        const playerY = playerInfo.y + playerInfo.height / 2;
        // measure the distance between obstacle and player using the dist() function
        // also include the width of both player and coin (+- 120 /2 amd 50 / 2 = 85)
        if (dist(obstacleX, obstacleY, playerX, playerY) > 120) {
            return false;
        } else {
            // we have a collision
            // score should be incremented here
            game.coinsCollected++
            document.getElementById("score").innerText= game.coinsCollected;
            return true;
        }
    }

    draw() {
        // not sure what x-- means?
        // image.x -= image.speed;
        this.x -= 6;
        image(this.image, this.x, this.y, this.width, this.height);
    }
}