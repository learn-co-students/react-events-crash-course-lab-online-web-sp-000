import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

    handleMouseMove = (event) => {
        /* TODO: This method should capture the `x` and `y` coordinates of the mouse
         * from the event and use them to invoke the `drawChromeBoiAtCoords`
         * function that has been provided and is already imported
         * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
        */

        const xCoordinate = event.clientX
        const yCoordinate = event.clientY

        /* NOTE: The clientX property returns the horizontal coordinate
         * (according to the client area) of the mouse pointer when a mouse event is triggered.
         * The client area is the current window.
         * To capture verical coordinate, see the clientY property.
        */

        return drawChromeBoiAtCoords(xCoordinate, yCoordinate);
    }

    /* TODO: Create an event handler which, when fired, invokes the provided
     * `toggleCycling` function with no arguments. Don't forget the click event
     * listener that should fire it!
     *
     * solution: see line 53
    */

    handleKeyDown = (event) => {
        /* TODO: Add an event listener to the `<canvas>` element to capture when a key
         * is pressed. When a key is pressed, an event handler should invoke the the
         * provided `resize` function with a single argument of either '+' or '-'
         * if the key pressed was 'a', then it should call `resize` with '+'
         * if the key pressed was 's', then it should call `resize` with '-'
        */

        if (event.key === 'a') {
            resize('+')
        } else if (event.key === 's') {
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
