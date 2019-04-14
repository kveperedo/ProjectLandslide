const dweetClient = require('node-dweetio');
const five = require('johnny-five');

let board = new five.Board({
    port: "COM10"
});

board.on("ready", function() {
  let led = new five.Led(13);
  led.blink(100);
});