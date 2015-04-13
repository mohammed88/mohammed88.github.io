// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.init();
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * 100 * dt;
    if(this.x > ctx.canvas.width) {
        this.init();
    }
}

// Inititalize the the enemy's x,y co-ordinate values
// and also set a random speed
Enemy.prototype.init = function() {    
    var randomLane = parseInt(Math.random() * 10) % 3 + 1;
    var randomSpeed = parseInt(Math.random() * 10) % 3 + 1;
    this.x = 0;
    this.y = randomLane * 83 - 25;
    this.speed = randomSpeed;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}   

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// Our player
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = this.posX = 2 * 101;
    this.y = this.posY = 5 * 83 - 25;
}

// Update the player's position, required method for game
Player.prototype.update = function() {    
    this.x = this.posX;
    this.y = this.posY;
}

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(direction) {
    switch(direction) {
        case 'left':
            if (this.posX > 0) this.posX -= 101;
            break;
        case 'right':
            if (this.posX < 4 * 101) this.posX += 101;
            break;
        case 'up':
            if (this.posY > 83 ) this.posY -= 83;
            break;
        case 'down':
            if(this.posY < 4 * 83) this.posY += 83;
            break; 
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
allEnemies = [new Enemy(), new Enemy(), new Enemy()];
player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
