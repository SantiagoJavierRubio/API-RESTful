const express = require('express')
const rutasProductos = require('./rutasProductos.js')
const Productos = require('./productos.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Bienvenido al backend')
})

app.use('/api/productos', rutasProductos)

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error del servidor: ${error}`))