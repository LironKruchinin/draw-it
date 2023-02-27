import React, { useEffect, useRef } from "react"
import { ToolBar } from "../cmps/draw-board/tool-bar"

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
        <section>
            <canvas ref={canvasRef} />
            <ToolBar />
        </section>
    )
}