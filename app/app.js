
var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.send('<h1>Server through express</h1>')
});

var server = app.listen(3000, function () {
    console.log("Listening port:3000");    
})



// Create server using node and http
/* var http = require('http');

var myServer = http.createServer(function(req, res) {
    res.writeHead(200, {"content-type": "text/html"});    
    res.write("<h1>Express Start at 3000</h1>");
    res.end();   
})

 myServer.listen(3000);
 console.log("Port used:3000"); */
 