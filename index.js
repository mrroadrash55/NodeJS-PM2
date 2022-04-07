var http = require('http');
var port = process.env.PORT;
var fs = require('fs');
http.createServer(function (req, res) {
fs.readFile('boom.html', function(err, data) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();
});
}).listen(port,'0.0.0.0');
console.log('Server running at http://');

