const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

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