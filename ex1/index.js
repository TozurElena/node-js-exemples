const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {
  res.end('Hello'); //print text sur page
})

server.listen(PORT, () => {
  console.log('server lisening on: http://localhost:%s', PORT);
})
