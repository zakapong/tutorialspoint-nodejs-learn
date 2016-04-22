
var fs = require("fs");

var data = fs.readFileSync('./src/blocking/inputblock.txt');

console.log(data.toString());
console.log("Program Ended");