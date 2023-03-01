import { clearBoard, setShape } from "../../services/drawBoard.service"

export function ToolBar() {
    return (
        <section>
            <button onClick={() => setShape('square')}>Square</button>
            <button onClick={() => setShape('circle')}>Circle</button>
            <button onClick={clearBoard}>Clear</button>
        </section>
    )
}