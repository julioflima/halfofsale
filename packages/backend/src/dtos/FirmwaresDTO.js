const { Segments, Joi } = require('celebrate')

module.exports = class FirmwaresDTO {
  static create() {
    return {
      [Segments.PARAMS]: Joi.object().keys({
        user_id: Joi.string().uuid().required(),
      }),
      [Segments.BODY]: Joi.object().keys({
        version_major: Joi.number().integer().required(),
        version_minor: Joi.number().integer().required(),
        version_patch: Joi.number().integer().required(),
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
      [Segments.QUERY]: Joi.object().keys({
        name_project: Joi.string().optional(),
        name_board: Joi.string().optional(),
      }),
    }
  }
}
