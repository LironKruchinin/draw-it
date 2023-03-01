import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"


import { Chat } from "../cmps/draw-board/chat"
import { ToolBar } from "../cmps/draw-board/tool-bar"
import { draw } from "../services/drawBoard.service"

export function DrawBoard() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const navigate = useNavigate();
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {

        const canvas = canvasRef.current
        if (!canvas) return

        const context = canvas.getContext('2d')
        if (!context) return

        context.fillStyle = 'black'
        context.fillRect(0, 0, 100, 100)



    }, [])
    const startDrawing = (ev: React.MouseEvent<HTMLCanvasElement>) => {
        setIsDrawing(true)
        draw(ev, canvasRef)
    }

    const stopDrawing = () => {
        setIsDrawing(false)
    }

    const drawLine = (ev: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return
        draw(ev, canvasRef)
    }
    return (
        <section className="canvas-container">
            <div className="main-content">
                <canvas width={1000} height={600} ref={canvasRef} onMouseDown={startDrawing}
                    onMouseUp={stopDrawing}
                    onMouseMove={drawLine} />
                <Chat />
            </div>
            <ToolBar />
            <button onClick={() => navigate(-1)} style={{ backgroundColor: 'red' }}>Go back</button>
        </section>
    )
}
