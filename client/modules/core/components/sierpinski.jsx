
import React from 'react';

class Sierpinski extends React.Component {
  constructor(props) {
    super(props);
  }

  drawInitialTriangle() {
    var canvasElement = document.querySelector("#myCanvas");
    var context = canvasElement.getContext("2d");

    // the triangle
    context.beginPath();
    context.moveTo(250, 0);
    context.lineTo(0, 500);
    context.lineTo(500, 500);
    context.closePath();

    // the outline
    context.lineWidth = 5;
    context.strokeStyle = '#666666';
    context.stroke();

  }

  drawSierpinski(x,y,iteration){
    //Upto 7843 only to avoid Maximum call stack exceeded error
    if(iteration > 7843) return;
    var canvasElement = document.querySelector("#myCanvas");
    var context = canvasElement.getContext("2d");
    //step 4
    context.fillRect(x,y,6,6);
    //step 2
    const vertices = [{x:250, y:0},{x:0, y:500},{x:500, y:500}];
    const random = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    const selectedVertex = vertices[random];
    //step 3
    const midPointX = (x + selectedVertex.x)/2;
    const midPointY = (y + selectedVertex.y)/2;
    // step 5
    this.drawSierpinski(midPointX,midPointY,iteration+1);
  }

  componentDidMount(){
    this.drawInitialTriangle();
    const r1 = Math.random();
    const r2 = Math.random();
    //step 1
    const pInitalX =
      (1 - Math.sqrt(r1)) * 250 + (Math.sqrt(r1) * (1 - r2)) * 0 + (Math.sqrt(r1) * r2) * 500;
    const pInitalY =
      (1 - Math.sqrt(r1)) * 0 + (Math.sqrt(r1) * (1 - r2)) * 500 + (Math.sqrt(r1) * r2) * 500;
    this.drawSierpinski(pInitalX,pInitalY,1);
  }

  render() {
    return (
      <div>
        <h1>Sierpinski</h1>
        <canvas id="myCanvas" width="500" height="500"></canvas>
      </div>
    );
  }
}

export default Sierpinski;
