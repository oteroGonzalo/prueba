class Enemy {
    constructor(ctx, posX, posY, radius) {

        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.radius = radius

        this.vel = 1
        this.randomNum = Math.random() * 3 - 1.5
        this.randomNum1 = Math.random() * 3 - 1.5




    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();

        this.move()



    }
    move() {
        this.posX += this.randomNum
        this.posY += this.randomNum1
    }
}