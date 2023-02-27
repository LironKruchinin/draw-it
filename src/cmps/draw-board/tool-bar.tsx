import { setShape } from "../../services/drawBoard"

export function ToolBar() {
    return (
        <section>
            <button onClick={() => setShape('square')}>Square</button>
            <button onClick={() => setShape('circle')}>Circle</button>
        </section>
    )
}