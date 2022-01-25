const express = require('express')
const Productos = require('./productos.js')
const router = express.Router()

const productos = new Productos();

router.get('/', (req, res) => {
    res.send(productos.getAll())
})
router.get('/:id', (req, res) => {
    const productoPorId = productos.getById(parseInt(req.params.id))
    if(!productoPorId[0]) return res.send({ error: 'producto no encontrado'})
    res.send(productoPorId[0])
})
router.post('/', (req, res) => {
    const nuevoProducto = productos.addProduct(req.body)
    res.send(nuevoProducto);
})
router.put('/:id', (req, res) => {
    if(productos.updateProduct(parseInt(req.params.id), req.body)){
        res.sendStatus(200)
    } else {
        res.send({ error: 'producto no encontrado'})
    }
})
router.delete('/:id', (req, res) => {
    if(productos.deleteProduct(parseInt(req.params.id))){
        res.sendStatus(200)
    } else {
        res.send({ error: 'producto no encontrado'})
    }
})

module.exports = router