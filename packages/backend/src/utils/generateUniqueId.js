const crypto = require('crypto')

exports = function generateUniqueId(bytes) {
  return crypto.randomBytes(bytes).toString('HEX')
}
