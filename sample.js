var http = require('http');
var dt = require('./datemodule');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');

http.createServer(function (req, res) {
 
  var q = url.parse(req.url, true).query;
  var filename = './'+q.filename;
  
  fs.readFile(filename,function(err,data) {
  if (err) { 
  res.writeHead(400, {'Content-Type': 'text/html'});
  return res.end("404 File Not Found");
  }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc(data));
  return res.end();
  });
}).listen(8080);