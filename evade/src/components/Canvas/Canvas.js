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
                ctx.fillStyle = 'blue'
                ctx.fill()
            }

            update() {
                this.draw()
                this.x += this.dx;
                this.y += this.dy;
            }


        }
      

        const playerArr = []
        const enemies = []
        window.addEventListener('mousemove', function(e) {
            const player = new Ball(e.offsetX, e.offsetY, 25, 25, 1, 1)
            playerArr.push(player)
        })


        function spawnEnemies() {
            setInterval(() => {
                
                const x = 100;
                const y = 100;
                const radius = 30;
                const velocity = {
                    x: 1,
                    y: 1
                }

    enemies.push(new Ball(x,y,radius,0,0,velocity.x,velocity.y))
                

                

            }, 1000);
        }

        function animate() {
            requestAnimationFrame(animate)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            playerArr.forEach(player => {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                player.draw()
            });


            enemies.forEach(enemy => {
                enemy.update()

            })
        }

        animate()
        spawnEnemies()
        


    }, [])

    

    return (
        <div>
            <canvas ref={canvasRef} ></canvas>
        </div>
    )
}
export default Canvas