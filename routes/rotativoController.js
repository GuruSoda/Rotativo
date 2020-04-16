const express = require('express');
const router = express.Router();
const rotativoModelo = require('../models/rotativoModel.js')

let rotativo = new rotativoModelo()

router.get('/url', function(req, res) {
  let url = rotativo.item()

  res.json({url: url});
});

router.get('/items', function(req, res) {
  let items = rotativo.items()

  res.json(items);
});

router.get('/pedidos', function(req, res) {
  let pedidos = rotativo.pedidos()

  res.json({total: pedidos});
});


module.exports = router;
