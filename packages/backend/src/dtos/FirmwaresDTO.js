const { Segments, Joi } = require('celebrate')

module.exports = class FirmwaresDTO {
  static create() {
    return {
      [Segments.PARAMS]: Joi.object().keys({
        user_id: Joi.string().uuid().required(),
      }),
      [Segments.BODY]: Joi.object().keys({
        version_major: Joi.numeric().integer().required(),
        version_minor: Joi.numeric().integer().required(),
        version_patch: Joi.numeric().integer().required(),
        name_project: Joi.string().required(),
        name_board: Joi.string().required(),
      }),
    }
  }

  static index() {
    return {
      [Segments.PARAMS]: Joi.object().keys({
        user_id: Joi.string().uuid().required(),
      }),
      [Segments.query]: Joi.object().keys({
        name_project: Joi.string().optional(),
        name_board: Joi.string().optional(),
      }),
    }
  }
}
