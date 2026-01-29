const canvas = new fabric.Canvas('mirrorCanvas', {
  backgroundColor: '#1a1a1a',
  selection: false
});

function resizeCanvas() {
  canvas.setWidth(window.innerWidth);
  canvas.setHeight(window.innerHeight);
  canvas.renderAll();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Espejo base
const mirror = new fabric.Rect({
  left: 200,
  top: 150,
  width: 400,
  height: 300,
  fill: 'rgba(200,200,200,0.35)',
  stroke: '#00ff99',
  strokeWidth: 2,
  cornerColor: '#00ff99',
  transparentCorners: false,
  hasRotatingPoint: false
});

canvas.add(mirror);
canvas.setActiveObject(mirror);
