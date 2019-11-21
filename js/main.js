var canvas = document.querySelector("#screen");
canvas.width = 500;
canvas.height = 300;
var ctx = canvas.getContext("2d");

// This is the main state of the app
// We just use it to store the positions of the clicks
var state = {
  positions: []
};

// When the user clicks, this function gets called and passed the Event object
function handleClick(e) {
  // because we want to save the information, we create our own object with the offsetX and offsetY values
  // REMEMBER! the squarePosition variable only exists in this function, but the object it points to gets saved in the state so we can get it later
  var squarePosition = {
    x: e.offsetX,
    y: e.offsetY
  };

  // This is where we save the object with the position information.
  state.positions.push(squarePosition);
  // We also pass the object to the drawBox function so we can immediately draw a box where the user clicked
  drawBox(squarePosition);
}
//Make sure to call the function every time the user clicks on the canvas
canvas.addEventListener("click", handleClick);

// Clearing the canvas just means drawing a white rectangle over the entire thing
function clearCanvas() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// The drawBox function expects to get an object with an x attribute and a y attribute.
// It doesn't care where that object comes from
// It also doesn't directly interact with the state we've saved
// Whatever object it gets given, it will use its own position variable to refer to it
function drawBox(position) {
  var size = (Math.random() * 50) + 10;
  ctx.fillStyle = "green";
  ctx.fillRect( position.x, position.y, size, size);
}

// makeBoxes is where we get the box positions out of the state and give each of them to the drawBox function
// Because it uses a loop it doesn't care how many positions there may be, it will loop through them all
// The logic for drawing the box is in the drawBox function, which hopefully makes this function easier to read and understand
function makeBoxes() {
  for (var i = 0; i < state.positions.length; i = i + 1) {
    var boxPosition = state.positions[i];
    drawBox(boxPosition);
  }
}

// This is the main function in our program
// Again, because we've moved the logic for drawing rectangles and loops into other functions, it should be really clear what this function is doing overall
function animate() {
  clearCanvas();
  makeBoxes();
}
setInterval(animate, 100);



// This is the code that clears the screen when we press the space bar.
// It gets given the Event object when it is called so we make sure it has the e argument name meaning we can access it.
function handleKeypress(e) {
  // We make sure we only do anything when it's the space bar that's pressed
  if (e.code === "Space") {
    // if it was the space then we call the clear canvas function
    clearCanvas();
  }
}

// Because we'll be listening for key presses, we add an event listener on the body of the page so it doesn't matter what has focus when keys are pressed.
var body = document.querySelector("body");

// We're only handling the keydown event here, but if we wanted to do something only while a key was held, we may need to look for the keyup events as well so we know when somebody stopped pressing it.
body.addEventListener("keydown", handleKeypress);


// The code below is not used by the canvas drawing above, it's for the example we talked about just after the break showing how to cancel a timer using another timer.

// This is the first timer we setup that runs every 1 second
// We're using an *anonymous* function here so we don't give the function a name, we just create it in place.
// The timer *id* gets saved and we point to it with the variable *intervalId*. This variable is in the *global* scope because it's created outside of a function.
var intervalId = setInterval(
  function () {
    console.log("Hello", Date.now());
  },
  1000
);

// This is the function we'll call to stop the timer created above.
// The *intervalId* variable is visible to this function because it is in the global scope
function stop() {
  clearInterval(intervalId);
  console.log("we've stopped here");
}

// This timer waits 5 seconds and then calls the stop function.
// It will only run once, and we don't save the id because we don't need it here.
setTimeout(stop, 5000);
