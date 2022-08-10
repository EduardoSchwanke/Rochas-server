const router = require('express').Router()
const postController = require('./controllers/PostController')
const uploadImage = require('./middlewares/uploadImage')

router.get('/posts', postController.index)
router.post('/posts', postController.createPost)
router.post('/postImage', uploadImage.single('photo'), postController.uploadImg)
router.put('/posts/:id', postController.update)
router.delete('/posts/:id', postController.delete)

router.post('/user', postController.user)

module.exports = router