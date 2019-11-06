import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  //    We created a function called handleMouseMove, which will be passed down to 
  //    the canvas component as a prop and called when the mouse moves (i.e. onMouseMove). handleMouseMove takes an event as an arguement
  //    and has a callback of drawChromeBoiAtCoords. drawChromeBoiAtCoods takes two arguements
  //    the events x and y coordinates.
  
  handleKeyDown = (event) => {
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }
  }

  // We created a function called handleKeyDown. This function takes an argument of an event, which is triggered
  // when the user presses a key on the page. We know if the user clicked on key on the page because we have an "onClick" trigger
  // located in the canvas components props. If the user clicked an "a", we will run the resize function with an argument of (+). If 
  // the user clicks on the "s" key, we will run the resize function with a (-)

  // We created an event handler fires when a user clicks on the page.This click handler invokes a 
  //`toggleCycling` function with no arguments. 
   
  
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
