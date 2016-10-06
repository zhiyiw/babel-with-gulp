const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  response.writeHead(200);
  // response.write("hello world");
  fs.readFile('index.html', (error, contents) => {
    console.log(error);
    response.write(contents);
    response.end();
  });
//  response.end()
}).listen(8080);

console.log('listen on port 8080');
