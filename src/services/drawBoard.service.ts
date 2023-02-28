let currShape = 'circle'
let currColor = 'black'
let gCtx

export function setShape(shape: string) {
    currShape = shape
    console.log(currShape)
}

function drawCircle(x: number, y: number, gCtx: any) {
    console.log('circle', x, y, gCtx)
}

function drawSquare(x: number, y: number, gCtx: any) {
    console.log('square', x, y, gCtx)
    gCtx.beginPath()

    gCtx.fillStyle = 'orange'
    gCtx.fillRect(x, y, 150, 150)
    gCtx.strokeStyle = 'black'
    gCtx.strokeRect(x, y, 150, 150)
}

export function draw(ev: React.MouseEvent, canvasRef: any) {
    const { clientX, clientY } = ev
    const canvas = canvasRef.current
    if (!canvas) {
        return
    }
    gCtx = canvas.getContext('2d')
    if (!gCtx) {
        return
    }

    let clickX = clientX - canvas.offsetLeft
    let clickY = clientY - canvas.offsetTop
    // console.log('x:', canvas.offsetLeft, 'y:', canvas.offsetTop)
    // console.log('ClickX:', clickX, 'ClickY:', clickY)
    switch (currShape) {
        case 'circle':
            drawCircle(clickX, clickY, gCtx)
            break
        case 'square':
            drawSquare(clickX, clickY, gCtx)
            break

    }
}