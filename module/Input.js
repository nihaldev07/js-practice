const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Input = (callback, question = "") => {
  readline.question(question, (input) => {
    callback(input);
    readline.close();
  });
};

module.exports = Input;
