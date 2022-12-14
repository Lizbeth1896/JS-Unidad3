
// Creando servidor  con Node.js
// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hola Mundo')
// })

// server.listen(port, hostname, () => {
//     console.log(`El servidor se está ejecutando en http://${hostname}:${port}`)
// })

// Creando servidor  con Express
const express = require('express')

const app = express()
const port1 = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('Estamos en User')
})

app.listen(port1, () => {
    console.log(`El servidor está escuchando en http://localhost:${port1}`)
    // console.log(`El servidor está escuchando en http://localhost:${port1}/user`)
})
