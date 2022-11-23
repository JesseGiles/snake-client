const net = require("net");
const setupInput = require("./play");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //on connection to server, display welcome message and send server name of my snek
  conn.on("connect", (data) => {
    console.log("Your soul has been transported into a video game snek.\nIf your snek dies, you die.");
    conn.write("Name: JG!");
  });

  //also on connection, move snek in a direction after a set timeout
  conn.on("connect", (data) => {

    setTimeout(() => {
      conn.write("Move: up");
    }, 1000);

  })

  //console log incoming data received from server
  conn.on("data", (data) => {
    console.log(data);
  });

  // client.on('data', (data) => {
  //   console.log(data.toString());
  //   client.end();
  // })

  // client.on('end', () => {
  //   console.log('disconnected from server');
  // });
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };