const express = require('express'),
http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();

// 'morgan' is used to log the header's info of the 
// request made.
app.use(morgan('dev'));

// this server will serve the static files that are 
// present in 'public' folder. '__dirname' denotes
// the directory into which current scripts resides.
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  res.end();
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});