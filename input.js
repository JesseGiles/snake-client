// setup interface to handle user input from stdin
const setupInput = function() {
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
};

module.exports = { setupInput }; //export function for use in play.js