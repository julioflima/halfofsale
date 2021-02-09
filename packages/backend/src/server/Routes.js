const { celebrate } = require('celebrate')
const express = require('express')

const SensorDTO = require('../dtos/SensorDTO')
const SensorController = require('../controllers/SensorController')

const UsersDTO = require('../dtos/UsersDTO')
const UsersController = require('../controllers/UsersController')

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
    this.routes.post('/users', celebrate(UsersDTO.create()), UsersController.create)

    this.routes.post('/sensor', celebrate(SensorDTO.postSensor()), SensorController.create)
    this.routes.get('/sensor', celebrate(SensorDTO.getSensor()), SensorController.index)
    this.routes.delete('/sensor', celebrate(SensorDTO.deleteSensor()), SensorController.delete)
  }
}
