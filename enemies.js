class Enemy {
    constructor(ctx, posX, posY, radius) {

        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.radius = radius

        this.vel = 10



    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.move()
    }
    move() {
        this.posX += this.vel
        this.posY += this.vel
    }
}