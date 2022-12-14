// Creando servidor con Node.js
const http = require('http')

const name = 'Molina Cantaro Lizbeth Dominga'
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Molina Cantaro Lizbeth Dominga')
})

server.listen(port, hostname,name, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}`)
    console.log(`Nombres: ${name}`)
})


