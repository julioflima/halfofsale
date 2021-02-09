const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')
const path = require('path')
const crypto = require('crypto')

require('dotenv/config')
const { getNameFile } = require('../utils/getNameFile')

module.exports = class MulterConfig {
  static get() {
    const storageTypes = {
      local: multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        filename: (req, file, cb) => {
          crypto.randomBytes(16, (err, hash) => {
            if (err) cb(err)

            file.key = `${hash.toString('hex')}-${file.originalname}`

            cb(null, file.key)
          })
        },
      }),
      s3: multerS3({
        s3: new aws.S3(),
        bucket: process.env.BUCKET_NAME,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
          crypto.randomBytes(16, (err, hash) => {
            if (err) cb(err)

            const fileName = `${hash.toString('hex')}-${file.originalname}`

            cb(null, fileName)
          })
        },
      }),
    }
    const config = {
      dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
      storage: storageTypes[process.env.STORAGE_TYPE],
      limits: {
        fileSize: 2 * 1024 * 1024,
      },
      fileFilter: (req, file, cb) => {
        const allowedMimes = ['application/octet-stream', 'application/zip']
        if (allowedMimes.includes(file.mimetype)) {
          cb(null, true)
        } else {
          cb(new Error('Invalid file type.'))
        }
      },
    }
    return config
  }
}
