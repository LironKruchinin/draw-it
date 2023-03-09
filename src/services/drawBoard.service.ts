let currShape = 'circle'
let gCtx
let gCanvas: HTMLElement
let isMouseDown = false
export let lineWitdh = 5

export function setShape(shape: string) {
    currShape = shape
    console.log(currShape)
}


export function clearBoard(canvasRef: any) {
    console.log('clear')
    const canvas = canvasRef.current
    gCtx = canvas.getContext('2d')
    gCtx.clearRect(0, 0, canvas.width, canvas.height)
}

