class Player {
  constructor(ctx, posX, posY) {
    this.ctx = ctx;

    this.posX = posX
    this.posY = posY






  }

  draw() {
    this.ctx.fillStyle = 'white'
    this.ctx.beginPath();
    this.ctx.arc(this.posX, this.posY, 15, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  move(direction) {
    if (direction == "right") {

      this.posX += 100
    } else if (direction == "left") {
      this.posX -= 100
    } else if (direction == "up") {
      this.posY -= 100
    } else {
      this.posY += 100
    }



  }


}
