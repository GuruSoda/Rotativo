
const configuracion = 'configs/rotativoConf.json'

class Rotativo {
  constructor () {
    this.contador_pedidos = 0
    this.indice = 0

    this.rotacion = require('../' + configuracion).rotacion

  //  console.log(this.rotacion)
  }

  item () {
  //        console.log(this.indice, '/', this.rotacion.length)
    this.contador++
    return this.rotacion[this.proximoIndice()]
  }

  proximoIndice () {
    this.indice++

    if (this.indice >= this.rotacion.length) this.indice = 0

    return this.indice
  }

  items () {
    return this.rotacion
  }

  pedidos () {
    return this.contador_pedidos
  }
}

module.exports = Rotativo
