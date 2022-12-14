// Creando servidor  con Express
const express = require('express')

const app = express()
const port = 3000
const operacion = (5*6)

app.get('/', (req, res) => {
    res.send('Operacion : 5*6 = 30')
})

app.listen(port, () => {
    console.log(`El servidor está escuchando en http://localhost:${port}`)
    console.log(`La operación: 5*6 = ${operacion}`)
})
