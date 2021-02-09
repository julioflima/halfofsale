const { Segments, Joi } = require('celebrate')

module.exports = class UsersDTO {
  static index() {
    return {
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
      }),
    }
  }

  static create() {
    return {
      [Segments.PARAMS]: Joi.object().keys({
        user_id: Joi.string().uuid().required(),
      }),
    }
  }
}
