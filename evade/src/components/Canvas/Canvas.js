import React, {useEffect, useRef}from 'react'
import './Canvas.css'
const Canvas = () => {

    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight

        class Ball {
            constructor(x, y, radius, startA, endA, dx, dy) {

                this.x = x;
                this.y = y;
                this.radius = radius;
                this.startX = 0;
                this.endX = 2 * Math.PI;
                this.dx = dx;
                this.dy = dy;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, this.startX, this.endX)
                ctx.fillStyle = 'black'
                ctx.fill()
            }


        }
      

        const playerArr = []
        window.addEventListener('mousemove', function(e) {
            const player = new Ball(e.offsetX, e.offsetY, 25, 25, null, null)
            playerArr.push(player)
        })


        function animate() {
            requestAnimationFrame(animate)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            playerArr.forEach(player => {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                player.draw()
            });
        }

        animate()
        


    }, [])

    

    return (
        <div>
            <canvas ref={canvasRef} ></canvas>
        </div>
    )
}
export default Canvas