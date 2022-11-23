const { connect } = require("./client"); //get connect function from client.js
const { setupInput }  = require("./input"); //get setupInput function from input.js

console.log("Now Connecting to Snek Game ...");

const conn = connect();
setupInput(conn);
//because we're wanting to send the object that connect() creates on client.js into setupInput on input.js
