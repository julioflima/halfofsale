const { Segments, Joi } = require('celebrate')

module.exports = class LoginDTO {
  static create() {
    return {
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
      }),
    }
  }
}
