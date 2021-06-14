console.log('this is the background');

class Background {
    draw() {
    game.backgroundImages.forEach(function (img) {
        img.x -= img.speed;
        // this adds the first image
        image(img.src, img.x, 0, width, height);
        // this add the same image just after the first, hence whey the "+ width"
        image(img.src, img.x + width, 0, width, height);
        // when the image moves out of the screen on the LHS we reset it in its start position
        if(img.x <= -width) {
            img.x = 0
        };
    })
    console.log('this is the background');
}
}


