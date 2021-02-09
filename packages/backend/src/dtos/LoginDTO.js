const { Segments, Joi } = require('celebrate')

module.exports = class LoginDTO {
  static index() {
    return {
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
      }),
    }
  }
}
