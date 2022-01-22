class Player {
  constructor(ctx, playerWidth, playerHeight) {
    this.ctx = ctx;

    this.gameWidth = playerWidth;
    this.gameHeight = playerHeight;

    this.width = 100;
    this.height = 100;

    this.gameWidth = 250


  }

  draw() {
    this.ctx.fillStyle = 'white'
    this.ctx.beginPath();
    this.ctx.arc(this.gameWidth, this.gameHeight, 15, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  move() {

    this.gameWidth++
    this.gameHeight++
    console.log(this.gameWidth)
  }


}
