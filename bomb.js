class Bomb {
    constructor(ctx, posX, posY) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.color = 'red'
        this.framesCounter = 0
        this.counter = 0

    }

    draw() {
        console.log(this.framesCounter)
        if (this.framesCounter > 200) {
            this.counter++
            console.log(this.counter)

        }

        if (this.counter >= 1) {

            this.ctx.fillStyle = 'green'
            this.ctx.beginPath()
            this.ctx.arc(this.posX, 250, 25, 0, 2 * Math.PI)
            this.ctx.fill()
            this.move()

        } else {


            this.ctx.fillStyle = this.color



            this.ctx.fillRect(this.posX, this.posY, 20, 20)

        }

    }

    move() {
        this.posX += 10
    }

    changeColor() {
        if (this.color == 'blue') {
            this.color = 'red'
        } else {
            this.color = 'blue'
        }
    }

    updateFrameCounter(currentFrameCounter) {

        this.framesCounter = currentFrameCounter

    }


}

