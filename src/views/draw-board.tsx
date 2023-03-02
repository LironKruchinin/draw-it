import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"

import { Chat } from "../cmps/draw-board/chat"
import { ToolBar } from "../cmps/draw-board/tool-bar"
import { draw } from "../services/drawBoard.service"

export function DrawBoard() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const navigate = useNavigate();
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastPosition, setLastPosition] = useState<{ x: number, y: number } | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Set up the drawing styles
        context.lineWidth = 5;
        context.lineCap = 'round';
        context.strokeStyle = 'white';
    }, [])

    const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
        setIsDrawing(true);
        setLastPosition({ x: event.clientX, y: event.clientY });
        // draw(event, canvasRef);
    }

    const stopDrawing = () => {
        setIsDrawing(false);
        setLastPosition(null);
    }

    const drawLine = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        // Use requestAnimationFrame to update the canvas in sync with the browser's refresh rate
        requestAnimationFrame(() => {
            if (!lastPosition) return;
            context.beginPath();
            context.moveTo(lastPosition.x - canvas.offsetLeft, lastPosition.y - canvas.offsetTop);
            context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
            context.stroke();
            // draw(event, canvasRef)
            setLastPosition({ x: event.clientX, y: event.clientY });
        });
    }

    return (
        <section className="canvas-container">
            <div className="main-content">
                <canvas
                    width={1000}
                    height={600}
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseUp={stopDrawing}
                    onMouseMove={drawLine}
                />
                <Chat />
            </div>
            <ToolBar />
            <button onClick={() => navigate(-1)} style={{ backgroundColor: 'red' }}>Go back</button>
        </section>
    )
}
