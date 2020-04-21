const fs = require('fs')

'use strict'

const configuracion = 'configs/rotativoConf.json'
const logAccesos = 'logs/rotacion.log'
const versionRotativo = '20200421.0004'

class Rotativo {
  constructor () {
    this.release = versionRotativo
    this.contador_pedidos = 0
    this.indice = 0

    this.rotacion = require('../' + configuracion).rotacion

  //  console.log(this.rotacion)
  }

  version () {
    return this.release
  }

  escribirLog (strItem) {
    try {
      const date = new Date()

      const fecha = date.getFullYear() + '/' + (date.getMonth()+1).toString().padStart(2, 0) + '/' + date.getDate().toString().padStart(2, 0)
      const hora = date.getHours().toString().padStart(2, 0) + ':' + date.getMinutes().toString().padStart(2, 0) + ':' + date.getSeconds().toString().padStart(2, 0)
      const lineaLog = fecha + ';' + hora + ';' + strItem + '\n'

      fs.appendFileSync(logAccesos, lineaLog, { flag: 'a' })
    } catch (err) {
      console.log('Error esribiendo log:', err)
    }
  }

  item () {
  //        console.log(this.indice, '/', this.rotacion.length)
    this.contador_pedidos++

    const strItem = this.rotacion[this.proximoIndice()]

    this.escribirLog(strItem)

    return strItem
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
