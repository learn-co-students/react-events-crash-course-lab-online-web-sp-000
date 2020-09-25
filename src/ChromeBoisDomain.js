import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (onMouseMove) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    let x = onMouseMove.clientX;
    let y = onMouseMove.clientY;
    drawChromeBoiAtCoords(x,y)
  }

  handleCanvasClick = (onClick) => {
    toggleCycling();
  }

  handleCanvasCapture = (onKeyDown) => {
    if (onKeyDown.key === 'a') {
      resize('+')
    } else if (onKeyDown.key == 's') {
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleCanvasClick}
        onKeyDown={this.handleCanvasCapture}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
