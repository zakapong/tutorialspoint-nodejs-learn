/**
 * Created by zma on 2016-04-22.
 */

var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('.src/filesystem/input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");


// opening a file
var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('.src/filesystem/input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
});


// file info

var fs = require("fs");

console.log("Going to get file info!");
fs.stat('.src/filesystem/input.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully!");

    // Check file type
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());
});

// Writing File
var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('.src/filesystem/input.txt', 'Simply Easy Learning!',  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    fs.readFile('.src/filesystem/input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});


// reading file

var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('.src/filesystem/input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("Going to read the file");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
            console.log(err);
        }
        console.log(bytes + " bytes read");

        // Print only read bytes to avoid junk.
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }
    });
});

//Closing File

var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('.src/filesystem/input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("Going to read the file");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
            console.log(err);
        }

        // Print only read bytes to avoid junk.
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }

        // Close the opened file.
        fs.close(fd, function(err){
            if (err){
                console.log(err);
            }
            console.log("File closed successfully.");
        });
    });
});


//Truncate File
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('.src/filesystem/input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
    console.log("Going to truncate the file after 10 bytes");

    // Truncate the opened file.
    fs.ftruncate(fd, 10, function(err){
        if (err){
            console.log(err);
        }
        console.log("File truncated successfully.");
        console.log("Going to read the same file");
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
            if (err){
                console.log(err);
            }

            // Print only read bytes to avoid junk.
            if(bytes > 0){
                console.log(buf.slice(0, bytes).toString());
            }

            // Close the opened file.
            fs.close(fd, function(err){
                if (err){
                    console.log(err);
                }
                console.log("File closed successfully.");
            });
        });
    });
});

// delete file

var fs = require("fs");

console.log("Going to delete an existing file");
fs.unlink('.src/filesystem/input.txt', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("File deleted successfully!");
});

// Create Directory

var fs = require("fs");

console.log("Going to create directory /tmp/test");
fs.mkdir('/tmp/test',function(err){
    if (err) {
        return console.error(err);
    }
    console.log("Directory created successfully!");
});

//Read Directory
var fs = require("fs");

console.log("Going to read directory /tmp");
fs.readdir("/tmp/",function(err, files){
    if (err) {
        return console.error(err);
    }
    files.forEach( function (file){
        console.log( file );
    });
});

// remove directory

var fs = require("fs");

console.log("Going to delete directory /tmp/test");
fs.rmdir("/tmp/test",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("Going to read directory /tmp");
    fs.readdir("/tmp/",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });
    });
});