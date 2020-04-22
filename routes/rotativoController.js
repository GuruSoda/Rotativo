const express = require('express')
const router = express.Router()
const RotativoModelo = require('../models/rotativoModel.js')

const rotativo = new RotativoModelo()

router.get('/url', function (req, res) {
  const url = rotativo.item()

  res.json({ url: url })
})

router.get('/url302', function (req, res) {
  const url = rotativo.item()

  res.set('Cache-Control', 'no-store, no-cache, must-revalidate')
  res.set('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT')

  res.redirect(302, url)
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
