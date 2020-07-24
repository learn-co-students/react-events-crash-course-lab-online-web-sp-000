import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    let x = (event.clientX) //sets x coordinate
    let y = (event.clientY) //sets y coordinate
    drawChromeBoiAtCoords(x,y) //passes x and y coordinates to drawChromeBoiAtCoords function
  
  }
  
  handleClick = () => {
    /* TODO: Create an event handler which, when fired, invokes the provided
    * `toggleCycling` function with no arguments. Don't forget the click event
    * listener that should fire it!
    */
    toggleCycling();
  }
   
  handleKeyPress = (event) => {
    /* TODO: Add an event listener to the `<canvas>` element to capture when a key
    /* is pressed. When a key is pressed, an event handler should invoke the
    /* provided `resize` function with a single argument of either '+' or '-'
    /* if the key pressed was 'a', then it should call `resize` with '+'
    /* if the key pressed was 's', then it should call `resize` with '-' 
    */
    let increase = '+'
    let decrese = '-'
   console.log(event.key)
   if(event.key === 'a'){
     resize(increase);
   }else if (event.key === 's'){
     resize(decrese);
   }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0"
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}>
      </canvas>
    )
  }
}
