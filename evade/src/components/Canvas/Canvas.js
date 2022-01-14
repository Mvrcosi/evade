import React, { useEffect, useState, useRef } from 'react'
import './Canvas.css'
const Canvas = () => {

    const canvasRef = useRef(null)


    useEffect(() => {



        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener('resize', function (e) {

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

        })



        class Player {
            constructor(x, y, radius, sAngle, eAngle, color) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.sAngle = 0;
                this.eAngle = 2 * Math.PI;
                this.color = color;
            }

            draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle)
                ctx.fillStyle = this.color
                ctx.fill()
            }

        }



        canvas.addEventListener('mousemove', function (e) {

            const player = new Player(e.offsetX, e.offsetY, 25, null, null, 'blue')
            player.draw()

        })




    }, [])





    return (
        <div>
            <canvas ref={canvasRef}> </canvas>
        </div>
    )
}
export default Canvas