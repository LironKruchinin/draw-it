import { changeColor, clearBoard, currColor, setShape } from "../../services/drawBoard.service"

export function ToolBar({ setColor }: any) {
    return (
        <section>
            <button onClick={() => setShape('square')}>Square</button>
            <button onClick={() => setShape('brush')}>Bursh</button>
            <button onClick={clearBoard}>Clear</button>
            <input type="color" name="" id="" onChange={ev => { setColor(ev.target.value) }} />
        </section>
    )
}