import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'

let r = 0;

export default class ChromeBoisDomain extends Component {
  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    // const { screenX, screenY } = evt;
    console.log(`Screen ${event.clientX} and ${event.clientY}`);
    return drawChromeBoiAtCoords(event.clientX, event.clientY);
  }
  
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
  handleCycling = (event) => {
    console.log('click');
    toggleCycling();
  }
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */

   handleResize = (event) => {
    console.log(`Pressing ${event.key}`);
    let keyPress;
   if (event.key === 'a') {
    keyPress = '+';
   } else if (event.key === 's') {
    keyPress = '-';
   } else {
     console.log(`Just ${keyPress}`);
   }
    resize(keyPress);
   }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleCycling}
        onKeyPress={this.handleResize}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
