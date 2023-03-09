import { BsFillTrashFill } from "react-icons/bs";

import { clearBoard, } from "../../services/drawBoard.service"
import { changeColor, currColor, colors } from "../../services/color.service"

export function ToolBar({ setColor, canvasRef }: any) {
    return (
        <section className="tool-bar">
            <button onClick={() => clearBoard(canvasRef)}><BsFillTrashFill /></button>
            <input type="color" name="" id="" onChange={ev => { setColor(ev.target.value) }} />
            <div className="color-pallet">
                {colors.map(color => {
                    return <div key={color} className="color"
                        style={{ backgroundColor: `${color}` }}
                        onClick={() => { setColor(color) }}></div>
                })}
            </div>
        </section>
    )
}