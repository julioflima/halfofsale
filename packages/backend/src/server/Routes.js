const { celebrate } = require('celebrate')
const express = require('express')

const SensorDTO = require('../dtos/SensorDTO')
const SensorServices = require('../services/SensorServices')
const SensorController = require('../controllers/SensorController')

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
    this.routes.get('/sensor', celebrate(SensorDTO.getSensor()), SensorController.index)
    this.routes.post(
      '/sensor',
      celebrate(SensorDTO.postSensor()),
      SensorServices.date,
      celebrate(SensorDTO.ruleDate()),
      SensorController.store
    )
    this.routes.delete('/sensor', celebrate(SensorDTO.deleteSensor()), SensorController.delete)
  }
}
