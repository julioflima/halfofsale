const { celebrate } = require('celebrate')
const express = require('express')

const UsersDTO = require('../dtos/UsersDTO')
const UsersController = require('../controllers/UsersController')

const LoginDTO = require('../dtos/LoginDTO')
const LoginController = require('../controllers/LoginController')

const FirmwaresDTO = require('../dtos/FirmwaresDTO')
const FirmwaresController = require('../controllers/FirmwaresController')

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
    this.routes.get('/users/:user_id', celebrate(UsersDTO.index()), UsersController.index)

    this.routes.get('/users/:user_id', celebrate(LoginDTO.index()), LoginController.index)

    this.routes.post(
      '/users/firmwares/:user_id',
      celebrate(FirmwaresDTO.create()),
      FirmwaresController.create
    )
    this.routes.get(
      '/users/firmwares/:user_id',
      celebrate(FirmwaresDTO.index()),
      FirmwaresController.index
    )
  }
}
