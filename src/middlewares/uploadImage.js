const multer = require('multer')

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './src/images')
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        },
    })
}))