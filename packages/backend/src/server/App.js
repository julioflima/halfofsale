const express = require('express')
const cors = require('cors')

module.exports = class App {
  constructor(routes) {
    this.routes = routes
    this.server = express()
    this.middleware()
    this.router()
  }

  middleware() {
    this.server.use(
      cors()
      // origin: ''
    )
    this.server.use(express.json())
    this.server.use(express.urlencoded({ extended: true }))
  }

  router() {
    this.server.use(this.routes)
  }
}
