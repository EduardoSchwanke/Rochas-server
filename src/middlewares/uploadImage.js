const multer = require('multer')

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

/*module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './src/images')
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        },
    })
}))*/


module.exports = {
    storage: {
        cloudinary: new CloudinaryStorage({
            cloudinary: cloudinary,
            params: async(req, file) > {
                folder: 'Rochas',
                public_id: `${req.params.originalname}`,
            }
        })
    }
}