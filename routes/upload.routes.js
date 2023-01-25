
const router = require("express").Router()
const uploader = require("../config/cloudinary.config")
const { uploadSingleFile } = require("../controllers/upload.controller")
const { isAuthenticated } = require("../middleware/jwt.middleware")


router.post('/image', isAuthenticated, uploader.single('imageData'), uploadSingleFile)


module.exports = router

//Only one diference in this case is Authenticated