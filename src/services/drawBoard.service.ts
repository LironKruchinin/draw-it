let currShape = 'circle'
let currColor = 'black'
let gCtx
let gCanvas: HTMLElement
let isMouseDown = false

export function setShape(shape: string) {
    currShape = shape
    console.log(currShape)
}

function drawCircle(x: number, y: number, gCtx: any) {

    gCtx.beginPath();
    gCtx.arc(x, y, 20, 0, 2 * Math.PI);
    // gCtx.fillStyle = 'black'
    gCtx.fillStyle = 'green';
    gCtx.strokeStyle = 'green';
    gCtx.stroke();
    gCtx.fill();
    gCtx.stroke();
    // console.log('circle', x, y, gCtx)

}

// function handleMouseEvent() {
//     document.addEventListener('mousedown')
// }


export function clearBoard() {
    console.log('hello')
}

function drawSquare(x: number, y: number, gCtx: any) {
    gCtx.beginPath()

    gCtx.fillStyle = 'black'
    gCtx.fillRect(x, y, 30, 30)
}

export function draw(ev: React.MouseEvent, canvasRef: any) {
    isMouseDown = true
    const { clientX, clientY } = ev
    const canvas = canvasRef.current
    gCanvas = canvas
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
