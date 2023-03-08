import { changeColor, clearBoard, currColor, setShape } from "../../services/drawBoard.service"

export function ToolBar({ setColor, canvasRef }: any) {
    return (
        <section>
            <button onClick={() => setShape('square')}>Square</button>
            <button onClick={() => setShape('brush')}>Bursh</button>
            <button onClick={() => clearBoard(canvasRef)}>Clear</button>
            <input type="color" name="" id="" onChange={ev => { setColor(ev.target.value) }} />
            <div style={{ height: '25px', width: '25px', backgroundColor: 'pink' }} onClick={() => { setColor('pink') }}></div>
            <div style={{ height: '25px', width: '25px', backgroundColor: 'black' }} onClick={() => { setColor('black') }}></div>
        </section>
    )
}