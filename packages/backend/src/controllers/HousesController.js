const data = require('../mock/data.json')

module.exports = class FirmwaresController {
  static async index(_, res) {
    try {
      res.send(data)
    } catch (error) {
      return res.status(500).json({
        error,
      })
    }
  }
}
