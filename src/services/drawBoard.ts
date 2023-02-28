let currShape = null;

export function setShape(shape: string) {
  currShape = shape;
  console.log(currShape);
}

export function draw(ev: React.MouseEvent, canvas: any) {
  const { clientX, clientY } = ev;

  let clickX = clientX - canvas.current.offsetLeft;
  let clickY = clientY - canvas.current.offsetTop;

  // console.log('x:', canvas.current.offsetLeft, 'y:', canvas.current.offsetTop)
  console.log("ClickX:", clickX, "ClickY:", clickY);
}
