import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */

    // this.setState({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
    // //  const { x, y } = this.state;
    // let x = this.state.x;
    // let y = this.state.y;
    
  
    drawChromeBoiAtCoords(event.clientX, event.clientY);

  }
  
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */

   handleClick = () => {
    toggleCycling();
   }
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */

    handleKeyPress = (e) => { (e.key === 'a') ? resize('+') : (e.key === 's') ? resize('-') : ""; }

  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={ () => toggleCycling() }
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
