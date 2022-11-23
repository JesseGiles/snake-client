//const { connect } = require("http2");
// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn; //setupInput accepts object from connect() function
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput); //event listener triggers function handleUserInput when input is received by client

  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') { // if user presses key ctrl+c (\u003) then exit process.stdin
    console.log("Quitter.");
    process.exit();
  }

  if (key === 'w') {
    //console.log(`w: up`)
    connection.write("Move: up");
  }

  if (key === 's') {
    //console.log(`w: down`)
    connection.write("Move: down");
  }

  if (key === 'a') {
    //console.log(`w: left`)
    connection.write("Move: left");
  }

  if (key === 'd') {
    //console.log(`w: right`)
    connection.write("Move: right");
  }

  if (key === 'e') {
    //console.log(`imma eatu`)
    connection.write("Say: imma eat you!");
  }

  if (key === 'q') {
    //console.log(`imma eatu`)
    connection.write("Say: NOMNOMNOM!");
  }

};


module.exports = { setupInput}; //export function for use in play.js