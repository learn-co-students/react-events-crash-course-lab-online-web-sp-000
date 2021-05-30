import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'

export default class ChromeBoisDomain extends Component {
  /* This method captures the `x` and `y` coordinates of the mouse
  * from the event and uses them to invoke the `drawChromeBoiAtCoords`
  * function that has been provided and is already imported
  * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
  */
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
   
  /* When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it will call `resize` with '+'
  /* if the key pressed was 's', then it will call `resize` with '-' 
   */

  handleKeyDown = (event) => {
    if (event.key === 'a'){
      resize('+')
    } else if (event.key === 's'){
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={() => {toggleCycling()}}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
