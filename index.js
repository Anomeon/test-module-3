const sum = require('test-module-4');

const printSum = (a, b) => {
  console.log(sum(a, b));
}

module.exports = printSum;
