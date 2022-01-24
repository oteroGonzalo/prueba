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
  bomb: undefined,



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
    this.setEventHandlers()



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
    this.enemies = []
    this.bomb = (new Bomb(this.ctx, 250, 250))


  },

  drawAll() {
    this.clear()

    this.drawBackground()
    this.player.draw()
    this.createEnemies()
    this.enemies.forEach(enemies => enemies.draw())
    this.bomb.draw()
    this.bomb.updateFrameCounter(this.framesCounter)

    // if (this.framesCounter % 1200 === 0) {
    //   this.bomb.changeColor()
    //   console.log("1")

    // }



    this.clearEnemies()




  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  },

  createEnemies() {
    if (this.framesCounter % 10 === 0) {
      let randomNum = Math.floor(Math.random() * this.canvas.width) + 1
      this.enemies.push(new Enemy(this.ctx, randomNum, 0, 5, this.framesCounter))




    }
  },

  clearEnemies() {
    this.enemies = this.enemies.filter(elm => elm.posX >= 0 && elm.posY < this.canvas.height && elm.posX < this.canvas.width

    )
  },

  start() {
    this.reset();

    this.interval = setInterval(() => {
      this.framesCounter > 5000
        ? (this.framesCounter = 0)
        : this.framesCounter++;


      this.drawAll();
      console.log("this is " + this.framesCounter)

      this.isCollision() ? this.gameOver() : null;
    }, 1000 / this.FPS);

  },

  setEventHandlers() {
    document.addEventListener("keydown", (event) => {
      const { key } = event;
      key === "ArrowRight" ? this.player.move("right") : null;
      key === "ArrowLeft" ? this.player.move("left") : null;
      key === "ArrowUp" ? this.player.move('up') : null
      key === "ArrowDown" ? this.player.move('down') : null
    });
  },
  isCollision() {
    return this.enemies.some(obs => {
      return (
        (this.player.posX < obs.posX + 20 && this.player.posX + 15 > obs.posX &&
          this.player.posY < obs.posY + 20 && this.player.posY + 15 > obs.posY)
        // The objects are touching

      )
    })
  },
  gameOver() {
    clearInterval(this.interval)
    console.log("here")
  }
}
