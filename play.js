//const net = require("net");
const { connect } = require("./client");

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput); //event listener triggers function handleUserInput when input is received by client

  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log("Quitter.");
    process.exit();
  }
};

setupInput();

//module.exports = { setupInput }