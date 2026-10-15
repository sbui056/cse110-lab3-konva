import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();

// create our shape
const lemon = new Konva.Ellipse({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radiusX: 100,
  radiusY: 50,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4
});

// create a pointed lemon with a custom shape
const pointedLemon = new Konva.Shape({
  x: stage.width() / 2 + 250,
  y: stage.height() / 2,
  fill: 'yellow',
  stroke: 'black',
  strokeWidth: 4,
  sceneFunc: (context, shape) => {
    context.beginPath();
    context.moveTo(-100, 0); // start at 100px left of venter

    // bezierCurveTo(x1, y1, x2, y2, x3, y3)

    context.bezierCurveTo(-60, -70, 60, -70, 100, 0); // top half
    // bezierCurveTo(-60, -70, 60, -70, 100, 0) means:
    //     - control point 1 is 60px left of and 70px above the shape's center
    //     - control point 2 is 60px right of and 70px above it
    //     - the end point is 100px to the right of it

    context.bezierCurveTo(60, 70, -60, 70, -100, 0); // curving the bottom half
    context.closePath();
    context.fillStrokeShape(shape);
  }
});

// add the shapes to the layer
layer.add(lemon);
layer.add(pointedLemon);

// add the layer to the stage
stage.add(layer);
