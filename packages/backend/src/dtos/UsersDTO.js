const { Segments, Joi } = require('celebrate')

module.exports = class UsersDTO {
  static create() {
    return {
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
      }),
    }
  }
  static index() {
    return {
      [Segments.PARAMS]: Joi.object().keys({
        user_id: Joi.string().uuid().required(),
      }),
    }
  }

  static update() {
    return {
      [Segments.PARAMS]: Joi.object().keys({
        user_id: Joi.string().uuid().required(),
      }),
      [Segments.BODY]: Joi.object().keys({
        admin_id: Joi.string().required(),
      }),
    }
  }
}
