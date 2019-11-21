# HTML Canvas Animation

The code here is for lessons 12 and 13.

There are comments in the code that try to explain what everything is doing, but it roughly breaks down to this.

* Select the canvas, set its width and height, and create a context for drawing on it
* Create the application state object
* Handle user clicks by saving the click position to the state and drawing a box at that point
* The functions to clear the canvas, draw a single box, and draw all the boxes with saved positions
* The animate function that uses the ones above, and the timer that runs it

Below there is also the code that makes pressing the space bar clear the canvas, and the example that uses one timer to stop another.
