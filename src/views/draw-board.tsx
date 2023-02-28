import React, { useEffect, useRef } from "react"
import { Chat } from "../cmps/draw-board/chat"
import { ToolBar } from "../cmps/draw-board/tool-bar"
import { draw } from "../services/drawBoard.service"

export function DrawBoard() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {

        const canvas = canvasRef.current
        if (!canvas) {
            return
        }

        const context = canvas.getContext('2d')
        if (!context) {
            return
        }

        context.fillStyle = 'black'
        context.fillRect(0, 0, 100, 100)
    }, [])

    return (
        <section className="canvas-container">
            <div className="main-content">
                <canvas width={1000} height={600} ref={canvasRef} onClick={(event) => draw(event, canvasRef)} />
                <Chat />
            </div>
            <ToolBar />
        </section>
    )
}