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
        filter: Joi.string().optional(),
        filter_by: Joi.string().optional(),
      }),
    }
  }

  static update() {
    return {
      [Segments.PARAMS]: Joi.object().keys({
        user_id: Joi.string().uuid().required(),
        firmware_id: Joi.string().uuid().required(),
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

  static delete() {
    return {
      [Segments.PARAMS]: Joi.object().keys({
        user_id: Joi.string().uuid().required(),
        firmware_id: Joi.string().uuid().required(),
      }),
    }
  }
}
