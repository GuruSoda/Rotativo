const express = require('express')
const router = express.Router()
const RotativoModelo = require('../models/rotativoModel.js')

const rotativo = new RotativoModelo()

router.get('/url', function (req, res) {
  const url = rotativo.item()

  res.json({ url: url })
})

router.get('/items', function (req, res) {
  const items = rotativo.items()

  res.json(items)
})

router.get('/pedidos', function (req, res) {
  const pedidos = rotativo.pedidos()

  res.json({ total: pedidos })
})

router.get('/version', function (req, res) {
  const version = rotativo.version()

  res.json({ version: version })
})

module.exports = router
