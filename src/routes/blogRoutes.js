const express = require('express')
const blogController = require('../controllers/blogController')

const router = express.Router()

router.post('/texts', blogController.createPost)
router.get('/texts', blogController.listPosts)
router.get('/text', blogController.listPost)
router.put('/text', blogController.editPost)
router.delete('/text', blogController.deletPost)


module.exports = router