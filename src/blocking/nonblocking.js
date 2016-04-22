/**
 * Created by zma on 2016-04-22.
 */
var fs = require("fs");

fs.readFile('./src/blocking/inputnonblocking.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");