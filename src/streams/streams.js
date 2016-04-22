/**
 * Created by zma on 2016-04-22.
 */

// Reading from stream
var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('./src/streams/input.txt');

// Set the encoding to be utf8.
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("Program Ended");

// Writing to stream

var fs = require("fs");
var data = 'Simply Easy Learning';

// Create a writable stream
var writerStream = fs.createWriteStream('./src/streams/output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("Program Ended");


//Piping streams
var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('./src/streams/input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('./src/streams/output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");

// Chaining streams
var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('./src/input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./src/streams/input.txt.gz'));

console.log("File Compressed.")


// Dechaining streams

var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('./src/input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('./src/streams/input.txt'));

console.log("File Decompressed.");
