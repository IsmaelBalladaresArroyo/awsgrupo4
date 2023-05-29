const http = require('http');
const port = 3000;  

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('SOMOS EL GRUPO 4 HACIENDO UNA PRUEBA');
});

server.listen(port,() => {
    console.log('Server corriendo en el puerto 3000');
});
