const { Segments, Joi } = require('celebrate')

module.exports = class SensorDTO {
  static create() {
    return {
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
      }),
    }
  }
}
