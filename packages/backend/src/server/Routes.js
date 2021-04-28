const express = require('express')

const HousesController = require('../controllers/HousesController')


module.exports = class Routes {
  constructor() {
    this.routes = express.Router()

    return this.init()
  }

  init() {
    this.map()
    return this.routes
  }

  map() {
    this.routes.get('/users',  HousesController.index)
  }
}
