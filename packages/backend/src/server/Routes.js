const { celebrate } = require('celebrate')
const express = require('express')
const multer = require('multer')

const UsersDTO = require('../dtos/UsersDTO')
const UsersController = require('../controllers/UsersController')

const LoginDTO = require('../dtos/LoginDTO')
const LoginController = require('../controllers/LoginController')

const FirmwaresDTO = require('../dtos/FirmwaresDTO')
const FirmwaresController = require('../controllers/FirmwaresController')

const FileMiddleware = require('../middlewares/FileMiddleware')

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
    this.routes.put('/users/:user_id', celebrate(UsersDTO.update()), UsersController.update)

    this.routes.post(
      '/users/:user_id/firmwares',
      FileMiddleware.get(),
      celebrate(FirmwaresDTO.create()),
      FirmwaresController.create
    )
    this.routes.get(
      '/users/:user_id/firmwares',
      celebrate(FirmwaresDTO.index()),
      FirmwaresController.index
    )
    this.routes.put(
      '/users/:user_id/firmwares/:firmware_id',
      FileMiddleware.get(),
      celebrate(FirmwaresDTO.update()),
      FirmwaresController.update
    )
    this.routes.delete(
      '/users/:user_id/firmwares/:firmware_id',
      celebrate(FirmwaresDTO.delete()),
      FirmwaresController.delete
    )

    this.routes.get('/login', celebrate(LoginDTO.index()), LoginController.index)
  }
}
