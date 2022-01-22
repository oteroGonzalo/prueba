const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,

  background: undefined,
  player: undefined,
  enemies: [],

  // keys: {
  //   TOP: 38,
  //   SPACE: 32
  // },

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.setDimensions();
    this.start()
    this.drawBackground();
    this.drawAll()


  },

  setDimensions() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  },

  drawBackground() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
  },

  reset() {
    this.player = new Player(this.ctx, this.canvas.width / 2, this.canvas.height / 2);



  },

  drawAll() {
    this.clear()
    this.drawBackground()
    this.player.draw()
    this.player.move()
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  },

  start() {
    this.reset();

    this.interval = setInterval(() => {
      // this.framesCounter > 5000
      //   ? (this.framesCounter = 0)
      //   : this.framesCounter++;


      this.drawAll();

      // this.isCollision() ? this.gameOver() : null;
    }, 1000 / this.FPS);
  },
};
