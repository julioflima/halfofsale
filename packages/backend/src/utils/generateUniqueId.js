const crypto = require('crypto');

module.exports =  function generateUniqueId(bytes) {
    return crypto.randomBytes(bytes).toString('HEX');
}