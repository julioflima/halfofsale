const multer = require('multer')
const MulterConfig = require('../config/MulterConfig')
const { getNameFile } = require('../utils/getNameFile')

module.exports = class FileMiddleware {
  static get() {
    const multerConfig = MulterConfig.get()
    return multer(multerConfig).single('file')
  }
}
