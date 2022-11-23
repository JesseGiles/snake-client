//const net = require("net");
const { connect } = require("./client"); //get connect function from client.js
const setupInput = require("./input"); //get setupInput function from input.js

console.log("Also Connecting ..."); //doesnt seem to do anything, this works from client.js
connect();

setupInput();

