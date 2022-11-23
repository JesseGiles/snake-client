const net = require("net");
const { IP, PORT, } = require("./constants")

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //on connection to server, display welcome message and send server name of my snek
  conn.on("connect", () => {
    console.log("Your soul has been transported into a video game snek.\nIf your snek dies, you die.");
    conn.write("Name: JG!");
  });

  //console log incoming data received from server
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

// console.log("Connecting ...");
// connect();
// removed connect(); since we're calling it from play.js

module.exports = { connect };