console.log('Welcome to Node.js');
const http = require('http');
const routes = require('./router')

const server = http.createServer(routes);

server.listen(3000 , ()=>{
    console.log('server started at port 3000 ...');
});
